// app/page.tsx
import { ChevronRight, Clock, Phone, MapPin, Shield, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* KLS Branded Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('/klscarlogo.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Protecting What 
                <span className="text-red-600"> Matters Most</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                South Africa's premier security service provider delivering excellence through innovation and dedication. 24/7 armed response and comprehensive security solutions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="#services"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Our Services
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
              <div className="flex items-center text-white">
                <Clock className="w-6 h-6 text-red-600 mr-3" />
                <div>
                  <h3 className="font-semibold">24/7 Armed Response</h3>
                  <p className="text-sm text-gray-300">Immediate assistance when you need it</p>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Phone className="w-6 h-6 text-red-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Emergency Contact</h3>
                  <p className="text-sm text-gray-300">079 596 5491</p>
                </div>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-6 h-6 text-red-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Service Areas</h3>
                  <p className="text-sm text-gray-300">Greater Johannesburg Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose KLS Security
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our commitment to excellence sets us apart
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">PSIRA Accredited</h3>
              <p className="mt-2 text-gray-500">Fully compliant with Private Security Industry Regulatory Authority standards</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Diverse Workforce</h3>
              <p className="mt-2 text-gray-500">A team that represents South Africa's diversity, united by excellence</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Customer Focus</h3>
              <p className="mt-2 text-gray-500">Tailored security solutions that meet your specific needs</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-500">Committed to the highest standards in all aspects of our service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}