import React from 'react';
import { XCircle, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ProhibitedSectionProps {
  language: Language;
}

export const ProhibitedSection: React.FC<ProhibitedSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="prohibited" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>{t.prohibited.tag}</span>
          </div>
          <h2
            id="prohibited-title"
            className="text-2xl sm:text-4xl font-bold text-white mb-4 font-serif"
          >
            <span className="text-slate-100">{t.prohibited.title}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            {t.prohibited.subtitle}
          </p>
        </div>

        {/* 6 Clear Forbidden Actions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.prohibited.items.map((item, idx) => (
            <div
              key={idx}
              id={`prohibited-item-${idx}`}
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-rose-900/30 hover:border-rose-500/40 transition-all duration-300 shadow-lg shadow-black/40 flex flex-col justify-between"
            >
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center shrink-0 text-rose-400 mt-0.5">
                  <XCircle className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-base font-bold text-slate-100 leading-snug font-serif">
                  {item.text}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed ps-11">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
