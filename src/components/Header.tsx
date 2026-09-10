import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import hakimLogo from '../assets/images/hakim_majdoub_logo_1789050682312.jpg';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  whatsappNumber: string;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageToggle,
  whatsappNumber,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#awareness', label: t.nav.awareness },
    { href: '#domains', label: t.nav.domains },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');
  const waWelcomeMessage = encodeURIComponent(
    language === 'ar'
      ? 'السلام عليكم، كنتواصل معكم من خلال موقع الحكيم مجذوب 🇲🇦 بخصوص استشارة واستماع روحي.'
      : 'Bonjour, je vous contacte depuis le site de Hakim Majdoub 🇲🇦 pour une demande d’accompagnement et d’écoute.'
  );

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030708]/92 backdrop-blur-md border-b border-amber-500/20 py-2.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#030708]/95 via-[#030708]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo - Unified with photo colors and emblem */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none"
          id="header-brand-logo"
        >
          {/* Logo image with soft emerald-gold halo for seamless blending */}
          <div className="relative flex items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-600/30 to-amber-500/30 blur-sm group-hover:blur-md transition-all" />
            <img
              src={hakimLogo}
              alt="حكيم مجذوب 🇲🇦"
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover object-center ring-2 ring-amber-400/70 shadow-lg shadow-emerald-950/60 group-hover:ring-amber-300 group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-bold tracking-wide text-amber-200 font-serif group-hover:text-amber-100 transition-colors">
                {t.meta.brandName}
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-emerald-400/90 font-medium tracking-tight">
              {language === 'ar' ? 'الشيخ الحكيم • مواكبة واستماع أخلاقي' : 'Sagesse & Écoute Spirituelle'}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-amber-200 hover:bg-emerald-950/30 transition-all font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Language Toggle + WhatsApp CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Prominent Bilingual Switch Button */}
          <button
            id="lang-toggle-btn"
            onClick={onLanguageToggle}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07130c]/80 border border-amber-500/30 text-xs font-semibold text-amber-200 hover:bg-amber-500/15 hover:border-amber-400/60 transition-all shadow-sm"
            aria-label="Changer de langue / تبديل اللغة"
            title={language === 'ar' ? 'Passer au Français' : 'التحويل إلى الدارجة المغربية'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-300" />
            <span>{language === 'ar' ? '🇲🇦 الدارجة / Français 🇫🇷' : '🇫🇷 Français / الدارجة 🇲🇦'}</span>
          </button>

          {/* Quick WhatsApp Button */}
          <a
            id="header-whatsapp-cta"
            href={`https://wa.me/${cleanWaNumber}?text=${waWelcomeMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950/60 hover:shadow-emerald-600/40 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.nav.whatsappBtn}</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onLanguageToggle}
            className="px-2.5 py-1 rounded-full bg-[#07130c]/90 border border-amber-500/30 text-[11px] font-semibold text-amber-200"
          >
            {language === 'ar' ? 'Français' : 'الدارجة'}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#07130c]/90 border border-emerald-900/40 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-5 bg-[#030708]/98 border-b border-amber-500/20 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-emerald-950/40 hover:text-amber-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={`https://wa.me/${cleanWaNumber}?text=${waWelcomeMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-md shadow-emerald-950/60"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.contact.form.directWhatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
