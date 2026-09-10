import React from 'react';
import { AlertCircle, Stethoscope, Brain, Sun, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AntiDeceptionSectionProps {
  language: Language;
}

export const AntiDeceptionSection: React.FC<AntiDeceptionSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="awareness" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Graphically prominent anti-deception container */}
        <div
          id="anti-deception-banner"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-950/40 via-[#07130c]/95 to-[#6b0f1a]/25 border-2 border-amber-500/40 p-8 sm:p-12 shadow-2xl shadow-black/80"
        >
          {/* Subtle decorative background circles */}
          <div className="absolute -right-24 -top-24 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-[#6b0f1a]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>{t.antiDeception.tag}</span>
            </div>

            <h2
              id="anti-deception-title"
              className="text-2xl sm:text-4xl font-bold text-white mb-6 font-serif tracking-tight"
            >
              <span className="gold-shimmer block">{t.antiDeception.title}</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {t.antiDeception.body}
            </p>
          </div>

          {/* Standout Medical Directive Banner */}
          <div
            id="medical-referral-banner"
            className="mb-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-[#0a2316] to-emerald-950/60 border border-emerald-500/50 flex items-center justify-center gap-3 text-emerald-200 text-center shadow-lg"
          >
            <Stethoscope className="w-6 h-6 text-emerald-400 shrink-0" />
            <span className="text-base sm:text-lg font-bold">
              {t.antiDeception.actionNotice}
            </span>
          </div>

          {/* Rational & Ethical Clarification Grid */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider text-center mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.antiDeception.guideTitle}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.antiDeception.guideItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#030708]/80 border border-emerald-900/40 hover:border-amber-500/40 transition-all flex items-start gap-4 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-300 mt-0.5">
                    {idx === 0 && <Stethoscope className="w-4 h-4 text-amber-400" />}
                    {idx === 1 && <Brain className="w-4 h-4 text-amber-400" />}
                    {idx === 2 && <Sun className="w-4 h-4 text-amber-400" />}
                    {idx === 3 && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-200 mb-1 font-serif">
                      {item.cause}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
