"use client";
import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle, 
  FileText, 
  Download, 
  Printer, 
  Mail, 
  Clock, 
  Shield, 
  ChevronLeft, 
  AlertCircle, 
  Send, 
  Calendar, 
  CreditCard 
} from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import generateEnhancedPDF from '../../../utils/pdfGenerator';

// Plan features for each maintenance plan
const planFeatures = {
  Basic: [
    "Monthly system health check",
    "Basic alarm system maintenance",
    "Email support during business hours",
    "Up to 2 service calls per year"
  ],
  Standard: [
    "Bi-weekly system health check",
    "Comprehensive alarm system maintenance",
    "Camera system maintenance",
    "Priority email and phone support",
    "Up to 6 service calls per year",
    "Discounted rates on equipment upgrades"
  ],
  Premium: [
    "Weekly system health check",
    "Comprehensive maintenance for all security systems",
    "Camera system maintenance and optimization",
    "24/7 priority support with dedicated account manager",
    "Unlimited service calls",
    "20% discount on all equipment upgrades",
    "Annual security audit and recommendation report"
  ]
};

interface QuotationSuccessProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function QuotationSuccess({ searchParams }: QuotationSuccessProps) {
  // Extract values from search params with defaults
  const reference = typeof searchParams.reference === 'string' ? searchParams.reference : "";
  const plan = typeof searchParams.plan === 'string' ? searchParams.plan : "Standard";
  const price = typeof searchParams.price === 'string' ? searchParams.price : "R349.99";
  
  // Create customer object from search params
  const customer = {
    firstName: typeof searchParams.firstName === 'string' ? searchParams.firstName : "",
    lastName: typeof searchParams.lastName === 'string' ? searchParams.lastName : "",
    email: typeof searchParams.email === 'string' ? searchParams.email : "",
    phone: typeof searchParams.phone === 'string' ? searchParams.phone : "",
    address: typeof searchParams.address === 'string' ? searchParams.address : undefined,
    city: typeof searchParams.city === 'string' ? searchParams.city : undefined,
    postalCode: typeof searchParams.postalCode === 'string' ? searchParams.postalCode : undefined,
    propertyType: typeof searchParams.propertyType === 'string' ? searchParams.propertyType : undefined,
    comments: typeof searchParams.comments === 'string' ? searchParams.comments : undefined,
  };

