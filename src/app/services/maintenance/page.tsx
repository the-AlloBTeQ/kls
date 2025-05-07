"use client";
import React, { useState } from 'react';
import { Wrench, CheckCircle, ClipboardCheck, Clock, Zap, ShieldCheck, ChevronRight, Phone, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define the Plan type for better type safety
interface Plan {
  name: string;
  price: string;
  period: string;
  featured?: boolean;
  features: string[];
  notIncluded: string[];
}

const MaintenancePlansPage = () => {
  const router = useRouter();

  // Plan details for comparison table
  const plans: Plan[] = [
    {
      name: "Basic",
      price: "R250",
      period: "per month",
      features: [
        "Annual system inspection",
        "Basic system testing",
        "Phone support during business hours",
        "System health report",
        "10% discount on repairs",
      ],
      notIncluded: [
        "Priority response",
        "Quarterly inspections",
        "Parts replacement coverage",
        "Remote system monitoring",
        "24/7 emergency support"
      ]
    },
    {
      name: "Standard",
      price: "R349.99",
      period: "per month",
      featured: true,
      features: [
        "Bi-annual system inspection",
        "Comprehensive system testing",
        "Extended phone support",
        "Detailed system health report",
        "15% discount on repairs",
        "Priority response",
        "Remote system checks",
        "Basic parts replacement",
      ],
      notIncluded: [
        "Quarterly inspections",
        "Full parts replacement coverage",
        "24/7 emergency support"
      ]
    },
    {
      name: "Premium",
      price: "R549.99",
      period: "per month",
      features: [
        "Quarterly system inspection",
        "Advanced system testing & optimization",
        "24/7 phone support",
        "Comprehensive system health report",
        "25% discount on repairs",
        "Priority emergency response",
        "Proactive remote monitoring",
        "Parts replacement coverage",
        "Software updates",
        "Annual security assessment"
      ],
      notIncluded: []
    }
  ];

  // Function to handle plan selection and navigate to checkout
  const handleSelectPlan = (plan: Plan) => {
    // Encode plan data for URL parameters
    const planData = encodeURIComponent(JSON.stringify({
      plan: plan.name,
      price: plan.price
    }));
    
    // Navigate to checkout with plan data
    router.push(`/checkout?planName=${plan.name}&planPrice=${plan.price}`);
  };

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
              Maintenance Plans
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your security investment with our comprehensive maintenance and support plans.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ensuring Your Security Systems Are Always Ready</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Security systems require regular maintenance to ensure optimal performance and reliability. KLS Security's maintenance plans provide the proactive care your security systems need to function flawlessly when it matters most.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Our maintenance plans include regular inspections, preventative maintenance, software updates, and rapid response support to minimize downtime and extend the lifespan of your security equipment.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose KLS Maintenance Plans?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Proactive maintenance prevents system failures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Priority response for service calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Regular system optimization and updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Reduced risk of security vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Extended equipment lifespan and reliable operation</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Maintenance Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ClipboardCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Regular Inspections</h4>
                    <p className="text-gray-600">Scheduled system checkups to identify and address potential issues before they become problems</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Preventative Maintenance</h4>
                    <p className="text-gray-600">Proactive servicing of equipment to ensure optimal performance and extend system lifespan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ShieldCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">System Updates</h4>
                    <p className="text-gray-600">Regular software and firmware updates to maintain security and add new features</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Rapid Response Support</h4>
                    <p className="text-gray-600">Priority technical support and swift on-site service when issues arise</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/accesscontrols.png" 
                  alt="KLS Security Maintenance" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep Your Security Systems Performing at Their Best</h3>
                <p className="text-gray-600 mb-6">
                  Our maintenance plans are designed to ensure your security systems remain operational, up-to-date, and reliable at all times.
                </p>
                <div className="space-y-4">
                  <Link href="/contact" className="block w-full bg-red-600 text-white text-center py-3 px-4 rounded-md hover:bg-red-700 transition-colors">
                    Request a Maintenance Plan
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
      
      {/* Plans Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Maintenance Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-sm overflow-hidden border ${
                  plan.featured ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                {plan.featured && (
                  <div className="bg-red-600 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name} Plan</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-900 mb-2">Not Included:</h4>
                      <ul className="space-y-2 mb-6">
                        {plan.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <X className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  <button 
                    onClick={() => handleSelectPlan(plan)}
                    className={`block w-full text-center py-3 px-4 rounded-md transition-colors ${
                      plan.featured 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'border-2 border-red-600 text-red-600 hover:bg-red-50'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-8">
            Not sure which plan is right for you? Contact us for a personalized recommendation.
          </p>
        </div>
      </section>
      
    
      {/* Maintenance Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Maintenance Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                We perform a thorough evaluation of your security systems to establish a baseline.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-red-600" />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scheduled Maintenance</h3>
              <p className="text-gray-600">
                Regular maintenance visits according to your selected plan frequency.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-red-600" />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">System Optimization</h3>
              <p className="text-gray-600">
                We optimize your systems for peak performance and implement updates as needed.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-red-600" />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reporting & Recommendations</h3>
              <p className="text-gray-600">
                Detailed reports on system health with recommendations for improvements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Systems We Maintain Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security Systems We Maintain</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CCTV Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Camera cleaning & alignment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">DVR/NVR health checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Storage optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Firmware updates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Access Control</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Door hardware inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Reader maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Controller diagnostics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Software updates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alarm Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Sensor testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Battery replacement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Communication testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Panel maintenance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Integration testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">System synchronization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Network diagnostics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Software updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section 
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          
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
                "The maintenance plan from KLS Security has been invaluable. Their regular inspections have identified and resolved issues before they could impact our security posture."
              </p>
              <p className="font-medium text-gray-900">— Corporate Security Manager</p>
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
                "We upgraded to the Premium maintenance plan after experiencing how quickly KLS responds to issues. The quarterly inspections and 24/7 support give us complete peace of mind."
              </p>
              <p className="font-medium text-gray-900">— Residential Estate Manager</p>
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
                "The detailed reports we receive after each maintenance visit help us understand our security systems better and plan for future improvements. Excellent service."
              </p>
              <p className="font-medium text-gray-900">— Retail Chain Operations Director</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Protect Your Security Investment?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Choose a maintenance plan that keeps your security systems operating at peak performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Get Started Today
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

export default MaintenancePlansPage;