"use client";

import React from 'react';

export default function BusinessTransfers() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Column - Sharp Large Image */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="w-full h-[500px] lg:h-[750px] overflow-hidden">
            <img 
              src="/images/hero2.png" 
              alt="Executive passenger looking out of car window" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
          {/* Decorative Sharp Element */}
          <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-black z-0 pointer-events-none transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          <div className="mb-16">
            <p className="text-black font-sans text-xs font-bold mb-6 tracking-[0.2em] uppercase flex items-center gap-4">
               <span className="w-12 h-[1px] bg-black"></span> Global Standards
            </p>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-black font-sans font-bold leading-[1] tracking-tight mb-8 uppercase">
              Limousine Transfers<br />
              Around The World
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
              Every leg of your journey is a reflection of your commitment to excellence. Your ground transportation should be unified under a single, uncompromising standard—anywhere you travel.
            </p>
          </div>

          {/* Right Aligned Image replacing the list */}
          <div className="mt-8 flex justify-end">
            <div className="w-full md:w-4/5 h-[300px] md:h-[400px] overflow-hidden">
              <img 
                src="/images/hero1.png" 
                alt="Luxury limousine service" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
