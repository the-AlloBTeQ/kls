"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, ChevronLeft, FileText, ClipboardCheck, User, Phone, MapPin, AlertCircle, Mail, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { jsPDF } from 'jspdf';

// Define plan features
const planFeatures = {
  Basic: [
    "Monthly security system inspection",
    "Basic maintenance and cleaning",
    "24/7 emergency support",
    "System status reports"
  ],
  Standard: [
    "All Basic features",
    "Quarterly system upgrades",
    "Component replacement service",
    "Priority support response",
    "Detailed maintenance reports"
  ],
  Premium: [
    "All Standard features",
    "Monthly comprehensive checks",
    "Preventive maintenance",
    "Advanced system monitoring",
    "Custom security solutions",
    "Dedicated support team"
  ]
};

// This is a client component that safely uses useSearchParams
function CheckoutContent() {
  // Import useSearchParams inside the component to avoid SSR issues
  const { useSearchParams } = require('next/navigation');
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [planData, setPlanData] = useState<{plan: string; price: string} | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    propertyType: 'residential',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quotationGenerated, setQuotationGenerated] = useState(false);
  const [quotationReference, setQuotationReference] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionCount, setSubmissionCount] = useState(0);

  // State variables for direct inquiry
  const [showDirectInquiryOption, setShowDirectInquiryOption] = useState(false);
  const [isSendingInquiry, setIsSendingInquiry] = useState(false);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
  const [previewGenerated, setPreviewGenerated] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [directInquirySuccess, setDirectInquirySuccess] = useState(false);
  const [directInquiryError, setDirectInquiryError] = useState(false);
  const [previewData, setPreviewData] = useState<{
    reference: string;
    plan: string;
    price: string;
    totalAmount: string;
  } | null>(null);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const EMAILJS_DIRECT_INQUIRY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_DIRECT_INQUIRY_TEMPLATE_ID || EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'your_user_id';
  const COMPANY_EMAIL = 'maintenance.inquiries@klssecurity.co.za';

  useEffect(() => {
    // Initialize EmailJS
    if (EMAILJS_USER_ID !== 'your_user_id') {
      emailjs.init(EMAILJS_USER_ID);
    }
    
    // Retrieve the plan data from URL using the parameter format
    const planName = searchParams?.get('planName');
    const planPrice = searchParams?.get('planPrice');
    
    if (planName && planPrice) {
      // Validate that plan is a valid value
      if (planName === "Basic" || planName === "Standard" || planName === "Premium") {
        setPlanData({
          plan: planName,
          price: planPrice
        });
      } else {
        console.error('Invalid plan name:', planName);
        setErrorMessage('Invalid plan selected. Please go back and select a valid plan.');
      }
    }

    // Check for previous submission attempts from local storage
    const previousCount = localStorage.getItem('quotationSubmissionCount');
    if (previousCount) {
      setSubmissionCount(parseInt(previousCount));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateVAT = (priceString: string) => {
    const priceNum = parseFloat(priceString.replace(/[^0-9.]/g, ''));
    return priceNum * 0.15;
  };

  const calculateTotal = (priceString: string) => {
    const priceNum = parseFloat(priceString.replace(/[^0-9.]/g, ''));
    return priceNum * 1.15;
  };

  // Generate a unique quotation reference
  const generateQuotationReference = () => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `KLS-Q${year}${month}${day}-${random}`;
  };

  // Function to generate a preview of the quotation
  const generatePreviewQuotation = async () => {
    setIsGeneratingPreview(true);
    
    try {
      if (!planData) {
        throw new Error('No plan data available');
      }

      // Generate a reference number for the preview
      const reference = generateQuotationReference();
      
      // Calculate pricing information
      const basePrice = parseFloat(planData.price.replace(/[^0-9.]/g, ''));
      const vatAmount = basePrice * 0.15;
      const totalAmount = basePrice * 1.15;
      
      // Set the preview data
      setPreviewData({
        reference,
        plan: planData.plan,
        price: planData.price,
        totalAmount: `R${totalAmount.toFixed(2)}`
      });
      
      // Generate a simple PDF summary of the quotation
      await generateSimplePDF({
        reference,
        plan: planData.plan,
        price: planData.price,
        totalAmount: totalAmount.toFixed(2)
      });
      
      // Mark preview as generated
      setPreviewGenerated(true);
    } catch (error) {
      console.error('Error generating preview:', error);
    } finally {
      setIsGeneratingPreview(false);
    }
  };

  // Function to generate a simple PDF
  interface PDFGenerationParams {
    reference: string;
    plan: string;
    price: string;
    totalAmount: string;
  }

  const generateSimplePDF = async ({
    reference,
    plan,
    price,
    totalAmount
  }: PDFGenerationParams): Promise<void> => {
    try {
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Add KLS Security header
      pdf.setFontSize(22);
      pdf.setTextColor(220, 30, 30); // Red color for header
      pdf.text('KLS Security Quotation', 105, 20, { align: 'center' });
      
      // Add quotation details
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0); // Black for body text
      pdf.text(`Reference: ${reference}`, 20, 40);
      pdf.text(`Date: ${new Date().toLocaleDateString('en-ZA')}`, 20, 50);
      pdf.text(`Plan: ${plan} Maintenance Plan`, 20, 60);
      pdf.text(`Monthly Price: ${price}`, 20, 70);
      pdf.text(`VAT (15%): R${(parseFloat(price.replace(/[^0-9.]/g, '')) * 0.15).toFixed(2)}`, 20, 80);
      pdf.text(`Monthly Total: R${totalAmount}`, 20, 90);
      pdf.text(`Annual Total: R${(parseFloat(totalAmount) * 12).toFixed(2)}`, 20, 100);
      
      // Add plan features
      pdf.text(`${plan} Plan Features:`, 20, 120);
      
      let yPosition = 130;
      if (plan in planFeatures) {
        (planFeatures as any)[plan].forEach((feature: string) => {
          pdf.text(`• ${feature}`, 25, yPosition);
          yPosition += 10;
        });
      }
      
      // Add customer information
      yPosition += 10;
      pdf.text("Customer Information:", 20, yPosition);
      yPosition += 10;
      pdf.text(`Name: ${formData.firstName} ${formData.lastName}`, 20, yPosition);
      yPosition += 10;
      pdf.text(`Email: ${formData.email}`, 20, yPosition);
      yPosition += 10;
      pdf.text(`Phone: ${formData.phone}`, 20, yPosition);
      yPosition += 10;
      pdf.text(`Address: ${formData.address}, ${formData.city}, ${formData.postalCode}`, 20, yPosition);
      yPosition += 10;
      pdf.text(`Property Type: ${formData.propertyType}`, 20, yPosition);
      
      // Add footer
      pdf.text("This is a preliminary quotation. A detailed quotation will be provided by our team.", 20, 250);
      pdf.text("For inquiries, please contact: maintenance.inquiries@klssecurity.co.za", 20, 260);
      pdf.text("Valid for 30 days from issue date.", 20, 270);
      
      // Save the PDF
      pdf.save(`KLS_Security_Quotation_${reference}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  // Function to handle sending direct inquiry email
  const handleDirectInquiry = async () => {
    if (!formData.email || !planData) return;
    
    setIsSendingInquiry(true);
    
    try {
      // Format the request details for email
      const inquiryDetails = `
        Selected Plan: ${planData.plan} Maintenance Plan
        Monthly Price: ${planData.price}
        VAT (15%): R${(parseFloat(planData.price.replace(/[^0-9.]/g, '')) * 0.15).toFixed(2)}
        Monthly Total: R${(parseFloat(planData.price.replace(/[^0-9.]/g, '')) * 1.15).toFixed(2)}
        Annual Total: R${(parseFloat(planData.price.replace(/[^0-9.]/g, '')) * 1.15 * 12).toFixed(2)}
        
        Customer Details:
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Address: ${formData.address}, ${formData.city}, ${formData.postalCode}
        Property Type: ${formData.propertyType}
        
        Additional Comments:
        ${formData.comments || "No additional comments provided."}
        
        This customer has reached the maximum number of automated quotation requests and has requested direct assistance.
        A PDF of the preliminary quotation has been provided to the customer.
      `;
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: COMPANY_EMAIL,
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: `Direct Service Inquiry - ${planData.plan} Maintenance Plan`,
        message: inquiryDetails
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_DIRECT_INQUIRY_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      if (response.status === 200) {
        setInquirySent(true);
        setDirectInquirySuccess(true);
      } else {
        setDirectInquiryError(true);
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
      setDirectInquiryError(true);
    } finally {
      setIsSendingInquiry(false);
    }
  };

  // Send email with quotation details
  const sendQuotationEmail = async (quotationData: any) => {
    // Check if EmailJS is properly configured
    if (EMAILJS_SERVICE_ID === 'your_service_id' || 
        EMAILJS_TEMPLATE_ID === 'your_template_id' || 
        EMAILJS_USER_ID === 'your_user_id') {
      console.warn('EmailJS not configured. Skipping email sending.');
      return true; // Return true to allow the rest of the process to continue
    }
    
    // Calculate VAT and total amounts for email template
    const basePrice = parseFloat(quotationData.plan.price.replace(/[^0-9.]/g, ''));
    const vatAmount = basePrice * 0.15;
    const totalAmount = basePrice * 1.15;
    
    // Format dates
    const currentDate = new Date().toLocaleDateString('en-ZA', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    });
    
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    const validUntilDate = expiryDate.toLocaleDateString('en-ZA', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    });
    
    // Prepare template parameters
    const templateParams = {
      to_email: quotationData.customer.email,
      cc_email: COMPANY_EMAIL,
      customer_name: `${quotationData.customer.firstName} ${quotationData.customer.lastName}`,
      customer_email: quotationData.customer.email,
      customer_phone: quotationData.customer.phone,
      customer_address: `${quotationData.customer.address}, ${quotationData.customer.city}, ${quotationData.customer.postalCode}`,
      property_type: quotationData.customer.propertyType,
      quotation_ref: quotationData.reference,
      plan_name: quotationData.plan.plan,
      plan_price: quotationData.plan.price,
      vat_amount: `R${vatAmount.toFixed(2)}`,
      total_amount: `R${totalAmount.toFixed(2)}`,
      annual_amount: `R${(totalAmount * 12).toFixed(2)}`,
      quote_date: currentDate,
      valid_until: validUntilDate,
      customer_comments: quotationData.customer.comments || "No additional comments provided."
    };
    
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      if (response.status === 200) {
        console.log('Email sent successfully');
        return true;
      } else {
        console.error('Failed to send email:', response);
        return false;
      }
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    if (!planData) {
      setErrorMessage('No plan selected. Please go back and select a plan.');
      setIsSubmitting(false);
      return;
    }

    // Check rate limiting
    if (submissionCount >= 5) {
      setErrorMessage(
        'You have reached the maximum number of quotation requests through our automated system. ' +
        'Would you like to send a direct inquiry to our team instead?'
      );
      
      // Show direct inquiry option and set up PDF generation
      setShowDirectInquiryOption(true);
      setIsSubmitting(false);
      return;
    }

    try {
      // Generate quotation reference
      const reference = generateQuotationReference();
      setQuotationReference(reference);
      
      // Prepare quotation data
      const quotationData = {
        reference,
        plan: planData,
        customer: formData,
        totalAmount: calculateTotal(planData.price).toFixed(2),
        dateCreated: new Date().toISOString(),
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days validity
      };
      
      // Send email with quotation details
      const emailSent = await sendQuotationEmail(quotationData);
      
      if (!emailSent) {
        console.warn('Email delivery failed, but continuing with quotation generation');
        // Consider adding a notification to the user about email failure
      }
      
      // Update submission count in state and localStorage
      const newCount = submissionCount + 1;
      setSubmissionCount(newCount);
      localStorage.setItem('quotationSubmissionCount', newCount.toString());
      
      // Show success state and redirect to success page
      setQuotationGenerated(true);
      
      // Redirect to success page with query parameters
      router.push(`/checkout/success?reference=${reference}&plan=${planData.plan}&price=${encodeURIComponent(planData.price)}&firstName=${encodeURIComponent(formData.firstName)}&lastName=${encodeURIComponent(formData.lastName)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`);
      
    } catch (error) {
      console.error('Error generating quotation:', error);
      setIsSubmitting(false);
      setErrorMessage('An error occurred while generating your quotation. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-8">
          <Link href="/services/maintenance" className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Plans
          </Link>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Request Service Quotation</h1>
          <p className="text-gray-600 mt-2">
            {planData ? `You've selected the ${planData.plan} Plan at ${planData.price} per month` : 'Please select a plan to continue'}
          </p>
        </div>

        {errorMessage && !showDirectInquiryOption && (
          <div className="max-w-3xl mx-auto bg-red-50 border-l-4 border-red-600 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* Rate Limit Error UI with Direct Inquiry Option */}
        {errorMessage && showDirectInquiryOption && (
          <div className="max-w-3xl mx-auto bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-3 w-full">
                <h3 className="text-lg font-medium text-red-800 mb-2">Quotation Limit Reached</h3>
                <p className="text-red-700 mb-4">{errorMessage}</p>
                
                {!inquirySent ? (
                  <div>
                    <p className="text-gray-700 mb-4">
                      Don't worry! We can still help you. Please click below to send your information directly to our team:
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <button
                        onClick={generatePreviewQuotation}
                        disabled={isGeneratingPreview}
                        className="inline-flex items-center px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors disabled:opacity-70"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        {isGeneratingPreview ? 'Generating...' : 'Preview Quotation'}
                      </button>
                      
                      {previewGenerated && (
                        <button
                          onClick={handleDirectInquiry}
                          disabled={isSendingInquiry}
                          className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-70"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          {isSendingInquiry ? 'Sending...' : 'Send Direct Inquiry to Our Team'}
                        </button>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-2">
                      Your information will be sent to our team who will prepare a quotation and contact you shortly.
                    </p>
                  </div>
                ) : directInquirySuccess ? (
                  <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-green-700">
                          Your inquiry has been sent successfully to {COMPANY_EMAIL}. 
                          Our team will contact you within 24-48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : directInquiryError ? (
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-yellow-700">
                          There was an issue sending your inquiry. Please contact us directly at{' '} 
                          <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium underline ml-1">
                            {COMPANY_EMAIL}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}

        {/* Preview Quotation (shown when limit is reached and preview is generated) */}
        {previewGenerated && previewData && (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Preliminary Quotation</h1>
                  <p className="text-gray-600">{previewData.reference}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-red-600" />
                  <span className="text-xl font-bold">KLS</span>
                  <span className="text-xl">Security</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Summary</h2>
                  <p className="text-gray-600 text-sm">Date: {new Date().toLocaleDateString('en-ZA')}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Preliminary
                </span>
              </div>
              
              {formData.comments && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Additional Comments</p>
                  <p className="text-gray-600 mt-1">{formData.comments}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {!planData ? (
          <div className="text-center bg-white rounded-lg shadow-sm p-8">
            <p className="text-lg text-gray-600 mb-6">No plan selected. Please choose a maintenance plan first.</p>
            <Link href="/services/maintenance" className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
              View Maintenance Plans
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customer Information Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4 pb-4 border-b">Your Information</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Comments (Optional)
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                      placeholder="Please let us know if you have any specific requirements or questions."
                    ></textarea>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex justify-center items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:bg-red-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating Quotation...
                        </>
                      ) : (
                        <>
                          <FileText className="w-5 h-5 mr-2" />
                          Generate Quotation
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4 pb-4 border-b">Selected Plan</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-red-600 mr-2" />
                      <span className="font-medium">{planData?.plan} Plan</span>
                    </div>
                    <span>{planData?.price}/month</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Base Price</span>
                      <span>{planData?.price}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">VAT (15%)</span>
                      <span>R{planData ? calculateVAT(planData.price).toFixed(2) : '0.00'}</span>
                    </div>
                    <div className="flex justify-between py-2 font-bold">
                      <span>Monthly Total</span>
                      <span>R{planData ? calculateTotal(planData.price).toFixed(2) : '0.00'}</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm text-gray-500 mt-2">
                      <span>Annual Cost</span>
                      <span>R{planData ? (calculateTotal(planData.price) * 12).toFixed(2) : '0.00'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <h3 className="font-medium mb-2">Plan Features</h3>
                  <ul className="space-y-2">
                    {planData && planData.plan in planFeatures && planFeatures[planData.plan as keyof typeof planFeatures].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-sm text-gray-500">
                  <p>
                    By submitting this form, you'll receive a detailed quotation for your selected maintenance plan. 
                    Our team will contact you within 24 hours to confirm the details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-red-600 border-opacity-50 border-t-red-600 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quotation form...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}