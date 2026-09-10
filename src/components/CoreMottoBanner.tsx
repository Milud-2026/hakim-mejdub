import React from 'react';
import { Scale, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CoreMottoBannerProps {
  language: Language;
}

export const CoreMottoBanner: React.FC<CoreMottoBannerProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="ethical-pledge-card"
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#071710]/80 to-[#6b0f1a]/20 border border-amber-500/30 p-6 sm:p-8 shadow-xl shadow-black/60"
        >
          {/* Subtle gold and emerald accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/40 via-amber-400 to-[#6b0f1a]/40" />

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-900/30 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-300 shadow-inner">
              <Scale className="w-7 h-7" />
            </div>

            <div className="flex-1 text-center md:text-start">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'الميثاق الأخلاقي الأساسي' : 'Engagement Déontologique'}</span>
              </div>
              <p
                id="core-motto-statement"
                className="text-base sm:text-lg md:text-xl font-medium text-slate-100 leading-relaxed font-serif"
              >
                « {t.coreMotto.statement} »
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal">
                {t.coreMotto.sub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
