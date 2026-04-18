"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/../lib/variants";

export function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 relative z-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1000px] mx-auto bg-gradient-to-br from-primary-container/20 to-surface-container-low border border-primary/30 rounded-2xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-white tracking-tighter">
            SECURE YOUR INFRASTRUCTURE.
          </h2>
          <p className="text-xl text-on-surface-variant font-body max-w-2xl mx-auto">
            The perimeter is breached. Deploy the Obsidian Command System today
            and regain control of your network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="bg-primary text-on-primary rounded px-10 py-5 font-headline uppercase tracking-wider font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,255,65,0.4)]">
              Begin Deployment
              <span className="material-symbols-outlined text-sm">
                terminal
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
