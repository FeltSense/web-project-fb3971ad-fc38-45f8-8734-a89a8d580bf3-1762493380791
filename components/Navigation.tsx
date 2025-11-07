'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
        <span className="text-xl font-bold text-[#0A0E14] tracking-tight">Prestige</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <a href="/" className="px-4 py-2 text-sm font-medium text-[#0A0E14] hover:text-[#D4AF37] transition-colors duration-200 relative group">
          Home
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        
        <a href="#services" className="px-4 py-2 text-sm font-medium text-[#0A0E14] hover:text-[#D4AF37] transition-colors duration-200 relative group">
          Services
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>

        <div className="relative group">
          <button className="px-4 py-2 text-sm font-medium text-[#0A0E14] hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1">
            Properties
            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          {/* Mega Menu Dropdown */}
          <div className="absolute left-0 mt-0 w-96 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-gray-100">
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#0A0E14] uppercase tracking-widest">Featured</h3>
                <a href="#" className="block p-3 rounded-lg hover:bg-[#F8F6F3] transition-colors group/item">
                  <p className="font-semibold text-[#0A0E14] text-sm group-hover/item:text-[#D4AF37]">Luxury Penthouses</p>
                  <p className="text-xs text-gray-600 mt-1">Urban skyline residences</p>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-[#F8F6F3] transition-colors group/item">
                  <p className="font-semibold text-[#0A0E14] text-sm group-hover/item:text-[#D4AF37]">Waterfront Estates</p>
                  <p className="text-xs text-gray-600 mt-1">Exclusive beachfront properties</p>
                </a>
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <h3 className="text-xs font-bold text-[#0A0E14] uppercase tracking-widest">Browse</h3>
                <a href="#" className="block text-sm text-gray-700 hover:text-[#D4AF37] transition-colors">All Properties</a>
                <a href="#" className="block text-sm text-gray-700 hover:text-[#D4AF37] transition-colors">New Listings</a>
              </div>
            </div>
          </div>
        </div>

        <a href="#contact" className="px-4 py-2 text-sm font-medium text-[#0A0E14] hover:text-[#D4AF37] transition-colors duration-200 relative group">
          Contact
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:scale-105">
          Schedule Tour
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="p-2 rounded-lg text-[#0A0E14] hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu - Hidden by default, shown via template state */}
  <div className="md:hidden hidden bg-white border-t border-gray-100">
    <div className="px-4 py-4 space-y-3">
      <a href="/" className="block px-4 py-2 text-sm font-medium text-[#0A0E14] hover:bg-[#F8F6F3] rounded-lg transition-colors">Home</a>
      <a href="#services" className="block px-4 py-2 text-sm font-medium text-[#0A0E14] hover:bg-[#F8F6F3] rounded-lg transition-colors">Services</a>
      <a href="#" className="block px-4 py-2 text-sm font-medium text-[#0A0E14] hover:bg-[#F8F6F3] rounded-lg transition-colors">Properties</a>
      <a href="#contact" className="block px-4 py-2 text-sm font-medium text-[#0A0E14] hover:bg-[#F8F6F3] rounded-lg transition-colors">Contact</a>
      <button className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-sm font-semibold rounded-lg">
        Schedule Tour
      </button>
    </div>
  </div>
</nav>
  );
}