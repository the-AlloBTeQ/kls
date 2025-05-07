"use client";
import React from 'react';
import { Wrench, CheckCircle, ShieldCheck, Clock, Zap, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const ProfessionalInstallationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Wrench className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              Professional Installation
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Expert installation of security systems by certified technicians for optimal performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Security System Installation</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                At KLS Security, we understand that even the most advanced security equipment is only as effective as its installation. Our professional installation service ensures that your security systems are properly set up, configured, and optimized for maximum performance and reliability.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Whether you need installation of CCTV cameras, access control systems, alarm systems, or a comprehensive integrated security solution, our certified technicians have the expertise to handle the job with precision and attention to detail.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS Installation Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Certified technicians with extensive security system experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Proper system configuration for optimal performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Neat, professional cable management and mounting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Thorough testing of all installed components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Comprehensive training on system operation</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Installation Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ShieldCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Security System Installation</h4>
                    <p className="text-gray-600">Expert installation of CCTV cameras, access control, alarm systems, and integrated security solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">System Configuration</h4>
                    <p className="text-gray-600">Professional setup and optimization of security system software and hardware components</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ChevronRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Integration Services</h4>
                    <p className="text-gray-600">Seamless integration of multiple security systems into a unified solution</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">System Training</h4>
                    <p className="text-gray-600">Comprehensive training on system operation and basic troubleshooting</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/images/professional-installation.jpg" 
                  alt="KLS Professional Installation" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Professional Installation</h3>
                <p className="text-gray-600 mb-6">
                  Our installation experts can handle your security system setup with precision and care, ensuring optimal performance and reliability.
                </p>
                <div className="space-y-4">
                  <Link href="/contact" className="block w-full bg-red-600 text-white text-center py-3 px-4 rounded-md hover:bg-red-700 transition-colors">
                    Request a Quote
                  </Link>
                  <a href="tel:0795965491" className="flex items-center justify-center w-full border-2 border-red-600 text-red-600 py-3 px-4 rounded-md hover:bg-red-50 transition-colors">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us: 079 596 5491
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Installation Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Installation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Site Assessment</h3>
              <p className="text-gray-600">
                We evaluate your site to determine optimal placement of security equipment.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-6 h-6 text-red-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">System Design</h3>
              <p className="text-gray-600">
                We design a security system tailored to your specific requirements.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-6 h-6 text-red-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">
                Our technicians professionally install all components of your security system.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-6 h-6 text-red-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Configuration</h3>
              <p className="text-gray-600">
                We configure your system for optimal performance and reliability.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-6 h-6 text-red-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training</h3>
              <p className="text-gray-600">
                We provide comprehensive training on system operation and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Systems We Install Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security Systems We Install</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CCTV Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">HD and 4K cameras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Network video recorders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Remote viewing solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Video analytics</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Access Control</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Card & fob systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Biometric readers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Electric locks & strikes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Control panels</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alarm Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Intrusion detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Motion sensors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Door/window contacts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Monitoring solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">System integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Central management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Network infrastructure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Remote access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section *
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The KLS installation team was professional, efficient, and thorough. They took the time to explain the system and ensure everything was working perfectly before they left."
              </p>
              <p className="font-medium text-gray-900">— Residential Client, Johannesburg</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "We needed a complex access control system for our corporate headquarters. KLS did an outstanding job with the installation and provided excellent training for our staff."
              </p>
              <p className="font-medium text-gray-900">— Corporate Facilities Manager</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The installation of our CCTV system was completed on time and with minimal disruption to our operations. The quality of work was exceptional and the system performs flawlessly."
              </p>
              <p className="font-medium text-gray-900">— Retail Store Manager</p>
            </div>
          </div>
        </div>
      </section>/ */}
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Professional Security System Installation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to schedule a consultation and get a quote for your installation needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Request a Quote
              </Link>
              <Link href="/store" className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Browse Security Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalInstallationPage;