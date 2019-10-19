import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './languages/en/translation.json';
import es from './languages/es/translation.json';
import ptBR from './languages/pt_br/translation.json';

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
  resources: {
    en: {
      translation: en
    },
    "pt-BR": {
        translation: ptBR
    },
    es: {
        translation: es
    }
  },
  fallbackLng: "pt_br",

  interpolation: {
    escapeValue: false
  }
});

export default i18next;
