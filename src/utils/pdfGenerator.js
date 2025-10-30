// utils/pdfGenerator.js
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

/**
 * Generates a professional PDF quotation for KLS Security services
 * @param {Object} data - The quotation data
 * @param {string} data.reference - Quotation reference number
 * @param {string} data.plan - Service plan name (Basic, Standard, Premium)
 * @param {string} data.price - Base price as string (e.g. "1200.00")
 * @param {string} data.billingCycle - Either 'monthly' or 'annual'
 * @param {Object} data.customer - Customer information
 * @returns {Promise<ArrayBuffer>} - Returns PDF as ArrayBuffer
 */
export async function generateSecurityQuotationPDF(data) {
  try {
    // Create PDF document
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Add logo placeholder (in production, replace with actual logo)
    const logoWidth = 50;
    const centerX = (210 - logoWidth) / 2;
    pdf.setDrawColor(220, 30, 30); // KLS Red color
    pdf.setFillColor(220, 30, 30);
    pdf.roundedRect(centerX, 15, logoWidth, 10, 2, 2, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.text("KLS SECURITY", 105, 22, { align: 'center' });
    
    // Document title
    pdf.setTextColor(220, 30, 30);
    pdf.setFontSize(22);
    pdf.text("SECURITY SERVICE QUOTATION", 105, 40, { align: 'center' });
    
    // Add a horizontal line
    pdf.setDrawColor(220, 30, 30);
    pdf.setLineWidth(0.5);
    pdf.line(20, 45, 190, 45);
    
    // Quotation details section
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.text("QUOTATION DETAILS", 20, 55);
    
    // Add a subtle background for the quotation section
    pdf.setFillColor(248, 249, 250);
    pdf.rect(20, 58, 170, 40, 'F');
    
    // Add border to the background
    pdf.setDrawColor(220, 220, 220);
    pdf.setLineWidth(0.2);
    pdf.rect(20, 58, 170, 40);
    
    // Quotation information
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    
    // Left column
    pdf.text("Reference:", 25, 65);
    pdf.text("Date:", 25, 72);
    pdf.text("Billing Cycle:", 25, 79);
    pdf.text("Valid Until:", 25, 86);
    pdf.text("Status:", 25, 93);
    
    // Right column - reference information
    pdf.setFont("helvetica", "bold");
    pdf.text(data.reference, 70, 65);
    
    // Current date and expiry date (30 days from now)
    const currentDate = new Date();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    const formatDate = (date) => {
      return date.toLocaleDateString('en-ZA', {
        year: 'numeric', month: '2-digit', day: '2-digit'
      }).replace(/\//g, '-');
    };
    
    pdf.setFont("helvetica", "normal");
    pdf.text(formatDate(currentDate), 70, 72);
    pdf.text(data.billingCycle === 'monthly' ? 'Monthly' : 'Annual', 70, 79);
    pdf.text(formatDate(expiryDate), 70, 86);
    
    // Status with colored box
    pdf.setFillColor(0, 180, 0);
    pdf.rect(70, 90, 4, 4, 'F');
    pdf.text("Active", 76, 93);
    
    // Service details section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("SERVICE PLAN", 20, 110);
    
    // Add subtle background for service plan
    pdf.setFillColor(248, 249, 250);
    pdf.rect(20, 113, 170, 25, 'F');
    
    // Add border to the background
    pdf.setDrawColor(220, 220, 220);
    pdf.setLineWidth(0.2);
    pdf.rect(20, 113, 170, 25);
    
    // Service plan information
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text("Service Plan:", 25, 120);
    pdf.text("Response Time:", 25, 127);
    pdf.text("Service Level:", 25, 134);
    
    // Service plan details
    pdf.setFont("helvetica", "bold");
    pdf.text(`${data.plan} Maintenance Plan`, 70, 120);
    
    // Response time based on plan
    let responseTime;
    if (data.plan === 'Premium') {
      responseTime = '2 hours';
    } else if (data.plan === 'Standard') {
      responseTime = '4 hours';
    } else {
      responseTime = '8 hours';
    }
    
    pdf.setFont("helvetica", "normal");
    pdf.text(responseTime, 70, 127);
    pdf.text(data.plan, 70, 134);
    
    // Pricing section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("PRICING DETAILS", 20, 150);
    
    // Calculate pricing based on plan and billing cycle
    const basePrice = parseFloat(data.price.replace(/[^0-9.]/g, ''));
    const vatAmount = basePrice * 0.15;
    const monthlyTotal = basePrice + vatAmount;
    const annualTotal = monthlyTotal * 12;
    
    // Create pricing table
    if (data.billingCycle === 'monthly') {
      // Monthly pricing table
      pdf.autoTable({
        startY: 153,
        margin: { left: 20 },
        headStyles: { fillColor: [220, 30, 30], textColor: 255 },
        head: [['Description', 'Monthly Amount', 'Annual Equivalent']],
        body: [
          ['Base Price', `R${basePrice.toFixed(2)}`, `R${(basePrice * 12).toFixed(2)}`],
          ['VAT (15%)', `R${vatAmount.toFixed(2)}`, `R${(vatAmount * 12).toFixed(2)}`],
          ['Total', `R${monthlyTotal.toFixed(2)}`, `R${annualTotal.toFixed(2)}`]
        ],
        bodyStyles: { fontSize: 10 },
        alternateRowStyles: { fillColor: [248, 249, 250] },
        footStyles: { fillColor: [240, 240, 240], fontSize: 10, fontStyle: 'bold' }
      });
    } else {
      // Annual pricing table with discount
      const annualBasePrice = basePrice * 12;
      const discountAmount = annualBasePrice * 0.1;
      const discountedAnnual = annualBasePrice - discountAmount;
      const vatAnnual = discountedAnnual * 0.15;
      const totalAnnual = discountedAnnual + vatAnnual;
      const monthlyEquivalent = totalAnnual / 12;
      
      pdf.autoTable({
        startY: 153,
        margin: { left: 20 },
        headStyles: { fillColor: [220, 30, 30], textColor: 255 },
        head: [['Description', 'Annual Amount', 'Monthly Equivalent']],
        body: [
          ['Base Price (Annual)', `R${annualBasePrice.toFixed(2)}`, ''],
          ['Discount (10%)', `-R${discountAmount.toFixed(2)}`, ''],
          ['Discounted Annual Price', `R${discountedAnnual.toFixed(2)}`, ''],
          ['VAT (15%)', `R${vatAnnual.toFixed(2)}`, ''],
          ['Total', `R${totalAnnual.toFixed(2)}`, `R${monthlyEquivalent.toFixed(2)}`]
        ],
        bodyStyles: { fontSize: 10 },
        alternateRowStyles: { fillColor: [248, 249, 250] },
        footStyles: { fillColor: [240, 240, 240], fontSize: 10, fontStyle: 'bold' }
      });
    }
    
    // Get the last Y position to continue below the table
    const finalY = pdf.lastAutoTable.finalY || 200;
    
    // Plan features section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("INCLUDED SERVICES", 20, finalY + 10);
    
    // Define plan features
    const planFeatures = {
      'Basic': [
        "Monthly system health check",
        "Basic alarm system maintenance",
        "Email support during business hours",
        "Up to 2 service calls per year"
      ],
      'Standard': [
        "Bi-weekly system health check",
        "Comprehensive alarm system maintenance",
        "Camera system maintenance",
        "Priority email and phone support",
        "Up to 6 service calls per year",
        "Discounted rates on equipment upgrades"
      ],
      'Premium': [
        "Weekly system health check",
        "Comprehensive maintenance for all security systems",
        "Camera system maintenance and optimization",
        "24/7 priority support with dedicated account manager",
        "Unlimited service calls",
        "20% discount on all equipment upgrades",
        "Annual security audit and recommendation report"
      ]
    };
    
    // Create features table
    const features = planFeatures[data.plan] || [];
    const featuresFormatted = features.map(feature => ['•', feature]);
    
    pdf.autoTable({
      startY: finalY + 13,
      margin: { left: 20 },
      head: [['', '']],
      body: featuresFormatted,
      headStyles: { fillColor: [220, 30, 30], textColor: 255 },
      bodyStyles: { fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 5 },
        1: { cellWidth: 'auto' }
      },
      alternateRowStyles: { fillColor: [248, 249, 250] },
      hideHeader: true
    });
    
    // Get the last Y position to continue below the table
    const featuresEndY = pdf.lastAutoTable.finalY || 250;
    
    // Customer details section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text("CUSTOMER INFORMATION", 20, featuresEndY + 10);
    
    // Format customer name and details
    const customerName = `${data.customer.firstName} ${data.customer.lastName}`;
    const customerAddress = data.customer.address ? 
      `${data.customer.address}${data.customer.city ? `, ${data.customer.city}` : ''}${data.customer.postalCode ? `, ${data.customer.postalCode}` : ''}` : 
      'Not provided';
    const propertyType = data.customer.propertyType ? 
      data.customer.propertyType.charAt(0).toUpperCase() + data.customer.propertyType.slice(1) : 
      'Not specified';
    
    // Create customer details table
    pdf.autoTable({
      startY: featuresEndY + 13,
      margin: { left: 20 },
      head: [['', '']],
      body: [
        ['Client Name:', customerName],
        ['Email:', data.customer.email],
        ['Phone:', data.customer.phone],
        ['Address:', customerAddress],
        ['Property Type:', propertyType]
      ],
      bodyStyles: { fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 35, fontStyle: 'bold' },
        1: { cellWidth: 'auto' }
      },
      alternateRowStyles: { fillColor: [248, 249, 250] },
      hideHeader: true
    });
    
    // Get the last Y position to continue below the table
    const customerEndY = pdf.lastAutoTable.finalY || 280;
    
    // Terms and contact information section - MOVED UP FROM FOOTER
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(60, 60, 60);
    pdf.text("This quotation is valid for 30 days from the date of issue.", 20, customerEndY + 15);
    pdf.text("For any questions, please contact us at maintenance.inquiries@klssecurity.co.za or call 079 596 5491.", 20, customerEndY + 20);
    
    // Add page numbers
    const pageCount = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`KLS Security - Quotation Ref: ${data.reference}`, 105, 292, { align: 'center' });
      pdf.text(`Page ${i} of ${pageCount}`, 190, 292, { align: 'right' });
    }
    
    // Return PDF as ArrayBuffer
    return pdf.output('arraybuffer');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

/**
 * For backward compatibility with the old function name
 */
export default function generateEnhancedPDF(data) {
  return generateSecurityQuotationPDF(data)
    .then(pdfBuffer => {
      // Convert to blob and trigger download
      const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `KLS_Security_Quotation_${data.reference}.pdf`;
      link.click();
      return pdfBuffer;
    });
}