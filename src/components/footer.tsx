"use client"
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-red-600" />
              <div className="flex items-center">
                <span className="text-2xl font-bold text-red-600">KLS</span>
                <span className="text-2xl font-bold text-white ml-2">Security</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              South Africa's premier security service provider delivering excellence through innovation and dedication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/guarding" className="text-gray-400 hover:text-white transition-colors">Professional Guarding</Link>
              </li>
              <li>
                <Link href="/services/surveillance" className="text-gray-400 hover:text-white transition-colors">Surveillance Security</Link>
              </li>
              <li>
                <Link href="/services/equipment" className="text-gray-400 hover:text-white transition-colors">Security Equipment</Link>
              </li>
              <li>
                <Link href="/services/response" className="text-gray-400 hover:text-white transition-colors">24/7 Armed Response</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <p className="text-white">079 596 5491</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <p className="text-white">info@klssecurity.co.za</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <p className="text-white">Eastern Cape, Sarah Baartman, South Africa</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <p className="text-white">24/7 Emergency Response</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} KLS Security. All rights reserved. PSIRA Accredited.
          </p>
        </div>
      </div>
    </footer>
  );
}