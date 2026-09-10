import React from 'react';
import { HeartHandshake, ShieldAlert, Sparkles, Stethoscope, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import hakimPortrait from '../assets/images/hakim_portrait_coastal_1789050700149.jpg';

interface PhilosophySectionProps {
  language: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="philosophy" className="py-20 relative z-10 border-t border-emerald-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.philosophy.tag}</span>
          </div>
          <h2
            id="philosophy-title"
            className="text-2xl sm:text-4xl font-bold text-white mb-6 font-serif"
          >
            <span className="gold-shimmer">{t.philosophy.title}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.philosophy.body}
          </p>
        </div>

        {/* Feature Grid with Hakim Portrait & Medical Notice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Portrait Visual of Hakim Majdoub */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-600/30 via-amber-500/20 to-[#6b0f1a]/30 blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-[#07130c] shadow-2xl max-w-[280px]">
                <img
                  src={hakimPortrait}
                  alt="الحكيم مجذوب 🇲🇦"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-gradient-to-t from-[#030708] via-[#07130c] to-transparent text-center border-t border-amber-500/20">
                  <p className="text-xs font-bold text-amber-300 font-serif">
                    {language === 'ar' ? 'الحكيم مجذوب 🇲🇦' : 'Al-Hakim Al-Majdoub 🇲🇦'}
                  </p>
                  <p className="text-[10px] text-emerald-400">
                    {language === 'ar' ? 'أصالة الموروث المغربي ورجاحة الرأي' : 'Tradition & Sagesse Marocaine'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Priority Box & Ethics */}
          <div className="lg:col-span-8 space-y-4">
            <div
              id="medical-priority-notice"
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#07130c] to-[#6b0f1a]/20 border border-amber-500/30 flex items-start sm:items-center gap-4 text-amber-200 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-300">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-1">
                  {language === 'ar' ? 'توضيح طبي حاسم' : 'Rappel médical déterminant'}
                </h3>
                <p className="text-sm sm:text-base text-amber-100/90 font-medium leading-relaxed">
                  {t.philosophy.medicalNotice}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs text-slate-300 leading-relaxed flex items-center gap-3">
              <Compass className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                {language === 'ar'
                  ? 'منهج الشيخ حكيم مجذوب يرتكز على الصدق، الأمانة، والنية الصافية دون أي ابتزاز أو مساومة.'
                  : 'L’approche de Hakim Majdoub repose sur la bienveillance, la droiture et l’authenticité des traditions marocaines.'}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.philosophy.commitments.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#07130c]/70 border border-emerald-900/40 hover:border-amber-500/40 transition-all duration-300 shadow-lg group hover:bg-[#0a1e13]/80"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-amber-300 mb-4 group-hover:scale-105 transition-transform">
                {idx === 0 && <HeartHandshake className="w-5 h-5 text-amber-300" />}
                {idx === 1 && <ShieldAlert className="w-5 h-5 text-amber-300" />}
                {idx === 2 && <Sparkles className="w-5 h-5 text-amber-300" />}
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 font-serif group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
