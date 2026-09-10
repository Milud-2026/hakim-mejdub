import React from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, ArrowLeft, HeartHandshake, EyeOff, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import hakimLogo from '../assets/images/hakim_majdoub_logo_1789050682312.jpg';

interface HeroProps {
  language: Language;
  onContactClick: () => void;
  onProcessClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onContactClick,
  onProcessClick,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Cinematic subtle central glow matching the photo colors: emerald, ruby red, and imperial gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-emerald-900/20 via-[#6b0f1a]/15 to-amber-500/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Emblem Presentation - Unified with site canvas without harsh borders */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative group">
            {/* Ambient emerald & gold multi-layer glow behind emblem */}
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-emerald-600/30 via-amber-500/25 to-[#6b0f1a]/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-1 rounded-full bg-gradient-to-b from-amber-300/40 via-emerald-800/40 to-amber-500/20 shadow-2xl shadow-emerald-950/80">
              <img
                src={hakimLogo}
                alt="الشيخ حكيم مجذوب 🇲🇦"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover object-center ring-2 ring-amber-400/80 shadow-inner group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Moroccan seal badge overlay */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#030708] border border-amber-400/60 shadow-lg text-[11px] font-bold text-amber-300 flex items-center gap-1.5 whitespace-nowrap font-serif">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{isRtl ? 'الشيخ حكيم مجذوب 🇲🇦' : 'Cheikh Hakim Majdoub 🇲🇦'}</span>
            </div>
          </div>
        </div>

        {/* Discrete upper tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Hero Title */}
        <h1
          id="hero-main-title"
          className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.25] ${
            isRtl ? 'font-serif' : ''
          }`}
        >
          <span className="gold-shimmer block mb-2">{t.hero.title}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons with emerald & gold styling */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            id="hero-primary-cta"
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-slate-950" />
            <span>{t.hero.ctaPrimary}</span>
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 text-slate-950" />
            ) : (
              <ArrowRight className="w-4 h-4 text-slate-950" />
            )}
          </button>

          <button
            id="hero-secondary-cta"
            onClick={onProcessClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#07130c]/90 hover:bg-emerald-950/60 border border-emerald-700/40 hover:border-amber-400/50 text-slate-200 hover:text-white font-medium text-base transition-all cursor-pointer backdrop-blur-sm shadow-sm"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>

        {/* Reassurance Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-xs sm:text-sm text-slate-300 font-medium">
            <EyeOff className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.hero.guarantees[0].label}</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-xs sm:text-sm text-slate-300 font-medium">
            <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.hero.guarantees[1].label}</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-xs sm:text-sm text-slate-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.hero.guarantees[2].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
