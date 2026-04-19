"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Since deploying the hyper-spectral defense protocols, our server uptime is 99.99%. We literally watch threats get neutralized in real-time.",
    author: "Elena M.",
    role: "CISO, Nexus Financial",
  },
  {
    quote: "The interface feels like it was ripped straight out of a sci-fi movie, but the actual telemetry it provides is unmatched by any enterprise tool we've used.",
    author: "David R.",
    role: "Lead DevOps, CyberDyne Systems",
  },
  {
    quote: "Finally, a dashboard that doesn't just show data, but gives absolute context. The automated routing features alone saved us hours of manual intervention.",
    author: "Sarah J.",
    role: "Security Analyst, Arasaka Corp",
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto relative border-t border-surface-container">
      <div className="absolute left-0 top-0 w-1/3 h-px bg-gradient-to-r from-transparent to-primary/30"></div>
      
      <div className="mb-16 flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-headline font-black tracking-tighter text-on-surface">
            Network Commendations
          </h2>
          <p className="font-label text-primary/70 text-sm mt-2 uppercase tracking-widest">
            // Verified User Telemetry
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all ${idx === currentIndex ? 'w-8 bg-primary shadow-[0_0_10px_rgba(0,255,65,0.5)]' : 'w-4 bg-surface-container-highest hover:bg-primary/50'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative h-[250px] md:h-[200px] w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-surface-container-low border border-primary/20 p-8 md:p-12"
          >
            <div className="text-4xl text-primary/20 absolute top-6 left-6 font-serif">"</div>
            <p className="text-lg md:text-xl font-body leading-relaxed text-on-surface-variant relative z-10 mb-8 italic">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-none border border-primary/40 bg-surface-container flex items-center justify-center font-headline font-bold text-primary">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div>
                <div className="font-headline font-bold text-on-surface">{testimonials[currentIndex].author}</div>
                <div className="font-label text-xs text-primary/70">{testimonials[currentIndex].role}</div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary pointer-events-none"></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
