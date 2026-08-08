"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  const navBgClass = isScrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent border-b border-white/10';
  const textColorClass = isScrolled ? 'text-gray-900' : 'text-white';
  const navHeightClass = isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-32';
  const logoSizeClass = isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20 lg:h-24';
  const buttonHeightClass = isScrolled ? 'h-16 md:h-20' : 'h-12 md:h-14';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${navBgClass} ${navHeightClass}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center w-full h-full">
        {/* Left Section (Logo) */}
        <div className="flex items-center">
          <Link href="/">
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
                isScrolled 
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
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-primary transition-colors">Equipment</Link>
              </li>
              <li className="flex items-center cursor-pointer hover:text-primary transition-colors group relative">
                <span>All Pages</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </li>
            </ul>
          </div>

          {/* Far Right Section (CTA Button) */}
          <Link 
            href="/contact"
            className={`flex items-center justify-center bg-primary text-white font-medium text-sm tracking-wide uppercase px-6 md:px-10 rounded-none hover:bg-black transition-all duration-300 ${buttonHeightClass}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
