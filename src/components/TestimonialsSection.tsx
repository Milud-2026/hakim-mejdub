import React from 'react';
import { ShieldCheck, Lock, Sparkles, MessageSquareQuote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TestimonialsSectionProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.testimonials.tag}</span>
          </div>
          <h2
            id="testimonials-title"
            className="text-2xl sm:text-4xl font-bold text-white mb-4 font-serif"
          >
            <span className="gold-shimmer">{t.testimonials.title}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Elegant Ethical Placeholder Card */}
        <div
          id="testimonials-placeholder-card"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#080d22]/90 border border-amber-500/25 p-8 sm:p-12 text-center shadow-xl shadow-black/50"
        >
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-6 text-amber-300">
            <MessageSquareQuote className="w-8 h-8" />
          </div>

          <p className="text-xl sm:text-2xl font-serif text-amber-200/95 italic mb-6 max-w-2xl mx-auto leading-relaxed">
            « {t.testimonials.cardNotice} »
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {t.testimonials.explanation}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/70 border border-slate-800">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>{t.testimonials.badgeConfidentiality}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/70 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t.testimonials.badgeEthics}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
