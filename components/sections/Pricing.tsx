"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/../lib/variants";

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$499",
      period: "/mo",
      description: "Basic telemetry for small networks.",
      features: [
        "Real-time monitoring",
        "Weekly threat reports",
        "Community support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$1,299",
      period: "/mo",
      description: "Full-spectrum defense for scaling tech.",
      features: [
        "AI Threat Analysis",
        "Zero-day vulnerability scanning",
        "Automated incident response",
        "24/7 priority support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Air-gapped security for mission-critical infrastructure.",
      features: [
        "Dedicated deployment",
        "Custom ML models",
        "On-premise option",
        "Assigned security engineer",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto relative z-10"
      id="protocols"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        <motion.div
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            Deployment Protocols
          </h2>
          <p className="text-on-surface-variant font-body">
            Select the security tier required for your operational parameters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`bg-surface-container-low rounded-lg p-8 border ${tier.highlight ? "border-primary shadow-[0_0_30px_rgba(0,255,65,0.15)] scale-105" : "border-outline-variant/50"} relative group`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary text-xs font-bold font-headline uppercase tracking-widest px-3 py-1 rounded">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                {tier.name}
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 h-10">
                {tier.description}
              </p>
              <div className="mb-8 border-b border-outline-variant/30 pb-8">
                <span
                  className={`text-5xl font-headline font-black ${tier.highlight ? "text-primary" : "text-on-surface"}`}
                >
                  {tier.price}
                </span>
                <span className="text-on-surface-variant">{tier.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-start gap-3 text-sm text-on-surface"
                  >
                    <span className="material-symbols-outlined text-primary text-base">
                      check
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded font-headline uppercase tracking-wider font-bold text-sm transition-all ${tier.highlight ? "bg-gradient-to-br from-primary to-primary-container text-on-primary hover:brightness-110" : "border border-primary/30 text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(235,255,226,0.2)]"}`}
              >
                {tier.highlight ? "Initialize Pro" : "Select Tier"}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
