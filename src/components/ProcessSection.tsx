import React from 'react';
import { Sparkles, MessageSquareText, Ear, Search, CheckCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ProcessSectionProps {
  language: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ language }) => {
  const t = translations[language];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquareText className="w-5 h-5 text-amber-300" />;
      case 1:
        return <Ear className="w-5 h-5 text-amber-300" />;
      case 2:
        return <Search className="w-5 h-5 text-amber-300" />;
      case 3:
        return <CheckCheck className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 relative z-10 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.process.tag}</span>
          </div>
          <h2
            id="how-it-works-title"
            className="text-2xl sm:text-4xl font-bold text-white mb-4 font-serif"
          >
            <span className="gold-shimmer">{t.process.title}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.process.steps.map((step, idx) => (
            <div
              key={step.step}
              id={`process-step-${step.step}`}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070c1f]/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Step Number Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold font-serif text-amber-400/40 group-hover:text-amber-400/80 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-400/50 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 font-serif">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed">
                {step.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
