import React from 'react';

const features = [
  {
    title: "Luxury limousines",
    description: "Insurance services available worldwide ensuring protection in any country anytime",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.64 5H8.4a2 2 0 0 0-1.9 1.3L5 10 3 8" />
        <path d="M1 11.5 3 17h18l2-5.5" />
        <path d="M2 12h20" />
        <path d="M5.5 4h13" />
        <path d="M9 17v4h6v-4" />
        <path d="M18 21h-3.5" />
        <path d="M9.5 21H6" />
        <circle cx="6.5" cy="16.5" r="2.5" />
        <circle cx="17.5" cy="16.5" r="2.5" />
      </svg>
    ) 
  },
  {
    title: "Fast car delivery",
    description: "Safe and encrypted payment systems protecting financial transactions and personal data",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ) 
  },
  {
    title: "High safety",
    description: "Manage policies easily through modern online platforms and mobile applications",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M7 7h10v10H7z" />
        <path d="M5 17h14a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2z" />
      </svg>
    ) 
  },
  {
    title: "Fixed price",
    description: "Competitive pricing models ensuring value without compromising coverage quality",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
        <path d="M12 15l2 2 4-4" />
      </svg>
    ) 
  },
  {
    title: "Professional drivers",
    description: "Professional consultants providing guidance and personalized insurance recommendations always",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <path d="M12 14l-1.5 3 1.5 3 1.5-3z" />
        <path d="M7 6h10" />
      </svg>
    ) 
  },
  {
    title: "Privacy Guaranteed",
    description: "Claims are handled quickly with minimal paperwork and efficient verification procedures",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6-8 10-8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ) 
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-primary font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-black tracking-tight leading-tight max-w-4xl mx-auto uppercase">
            We make sure that your every trip is comfortable
          </h2>
        </div>

        {/* Feature Cards Grid - 2 Columns, Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-row items-start gap-6 group cursor-pointer"
            >
              <div className="flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-110">
                {/* Increase icon size dynamically using scale if needed, or rely on the SVG dimensions */}
                <div className="w-12 h-12 flex items-center justify-center">
                  {React.cloneElement(feature.icon, { width: 40, height: 40 })}
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-lg md:text-xl font-bold text-black mb-2 uppercase tracking-tight group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Staggered 3-Image Gallery */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-[300px] md:h-[500px] overflow-hidden group relative">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="/images/watch.png" alt="Luxury fleet" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="h-[300px] md:h-[500px] overflow-hidden group relative md:-mt-16">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="/images/backseat.png" alt="Executive travel" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="h-[300px] md:h-[500px] overflow-hidden group relative">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="/images/wine.png" alt="Professional chauffeur" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </div>

      </div>
    </section>
  );
}
