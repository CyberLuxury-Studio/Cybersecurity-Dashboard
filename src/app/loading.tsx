export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#09090b]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
        <p className="font-mono text-sm tracking-widest text-emerald-500 animate-pulse">
          SCANNING NETWORK...
        </p>
      </div>
    </div>
  );
}
