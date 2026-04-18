"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/../lib/variants";

export function Features() {
  const features = [
    {
      title: "Real-time Monitoring",
      description:
        "Track network anomalies as they happen. Instant alerts for unauthorized access attempts.",
      icon: "monitoring",
    },
    {
      title: "AI Threat Analysis",
      description:
        "Machine learning algorithms that predict and neutralize zero-day vulnerabilities.",
      icon: "psychology",
    },
    {
      title: "Zero-Trust Architecture",
      description:
        "Verify every request. Trust nothing. Secure access across all applications and APIs.",
      icon: "fingerprint",
    },
  ];

  return (
    <section
      className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto relative z-10"
      id="intel"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <motion.div
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            Core Intel
          </h2>
          <p className="text-on-surface-variant font-body">
            Our system operates on a multi-layered defense mechanism, ensuring
            total coverage of your digital assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-surface-container-low border border-primary/20 rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] group"
            >
              <div className="w-12 h-12 bg-surface flex items-center justify-center rounded mb-6 group-hover:text-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
