import React from 'react';
import { Eye, HeartCrack, Sparkles, Compass, AlertCircle, Users, Wind } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface DomainsSectionProps {
  language: Language;
}

export const DomainsSection: React.FC<DomainsSectionProps> = ({ language }) => {
  const t = translations[language];

  const getDomainIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Eye className="w-5 h-5 text-amber-300" />;
      case 1:
        return <HeartCrack className="w-5 h-5 text-amber-300" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      case 3:
        return <Wind className="w-5 h-5 text-amber-300" />;
      case 4:
        return <Compass className="w-5 h-5 text-amber-300" />;
      case 5:
        return <Users className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section id="domains" className="py-20 relative z-10 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.domains.tag}</span>
          </div>
          <h2
            id="domains-title"
            className="text-2xl sm:text-4xl font-bold text-white mb-4 font-serif"
          >
            <span className="gold-shimmer">{t.domains.title}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto mb-6">
            {t.domains.subtitle}
          </p>

          {/* Explicit Mandated Cautious Formulation Banner */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 leading-relaxed max-w-2xl mx-auto flex items-center gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.domains.disclaimerNote}</span>
          </div>
        </div>

        {/* 6 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.domains.items.map((item, idx) => (
            <div
              key={idx}
              id={`domain-card-${idx}`}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/85 to-[#080d21]/85 border border-slate-800/90 hover:border-amber-500/35 transition-all duration-300 shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-amber-500/25 flex items-center justify-center group-hover:bg-amber-500/15 group-hover:border-amber-400/50 transition-colors">
                    {getDomainIcon(idx)}
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800/90 border border-slate-700 text-amber-300/80 font-medium">
                    {item.disclaimer}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 font-serif">
                  {item.title}
                </h3>
                <p className="text-xs text-amber-400/80 font-medium mb-3">
                  {item.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 italic">
                {language === 'ar'
                  ? 'يتم التطرق إليه في إطار التقاليد والأدعية دون ادعاء طبي'
                  : 'Abordé dans le respect des traditions, sans allégation scientifique'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
