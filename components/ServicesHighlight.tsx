import React from 'react';

const services = [
  {
    title: "Airport",
    subtitle: "transfers",
    description: "Premium airport transportation ensuring a seamless, punctual, and relaxing experience for your flights."
  },
  {
    title: "Corporate",
    subtitle: "travel",
    description: "Professional chauffeur services offering privacy, reliability, and luxury tailored for business executives."
  },
  {
    title: "Hourly",
    subtitle: "charter",
    description: "Flexible, dedicated hourly chauffeur service for important meetings, roadshows, or multiple city stops."
  }
];

export default function ServicesHighlight() {
  return (
    <section id="services" className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-20 scroll-mt-20 lg:scroll-mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-sans font-bold leading-[1.1] tracking-tight">
                {service.title}
                <br />
                {service.subtitle}
              </h2>
              <div className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 19L19 5M19 5H7M19 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white/10 mb-6 group-hover:bg-white/30 transition-colors"></div>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
