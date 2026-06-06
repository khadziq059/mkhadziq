import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center gap-10">

        {/* Logo / Inisial */}
        <div className="relative">

          <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg shadow-violet-700/40">
            <img
                src="../assets/favicon.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
            />
          </div>
        </div>

        {/* Nama & Subtitle */}
        <div className="text-center">
          
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            {"Loading assets..."}
          </p>
        </div>

        {/* Progress */}
        <div className="flex flex-col items-center gap-3 w-56">
          <div className="w-full h-0.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-zinc-600 text-xs tabular-nums">{progress}%</span>
        </div>

      </div>
    </div>
  );
};

export default Preloader;