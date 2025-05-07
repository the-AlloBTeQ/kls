"use client";
import React from 'react';
import { Building2, CheckCircle, Shield, Lock, UserCheck, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const MiningSecurityPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Building2 className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              Mining Security
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions tailored for mining operations, protecting valuable assets and personnel.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Security for Mining Operations</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                KLS Security provides comprehensive security solutions specifically designed for the unique challenges of mining operations. We understand the complex security requirements of the mining industry, from protecting valuable minerals and equipment to ensuring personnel safety in hazardous environments.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Our mining security services encompass every aspect of site protection, from perimeter security and access control to asset protection and employee screening. We work closely with mining operations to develop tailored security protocols that address specific risks and vulnerabilities while complying with industry regulations.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS Mining Security?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Specialized experience in securing mining operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Comprehensive risk assessments tailored to the mining industry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Integration of physical security and advanced technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>24/7 security monitoring and rapid response capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Compliance with mining industry regulations and standards</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mining Security Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Access Control</h4>
                    <p className="text-gray-600">Advanced access control systems to monitor and restrict entry to sensitive areas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Perimeter Security</h4>
                    <p className="text-gray-600">Comprehensive perimeter protection including fencing, surveillance, and patrol services</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ChevronRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Asset Protection</h4>
                    <p className="text-gray-600">Specialized security for valuable minerals, equipment, and infrastructure</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <UserCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Employee Screening</h4>
                    <p className="text-gray-600">Background checks and ongoing security screening for workforce integrity</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/miningsecurity.jpg" 
                  alt="KLS Mining Security" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/800/500";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Mining Security Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Our security experts can evaluate your mining operation and develop a comprehensive security strategy tailored to your specific needs.
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
      
      {/* Security Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Mining Security Challenges We Address</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Theft Prevention</h3>
              <p className="text-gray-600">
                Mining operations are vulnerable to theft of valuable minerals, metals, and equipment. Our multi-layered security approach combines physical barriers, surveillance, and personnel protocols to deter and detect theft attempts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unauthorized Access</h3>
              <p className="text-gray-600">
                Mining sites cover large areas with multiple entry points, making them susceptible to unauthorized access. We implement comprehensive access control measures to ensure only authorized personnel can enter restricted areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Workplace Violence</h3>
              <p className="text-gray-600">
                The mining industry can experience conflicts related to labor disputes or community relations. Our security teams are trained to handle potential workplace violence situations with appropriate de-escalation techniques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Illegal Mining</h3>
              <p className="text-gray-600">
                Unauthorized mining activities can compromise site integrity and pose significant safety risks. Our security measures help detect and prevent illegal mining operations within your concession areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Equipment Security</h3>
              <p className="text-gray-600">
                Mining equipment represents substantial capital investment and is vulnerable to theft and sabotage. We implement specialized security measures to protect valuable machinery and vehicles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Response</h3>
              <p className="text-gray-600">
                Mining operations face unique emergency situations requiring specialized response protocols. Our security teams are trained in mining-specific emergency procedures and integrated with safety systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Mining Security Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Risk Assessment & Strategy</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Comprehensive Site Evaluation</p>
                    <p className="text-gray-600">We perform detailed assessments of mining operations to identify vulnerabilities and security gaps.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Threat Modeling</p>
                    <p className="text-gray-600">Analysis of potential security threats specific to your mining operation and location.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Custom Security Planning</p>
                    <p className="text-gray-600">Development of tailored security strategies addressing identified risks and compliance requirements.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation & Oversight</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Integrated Security Systems</p>
                    <p className="text-gray-600">Installation and management of access control, surveillance, and alarm systems specifically designed for mining environments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Specialized Personnel</p>
                    <p className="text-gray-600">Deployment of security officers with mining industry experience and appropriate training.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ongoing Monitoring</p>
                    <p className="text-gray-600">Continuous security oversight with regular assessments and procedure updates.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Eastern Cape Mining Operation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-600 mb-4">
                  A large-scale mining operation in the Eastern Cape was experiencing significant security challenges, including theft of precious minerals and unauthorized access to restricted areas. After implementing KLS Security's comprehensive mining security solution, they saw:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-600">75% reduction in security incidents within the first six months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-600">90% decrease in unauthorized site access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-600">Significant decline in inventory losses due to theft</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-600">Improved employee compliance with security protocols</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic">
                  "KLS Security transformed our approach to mining security. Their specialized knowledge of the industry and tailored solutions have made a significant impact on our operations."
                </p>
                <p className="font-medium text-gray-900 mt-2">— Operations Director, Eastern Cape Mining Company</p>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/images/mining-case-study.jpg" 
                  alt="Mining Security Case Study" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/400/300";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Your Mining Operation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your mining security requirements and receive a comprehensive security assessment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Request a Security Assessment
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

export default MiningSecurityPage;