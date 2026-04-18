export function Footer() {
  return (
    <footer className="w-full py-16 border-t border-[#30372f] bg-[#050A05] relative overflow-hidden">
      {/* Subtle gradient overlay to separate from background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-12 relative z-10">
        <div className="space-y-6 lg:col-span-1">
          <div className="text-[#00FF41] font-label text-lg flex items-center gap-2">
            <span className="material-symbols-outlined">memory</span>
            CYBER_DASH
          </div>
          <div className="font-label text-[10px] tracking-tighter text-[#ebffe2]/40">
            © 2024 OBSIDIAN COMMAND SYSTEM // HYPER-SPECTRAL INTELLIGENCE
          </div>
        </div>

        <div className="flex flex-col gap-4 font-label text-xs tracking-tighter">
          <h4 className="text-[#00FF41] mb-2 font-bold uppercase">Navigation</h4>
          <a className="text-[#ebffe2]/40 hover:text-[#00FF41] hover:translate-x-1 transition-transform" href="#">TERMINAL</a>
          <a className="text-[#ebffe2]/40 hover:text-[#00FF41] hover:translate-x-1 transition-transform" href="#">SYSTEM_STATUS</a>
          <a className="text-[#ebffe2]/40 hover:text-[#00FF41] hover:translate-x-1 transition-transform" href="#">ENCRYPTION_DOCS</a>
        </div>

        <div className="flex flex-col gap-4 font-label text-xs tracking-tighter">
          <h4 className="text-[#00FF41] mb-2 font-bold uppercase">Company</h4>
          <a className="text-[#ebffe2]/40 hover:text-[#00FF41] hover:translate-x-1 transition-transform" href="#">ABOUT_US</a>
          <a className="text-[#ebffe2]/40 hover:text-[#00FF41] hover:translate-x-1 transition-transform" href="#">CAREERS</a>
          <a className="text-[#ebffe2]/40 hover:text-[#00FF41] hover:translate-x-1 transition-transform" href="#">CONTACT_HQ</a>
        </div>

        <div className="space-y-4 font-label text-xs tracking-tighter lg:col-span-1">
          <h4 className="text-[#00FF41] font-bold uppercase">Subscribe</h4>
          <p className="text-[#ebffe2]/40">Get notified about critical updates.</p>
          <div className="relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-primary font-bold">{`> `}</span>
            <input
              type="email"
              placeholder="enter email_"
              className="w-full bg-transparent border-b border-outline-variant py-2 pl-4 text-primary outline-none focus:border-primary transition-colors placeholder:text-[#ebffe2]/20"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
