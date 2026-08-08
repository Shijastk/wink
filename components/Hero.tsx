"use client";

import React, { useState, useEffect } from 'react';

const IMAGES = [
  '/images/banner.png',
  '/images/banner2.png',
  '/images/banner3.png',
  '/images/banner4.png',
  '/images/banner5.png',
];

const CONTENT = [
  {
    kicker: "Premium Limousine Service",
    titleLine1: "PREMIER",
    titleLine2: "CHAUFFEUR",
    description: "Experience the ultimate in ground transportation with our premium limousine services tailored exclusively for you.",
  },
  {
    kicker: "Personalized VIP Service",
    titleLine1: "VIP SERVICE",
    titleLine2: "",
    description: "Dedicated professional drivers providing an unmatched level of luxury, privacy, and absolute discretion.",
  },
  {
    kicker: "Unparalleled Comfort",
    titleLine1: "LUXURY",
    titleLine2: "VEHICLES",
    description: "Travel in complete comfort with our meticulously maintained fleet of high-end premium vehicles.",
  },
  {
    kicker: "Reliable & Punctual",
    titleLine1: "AIRPORT",
    titleLine2: "TRANSFERS",
    description: "Dependable and on-time chauffeur service ensuring a seamless start or finish to your travels.",
  },
  {
    kicker: "Our Commitment",
    titleLine1: "DRIVEN BY",
    titleLine2: "EXCELLENCE",
    description: "Highly experienced chauffeurs strictly committed to ensuring your safety, comfort, and total satisfaction.",
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-end pb-[50px]">
      {/* Background Images */}
      {IMAGES.map((src, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${src})`,
                transform: isActive ? 'scale(1.15)' : 'scale(1)',
                transition: isActive ? 'transform 10s linear' : 'transform 0s 1.5s',
              }}
            />
          </div>
        );
      })}

      {/* Dark Overlay for better text legibility and smooth blending to the next section */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 w-full h-full flex items-end pb-[50px]">
        <div className="w-full text-left relative z-10">
          <div key={currentIndex} className="animate-fade-in-up">
            <p className="text-white font-sans text-xs md:text-sm font-bold mb-4 tracking-[0.2em] uppercase">
              {CONTENT[currentIndex].kicker}
            </p>
            <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-white font-sans font-bold leading-[0.9] tracking-tight uppercase block whitespace-nowrap">
              {CONTENT[currentIndex].titleLine1}
              <br />
              {CONTENT[currentIndex].titleLine2}
            </h1>
          </div>
        </div>

        <div className="absolute right-6 md:right-12 lg:right-20 bottom-[50px] z-20 flex flex-col items-end pb-4">
          <div className="flex items-center mb-8 justify-end">
            <div className="hidden md:block h-[1px] bg-white/30 w-24 md:w-48 mr-8"></div>
            <p className="text-white text-base md:text-lead font-sans text-left max-w-[20rem] leading-snug">
              {/* {CONTENT[currentIndex].description} */}
            </p>
          </div>

          <div className="flex items-center justify-end gap-8 text-white font-newsreader italic text-h4 tracking-widest lg:pr-4">
            <button
              onClick={handlePrev}
              className="hover:text-white/70 transition-colors p-2 cursor-pointer flex items-center"
              aria-label="Previous Slide"
            >
              <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L1 6L5 11M1 6H60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <span className="w-16 text-center tabular-nums">
              {currentIndex + 1} / {IMAGES.length}
            </span>
            
            <button
              onClick={handleNext}
              className="hover:text-white/70 transition-colors p-2 cursor-pointer flex items-center"
              aria-label="Next Slide"
            >
              <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55 1L59 6L55 11M59 6H0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

