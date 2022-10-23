import { ConvertedToObjectType, TranslationJsonType } from './types';


export const translations: ConvertedToObjectType<TranslationJsonType> = {} as any;


export const convertJsonToObject = (
  json: any,
  objConvertTo = translations,
  current?: string,
) => {
  Object.keys(json).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof json[key] === 'object') {
      objConvertTo[key] = {};
      convertJsonToObject(json[key], objConvertTo[key], currentLookupKey);
    } else {
      objConvertTo[key] = currentLookupKey;
    }
  });
};

