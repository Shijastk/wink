"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <img 
              src="/images/logo.png" 
              alt="Wink Limousine & Transportation" 
              className="h-20 md:h-24 w-auto object-contain mb-6"
              style={{ filter: 'grayscale(1) contrast(200%) invert(1)', mixBlendMode: 'screen' }}
            />
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              We provide premium chauffeur-driven transfers combining comfort, punctuality, and luxury vehicles for seamless business and airport transportation.
            </p>
            <div className="flex items-center gap-3 text-primary font-sans font-bold tracking-widest uppercase">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>9 500 212 09 88</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-tight">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-tight">Our Services</h4>
            <ul className="flex flex-col gap-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Chauffeur Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business Transfers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Luxury Cars Dealer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Limousine Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Airport Transfers</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-tight">Newsletter</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Subscribe to get the latest news, updates, and exclusive luxury offers.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border border-gray-700 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-none w-full"
              />
              <button className="bg-primary text-white uppercase tracking-widest font-bold text-sm py-4 px-6 hover:bg-blue-600 transition-colors rounded-none w-full">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-gray-500 font-light text-sm">
          <p>&copy; {new Date().getFullYear()} Wink Limousines. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
