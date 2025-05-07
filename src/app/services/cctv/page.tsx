"use client";
import React from 'react';
import { Camera, CheckCircle, Eye, VideoIcon, BarChart, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const CCTVMonitoringPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Camera className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              CCTV Monitoring
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              24/7 surveillance monitoring with rapid response integration and advanced analytics capabilities.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Surveillance Solutions for Complete Security</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Our CCTV monitoring service provides round-the-clock surveillance with rapid response capabilities and advanced video analytics. We combine state-of-the-art technology with professional monitoring to ensure your property is constantly protected against security threats.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                With KLS Security's CCTV monitoring, you benefit from both the deterrent effect of visible surveillance and the peace of mind that comes from knowing trained professionals are monitoring your premises. Our integrated approach combines monitoring with immediate response protocols to address security incidents as they occur.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS CCTV Monitoring?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>24/7 professional monitoring by trained security specialists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Advanced video analytics for proactive threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Immediate response protocols for detected security incidents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Secure footage storage and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Regular system health checks and maintenance</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our CCTV Monitoring Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Eye className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Real-time Monitoring</h4>
                    <p className="text-gray-600">Continuous surveillance of your property by trained security professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <BarChart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Video Analytics</h4>
                    <p className="text-gray-600">Advanced AI-powered analytics for motion detection, object recognition, and behavioral analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <VideoIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Incident Recording</h4>
                    <p className="text-gray-600">Secure storage of footage with easy retrieval for incident investigation and evidence</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ChevronRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Remote Access</h4>
                    <p className="text-gray-600">Secure client portal for authorized personnel to view cameras and footage</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/miningsecurity.jpg" 
                  alt="KLS CCTV Monitoring Center" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/800/500";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request CCTV Monitoring</h3>
                <p className="text-gray-600 mb-6">
                  Our security experts can evaluate your property and design a comprehensive CCTV monitoring solution tailored to your needs.
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
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Our CCTV Monitoring Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">
                We install high-quality CCTV cameras and monitoring equipment throughout your property.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Connection</h3>
              <p className="text-gray-600">
                Your system is connected to our central monitoring station using secure communication channels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600">
                Professional security operators monitor your property 24/7, looking for potential security incidents.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response</h3>
              <p className="text-gray-600">
                When incidents are detected, our team follows established protocols to respond quickly and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Advanced Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advanced CCTV Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Motion Detection</h3>
              <p className="text-gray-600">
                Automated alerts when movement is detected in monitored areas, reducing the need for constant manual observation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Facial Recognition</h3>
              <p className="text-gray-600">
                Advanced AI-based facial recognition to identify known individuals and alert security personnel to unauthorized persons.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">License Plate Recognition</h3>
              <p className="text-gray-600">
                Automated identification of vehicle license plates for access control and security monitoring.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Object Detection</h3>
              <p className="text-gray-600">
                Intelligent identification of objects like bags, weapons, or vehicles, with customizable alert triggers.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perimeter Breach Detection</h3>
              <p className="text-gray-600">
                Virtual perimeter lines that trigger alerts when crossed, creating an invisible security boundary.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Viewing</h3>
              <p className="text-gray-600">
                Secure access to live and recorded footage from anywhere via mobile devices or computers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section 
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "KLS Security's CCTV monitoring service has transformed how we approach security at our retail locations. Their quick response to incidents has significantly reduced losses."
              </p>
              <p className="font-medium text-gray-900">— Retail Chain Operations Manager</p>
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
                "The advanced analytics capabilities of KLS's CCTV system have given us insights we never had before. We're now able to prevent incidents rather than just respond to them."
              </p>
              <p className="font-medium text-gray-900">— Corporate Security Director</p>
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
                "Having KLS monitor our CCTV system has given us peace of mind that our property is protected 24/7. Their professional team has been exceptional in every way."
              </p>
              <p className="font-medium text-gray-900">— Residential Estate Manager</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Enhance Your Surveillance Security?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your CCTV monitoring requirements and receive a customized security solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Get a Free Quote
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

export default CCTVMonitoringPage;