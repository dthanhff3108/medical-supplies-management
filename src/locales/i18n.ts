import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import vn from './vn/translation.json';
import { convertJsonToObject } from './translations';

export const LANGUAGE_EN = 'en';
export const LANGUAGE_VN = 'vn';
// Create the 'translations' object to provide full intellisense support for the static json files.
convertJsonToObject(en);
convertJsonToObject(vn);

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
  .init({
    resources: translationsJson,
    fallbackLng: DEFAULT_LANGUAGE,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18next

