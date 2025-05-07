"use client";
import React from 'react';
import { Users, CheckCircle, Shield, Target, AlertCircle, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const CloseProtectionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Users className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              Close Protection
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              VIP protection services for high-profile individuals, executives, and diplomats, ensuring personal security in any environment.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Elite Protection for VIPs and Executives</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Our close protection service provides specialized security for high-profile individuals, executives, and diplomatic personnel requiring enhanced security. Our elite protection officers are trained in advanced security protocols, risk assessment, and threat management to ensure your complete safety in any environment.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                We understand the unique security challenges faced by prominent individuals. Our discrete protection teams balance visibility with effectiveness, ensuring your safety without disrupting your daily activities. Whether you require protection for a single event or ongoing security, our team delivers personalized solutions.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS Close Protection?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Highly trained protection specialists with military and law enforcement backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Comprehensive threat and risk assessment for each assignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Discrete service that maintains your privacy and normal routine</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Advanced planning and route management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Immediate response to potential security threats</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Close Protection Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Risk Assessment</h4>
                    <p className="text-gray-600">Comprehensive evaluation of potential security threats and vulnerabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Executive Protection</h4>
                    <p className="text-gray-600">Specialized security for corporate executives and business leaders</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Travel Security</h4>
                    <p className="text-gray-600">Comprehensive protection during domestic and international travel</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ChevronRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Threat Management</h4>
                    <p className="text-gray-600">Strategic planning and response to identified security threats</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/images/close-protection.jpg" 
                  alt="KLS Close Protection Officer" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Close Protection Services</h3>
                <p className="text-gray-600 mb-6">
                  Our security experts can perform a confidential threat assessment and design a personalized protection plan for you or your executives.
                </p>
                <div className="space-y-4">
                  <Link href="/contact" className="block w-full bg-red-600 text-white text-center py-3 px-4 rounded-md hover:bg-red-700 transition-colors">
                    Request a Consultation
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
      
      {/* Services Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Close Protection Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                We conduct a thorough security assessment to understand your specific needs, potential threats, and protection requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protection Planning</h3>
              <p className="text-gray-600">
                Our security experts develop a detailed protection strategy, including route planning, residential security, and travel logistics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment & Monitoring</h3>
              <p className="text-gray-600">
                We assign the most appropriate protection specialists to your detail and maintain constant security monitoring throughout the assignment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section 
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "KLS Security provided exceptional close protection during my recent business travels. Their team was professional, discrete, and made me feel completely secure throughout my trip."
              </p>
              <p className="font-medium text-gray-900">— International Business Executive</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "When our diplomatic delegation required additional security, KLS delivered a seamless protection solution. Their attention to detail and professionalism was outstanding."
              </p>
              <p className="font-medium text-gray-900">— Diplomatic Security Coordinator</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Specialized Protection Services?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your close protection requirements with complete confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Request a Consultation
              </Link>
              <a href="tel:0795965491" className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Call Us: 079 596 5491
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloseProtectionPage;