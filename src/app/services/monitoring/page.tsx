"use client";
import React from 'react';
import { Monitor, CheckCircle, Clock, AlertCircle, FileText, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const RemoteMonitoringPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Monitor className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              Remote Monitoring
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              24/7 professional monitoring services with immediate security response dispatch.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Security Monitoring Around the Clock</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                KLS Security's Remote Monitoring service provides 24/7 professional surveillance of your security systems, ensuring rapid response to any security incidents. Our state-of-the-art monitoring center is staffed with trained security professionals who keep a constant watch over your property.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Whether you need monitoring for your CCTV cameras, alarm systems, access control, or a combination of security technologies, our comprehensive monitoring solution ensures that potential threats are identified and addressed immediately. With direct communication to emergency services and our mobile security teams, we're ready to respond at a moment's notice.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS Remote Monitoring?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>24/7/365 monitoring by certified security professionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Rapid response to security incidents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Integration with all major security system technologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Customizable monitoring protocols to suit your needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Detailed incident reporting and security analytics</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Remote Monitoring Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Monitor className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Control Room Operations</h4>
                    <p className="text-gray-600">Professional security monitoring from our state-of-the-art control center</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Alert Management</h4>
                    <p className="text-gray-600">Systematic handling of security alerts with appropriate response protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ChevronRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Dispatch Services</h4>
                    <p className="text-gray-600">Immediate deployment of security response teams when incidents are detected</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Incident Reporting</h4>
                    <p className="text-gray-600">Detailed documentation of security events and response activities</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/images/remote-monitoring.jpg" 
                  alt="KLS Remote Monitoring Center" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/800/500";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Remote Monitoring Services</h3>
                <p className="text-gray-600 mb-6">
                  Our security experts can help you determine the best monitoring solution for your security systems and specific requirements.
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Our Remote Monitoring Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">System Integration</h3>
              <p className="text-gray-600">
                We connect your security systems (CCTV, alarms, access control) to our monitoring center using secure communication channels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Our professional security operators continuously monitor feeds and alerts from your security systems at all times.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Incident Detection</h3>
              <p className="text-gray-600">
                When a security event is detected, our operators immediately verify the nature of the incident and assess the threat level.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response & Reporting</h3>
              <p className="text-gray-600">
                We execute predefined response protocols, dispatching security personnel if needed, and provide detailed incident reports.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Monitoring Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Monitoring Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CCTV Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Real-time surveillance of your camera feeds with advanced video analytics to detect suspicious activities, perimeter breaches, and unauthorized access.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Motion detection algorithms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Object recognition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Virtual perimeter protection</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alarm Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Continuous monitoring of intrusion detection systems, panic alarms, and fire detection equipment with instant notification and verification procedures.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Intrusion detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Emergency alarm response</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Environmental monitoring</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Access Control Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Oversight of access control systems to detect unauthorized access attempts, door-forced events, and suspicious entry patterns in real-time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Forced entry detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Credential misuse alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">After-hours access monitoring</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Monitoring of environmental sensors to detect flooding, temperature extremes, smoke, and other hazards that could threaten your property.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Water leak detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Temperature monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Smoke and fire alerts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patrol Check-Ins</h3>
              <p className="text-gray-600 mb-4">
                Monitoring of security guard patrol activities through electronic checkpoint systems to ensure complete coverage and officer safety.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Guard tour verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Missed checkpoint alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Officer safety monitoring</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remote System Management</h3>
              <p className="text-gray-600 mb-4">
                Remote administration of security systems including diagnostics, troubleshooting, and system updates to ensure continuous operation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">System health monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Equipment failure detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Remote troubleshooting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials 
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
                "KLS Security's remote monitoring service has transformed how we approach security. Their quick response to incidents and professional team has significantly improved our overall security posture."
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
                "Having KLS monitor our retail locations after hours has given us peace of mind. Their team has prevented several break-in attempts with their rapid response and coordination with local authorities."
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
                "The detailed incident reports and security analytics provided by KLS's monitoring service have helped us identify and address security vulnerabilities we weren't even aware of."
              </p>
              <p className="font-medium text-gray-900">— Logistics Facility Manager</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Enhance Your Security with 24/7 Monitoring?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your remote monitoring requirements and receive a customized security solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Get a Free Assessment
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

export default RemoteMonitoringPage;