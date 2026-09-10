import React from 'react';
import { Lock, HeartHandshake, ShieldCheck, CheckCircle2, Compass, Stethoscope, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WhyUsSectionProps {
  language: Language;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ language }) => {
  const t = translations[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lock':
        return <Lock className="w-5 h-5 text-amber-300" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-300" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-amber-300" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-300" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section id="why-us" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.whyUs.tag}</span>
          </div>
          <h2
            id="why-us-title"
            className="text-2xl sm:text-4xl font-bold text-white mb-4 font-serif"
          >
            <span className="gold-shimmer">{t.whyUs.title}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.cards.map((card) => (
            <div
              key={card.id}
              id={`why-card-${card.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#080d21]/80 border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 group relative overflow-hidden"
            >
              {/* Subtle gold top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/60 transition-all duration-500" />

              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-amber-500/25 flex items-center justify-center mb-5 group-hover:bg-amber-500/15 group-hover:border-amber-400/50 transition-colors shadow-inner">
                {getIcon(card.iconName)}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-serif">
                {card.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
