import React from 'react';
import FadeIn from './animations/FadeIn';
import ParallaxImage from './animations/ParallaxImage';

const drivers = [
  {
    name: "James Sterling",
    role: "Senior Chauffeur",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Elena Rostova",
    role: "Executive Driver",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMT9d0l5D0fZrjq9vZh6toLYklY5IqJK7ZK-J-VcdT6ivDA63dyg7ig0&s=10"
  },
  {
    name: "Marcus Thorne",
    role: "VIP Specialist",
    image: "https://images.pexels.com/photos/3707987/pexels-photo-3707987.jpeg"
  }
];

// SVG Icons
const ShareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
);

export default function DriversSection() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-gray-100 overflow-hidden">
      
      {/* Header Container (Constrained Width) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <div className="text-center">
          <FadeIn>
            <p className="text-primary font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Team</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-black tracking-tight leading-tight max-w-4xl mx-auto uppercase">
              Talented drivers dedicated to your comfort
            </h2>
          </FadeIn>
        </div>
      </div>

      {/* Drivers Grid (Full Screen Width) */}
      <div className="w-full px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {drivers.map((driver, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} className="group cursor-pointer">
              {/* Image Container */}
              <div className="w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden mb-6 relative bg-gray-100">
                <ParallaxImage 
                  src={driver.image} 
                  alt={driver.name} 
                  className="w-full h-full"
                  imageClassName="object-top transition-transform duration-700 group-hover:scale-105"
                  speed={0.2}
                  alignTop={true}
                />
                
                {/* Social Share Button & Dropdown */}
                <div className="absolute top-4 right-4 z-30 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E5DFD3] flex items-center justify-center text-black shadow-sm cursor-pointer hover:bg-white transition-colors duration-300 peer relative z-20">
                    <ShareIcon />
                  </div>
                  
                  {/* Hover Icons Container */}
                  <div className="flex flex-col gap-2 opacity-0 -translate-y-4 peer-hover:opacity-100 peer-hover:translate-y-0 hover:opacity-100 hover:translate-y-0 transition-all duration-300 absolute top-10 right-0 z-10 pt-2">
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shadow-sm hover:scale-110 transition-transform">
                      <FacebookIcon />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shadow-sm hover:scale-110 transition-transform">
                      <TikTokIcon />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shadow-sm hover:scale-110 transition-transform">
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Details */}
              <div className="text-center px-4">
                <h4 className="text-xl md:text-[22px] font-bold text-black mb-1 font-sans">{driver.name}</h4>
                <p className="text-gray-500 font-sans text-sm md:text-base font-light">{driver.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
    </section>
  );
}
