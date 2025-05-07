"use client";
import React from 'react';
import { BrainCircuit, CheckCircle, FileText, Target, FlaskConical, ChevronRight, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const SecurityConsultingPage = () => {
  // Consulting services details
  const consultingServices = [
    {
      title: "Security Risk Assessment",
      icon: <Target className="w-12 h-12 text-red-600" />,
      description: "Comprehensive evaluation of security vulnerabilities, threats, and risks to your organization, assets, and personnel.",
      benefits: [
        "Identify security gaps and vulnerabilities",
        "Quantify potential risks",
        "Prioritize security enhancements",
        "Comply with industry regulations"
      ]
    },
    {
      title: "Security System Design",
      icon: <BrainCircuit className="w-12 h-12 text-red-600" />,
      description: "Expert planning and design of integrated security systems tailored to your specific requirements and risk profile.",
      benefits: [
        "Customized security solutions",
        "Integration of multiple security technologies",
        "Future-proof system architecture",
        "Optimized security investment"
      ]
    },
    {
      title: "Security Policy Development",
      icon: <FileText className="w-12 h-12 text-red-600" />,
      description: "Creation of comprehensive security policies, procedures, and protocols aligned with your organizational needs.",
      benefits: [
        "Clear security guidelines and procedures",
        "Standardized response protocols",
        "Regulatory compliance documentation",
        "Enhanced organizational security culture"
      ]
    },
    {
      title: "Security Testing & Evaluation",
      icon: <FlaskConical className="w-12 h-12 text-red-600" />,
      description: "Rigorous testing of existing security measures to identify weaknesses and validate effectiveness.",
      benefits: [
        "Verification of security system performance",
        "Identification of security gaps",
        "Response protocol validation",
        "Evidence-based security improvements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <BrainCircuit className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              Security Consulting
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guidance to develop, implement, and optimize your security strategy.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Security Expertise for Your Organization</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                KLS Security's consulting services provide expert guidance to help you develop, implement, and optimize a comprehensive security strategy. Our experienced consultants bring deep industry knowledge and best practices to address your unique security challenges.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Whether you need to assess your current security posture, design new security systems, develop security policies, or evaluate the effectiveness of existing measures, our consultants deliver actionable insights and recommendations tailored to your specific needs.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS Security Consulting?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Experienced security professionals with industry-specific expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Tailored recommendations based on your specific security needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Comprehensive approach addressing physical and technological security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Practical, implementable solutions with clear ROI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Ongoing support through implementation and beyond</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Consulting Process</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <span className="text-xl font-bold text-red-600">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Discovery & Analysis</h4>
                    <p className="text-gray-600">We begin by understanding your organization, its specific security challenges, and your objectives through detailed interviews and site visits.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <span className="text-xl font-bold text-red-600">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Risk Assessment</h4>
                    <p className="text-gray-600">We conduct a thorough evaluation of your current security posture, identifying vulnerabilities, threats, and existing controls.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <span className="text-xl font-bold text-red-600">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Strategy Development</h4>
                    <p className="text-gray-600">Based on our findings, we develop a comprehensive security strategy with prioritized recommendations for improvement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <span className="text-xl font-bold text-red-600">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Implementation Support</h4>
                    <p className="text-gray-600">We provide guidance and oversight during the implementation phase, ensuring security solutions are properly deployed.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <span className="text-xl font-bold text-red-600">5</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Evaluation & Refinement</h4>
                    <p className="text-gray-600">We conduct follow-up assessments to evaluate effectiveness and refine security measures as needed.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/images/security-consulting.jpg" 
                  alt="KLS Security Consulting" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Security Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Our security experts can help you identify vulnerabilities and develop a comprehensive security strategy tailored to your specific needs.
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
      
      {/* Consulting Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Consulting Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries We Serve Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate & Commercial</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Office buildings & corporate headquarters</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Retail establishments</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Shopping centers & malls</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Hotels & hospitality</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial & Mining</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Mining operations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Manufacturing facilities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Warehouses & logistics centers</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Construction sites</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residential & Community</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Residential estates</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Apartment complexes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Gated communities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Homeowners' associations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Healthcare</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Schools & universities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Hospitals & medical facilities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Research institutions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Laboratories</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Government & Public Sector</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Municipal buildings</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Public facilities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Critical infrastructure</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Transportation facilities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Events & Entertainment</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Stadiums & arenas</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Conference centers</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Concert venues</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Special events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section 
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Corporate Headquarters Security Overhaul</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A multinational corporation needed to enhance security at their Johannesburg headquarters. Our consultants conducted a comprehensive security assessment, identifying multiple vulnerabilities in access control, surveillance, and procedural security.
              </p>
              <p className="text-gray-600 mb-4">
                We developed and implemented a tailored security plan that included upgraded access control systems, enhanced CCTV coverage, and revised security protocols. The result was a 70% reduction in security incidents and significant improvements in employee safety perception.
              </p>
              <p className="italic text-gray-700">
                "KLS Security's consulting team transformed our security operations. Their thorough assessment and strategic recommendations have significantly enhanced our security posture."
              </p>
              <p className="font-medium text-gray-900 mt-2">— Corporate Security Director</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Residential Estate Security Integration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A large residential estate faced challenges with disparate security systems and inconsistent security measures. Our consulting team developed a comprehensive security master plan that integrated access control, perimeter security, and surveillance systems.
              </p>
              <p className="text-gray-600 mb-4">
                We helped implement standardized security procedures and technologies across the estate, resulting in a unified security approach. This integration improved response times by 40% and significantly enhanced resident satisfaction with security services.
              </p>
              <p className="italic text-gray-700">
                "The KLS consulting team provided invaluable expertise in transforming our fragmented security approach into a cohesive, effective system. Our residents now have greater peace of mind."
              </p>
              <p className="font-medium text-gray-900 mt-2">— Residential Estate Manager</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Expert Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Security Consulting Experts</h2>
          
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Our consulting team brings together decades of experience in security operations, risk management, and security technology. With backgrounds in law enforcement, military, corporate security, and specialized security disciplines, our consultants offer unparalleled expertise to address your security challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <BrainCircuit className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Expertise</h3>
              <p className="text-gray-600 text-center">
                Our consultants provide strategic guidance based on years of experience in security leadership roles.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry-Specific Knowledge</h3>
              <p className="text-gray-600 text-center">
                We understand the unique security challenges of different industries and environments.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FlaskConical className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Proficiency</h3>
              <p className="text-gray-600 text-center">
                Our team maintains expertise in the latest security technologies and methodologies.
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
              Ready to Enhance Your Security Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our consulting team to discuss your security challenges and discover how we can help strengthen your security posture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Schedule a Consultation
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

export default SecurityConsultingPage;