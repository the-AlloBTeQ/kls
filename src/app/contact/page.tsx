"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [useMailTo, setUseMailTo] = useState(false);

  // EmailJS Configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Check if EmailJS is properly configured
  const isEmailJSConfigured = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate mailto link
  const generateMailToLink = () => {
    const subject = `KLS Security Inquiry - ${formData.service || 'General'} Service`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested In: ${formData.service}\n\nMessage:\n${formData.message}`;
    
    return `mailto:inquiries@klssecurity.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // If user prefers mailto or EmailJS is not configured, use mailto
    if (useMailTo || !isEmailJSConfigured) {
      window.location.href = generateMailToLink();
      
      // Show success message even for mailto
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Your email client is opening with your message. Please send the email to complete your inquiry.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      return;
    }
    
    // Otherwise, use EmailJS
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'KLS Security Team',
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        templateParams,
        EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully:', result);
      
      // Display success message
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

    } catch (error: any) {
      console.error('Error sending email:', error);
      
      // If EmailJS fails, offer to use mailto instead
      setFormStatus({
        submitted: true,
        error: true,
        message: 'There was an error sending your message. Would you like to try using your email client instead?'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle mailto fallback when EmailJS fails
  const handleMailToFallback = () => {
    window.location.href = generateMailToLink();
    setFormStatus({
      submitted: false,
      error: false,
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our security experts for a consultation tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">24/7 Customer Service</p>
              <a href="tel:0795965491" className="text-red-600 font-bold text-lg hover:text-red-700">
                079 596 5491
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">For Inquiries & Support</p>
              <a href="mailto:inquiries@klssecurity.co.za" className="text-red-600 font-bold text-lg hover:text-red-700">
                inquiries@klssecurity.co.za
              </a>
            </div>
            
            {/* Location */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
              <p className="text-gray-600 mb-2">Head Office</p>
              <p className="text-red-600 font-bold">Eastern Cape, Sarah Baartman, South Africa</p>
            </div>
            
            {/* Hours */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-2">Office Hours</p>
              <p className="text-red-600 font-bold">Mon-Fri: 8AM-5PM</p>
              <p className="text-red-600 mt-1">Emergency: 24/7</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {/* Email Method Toggle */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useMailTo}
                    onChange={(e) => setUseMailTo(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative w-11 h-6 bg-gray-200 rounded-full transition-colors ${useMailTo ? 'bg-red-600' : ''}`}>
                    <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ${useMailTo ? 'transform translate-x-5' : ''}`}></div>
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    Use email client instead of web form
                  </span>
                </label>
                <p className="text-xs text-gray-500 mt-2 ml-14">
                  {useMailTo 
                    ? 'When you click "Send Message", your email client will open with a pre-filled message.' 
                    : 'Your message will be sent securely through our web form.'}
                </p>
              </div>
              
              {formStatus.submitted ? (
                <div className={`p-6 rounded-lg mb-6 ${formStatus.error ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'} animate-fadeIn transition-all duration-300`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${formStatus.error ? 'bg-red-100' : 'bg-green-100'} mr-4`}>
                      {formStatus.error ? (
                        <AlertCircle className={`h-6 w-6 ${formStatus.error ? 'text-red-600' : 'text-green-600'}`} />
                      ) : (
                        <Send className="h-6 w-6 text-green-600" />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${formStatus.error ? 'text-red-800' : 'text-green-800'}`}>
                        {formStatus.error ? 'Message Not Sent' : 'Message Sent Successfully!'}
                      </h3>
                      <p className={`${formStatus.error ? 'text-red-700' : 'text-green-700'}`}>
                        {formStatus.message}
                      </p>
                      {formStatus.error && (
                        <button
                          onClick={handleMailToFallback}
                          className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                        >
                          Use Email Client Instead
                        </button>
                      )}
                      {!formStatus.error && (
                        <p className="text-green-700 mt-2">
                          We appreciate your interest in our services. One of our representatives will be in touch with you shortly!
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <button 
                      onClick={() => {
                        setFormStatus({submitted: false, error: false, message: ''});
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: '',
                          message: '',
                        });
                      }} 
                      className="text-sm underline text-gray-600 hover:text-gray-800"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Your email"
                      required
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select a service</option>
                    <option value="professional-guarding">Professional Guarding</option>
                    <option value="close-protection">Close Protection</option>
                    <option value="k9-security">K9 Security Units</option>
                    <option value="mining-security">Mining Security</option>
                    <option value="cctv-monitoring">CCTV Monitoring</option>
                    <option value="access-control">Access Control</option>
                    <option value="alarm-systems">Alarm Systems</option>
                    <option value="remote-monitoring">Remote Monitoring</option>
                    <option value="security-equipment">Security Equipment</option>
                    <option value="other">Other/Multiple Services</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Tell us about your security needs"
                    required
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting && !useMailTo}
                    className={`${
                      (isSubmitting && !useMailTo) ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                    } text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center w-full`}
                  >
                    {useMailTo ? 'Open Email Client' : (isSubmitting ? 'Sending...' : 'Send Message')}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Map & Emergency Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              
              {/* Map Placeholder - Replace with actual map in production */}
              <div className="w-full h-80 bg-gray-200 rounded-lg mb-8 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.4964092684505!2d26.519778375771936!3d-33.31092097307277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzM5LjMiUyAyNsKwMzEnMTkuNyJF!5e0!3m2!1sen!2sza!4v1709924021529!5m2!1sen!2sza" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KLS Security Location - Grahamstown SP2, Sarah Baartman, Eastern Cape"
                ></iframe>
              </div>
              
              {/* Emergency Contact Box */}
              <div className="bg-red-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">24/7 Emergency Response</h3>
                <p className="mb-4">
                  Our security team is available 24/7 for emergency response. If you require immediate assistance, please call our emergency hotline.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="tel:0795965491"
                    className="inline-flex items-center px-5 py-3 bg-white text-red-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    079 596 5491
                  </a>
                  <span className="text-white font-bold">Available 24/7</span>
                </div>
              </div>

              {/* Direct Email Option */}
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prefer Direct Email?</h3>
                <p className="text-gray-600 mb-4">
                  You can also email us directly at:
                </p>
                <a 
                  href="mailto:inquiries@klssecurity.co.za" 
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  inquiries@klssecurity.co.za
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rest of your component remains the same */}
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What services does KLS Security offer?</h3>
              <p className="text-gray-600">
                KLS Security offers a comprehensive range of security services including professional guarding, close protection, K9 security units, mining security, CCTV monitoring, access control, alarm systems, remote monitoring, and security equipment sales.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide services across South Africa?</h3>
              <p className="text-gray-600">
                Yes, KLS Security operates throughout South Africa, with a particular focus on Johannesburg and surrounding areas. We can deploy security personnel and implement security systems nationwide.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can you implement security solutions?</h3>
              <p className="text-gray-600">
                Our response time depends on the complexity of your security needs. For urgent requirements, we can often deploy security personnel within 24-48 hours. For comprehensive security systems, we work efficiently to implement solutions as quickly as possible while ensuring quality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are your security personnel trained and certified?</h3>
              <p className="text-gray-600">
                Absolutely. All KLS Security personnel are registered with the Private Security Industry Regulatory Authority (PSIRA) and undergo rigorous training specific to their roles. Our guards are professionally trained, uniformed, and follow strict standard operating procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Request a Security Consultation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our security experts will conduct a thorough assessment of your security needs and provide a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:0795965491" 
                className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md"
              >
                Call Us Today
              </a>
              <a 
                href="/contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('name')?.focus();
                }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Fill Out Our Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;