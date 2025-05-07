"use client"
import React from 'react';
import { Shield, Clock, Phone, MapPin, Bell, Zap, Users, Target } from 'lucide-react';
import Link from 'next/link';

const ArmedResponsePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/50">
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                24/7 <span className="text-red-600">Armed Response</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Immediate assistance when you need it most. Our rapid response team is always ready to protect your property and loved ones.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Swift Response When Every Second Counts</h2>
              <p className="text-lg text-gray-600 mb-6">
                At KLS Security, we understand that when security is compromised, immediate action is essential. Our 24/7 armed response service offers:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Round-the-clock monitoring and rapid deployment of armed response officers</p>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Fast response times with strategically positioned patrol vehicles</p>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Highly trained, PSIRA-accredited armed response officers</p>
                </li>
                <li className="flex items-start">
                  <Bell className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Integration with your existing alarm and surveillance systems</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-8 h-8 text-red-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                    <p className="text-xl font-bold text-gray-900">079 596 5491</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-red-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500">Service Areas</p>
                    <p className="text-xl font-bold text-gray-900">Eastern Cape, Sarah Baartman, South Africa</p>
                  </div>
                </div>
                <div className="bg-red-600 text-white p-4 rounded-lg mt-6">
                  <p className="font-bold mb-2">In case of emergency:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Stay calm and find a safe location</li>
                    <li>Call our emergency line immediately</li>
                    <li>Provide your name and address</li>
                    <li>Our armed response team will be dispatched right away</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How Our Armed Response Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensuring your safety and security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alert Received</h3>
              <p className="text-gray-600">
                An alarm is triggered at your property or you call our emergency line directly. Our control room immediately registers the alert.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Dispatch</h3>
              <p className="text-gray-600">
                The nearest armed response vehicle is immediately dispatched to your location. Our strategic positioning ensures quick arrival times.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Response</h3>
              <p className="text-gray-600">
                Our trained officers assess the situation, secure the premises, and ensure your safety. If necessary, they coordinate with emergency services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose KLS Armed Response</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver security services that exceed expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">PSIRA Accredited</h3>
              <p className="text-gray-300">
                All our security personnel are registered with the Private Security Industry Regulatory Authority.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Highly Trained Team</h3>
              <p className="text-gray-300">
                Our officers undergo rigorous training and regular evaluations to maintain the highest standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-300">
                Round-the-clock monitoring and response, because emergencies don't operate on a schedule.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
              <p className="text-gray-300">
                Customized security solutions tailored to meet your specific needs and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Reliable Armed Response?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the many satisfied customers who trust KLS Security with their safety. Contact us today to learn more about our 24/7 armed response services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-red-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-red-700 transition-colors"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials 
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who trust KLS Security with their safety
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-red-600">JB</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">John Bezuidenhout</h4>
                  <p className="text-gray-600">Residential Client</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The KLS armed response team arrived at my home within minutes of the alarm being triggered. Their professionalism and quick action prevented what could have been a serious incident."
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-red-600">SM</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Mokoena</h4>
                  <p className="text-gray-600">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a business owner, security is paramount. The KLS team consistently demonstrates reliability and exceptional service. Their armed response service gives me peace of mind 24/7."
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-red-600">DP</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">David Patel</h4>
                  <p className="text-gray-600">Estate Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We've partnered with KLS Security for our estate's armed response needs for over three years. Their team is professional, thorough, and committed to maintaining the highest security standards."
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ArmedResponsePage;