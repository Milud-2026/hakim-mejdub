import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './data/translations';
import { AtmosphereBackground } from './components/AtmosphereBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreMottoBanner } from './components/CoreMottoBanner';
import { PhilosophySection } from './components/PhilosophySection';
import { AntiDeceptionSection } from './components/AntiDeceptionSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { ProhibitedSection } from './components/ProhibitedSection';
import { DomainsSection } from './components/DomainsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  // Default language is Moroccan Darija ('ar'), fully switchable to French ('fr')
  const [language, setLanguage] = useState<Language>('ar');

  // Official Moroccan WhatsApp phone number (configurable by site owner in UI)
  const [whatsappNumber, setWhatsappNumber] = useState<string>('+212661234567');

  // Keep HTML document dir and lang attributes in sync
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'ar' ? 'ar' : 'fr';

    // Update title and meta description dynamically
    const currentTrans = translations[language];
    document.title = currentTrans.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        language === 'ar'
          ? 'مواكبة واستماع روحي في المغرب في إطار أخلاقي شفاف وسري، دون وعود كاذبة أو استغلال للخوف.'
          : 'Accompagnement spirituel et traditionnel au Maroc dans un cadre éthique, bienveillant et transparent. Écoute confidentielle sans fausses promesses.'
      );
    }
  }, [language]);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'ar' ? 'fr' : 'ar'));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen relative text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 ${
        language === 'ar' ? 'dir-rtl' : 'dir-ltr'
      }`}
    >
      {/* Mystical subtle particle & sacred geometry atmospheric canvas */}
      <AtmosphereBackground />

      {/* Transparent Sticky Header with Language Switcher and CTA */}
      <Header
        language={language}
        onLanguageToggle={handleLanguageToggle}
        whatsappNumber={whatsappNumber}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Cinematic Hero */}
        <Hero
          language={language}
          onContactClick={scrollToContact}
          onProcessClick={scrollToProcess}
        />

        {/* The Fundamental Ethical Motto Banner */}
        <CoreMottoBanner language={language} />

        {/* Notre Philosophie / الصراحة قبل كل شيء */}
        <PhilosophySection language={language} />

        {/* Section Anti-Inganno: ماشي أي مشكل هو سحر */}
        <AntiDeceptionSection language={language} />

        {/* Pourquoi Nous Contacter / علاش تختار تتواصل معنا (6 cards) */}
        <WhyUsSection language={language} />

        {/* Comment ça marche / كيفاش كتم المتابعة (4 steps) */}
        <ProcessSection language={language} />

        {/* Ce que nous ne faisons pas / شنو ما كانديروش (6 red-cross points) */}
        <ProhibitedSection language={language} />

        {/* Domaines d'Accompagnement / مجالات المتابعة بحذر واحترام */}
        <DomainsSection language={language} />

        {/* Testimonials (Transparent & Ethical Placeholders) */}
        <TestimonialsSection language={language} />

        {/* Questions Fréquentes (Bilingual FAQ Accordion) */}
        <FaqSection language={language} />

        {/* Ultra-Professional Confidential Contact Section */}
        <ContactSection
          language={language}
          whatsappNumber={whatsappNumber}
          onUpdateWhatsappNumber={setWhatsappNumber}
        />
      </main>

      {/* Complete Footer with Disclaimers */}
      <Footer language={language} />

      {/* Mobile Sticky Action Bar (WhatsApp & Call) */}
      <MobileStickyBar
        language={language}
        whatsappNumber={whatsappNumber}
      />
    </div>
  );
}
