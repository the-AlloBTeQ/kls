"use client";
import React from 'react';
import { Lock, CheckCircle, Fingerprint, KeyRound, Clock, ChevronRight, Phone, Shield } from 'lucide-react';
import Link from 'next/link';

const AccessControlPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Lock className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              Access Control
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced access control systems for comprehensive security management across your facilities.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Control Who Enters Your Facility</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Our advanced access control systems give you complete authority over who enters your facilities and when. With KLS Security's solutions, you can restrict unauthorized access, monitor movement throughout your premises, and create detailed access logs for comprehensive security management.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                We provide customized access control solutions for businesses of all sizes, from single-door systems to enterprise-level installations across multiple sites. Our expertise ensures seamless integration with your existing security infrastructure, creating a unified security ecosystem that's both powerful and user-friendly.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS Access Control?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Customizable solutions tailored to your specific security requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Scalable systems that grow with your business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Integration with other security systems including CCTV and alarm systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Advanced reporting and audit capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Professional installation, maintenance, and technical support</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Access Control Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Fingerprint className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Biometric Systems</h4>
                    <p className="text-gray-600">Fingerprint, facial recognition, and other biometric technologies for high-security access</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <KeyRound className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Card Access</h4>
                    <p className="text-gray-600">RFID card, fob, and mobile credential solutions for convenient yet secure access</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ChevronRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Visitor Management</h4>
                    <p className="text-gray-600">Streamlined check-in procedures for visitors with temporary access credentials</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Time Attendance</h4>
                    <p className="text-gray-600">Combined access control and time tracking for workforce management</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/accesscontrols.PNG" 
                  alt="KLS Access Control System" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/800/500";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request an Access Control Solution</h3>
                <p className="text-gray-600 mb-6">
                  Our security experts can evaluate your facility and design a comprehensive access control system tailored to your specific needs.
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
      
      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Access Control Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Fingerprint className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Biometric Access</h3>
              </div>
              <p className="text-gray-600">
                Our biometric access control solutions use unique physical characteristics like fingerprints, facial features, or retinal patterns to verify identity. This technology offers the highest level of security by ensuring credentials cannot be lost, stolen, or shared.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <KeyRound className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Card & Fob Systems</h3>
              </div>
              <p className="text-gray-600">
                Traditional yet effective, our card and fob systems provide reliable access control using proximity cards, smart cards, or key fobs. These systems offer a good balance of security and convenience with manageable credential distribution.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <ChevronRight className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mobile Credentials</h3>
              </div>
              <p className="text-gray-600">
                Our mobile access solutions allow users to use their smartphones as access credentials. This technology eliminates the need for physical cards and allows for remote credential management and enhanced security features.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Multi-Factor Authentication</h3>
              </div>
              <p className="text-gray-600">
                For maximum security, our multi-factor authentication systems require two or more verification methods before granting access, such as a combination of something you have (card), something you know (PIN), and something you are (biometric).
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <ChevronRight className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cloud-Based Systems</h3>
              </div>
              <p className="text-gray-600">
                Our cloud-based access control solutions allow for centralized management from anywhere with internet access. These systems provide real-time monitoring, instant updates, and seamless scalability across multiple locations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Integrated Security</h3>
              </div>
              <p className="text-gray-600">
                Our integrated access control systems work seamlessly with your CCTV, alarm systems, and other security infrastructure to create a comprehensive security ecosystem with centralized management and monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Access Control Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <img 
                  src="/corporateaccess.png" 
                  alt="Corporate Access Control" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "";
                  }}
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Environments</h3>
                <p className="text-gray-600">
                  Protect sensitive areas, control employee access, and manage visitor traffic throughout corporate facilities. Our systems can handle multiple access levels, departments, and time-based restrictions to maintain security without hindering productivity.
                </p>
              </div>
            </div>
            
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <img 
                  src="/residential-access.png" 
                  alt="Residential Access Control" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/300/300";
                  }}
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Estates</h3>
                <p className="text-gray-600">
                  Enhance resident security with controlled entry points, visitor management, and domestic staff access schedules. Our residential solutions prioritize both security and convenience for residents and authorized visitors.
                </p>
              </div>
            </div>
            
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <img 
                  src="/industrial.png" 
                  alt="Industrial Access Control" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/300/300";
                  }}
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Sites</h3>
                <p className="text-gray-600">
                  Secure manufacturing facilities, warehouses, and industrial compounds with robust access control systems designed for high-traffic environments. Our solutions can integrate with safety systems and control access to hazardous areas.
                </p>
              </div>
            </div>
            
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <img 
                  src="/corporateaccess.png" 
                  alt="Healthcare Access Control" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/300/300";
                  }}
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Facilities</h3>
                <p className="text-gray-600">
                  Protect patients, staff, and sensitive medical areas with specialized healthcare access control. Our systems help maintain compliance with healthcare regulations while ensuring appropriate access to medication storage, patient areas, and restricted zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section 
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          
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
                "KLS Security's access control solution has transformed how we manage security at our corporate headquarters. The system is intuitive yet powerful, and their support team has been exceptional."
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
                "Since implementing KLS's biometric access system at our manufacturing facility, we've seen a significant improvement in security and operational efficiency. The integration with our existing systems was seamless."
              </p>
              <p className="font-medium text-gray-900">— Manufacturing Plant Director</p>
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
                "Our residential estate needed a sophisticated yet user-friendly access control system, and KLS delivered exactly that. Residents appreciate the convenience, and our security team values the enhanced control."
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
              Ready to Enhance Your Access Security?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your access control requirements and receive a customized security solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Get a Free Assessment
              </Link>
              <Link href="/store" className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Browse Access Control Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessControlPage;