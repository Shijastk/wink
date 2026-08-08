"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes based on scroll state
  const navBgClass = isScrolled || isMobileMenuOpen ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent border-b border-white/10';
  const textColorClass = isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white';
  const navHeightClass = isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-32';
  const logoSizeClass = isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20 lg:h-24';
  const buttonHeightClass = 'h-10 md:h-12'; // Fixed height so it doesn't touch top/bottom

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex flex-col ${navBgClass}`}>
      <div className={`container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center w-full transition-all duration-300 ${navHeightClass}`}>
        {/* Left Section (Logo) */}
        <div className="flex items-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            {/* 
              CSS Trick: 
              When scrolled (white navbar): 'multiply' drops the white background leaving the blue logo.
              When top (dark transparent navbar): invert makes bg black/text white, 'screen' drops the black bg leaving white text!
            */}
            <img 
              src="/images/logo.png" 
              alt="Wink Limousine & Transportation" 
              className={`${logoSizeClass} w-auto object-contain transition-all duration-300`}
              style={
                (isScrolled || isMobileMenuOpen)
                  ? { mixBlendMode: 'multiply' } 
                  : { filter: 'grayscale(1) contrast(200%) invert(1)', mixBlendMode: 'screen' }
              }
            />
          </Link>
        </div>

        {/* Right side container for links and button */}
        <div className="flex items-center h-full">
          {/* Middle/Right Section (Links) */}
          <div className="flex items-center pr-8 hidden lg:flex h-full">
            <ul className={`flex gap-8 items-center font-medium text-sm tracking-wide uppercase transition-colors duration-300 ${textColorClass}`}>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/#equipment" className="hover:text-primary transition-colors">Equipment</Link>
              </li>
            </ul>
          </div>

          {/* Far Right Section (CTA Button) */}
          <Link 
            href="/#reservation"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center justify-center bg-primary text-white font-medium text-xs md:text-sm tracking-wide uppercase px-4 md:px-8 rounded-none hover:bg-black transition-all duration-300 ${buttonHeightClass}`}
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button (Visible on small screens) */}
          <button 
            className={`lg:hidden flex flex-col justify-center items-end gap-[5px] w-10 h-full ml-4 group ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] bg-current transition-all duration-300 group-hover:text-primary ${isMobileMenuOpen ? 'w-6 translate-y-[7px] rotate-45' : 'w-4'}`}></span>
            <span className={`h-[2px] w-6 bg-current transition-all duration-300 group-hover:text-primary ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-[2px] bg-current transition-all duration-300 group-hover:text-primary ${isMobileMenuOpen ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-6'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (White Card) */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 lg:hidden overflow-hidden origin-top ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col px-6 py-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 uppercase text-sm font-medium tracking-wide hover:text-primary transition-colors py-4 border-b border-gray-100">Home</Link>
          <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 uppercase text-sm font-medium tracking-wide hover:text-primary transition-colors py-4 border-b border-gray-100">Services</Link>
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 uppercase text-sm font-medium tracking-wide hover:text-primary transition-colors py-4 border-b border-gray-100">About Us</Link>
          <Link href="/#equipment" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 uppercase text-sm font-medium tracking-wide hover:text-primary transition-colors py-4">Equipment</Link>
        </div>
      </div>
    </nav>
  );
}
