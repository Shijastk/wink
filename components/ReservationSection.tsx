"use client";

import React from 'react';

export default function ReservationSection() {
  return (
    <section id="reservation" className="relative w-full overflow-hidden flex flex-col scroll-mt-20 lg:scroll-mt-24">
      
      {/* Top part with primary blue background */}
      <div className="w-full bg-primary relative z-10 pt-16 lg:pt-24 pb-16 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex justify-end">
          
          {/* Right Text */}
          <div className="w-full lg:w-[48%] relative z-20">
            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] text-white font-sans font-medium leading-[1.3] tracking-tight">
              Schedule your <span className="font-bold">airport transfer</span> with our experienced chauffeurs for a{' '}
              <span className="font-newsreader italic text-white/90 tracking-wide">
                smooth, reliable journey.
              </span>
            </h2>
            <div className="mt-8 hidden lg:flex items-center gap-4 text-white/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <span className="font-sans text-xs tracking-[0.2em] uppercase font-bold">Scroll to discover</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom part with image (and form) */}
      <div className="w-full relative z-20 min-h-[300px] lg:h-[550px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="/images/form_img.jpg" 
            alt="Chauffeur standing by a luxury car" 
            className="w-full h-full object-cover" 
          />
          {/* Fallback image via unsplash if form_img.jpg isn't ideal */}
          <div className="absolute inset-0 w-full h-full object-cover bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549488344-c1126781f211?auto=format&fit=crop&q=80&w=2000')", opacity: 0.2 }}></div>
        </div>

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 lg:py-0">
          <div className="w-full lg:w-[48%]">
            
            {/* The actual form card - Pulls up to overlap on desktop/tablet */}
            <div className="w-full bg-white p-8 md:p-12 shadow-2xl relative md:-mt-[250px] lg:-mt-[700px] rounded-none">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-primary"></span>
                <p className="text-primary font-sans text-xs font-bold tracking-[0.15em] uppercase">Quick Booking</p>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-sans text-black mb-8 leading-tight tracking-tight">
                Plan your next journey
              </h3>
              
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Pickup address" 
                    className="border border-gray-300 p-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black placeholder:text-gray-400 transition-colors rounded-none" 
                  />
                  <input 
                    type="text" 
                    placeholder="Drop-off address" 
                    className="border border-gray-300 p-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black placeholder:text-gray-400 transition-colors rounded-none" 
                  />
                  
                  <input 
                    type="text" 
                    placeholder="Pickup date" 
                    className="border border-gray-300 p-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black placeholder:text-gray-400 transition-colors rounded-none" 
                  />
                  <input 
                    type="text" 
                    placeholder="Pickup time" 
                    className="border border-gray-300 p-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black placeholder:text-gray-400 transition-colors rounded-none" 
                  />
                  
                  <div className="relative">
                    <select className="w-full border border-gray-300 p-4 text-sm appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-600 bg-white transition-colors cursor-pointer rounded-none">
                      <option>Vehicle Class</option>
                      <option>Business Class</option>
                      <option>First Class</option>
                      <option>Luxury Van</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select className="w-full border border-gray-300 p-4 text-sm appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-600 bg-white transition-colors cursor-pointer rounded-none">
                      <option>1 passenger</option>
                      <option>2 passengers</option>
                      <option>3 passengers</option>
                      <option>4+ passengers</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  </div>

                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="border border-gray-300 p-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black placeholder:text-gray-400 transition-colors rounded-none" 
                  />
                  <input 
                    type="text" 
                    placeholder="Phone number" 
                    className="border border-gray-300 p-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black placeholder:text-gray-400 transition-colors rounded-none" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 mt-2 transition-colors text-sm uppercase tracking-widest rounded-none"
                >
                  Send request
                </button>
                
                <p className="text-center text-gray-500 text-xs mt-2 font-light">
                  Airport pickups, point-to-point rides and special occasions
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
