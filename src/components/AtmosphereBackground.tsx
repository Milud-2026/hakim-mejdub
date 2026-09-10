import React, { useMemo } from 'react';

export const AtmosphereBackground: React.FC = () => {
  // Generate stable particles for subtle ambient starry effect
  const stars = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: `${(i * 17) % 97}%`,
      top: `${(i * 23) % 95}%`,
      size: (i % 3) + 1,
      opacity: 0.15 + ((i % 5) * 0.12),
      delay: (i % 7) * 0.8,
      duration: 3.5 + (i % 4),
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep atmospheric gradient base blending with the emblem's dark obsidian */}
      <div className="absolute inset-0 bg-[#030708]" />

      {/* Moroccan Emerald Green & Imperial Gold atmospheric nebulas */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-emerald-950/35 via-[#0a3d24]/20 to-transparent blur-3xl rounded-full" />
      <div className="absolute top-[20%] -left-36 w-[600px] h-[600px] bg-emerald-900/15 blur-[150px] rounded-full" />
      <div className="absolute top-[35%] -right-36 w-[650px] h-[650px] bg-[#6b0f1a]/15 blur-[160px] rounded-full" />
      <div className="absolute top-[65%] left-1/4 w-[700px] h-[500px] bg-amber-500/8 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[500px] bg-emerald-950/30 blur-3xl rounded-full" />

      {/* Delicate Moroccan 8-pointed star geometry watermark in corners */}
      <svg
        className="absolute top-8 right-6 w-96 h-96 text-amber-400/[0.025] -rotate-12 select-none"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,5 64,18 82,18 82,36 95,50 82,64 82,82 64,82 50,95 36,82 18,82 18,64 5,50 18,36 18,18 36,18" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <svg
        className="absolute bottom-20 left-6 w-88 h-88 text-emerald-400/[0.02] rotate-45 select-none"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,5 64,18 82,18 82,36 95,50 82,64 82,82 64,82 50,95 36,82 18,82 18,64 5,50 18,36 18,18 36,18" />
        <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Subtle floating particles */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-amber-200/50"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `pulse ${s.duration}s infinite ease-in-out ${s.delay}s`,
          }}
        />
      ))}

      {/* Authentic Moroccan texture overlay */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-70" />
    </div>
  );
};
