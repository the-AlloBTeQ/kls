// src/components/Layout.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Phone, Menu, X } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `w-full bg-gray-900 text-white`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-red-600" />
              <div className="flex items-center">
                <span className="text-2xl font-bold text-red-600">KLS</span>
                <span className="text-2xl font-bold text-white ml-2">Security</span>
              </div>
            </Link>

            
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-12">
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-red-500 transition-colors py-3">Home</Link>
                <Link href="/about" className="text-white hover:text-red-500 transition-colors py-3">About</Link>
                <div className="relative group py-3">
                  <Link href="/services" className="text-white hover:text-red-500 transition-colors">
                    Services
                  </Link>
                  <div className="absolute left-0 mt-3 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      <Link href="/services/guarding" className="block px-4 py-2 text-sm text-gray-200 hover:bg-red-600 hover:text-white">
                        Professional Guarding
                      </Link>
                      <Link href="/services/mornitoring" className="block px-4 py-2 text-sm text-gray-200 hover:bg-red-600 hover:text-white">
                        Surveillance Security
                      </Link>
                      <Link href="/store" className="block px-4 py-2 text-sm text-gray-200 hover:bg-red-600 hover:text-white">
                        Security Equipment
                      </Link>
                      <Link href="/services/response" className="block px-4 py-2 text-sm text-gray-200 hover:bg-red-600 hover:text-white">
                        24/7 Armed Response
                      </Link>
                    </div>
                  </div>
                </div>
               
                <Link href="/contact" className="text-white hover:text-red-500 transition-colors py-3">Contact</Link>
              
              <Link href="/maintanance" className="text-white hover:text-red-500 transition-colors py-3">Maintanance Plans</Link>
              </div>
              
              <div className="md:flex ml-auto">
                <a href="tel:0795965491" className="hidden md:flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  079 596 5491
                </a>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-red-500 py-3"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md">Home</Link>
                <Link href="/services" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md">Services</Link>
                <Link href="/about" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md">About</Link>
                <Link href="/contact" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md">Contact</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="w-8 h-8 text-red-600" />
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-red-600">KLS</span>
                  <span className="text-2xl font-bold text-white ml-2">Security</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                South Africa's premier security service provider delivering excellence through innovation and dedication.
              </p>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-red-600" />
                <span>079 596 5491</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
              <li>
                  <Link href="/services/cp" className="text-gray-400 hover:text-white transition-colors">
                    Close Protection
                  </Link>
                </li>
                <li>
                  <Link href="/services/guarding" className="text-gray-400 hover:text-white transition-colors">
                    Professional Guarding
                  </Link>
                </li>
                <li>
                  <Link href="/services/cctv" className="text-gray-400 hover:text-white transition-colors">
                    Surveillance Security
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="text-gray-400 hover:text-white transition-colors">
                    Security Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/services/response" className="text-gray-400 hover:text-white transition-colors">
                    24/7 Armed Response
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} KLS Security. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;