import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import vn from './vn/translation.json';
import { convertLanguageJsonToObject } from './translations';

export const LANGUAGE_EN = 'en';
export const LANGUAGE_VN = 'vn';
// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(en);
convertLanguageJsonToObject(vn);

export const translationsJson = {
  [LANGUAGE_EN]: {
    translation: en,
  },
  [LANGUAGE_VN]: {
    translation: vn,
  },
};

export const languages = Object.keys(translationsJson);
export const DEFAULT_LANGUAGE = LANGUAGE_EN;

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    fallbackLng: DEFAULT_LANGUAGE,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18next

