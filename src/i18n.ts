import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import he from './locales/he.json';

// Detect the user's browser language
const browserLanguage = navigator.language.split('-')[0]; // e.g., 'en' or 'he'
const selectedLang = () => {
    const savedLang = localStorage.getItem('lang');
    if(savedLang){
        return savedLang;
    }
    return ['en', 'he'].includes(browserLanguage) ? browserLanguage : 'en';
}
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      he: { translation: he },
    },
    lng: selectedLang(), // Set based on the browser or fallback to 'en'
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
