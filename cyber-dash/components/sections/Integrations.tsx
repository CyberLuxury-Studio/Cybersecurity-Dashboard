"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/../lib/variants";

export function Integrations() {
  const partners = [
    "AWS",
    "CLOUDFLARE",
    "DATADOG",
    "CROWDSTRIKE",
    "OKTA",
    "SPLUNK",
    "PALO ALTO",
    "CISCO",
  ];

  return (
    <section
      className="py-24 relative z-10 overflow-hidden border-y border-outline-variant/30 bg-surface-container-lowest"
      id="nodes"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12"
      >
        <h2 className="text-sm font-headline font-bold text-outline text-center uppercase tracking-[0.3em]">
          Integrates with core nodes
        </h2>
      </motion.div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
          {[...partners, ...partners].map((partner, idx) => (
            <span
              key={idx}
              className="text-2xl md:text-4xl font-headline font-black text-primary/20 hover:text-primary transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 ml-16 md:ml-24">
          {[...partners, ...partners].map((partner, idx) => (
            <span
              key={idx}
              className="text-2xl md:text-4xl font-headline font-black text-primary/20 hover:text-primary transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
