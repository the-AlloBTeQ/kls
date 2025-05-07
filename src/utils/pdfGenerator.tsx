// Enhanced PDF Quotation Generator Function
const generateEnhancedPDF = async (data: {
    reference: string;
    plan: string;
    price: string;
    billingCycle: 'monthly' | 'annual';
    customer: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address?: string;
      city?: string;
      postalCode?: string;
      propertyType?: string;
      comments?: string;
    };
  }): Promise<void> => {
    try {
      // Import jsPDF with the right modules
      const jsPDF = (await import('jspdf')).default;
      await import('jspdf-autotable'); // For better tables
      
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
      
      const formatDate = (date: Date) => {
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
        (pdf as any).autoTable({
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
        
        (pdf as any).autoTable({
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
      const finalY = (pdf as any).lastAutoTable.finalY || 200;
      
      // Plan features section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      pdf.text("INCLUDED SERVICES", 20, finalY + 10);
      
      // Define plan features
      const planFeatures: {[key: string]: string[]} = {
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
      
      (pdf as any).autoTable({
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
      const featuresEndY = (pdf as any).lastAutoTable.finalY || 250;
      
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
      (pdf as any).autoTable({
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
      const customerEndY = (pdf as any).lastAutoTable.finalY || 280;
      
      // Footer information
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(100, 100, 100);
      pdf.text("This quotation is valid for 30 days from the date of issue.", 105, customerEndY + 10, { align: 'center' });
      pdf.text("For any questions, please contact us at maintenance.inquiries@klssecurity.co.za or call 079 596 5491.", 105, customerEndY + 15, { align: 'center' });
      
      // Company details in footer
      pdf.setDrawColor(220, 30, 30);
      pdf.setLineWidth(0.5);
      pdf.line(20, 275, 190, 275);
      
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(220, 30, 30);
      pdf.text("KLS Security (Pty) Ltd", 105, 280, { align: 'center' });
      
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(100, 100, 100);
      pdf.text("Johannesburg, South Africa | Tel: 079 596 5491 | Email: maintenance.inquiries@klssecurity.co.za", 105, 285, { align: 'center' });
      pdf.text("PSIRA Registration: In good standing", 105, 290, { align: 'center' });
      
      // Save the PDF
      pdf.save(`KLS_Security_Quotation_${data.reference}.pdf`);
      
    } catch (error) {
      console.error('Error generating enhanced PDF:', error);
    }
  };
  

  
  export default generateEnhancedPDF;