import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types';

interface MobileStickyBarProps {
  language: Language;
  whatsappNumber: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  language,
  whatsappNumber,
}) => {
  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');
  const waWelcomeMessage = encodeURIComponent(
    language === 'ar'
      ? 'السلام عليكم، كنتواصل معكم من خلال موقع الحكيم مجذوب 🇲🇦 بخصوص استشارة واستماع روحي.'
      : 'Bonjour, je vous contacte depuis le site de Hakim Majdoub 🇲🇦 pour une demande d’accompagnement et d’écoute.'
  );

  return (
    <div
      id="mobile-sticky-action-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050814]/95 backdrop-blur-lg border-t border-amber-500/20 p-2.5 px-4 flex items-center gap-3 shadow-2xl"
    >
      {/* WhatsApp Action */}
      <a
        href={`https://wa.me/${cleanWaNumber}?text=${waWelcomeMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-transform active:scale-95"
      >
        <MessageCircle className="w-4 h-4" />
        <span>{language === 'ar' ? 'مراسلة عبر واتساب' : 'WhatsApp direct'}</span>
      </a>

      {/* Call Action */}
      <a
        href={`tel:${whatsappNumber}`}
        className="flex-1 py-3 px-3 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-200 active:bg-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-95"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>{language === 'ar' ? 'اتصال مباشر' : 'Appeler'}</span>
      </a>
    </div>
  );
};
