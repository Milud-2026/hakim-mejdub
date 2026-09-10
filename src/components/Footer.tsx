import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import hakimLogo from '../assets/images/hakim_majdoub_logo_1789050682312.jpg';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer id="footer" className="bg-[#020504] border-t border-emerald-950/60 pt-16 pb-28 sm:pb-16 relative z-10 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={hakimLogo}
                  alt="حكيم مجذوب 🇲🇦"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400/60 shadow-md shadow-emerald-950/50"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-bold text-amber-200 font-serif">
                {t.meta.brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-900/40 text-[11px] text-amber-300/80">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'ar' ? 'مواكبة أخلاقية تحترم العلم والطب' : 'Accompagnement éthique & respectueux'}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-amber-300 transition-colors">
                  {t.nav.philosophy}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-300 transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#awareness" className="hover:text-amber-300 transition-colors">
                  {t.nav.awareness}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Medical Framework */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              {t.footer.legalTitle}
            </h4>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300/90 leading-relaxed space-y-2">
              <p className="font-medium text-amber-300/90">
                {language === 'ar' ? 'تنبيه صريح وإخلاء مسؤولية:' : 'Avertissement explicite :'}
              </p>
              <p>
                {t.footer.disclaimerText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>{language === 'ar' ? 'خدمة مكرسة للطمأنينة وحفظ الكرامة' : 'Dédié à la sérénité et à la dignité'}</span>
            <Heart className="w-3 h-3 text-amber-500 fill-amber-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
