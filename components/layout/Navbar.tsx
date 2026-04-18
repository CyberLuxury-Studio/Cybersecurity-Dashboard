export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050A05]/40 backdrop-blur-[20px] border-b border-[#00FF41]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out flex justify-between items-center px-6 md:px-12 h-20">
      <div className="text-2xl font-black tracking-tighter text-[#ebffe2] font-headline flex items-center gap-2">
        <span className="material-symbols-outlined text-[#00FF41]">
          security
        </span>
        CYBER_DASH
      </div>
      <div className="hidden md:flex items-center gap-8 font-headline uppercase tracking-widest text-sm">
        <a
          className="text-[#00FF41] font-bold border-b border-[#00FF41] pb-1 hover:bg-[#00FF41]/5 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]"
          href="#"
        >
          INTEL
        </a>
        <a
          className="text-[#ebffe2]/60 hover:text-[#ebffe2] hover:bg-[#00FF41]/5 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] pb-1 transition-all"
          href="#"
        >
          INFILTRATE
        </a>
        <a
          className="text-[#ebffe2]/60 hover:text-[#ebffe2] hover:bg-[#00FF41]/5 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] pb-1 transition-all"
          href="#"
        >
          NODES
        </a>
        <a
          className="text-[#ebffe2]/60 hover:text-[#ebffe2] hover:bg-[#00FF41]/5 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] pb-1 transition-all"
          href="#"
        >
          PROTOCOLS
        </a>
      </div>
      <button className="hidden md:flex bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded font-headline text-sm uppercase tracking-wider font-bold hover:brightness-110 active:scale-95 transition-all">
        INITIALIZE
      </button>
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  );
}