  // State for billing cycle selection
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  // State for quotation actions
  const [isSending, setIsSending] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showConfirmSend, setShowConfirmSend] = useState(false);
  
  // References for PDF generation
  const quotationRef = useRef<HTMLDivElement>(null);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const EMAILJS_RESEND_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_RESEND_TEMPLATE_ID || EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'your_user_id';

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_USER_ID !== 'your_user_id') {
      emailjs.init(EMAILJS_USER_ID);
    }
  }, []);

  // Pricing calculations
  const getCurrentPricing = () => {
    const basePrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    const vatAmount = basePrice * 0.15;
    const monthlyTotal = basePrice * 1.15;
    const annualTotal = monthlyTotal * 12;
    
    if (billingCycle === 'annual') {
      // Apply 10% discount for annual billing
      const discountAmount = annualTotal * 0.1;
      const discountedAnnual = annualTotal - discountAmount;
      const equivalentMonthly = discountedAnnual / 12;
      
      return {
        basePrice,
        vatAmount,
        total: discountedAnnual,
        discountAmount,
        savings: discountAmount,
        equivalentMonthly,
        billing: 'annual'
      };
    } else {
      return {
        basePrice,
        vatAmount,
        total: monthlyTotal,
        annualEquivalent: annualTotal,
        billing: 'monthly'
      };
    }
  };

  // Generate and download the enhanced PDF
  const handleDownload = async () => {
    setIsGeneratingPDF(true);
    try {
      await generateEnhancedPDF({
        reference,
        plan,
        price,
        billingCycle,
        customer
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Handle printing
  const handlePrint = () => {
    window.print();
  };

  // Handle send quotation via email
  const handleSendQuotation = () => {
    setShowConfirmSend(true);
  };

  // Confirm and send quotation
  const confirmSendQuotation = async () => {
    setShowConfirmSend(false);
    setIsSending(true);
    setEmailSent(false);
    setEmailError(false);
    
    try {
      const pricing = getCurrentPricing();
      
      // Prepare email template parameters
      const templateParams = {
        to_email: customer.email,
        cc_email: 'maintenance.inquiries@klssecurity.co.za',
        customer_name: `${customer.firstName} ${customer.lastName}`,
        customer_email: customer.email,
        customer_phone: customer.phone,
        quotation_ref: reference,
        plan_name: `${plan} Plan`,
        billing_cycle: billingCycle === 'monthly' ? 'Monthly' : 'Annual',
        plan_price: billingCycle === 'monthly' 
          ? `R${pricing.basePrice.toFixed(2)}/month` 
          : `R${(pricing.basePrice * 12 * 0.9).toFixed(2)}/year`,
        vat_amount: billingCycle === 'monthly'
          ? `R${pricing.vatAmount.toFixed(2)}/month`
          : `R${(pricing.vatAmount * 12 * 0.9).toFixed(2)}/year`,
        total_amount: billingCycle === 'monthly'
          ? `R${pricing.total.toFixed(2)}/month`
          : `R${pricing.total.toFixed(2)}/year`,
        discount_amount: `R${(pricing.discountAmount || 0).toFixed(2)}`,
        quote_date: new Date().toLocaleDateString('en-ZA'),
        valid_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-ZA'),
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_RESEND_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      if (response.status === 200) {
        setEmailSent(true);
        
        // Generate a PDF automatically for the user
        await handleDownload();
      } else {
        setEmailError(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError(true);
    } finally {
      setIsSending(false);
    }
  };

  // Cancel send confirmation
  const cancelSendQuotation = () => {
    setShowConfirmSend(false);
  };
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Return to Home
          </Link>
        </nav>

        {/* Status Banner */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Quotation Generated Successfully</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Your quotation has been generated and a copy has been sent to your email.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Email Status Messages */}
        {emailSent && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <Mail className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Email Sent</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Your quotation has been sent to {customer.email}. Please check your inbox.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {emailError && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Email Delivery Issue</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    There was an issue sending the email. Please download your quotation or try again.
                    If the problem persists, contact us at maintenance.inquiries@klssecurity.co.za.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Send Confirmation Dialog */}
        {showConfirmSend && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Email</h3>
              <p className="text-gray-600 mb-6">
                Send this quotation with {billingCycle} billing to {customer.email}?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={cancelSendQuotation}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmSendQuotation}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Send Quotation
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Quotation Document */}
        <div 
          ref={quotationRef}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 mb-8"
        >
          {/* Quotation Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Service Quotation</h1>
                <p className="text-gray-600">{reference}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-red-600" />
                <span className="text-xl font-bold">KLS</span>
                <span className="text-xl">Security</span>
              </div>
            </div>
          </div>

          {/* Quotation Summary */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Quotation Summary</h2>
                <p className="text-gray-600 text-sm">Date: {new Date().toLocaleDateString('en-ZA')}</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Valid for 30 days
              </span>
            </div>

            {/* Billing Cycle Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Billing Cycle</h3>
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    billingCycle === 'monthly' 
                      ? 'bg-red-50 text-red-700 border border-red-200' 
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    billingCycle === 'annual' 
                      ? 'bg-red-50 text-red-700 border border-red-200' 
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Annual (10% Discount)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Monthly Pricing Card */}
              <div className={`border rounded-lg overflow-hidden ${
                billingCycle === 'monthly' ? 'border-red-300 ring-2 ring-red-200' : 'border-gray-200'
              }`}>
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900">Monthly Billing</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Base Price</span>
                    <span>{price}/month</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">VAT (15%)</span>
                    <span>R{getCurrentPricing().vatAmount.toFixed(2)}/month</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 font-medium">
                    <span>Monthly Total</span>
                    <span>R{(getCurrentPricing().basePrice * 1.15).toFixed(2)}/month</span>
                  </div>
                  <div className="flex justify-between py-2 text-sm text-gray-500">
                    <span>Annual Equivalent</span>
                    <span>R{(getCurrentPricing().basePrice * 1.15 * 12).toFixed(2)}/year</span>
                  </div>
                </div>
              </div>

              {/* Annual Pricing Card */}
              <div className={`border rounded-lg overflow-hidden ${
                billingCycle === 'annual' ? 'border-red-300 ring-2 ring-red-200' : 'border-gray-200'
              }`}>
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900">Annual Billing (10% Discount)</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Base Annual</span>
                    <span>R{(getCurrentPricing().basePrice * 12).toFixed(2)}/year</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-green-600">
                    <span>Discount (10%)</span>
                    <span>-R{(getCurrentPricing().basePrice * 12 * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">VAT (15%)</span>
                    <span>R{(getCurrentPricing().basePrice * 12 * 0.9 * 0.15).toFixed(2)}/year</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 font-medium">
                    <span>Annual Total</span>
                    <span>R{(getCurrentPricing().basePrice * 12 * 0.9 * 1.15).toFixed(2)}/year</span>
                  </div>
                  <div className="flex justify-between py-2 text-sm text-gray-500">
                    <span>Equivalent Monthly</span>
                    <span>R{(getCurrentPricing().basePrice * 0.9 * 1.15).toFixed(2)}/month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-700">
                {billingCycle === 'monthly' 
                  ? 'Monthly billing offers flexibility with no long-term commitment. Switch or cancel anytime.' 
                  : 'Annual billing saves you 10% compared to monthly payments and provides priority service.'}
              </p>
            </div>
          </div>

          {/* Service Details */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Service Details</h2>

            <div className="bg-gray-50 rounded-lg border border-gray-200 mb-6">
              <div className="border-b border-gray-200 p-4 bg-gray-100">
                <h3 className="font-medium text-gray-900">{plan} Maintenance Plan</h3>
                <p className="text-sm text-gray-600">Subscription service with the following inclusions:</p>
              </div>

              <ul className="divide-y divide-gray-200">
                {plan && planFeatures[plan as keyof typeof planFeatures]?.map((feature, index) => (
                  <li key={index} className="flex items-start p-4">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>Response Time: {plan === 'Premium' ? '2 hours' : plan === 'Standard' ? '4 hours' : '8 hours'}</span>
              </div>
              <div className="text-gray-500 text-sm">
                PSIRA Reg: In good standing
              </div>
            </div>
          </div>
          
          {/* Client Information */}
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Client Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{customer.firstName} {customer.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact</p>
                <p className="font-medium">{customer.email}</p>
                <p className="text-gray-600">{customer.phone}</p>
              </div>
              {customer.address && (
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-600">
                    {customer.address}{customer.city ? `, ${customer.city}` : ''}
                    {customer.postalCode ? `, ${customer.postalCode}` : ''}
                  </p>
                </div>
              )}
              {customer.propertyType && (
                <div>
                  <p className="text-sm text-gray-500">Property Type</p>
                  <p className="text-gray-600">
                    {customer.propertyType.charAt(0).toUpperCase() + customer.propertyType.slice(1)}
                  </p>
                </div>
              )}
            </div>
            
            {customer.comments && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Additional Comments</p>
                <p className="text-gray-600 mt-1">{customer.comments}</p>
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                <p className="mb-2">This quotation is valid for 30 days from the date of issue.</p>
                <p>For any questions, please contact us at maintenance.inquiries@klssecurity.co.za or call 079 596 5491.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={handleDownload}
            disabled={isGeneratingPDF}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-70"
          >
            <Download className="h-5 w-5 mr-2 text-gray-500" />
            {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
          </button>
          
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Printer className="h-5 w-5 mr-2 text-gray-500" />
            Print Quotation
          </button>
          
          <button
            onClick={handleSendQuotation}
            disabled={isSending}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send and Finalize Quotation
              </>
            )}
          </button>
        </div>

        {/* Company Information */}
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-1">KLS Security (Pty) Ltd</p>
          <p>Eastern Cape, Sarah Baartman, South Africa | Tel: 079 596 5491 | Email: maintenance.inquiries@klssecurity.co.za</p>
          <p className="mt-1">PSIRA Registration: <span className="text-green-600">In good standing</span></p>
        </div>
      </div>
    </div>
  );
}