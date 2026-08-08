import React from 'react';

export default function TrustSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px] flex items-start justify-center pt-24 md:pt-32 lg:pt-40 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: "url('/images/cardillac.png')" }}
      ></div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-bold text-white tracking-tight leading-tight md:leading-tight lg:leading-[1.1]">
          Trusted by thousands of clients <br className="hidden md:block" />
          choosing our premium limousine <br className="hidden md:block" />
          services <span className="font-newsreader italic font-normal">every single day</span>
        </h2>
      </div>
    </section>
  );
}
