"use client";
import React from 'react';
import { Bell, CheckCircle, Shield, Smartphone, AlertTriangle, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const AlarmSystemsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Bell className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              Alarm Systems
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              State-of-the-art alarm systems with immediate response protocols and smartphone integration.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Alarm Solutions for Complete Protection</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                KLS Security provides cutting-edge alarm systems designed to detect and deter security threats while providing immediate notification and response. Our alarm solutions combine the latest technology with professional monitoring to ensure your property remains secure around the clock.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Whether you need protection for a residential property, commercial facility, or industrial site, our alarm systems are tailored to your specific needs and integrated with comprehensive security protocols. With smartphone integration, you can monitor and control your security system from anywhere.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS Alarm Systems?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Advanced detection technology for minimal false alarms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Professional installation and system configuration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>24/7 professional monitoring with rapid response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Seamless integration with other security systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Mobile app control and notifications</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Alarm System Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Intrusion Detection</h4>
                    <p className="text-gray-600">Comprehensive perimeter and interior protection against unauthorized entry</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Bell className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Panic Buttons</h4>
                    <p className="text-gray-600">Emergency alert systems for immediate response during security threats</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Fire Detection</h4>
                    <p className="text-gray-600">Advanced fire alarm systems integrated with your security solution</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Smartphone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Mobile Alerts</h4>
                    <p className="text-gray-600">Real-time smartphone notifications and remote system control</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="../../../assets/services/miningsecurity.jpg" 
                  alt="KLS Alarm System" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "../../../assets/services/miningsecurity.jpg";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request an Alarm System Solution</h3>
                <p className="text-gray-600 mb-6">
                  Our security experts can evaluate your property and design a comprehensive alarm system tailored to your specific needs.
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
      
      {/* System Components Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Alarm System Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Control Panels</h3>
              </div>
              <p className="text-gray-600">
                The brain of your alarm system, our advanced control panels manage all system components and communicate with the monitoring center. User-friendly interfaces make system management simple and intuitive.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Motion Sensors</h3>
              </div>
              <p className="text-gray-600">
                Our state-of-the-art motion detectors use passive infrared and microwave technology to detect unauthorized movement while minimizing false alarms from pets and environmental factors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <ChevronRight className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Door/Window Sensors</h3>
              </div>
              <p className="text-gray-600">
                Magnetic contact sensors that instantly detect when doors or windows are opened. These reliable sensors form the first line of defense against unauthorized entry attempts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Bell className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sirens & Strobes</h3>
              </div>
              <p className="text-gray-600">
                High-decibel sirens and bright strobe lights that activate during security breaches, deterring intruders and alerting occupants and neighbors to potential threats.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Smartphone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mobile Application</h3>
              </div>
              <p className="text-gray-600">
                Our user-friendly mobile app puts control of your security system at your fingertips. Arm or disarm your system remotely, receive real-time alerts, and monitor activity from anywhere.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Glass Break Detectors</h3>
              </div>
              <p className="text-gray-600">
                Specialized acoustic sensors that recognize the unique sound frequency of breaking glass, providing an additional layer of security for windows and glass doors.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Alarm System Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <img 
                  src="/images/residential-alarm.jpg" 
                  alt="Residential Alarm System" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/";
                  }}
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Security</h3>
                <p className="text-gray-600">
                  Protect your home and family with customized alarm systems that monitor for intrusion, fire, and other hazards. Our residential solutions offer peace of mind whether you're home or away.
                </p>
              </div>
            </div>
            
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <img 
                  src="/images/commercial-alarm.jpg" 
                  alt="Commercial Alarm System" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/a";
                  }}
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Properties</h3>
                <p className="text-gray-600">
                  Comprehensive alarm solutions for retail stores, offices, and commercial facilities. Our systems protect against theft, vandalism, and unauthorized access while monitoring for environmental hazards.
                </p>
              </div>
            </div>
            
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <img 
                  src="/images/industrial-alarm.jpg" 
                  alt="Industrial Alarm System" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/";
                  }}
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Facilities</h3>
                <p className="text-gray-600">
                  Robust alarm systems designed for warehouses, manufacturing plants, and industrial sites. Our industrial solutions incorporate zoned protection and integration with other safety systems.
                </p>
              </div>
            </div>
            
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <img 
                  src="/images/remote-alarm.jpg" 
                  alt="Remote Site Alarm System" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/";
                  }}
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Sites</h3>
                <p className="text-gray-600">
                  Specialized alarm solutions for remote and unattended locations. Our systems utilize cellular and satellite communication to ensure continuous monitoring even in isolated areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Monitoring Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Monitoring Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Professional Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Our professional monitoring center provides round-the-clock surveillance of your alarm system. When an alarm is triggered, our trained operators immediately assess the situation and dispatch appropriate emergency services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Continuous monitoring 365 days a year</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Rapid emergency dispatch</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Verification protocols to reduce false alarms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Take control of your security with our self-monitoring option. Receive real-time alerts directly to your smartphone and decide when to contact authorities or respond to situations yourself.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Instant mobile notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Live camera feeds on demand</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Complete system control from anywhere</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hybrid Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Get the best of both worlds with our hybrid monitoring solution. Combine professional monitoring for critical events with self-monitoring capabilities for everyday awareness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Professional response for high-priority alarms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Self-monitoring for non-emergency events</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Customizable notification settings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section 
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "KLS Security installed an integrated alarm system for our home that gives us complete peace of mind. The mobile app is incredibly user-friendly, and their response time when we had an incident was impressive."
              </p>
              <p className="font-medium text-gray-900">— Residential Client, Johannesburg</p>
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
                "As a retail business with multiple locations, we needed a reliable alarm system that could be managed centrally. KLS delivered exactly what we needed, and their ongoing support has been excellent."
              </p>
              <p className="font-medium text-gray-900">— Retail Chain Manager</p>
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
                "Our warehouse facility required a sophisticated alarm system integrated with access control. KLS designed a comprehensive solution that has dramatically improved our security posture."
              </p>
              <p className="font-medium text-gray-900">— Logistics Company Security Director</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Enhance Your Security with Advanced Alarm Systems?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your alarm system requirements and receive a customized security solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Get a Free Assessment
              </Link>
              <Link href="/store" className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Browse Alarm Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlarmSystemsPage;