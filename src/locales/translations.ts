import { ConvertedToObjectType, TranslationJsonType } from './types';


export const translations: ConvertedToObjectType<TranslationJsonType> = {} as any;


export const convertJsonToObject = (
  json: any,
  objToConvertTo = translations,
  current?: string,
) => {
  Object.keys(json).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof json[key] === 'object') {
      objToConvertTo[key] = {};
      convertJsonToObject(json[key], objToConvertTo[key], currentLookupKey);
    } else {
      objToConvertTo[key] = currentLookupKey;
    }
  });
};

