"use client";
import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  Camera, 
  Dog, 
  Building2, 
  RadioTower,
  Store,
  ArrowRight,
  ChevronRight,
  Monitor,
  Lock,
  Bell
} from 'lucide-react';


const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const mainServices = [
    {
      id: "guarding",
      title: "Professional Guarding",
      icon: <Shield className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform" />,
      description: "Our elite security personnel are trained to the highest PSIRA standards, providing vigilant protection for commercial and residential properties.",
      features: ["24/7 Coverage", "Uniformed Personnel", "Trained to PSIRA Standards", "Regular Patrols"],
      path: "/services/guarding"
    },
    {
      id: "protection",
      title: "Close Protection",
      icon: <Users className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform" />,
      description: "VIP protection services for high-profile individuals, executives, and diplomatic personnel requiring enhanced security.",
      features: ["Risk Assessment", "Executive Protection", "Travel Security", "Threat Management"],
      path: "/services/cp"
    },
    {
      id: "k9",
      title: "K9 Security Units",
      icon: <Dog className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform" />,
      description: "Specialized K9 units providing enhanced security capabilities for patrol, detection, and deterrence.",
      features: ["Patrol Support", "Explosive Detection", "Narcotics Detection", "Handler Training"],
      path: "/services/ksu"
    },
    {
      id: "mining",
      title: "Mining Security",
      icon: <Building2 className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform" />,
      description: "Comprehensive security solutions tailored for mining operations, protecting valuable assets and personnel.",
      features: ["Access Control", "Perimeter Security", "Asset Protection", "Employee Screening"],
      path: "/services/mining"
    }
  ];

  const surveillanceServices = [
    {
      id: "cctv",
      title: "CCTV Monitoring",
      icon: <Camera className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform" />,
      description: "24/7 surveillance monitoring with rapid response integration and advanced analytics capabilities.",
      features: ["Real-time Monitoring", "Video Analytics", "Incident Recording", "Remote Access"],
      path: "/services/cctv"
    },
    {
      id: "access",
      title: "Access Control",
      icon: <Lock className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform" />,
      description: "Advanced access control systems for comprehensive security management across your facilities.",
      features: ["Biometric Systems", "Card Access", "Visitor Management", "Time Attendance"],
      path: "/services/ac"
    },
    {
      id: "alarm",
      title: "Alarm Systems",
      icon: <Bell className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform" />,
      description: "State-of-the-art alarm systems with immediate response protocols and smartphone integration.",
      features: ["Intrusion Detection", "Panic Buttons", "Fire Detection", "Mobile Alerts"],
      path: "/services/alarm"
    },
    {
      id: "monitoring",
      title: "Remote Monitoring",
      icon: <Monitor className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform" />,
      description: "24/7 professional monitoring services with immediate security response dispatch.",
      features: ["Control Room Operations", "Alert Management", "Dispatch Services", "Incident Reporting"],
      path: "/services/monitoring"
    }
  ];

  const allServices = [...mainServices, ...surveillanceServices];

  const getFilteredServices = () => {
    if (activeTab === 'all') return allServices;
    if (activeTab === 'guarding') return mainServices;
    if (activeTab === 'tech') return surveillanceServices;
    return allServices;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl tracking-tight">
              Professional Security Services
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to your specific needs with 24/7 support and rapid response capabilities
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a 
                href="#services" 
                className="px-8 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors shadow-lg"
              >
                Explore Services
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Store Banner */}
      <section className="bg-gradient-to-r from-red-600 to-gray-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Security Equipment Store</h2>
              <p className="text-lg text-gray-100">
                Professional-grade security equipment available for purchase with expert installation options
              </p>
            </div>
            <a 
              href="/store"
              className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-md"
            >
              <Store className="w-5 h-5" />
              <span>Visit Store</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Security Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              From physical security to advanced surveillance systems, we offer end-to-end solutions to protect what matters most
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-md ${
                  activeTab === 'all' ? 'bg-red-600 text-white' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setActiveTab('guarding')}
                className={`px-6 py-2 rounded-md ${
                  activeTab === 'guarding' ? 'bg-red-600 text-white' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Security Personnel
              </button>
              <button
                onClick={() => setActiveTab('tech')}
                className={`px-6 py-2 rounded-md ${
                  activeTab === 'tech' ? 'bg-red-600 text-white' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Technology Solutions
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredServices().map((service) => (
              <div 
                key={service.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-red-100 transition-all duration-300 overflow-hidden"
              >
                <div className="bg-gray-50 p-6 flex justify-center">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.path}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Customized Security Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our security consultants for a free assessment and tailored security plan for your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md"
              >
                Request Free Consultation
              </a>
              <a 
                href="tel:0795965491" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Call Us: 079 596 5491
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;