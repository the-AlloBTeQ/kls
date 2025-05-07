import React from 'react';
import { Shield, Users, Target, Award, MapPin, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              About KLS Security
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              A PSIRA accredited, black-owned security company committed to excellence and innovation in security services across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-red-100 p-8 rounded-lg transform transition-all duration-500 hover:shadow-lg animate-[fadeIn_1s_ease-in] motion-safe:animate-[slideUp_1s_ease-out]">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600">
            To be recognized and respected as the security service provider of choice – for both our customers and employees, setting new standards in professional security services across South Africa.
          </p>
        </div>
        <div className="bg-red-100 p-8 rounded-lg transform transition-all duration-500 hover:shadow-lg animate-[fadeIn_1s_ease-in] motion-safe:animate-[slideUp_1s_ease-out_0.3s]">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            To deliver superior service in all aspects of our business, becoming an indispensable partner to our customers through cutting-edge technology implementation and exceptional service delivery.
          </p>
        </div>
          </div>
        </div>
      </section>

      {/* National Presence */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our National Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Guarding</h3>
              <p className="text-gray-600">
                Primary operations in Eastern Cape with capability to deploy nationwide. Expert security personnel available across all provinces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Close Protection</h3>
              <p className="text-gray-600">
                Nationwide VIP protection services available 24/7, ensuring client safety anywhere in South Africa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Surveillance Solutions</h3>
              <p className="text-gray-600">
                Comprehensive surveillance services and equipment sales with nationwide installation options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Coverage</h3>
              <p className="text-gray-600">
                Strategic presence across South Africa, with rapid response capabilities in key regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence & Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of ethics and integrity in all our operations, ensuring accountability to our clients and employees.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Employee Development</h3>
              <p className="text-gray-600">
                We invest in our team's growth through continuous training and development, promoting from within and fostering a culture of excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Commitment to Service</h3>
              <p className="text-gray-600">
                24/7 dedication to exceeding client expectations through professional service and rapid response capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PSIRA & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accreditation & Compliance</h2>
            <p className="text-lg text-gray-600 mb-6">
              KLS Security is fully accredited by the Private Security Industry Regulatory Authority (PSIRA) and complies with all relevant legislation including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Industry Standards</h3>
                  <p className="text-gray-600">Adherence to Security Industry Sectoral Determination and PSIRA regulations</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Employment Standards</h3>
                  <p className="text-gray-600">Compliance with Labour Relations Act, BCEA, and Employment Equity Act</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;