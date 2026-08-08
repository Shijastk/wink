"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  speed?: number; // Positive values move opposite to scroll
  alignTop?: boolean; // Anchors the image to the top to prevent cropping faces
}

export default function ParallaxImage({ src, alt, className = "", imageClassName = "", speed = 0.5, alignTop = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // If alignTop is true, we start at 0 to ensure the top is visible, and parallax moves it upwards slightly.
  // Otherwise, we center the parallax effect which cuts off both top and bottom equally.
  const yRange = alignTop ? ["0%", `-${20 * speed}%`] : ["-15%", `${15 * speed}%`];
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const top = alignTop ? "0%" : "-15%";
  const height = alignTop ? "120%" : "130%";

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div style={{ y, height, width: "100%", top, position: "absolute" }}>
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover ${imageClassName}`} 
        />
      </motion.div>
    </div>
  );
}
