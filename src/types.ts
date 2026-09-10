export type Language = 'ar' | 'fr';

export interface NavItem {
  id: string;
  label: string;
}

export interface WhyUsCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface DomainItem {
  title: string;
  subtitle: string;
  description: string;
  disclaimer: string;
}

export interface ProhibitedItem {
  text: string;
  explanation: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  city: string;
  preferredLanguage: string;
  subject: string;
  message: string;
}
