"use client";
import React from 'react';
import { Dog, CheckCircle, Target, Search, Shield, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const K9SecurityPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Dog className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
              K9 Security Units
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized K9 units providing enhanced security capabilities for patrol, detection, and deterrence.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enhanced Security with Specialized K9 Units</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Our specialized K9 units provide enhanced security capabilities for patrol, detection, and deterrence. These highly trained canine teams are specially selected and trained to excel in security operations, offering unmatched detection capabilities that complement our human security personnel.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                The acute senses of our security dogs, combined with their advanced training and the expertise of our handlers, create a formidable security solution. Whether you need explosive detection, narcotics detection, or general patrol support, our K9 units deliver exceptional results across a variety of security situations.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The KLS K9 Advantage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Specialized detection capabilities that technology cannot match</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Powerful visual deterrent that discourages security threats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Faster response and detection compared to conventional methods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Ability to detect threats in complex environments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1" />
                    <span>Professionally trained handlers with extensive experience</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our K9 Security Services Include:</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Patrol Support</h4>
                    <p className="text-gray-600">K9 units that enhance regular security patrols with superior detection and response capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Explosive Detection</h4>
                    <p className="text-gray-600">Specialized K9s trained to detect a wide range of explosive materials and devices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Search className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Narcotics Detection</h4>
                    <p className="text-gray-600">K9 teams specifically trained to identify and locate illegal substances and drugs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <ChevronRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Handler Training</h4>
                    <p className="text-gray-600">Professional development for security personnel working with K9 units</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & CTA */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img 
                  src="/doghandling.jpg" 
                  alt="KLS K9 Security Unit" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/800x600";
                  }}
                />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request K9 Security Services</h3>
                <p className="text-gray-600 mb-6">
                  Our security experts can evaluate your facility's needs and determine how our K9 units can enhance your existing security measures.
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
      
      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">K9 Security Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Security</h3>
              <p className="text-gray-600 mb-4">
                Our K9 units are ideal for securing large events, providing both visible security presence and specialized detection capabilities in crowded environments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Facilities</h3>
              <p className="text-gray-600 mb-4">
                Enhance the security of corporate headquarters and office buildings with K9 patrols that provide superior threat detection and deterrence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Institutions</h3>
              <p className="text-gray-600 mb-4">
                Specialized K9 teams can help secure school campuses and university grounds with detection capabilities and a visible security presence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial Sites</h3>
              <p className="text-gray-600 mb-4">
                K9 units are particularly effective at securing large industrial compounds and manufacturing facilities where conventional security may be challenged.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retail Security</h3>
              <p className="text-gray-600 mb-4">
                Our K9 teams help secure retail environments by deterring criminal activity and providing specialized detection of threats and contraband.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residential Estates</h3>
              <p className="text-gray-600 mb-4">
                Enhance residential estate security with K9 patrols that provide superior perimeter protection and response capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section 
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The addition of KLS K9 units to our warehouse security has significantly reduced incidents. Their dogs and handlers are incredibly professional and effective."
              </p>
              <p className="font-medium text-gray-900">— Logistics Company Security Manager</p>
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
                "We contracted KLS K9 units for our annual corporate event and were impressed with both their security effectiveness and how seamlessly they integrated with our event staff."
              </p>
              <p className="font-medium text-gray-900">— Corporate Event Director</p>
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
                "The explosive detection capabilities of KLS's K9 teams have added an essential layer of security to our transit facility that technology alone couldn't provide."
              </p>
              <p className="font-medium text-gray-900">— Transit Authority Security Director</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Enhance Your Security with K9 Units?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss how our specialized K9 security services can strengthen your security measures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md">
                Get a Free Consultation
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

export default K9SecurityPage;