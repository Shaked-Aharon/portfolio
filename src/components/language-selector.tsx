// // LanguageSelector.tsx
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSelector: React.FC = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lang: 'en' | 'he') => {
//     i18n.changeLanguage(lang);
//     setDirection(lang);
//   };

//   const setDirection = (lang: 'en' | 'he') => {
//     document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
//   };

//   return (
//     <div className="flex items-center space-x-4 p-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
//     <button
//       onClick={() => changeLanguage('en')}
//       className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition duration-200 ${
//         i18n.language === 'en' ? 'border-green-500' : 'border-gray-600'
//       } hover:border-green-400`}
//     >
//       <span role="img" aria-label="English" className="text-white">
//         🇺🇸
//       </span>
//     </button>
//     <button
//       onClick={() => changeLanguage('he')}
//       className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition duration-200 ${
//         i18n.language === 'he' ? 'border-green-500' : 'border-gray-600'
//       } hover:border-green-400`}
//     >
//       <span role="img" aria-label="Hebrew" className="text-white">
//         🇮🇱
//       </span>
//     </button>
//   </div>
//   );
// };

// export default LanguageSelector;

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import translateIcon from '../assets/translate-icon.svg';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: 'en' | 'he') => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    setDirection(lang);
    setIsOpen(false); // Close dropdown after selecting
  };

  const setDirection = (lang: 'en' | 'he') => {
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
  };

  // Handle outside click to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    setDirection(i18n.language as any)
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200 mx-4"
      >
        <span role="img" aria-label="Language" className="text-white">
          <img src={translateIcon} alt="" width={24}/>
        </span>
      </button>
      {isOpen && (
        <div className={"absolute mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-2 " + (i18n.language === 'en' ? 'right-0 ' : 'left-0 ')}>
          <button
            onClick={() => changeLanguage('en')}
            className={`flex items-center justify-center w-full p-2 rounded-md transition duration-200 ${
              i18n.language === 'en' ? 'bg-green-700 text-white' : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            {/* 🇺🇸 English */}
            {t('LanguageSelector.EN')}
          </button>
          <button
            onClick={() => changeLanguage('he')}
            className={`flex items-center justify-center w-full p-2 rounded-md mt-2 transition duration-200 ${
              i18n.language === 'he' ? 'bg-green-700 text-white' : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            {t('LanguageSelector.HE')}
            {/* 🇮🇱 Hebrew */}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
