import { Navbar } from "@/../components/layout/Navbar";
import { Footer } from "@/../components/layout/Footer";
import { Features } from "@/../components/sections/Features";
import { ThreatFeed } from "@/../components/sections/ThreatFeed";
import { Integrations } from "@/../components/sections/Integrations";
import { Pricing } from "@/../components/sections/Pricing";
import { CTA } from "@/../components/sections/CTA";
import { Testimonials } from "@/../components/sections/Testimonials";

export function Hero() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded text-xs font-label text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            SYSTEM_ONLINE
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-black leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container/60">
            Next-Gen Threat Detection.
            <br />
            Zero Compromise.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl font-body leading-relaxed">
            Deploy hyper-spectral defense protocols. Monitor network nodes in
            real-time. Neutralize threats before they manifest in the physical
            layer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded px-8 py-4 font-headline uppercase tracking-wider font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
              Deploy System
              <span className="material-symbols-outlined text-sm">
                rocket_launch
              </span>
            </button>
            <button className="border border-primary/30 text-primary rounded px-8 py-4 font-headline uppercase tracking-wider font-bold text-sm flex items-center justify-center gap-2 hover:border-primary hover:shadow-[0_0_15px_rgba(235,255,226,0.2)] transition-all">
              View Docs
              <span className="material-symbols-outlined text-sm">
                terminal
              </span>
            </button>
          </div>
        </div>
        <div className="relative hidden lg:flex justify-center items-center h-[500px]">
          {/* Decorative Wireframe Globe Placeholder */}
          <div className="wireframe-globe animate-[spin_20s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-primary/30 rotate-45"></div>
            <div className="absolute inset-0 rounded-full border border-primary/30 -rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary-container rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          {/* Floating Data Cards */}
          <div className="absolute -right-4 top-10 glass-panel p-4 rounded border border-primary/10 shadow-[0_0_30px_rgba(0,255,65,0.05)] w-48 z-20">
            <div className="text-[10px] font-label text-primary/60 mb-1">
              NODE_STATUS
            </div>
            <div className="text-sm font-label text-primary flex justify-between items-center">
              SECURE
              <span className="material-symbols-outlined text-sm text-primary">
                check_circle
              </span>
            </div>
          </div>
          <div className="absolute -left-8 bottom-20 glass-panel p-4 rounded border border-on-tertiary-container/30 shadow-[0_0_30px_rgba(195,0,44,0.1)] w-56 z-20 animate-pulse">
            <div className="text-[10px] font-label text-on-tertiary-container/60 mb-1">
              INTRUSION_ATTEMPT
            </div>
            <div className="text-sm font-label text-on-tertiary-container flex justify-between items-center threat-pulse">
              BLOCKED
              <span className="material-symbols-outlined text-sm">warning</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ThreatFeed />
      <Integrations />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
