"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const fleet = [
  {
    name: "Hummer H2 Limousine",
    description: "Luxury executive sedan delivering exceptional comfort, quiet ride and professional chauffeur service for business travelers",
    image: "/images/hummer.png"
  },
  {
    name: "Audi A8 L",
    description: "Experience premium comfort and advanced technology in our flagship luxury sedan, designed for those who demand the best.",
    image: "/images/audi.png"
  },
  {
    name: "Mercedes-Benz S-Class",
    description: "The epitome of luxury and prestige, delivering an exceptionally smooth ride for ultimate relaxation during your journey.",
    image: "/images/mersidies.png"
  },
  {
    name: "Cadillac Escalade",
    description: "Spacious premium SUV perfect for group executive travel and airport transfers, offering uncompromised comfort and style.",
    image: "/images/cadillac.png"
  },
  {
    name: "Chrysler 300 Limousine",
    description: "Elegant stretch limousine providing the ultimate VIP experience for special occasions and corporate events.",
    image: "/images/crysler.png"
  }
];

export default function FleetSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === fleet.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? fleet.length - 1 : prev - 1));
  };

  return (
    <section id="equipment" className="bg-white relative overflow-hidden pt-24 md:pt-32 scroll-mt-20 lg:scroll-mt-24">
      {/* Full-width off-white background for the bottom half */}
      <div className="absolute bottom-0 left-0 w-full h-[65%] md:h-[55%] z-0"></div>

      <div className="max-w-[1600px] mx-auto flex flex-col items-center relative z-10 px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        
        {/* Top Header */}
        <div className="text-center mb-16 w-full">
          <FadeIn>
            <p className="font-newsreader italic text-gray-500 text-lg mb-4 tracking-wide">Our limousines</p>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-black tracking-tight leading-tight max-w-3xl mx-auto">
              Experience elegance and comfort with our <span className="font-extrabold">luxury</span> <span className="font-newsreader italic font-normal">limousine fleet</span>
            </h2>
          </FadeIn>
        </div>

        {/* Carousel Image */}
        <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] relative flex items-center justify-center mb-0">
          {fleet.map((vehicle, idx) => (
            <motion.div 
              key={idx}
              initial={false}
              animate={{
                x: idx === currentIndex ? 0 : idx < currentIndex ? "-50%" : "50%",
                opacity: idx === currentIndex ? 1 : 0,
                scale: idx === currentIndex ? 1 : 0.9
              }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`absolute inset-0 w-full h-full flex items-center justify-center ${
                idx === currentIndex ? 'z-10' : 'z-0 pointer-events-none'
              }`}
            >
              <img 
                src={vehicle.image} 
                alt={vehicle.name} 
                className="w-full h-full object-contain scale-[1.2] lg:scale-[1.6] mt-[-100px]"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Details & Controls */}
        <div className="w-full max-w-3xl text-center relative z-20 -mt-8 md:-mt-16">
          <FadeIn delay={0.2} duration={0.6}>
            <h3 className="text-4xl md:text-[3.5rem] font-sans font-bold text-black mb-6 tracking-tight leading-none">
              {fleet[currentIndex].name}
            </h3>
            <p className="text-gray-500 font-sans text-base md:text-lg font-light leading-relaxed mb-16 max-w-lg mx-auto">
              {fleet[currentIndex].description}
            </p>
          </FadeIn>
          
          {/* Controls - Vertical Line Removed */}
          <div className="flex justify-center items-center gap-8 relative">
            <button 
              onClick={prevSlide}
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group shadow-sm hover:shadow-md"
              aria-label="Previous vehicle"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={nextSlide}
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group shadow-sm hover:shadow-md"
              aria-label="Next vehicle"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
