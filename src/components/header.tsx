"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, Phone } from 'lucide-react';

export function Header() {
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

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrollPosition > 50 ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-red-600" />
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-red-600">KLS</span>
              <span className="text-2xl font-bold text-white ml-2">Security</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors">Home</Link>
            <div className="relative group">
              <Link href="/services" className="text-white hover:text-red-500 transition-colors">
                Services
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/services/guarding" className="block px-4 py-2 text-sm text-gray-200 hover:bg-red-600 hover:text-white">
                    Professional Guarding
                  </Link>
                  <Link href="/services/cctv" className="block px-4 py-2 text-sm text-gray-200 hover:bg-red-600 hover:text-white">
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
            <Link href="/services/maintenance" className="text-white hover:text-red-500 transition-colors">Maintanance Plans</Link>

            <Link href="/about" className="text-white hover:text-red-500 transition-colors">About</Link>
            <Link href="/contact" className="text-white hover:text-red-500 transition-colors">Contact</Link>
            <div className="flex items-center">
              <a href="tel:0795965491" className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                079 596 5491
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/about" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link href="/maintanance" className="text-white hover:text-red-500 transition-colors py-3"onClick={() => setIsMenuOpen(false)}>Maintanance Plans</Link>
          </div>
        </div>
      )}
    </nav>
  );
}