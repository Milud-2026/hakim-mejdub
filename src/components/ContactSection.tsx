import React, { useState } from 'react';
import { MessageCircle, Phone, Send, CheckCircle2, ShieldCheck, Lock, Edit3, Save } from 'lucide-react';
import { Language, ContactFormData } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  language: Language;
  whatsappNumber: string;
  onUpdateWhatsappNumber: (num: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  whatsappNumber,
  onUpdateWhatsappNumber,
}) => {
  const t = translations[language];

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    whatsapp: '',
    city: 'الدار البيضاء',
    preferredLanguage: language === 'ar' ? 'الدارجة المغربية' : 'Français',
    subject: 'consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Admin / site owner editable WhatsApp number toggle
  const [isEditingNumber, setIsEditingNumber] = useState(false);
  const [tempNumber, setTempNumber] = useState(whatsappNumber);

  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsappMessage = (data: ContactFormData) => {
    const subjectLabel =
      t.contact.form.subjectOptions.find((o) => o.value === data.subject)?.label ||
      data.subject;

    if (language === 'ar') {
      return encodeURIComponent(
        `السلام عليكم ورحمة الله،\n` +
        `اسمي: ${data.fullName || 'فاعل خير'}\n` +
        `المدينة: ${data.city}\n` +
        `رقم الهاتف: ${data.phone || 'غير محدد'}\n` +
        `الموضوع: ${subjectLabel}\n` +
        `اللغة المفضلة: ${data.preferredLanguage}\n` +
        `نص الاستفسار: ${data.message || 'أرغب في استشارة واستماع أولي.'}`
      );
    } else {
      return encodeURIComponent(
        `Bonjour,\n` +
        `Nom: ${data.fullName || 'Anonyme'}\n` +
        `Ville: ${data.city}\n` +
        `Téléphone: ${data.phone || 'Non précisé'}\n` +
        `Objet: ${subjectLabel}\n` +
        `Langue d'échange: ${data.preferredLanguage}\n` +
        `Message: ${data.message || 'Demande d’accompagnement et écoute.'}`
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSaveNumber = () => {
    onUpdateWhatsappNumber(tempNumber);
    setIsEditingNumber(false);
  };

  const directWaText = encodeURIComponent(
    language === 'ar'
      ? 'السلام عليكم، كنتواصل معكم من خلال موقع سَكِينَة بخصوص استشارة واستماع روحي بكل سرية.'
      : 'Bonjour, je vous contacte depuis le site Sakina pour une demande d’accompagnement confidentiel.'
  );

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>
          <h2
            id="contact-title"
            className="text-2xl sm:text-4xl font-bold text-white mb-4 font-serif"
          >
            <span className="gold-shimmer">{t.contact.title}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct WhatsApp & Discretion Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout Card */}
            <div
              id="whatsapp-direct-card"
              className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/40 via-slate-900/90 to-slate-900/90 border border-emerald-500/40 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    {t.contact.form.directWhatsapp}
                  </h3>
                  <p className="text-xs text-emerald-300 font-medium">
                    {language === 'ar' ? 'رد سريع ومباشر' : 'Réponse rapide et confidentielle'}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {language === 'ar'
                  ? 'إذا كنت تفضل التواصل الفوري، يمكنك مراسلتنا مباشرة على تطبيق الواتساب بنقرة واحدة.'
                  : 'Si vous préférez un échange immédiat, vous pouvez nous écrire directement sur WhatsApp en un clic.'}
              </p>

              <a
                id="whatsapp-direct-btn"
                href={`https://wa.me/${cleanWaNumber}?text=${directWaText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 hover:shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.contact.form.directWhatsapp}</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${whatsappNumber}`}
                className="w-full mt-3 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t.contact.form.directCall} ({whatsappNumber})</span>
              </a>

              {/* Configurable Number Banner for Site Owner */}
              <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span>{t.contact.form.noteConfigurable}</span>
                  <button
                    onClick={() => setIsEditingNumber(!isEditingNumber)}
                    className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer font-medium"
                    title="تعديل رقم الهاتف"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>{language === 'ar' ? 'تعديل' : 'Modifier'}</span>
                  </button>
                </div>

                {isEditingNumber ? (
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="text"
                      value={tempNumber}
                      onChange={(e) => setTempNumber(e.target.value)}
                      className="w-full px-2.5 py-1 text-xs rounded bg-slate-950 border border-amber-500/50 text-white focus:outline-none"
                      placeholder="+212600000000"
                    />
                    <button
                      onClick={handleSaveNumber}
                      className="px-2.5 py-1 bg-amber-500 text-slate-950 rounded font-bold text-xs flex items-center gap-1 hover:bg-amber-400 cursor-pointer"
                    >
                      <Save className="w-3 h-3" />
                      <span>{language === 'ar' ? 'حفظ' : 'OK'}</span>
                    </button>
                  </div>
                ) : (
                  <p className="font-mono text-xs text-amber-300/90 font-semibold">{whatsappNumber}</p>
                )}
              </div>
            </div>

            {/* Confidentiality Guarantee Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-300 font-serif font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>{language === 'ar' ? 'ضمانات السرية والأمان' : 'Garantie de discrétion absolue'}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'ar'
                  ? 'جميع المعلومات والرسائل تُعامل بسرية مهنية تامة، ولا يتم تسجيلها أو مشاركتها تحت أي ظرف.'
                  : 'Toutes les informations confiées demeurent strictement confidentielles et ne font l’objet d’aucun archivage publicitaire.'}
              </p>
            </div>
          </div>

          {/* Right Column: Confidential Contact Form */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-wrapper"
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#090e24]/90 border border-slate-800 shadow-xl"
            >
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-serif">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t.contact.form.successDesc}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/${cleanWaNumber}?text=${buildWhatsappMessage(formData)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{language === 'ar' ? 'فتح في واتساب بالرسالة المجهزة' : 'Ouvrir sur WhatsApp'}</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      {language === 'ar' ? 'إرسال طلب آخر' : 'Envoyer un autre message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Nom & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-serif">
                        {t.contact.form.fullName} *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t.contact.form.fullNamePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 text-white placeholder-slate-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-serif">
                        {t.contact.form.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 text-white placeholder-slate-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: WhatsApp (if different) & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-serif">
                        {t.contact.form.whatsapp}
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder={t.contact.form.whatsappPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 text-white placeholder-slate-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-serif">
                        {t.contact.form.city}
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 text-white text-sm transition-colors"
                      >
                        {t.contact.form.cityOptions.map((c, i) => (
                          <option key={i} value={c} className="bg-slate-950 text-white">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Preferred Language & Subject dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-serif">
                        {t.contact.form.preferredLanguage}
                      </label>
                      <select
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-amber-500/60 text-white text-sm"
                      >
                        <option value="الدارجة المغربية" className="bg-slate-950 text-white">
                          🇲🇦 {t.contact.form.langDarija}
                        </option>
                        <option value="Français" className="bg-slate-950 text-white">
                          🇫🇷 {t.contact.form.langFr}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-serif">
                        {t.contact.form.subject} *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-amber-500/60 text-white text-sm"
                      >
                        {t.contact.form.subjectOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-slate-950 text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-serif">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 text-white placeholder-slate-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.form.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>{t.contact.form.submitBtn}</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    {language === 'ar'
                      ? 'إرسال هذه الاستمارة لا يترتب عنه أي التزام مالي أو إكراه.'
                      : 'L’envoi de cette demande n’engage à aucun paiement ni démarche contraignante.'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
