import {Locales} from '../optimizely/types/generated'

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'pl', 'sv'];


export const getLocales = () => {
    return LOCALES;
}

export const getValidLocale = (locale: string): Locales => {

    const validLocale = getLocales().includes(locale) ? locale : DEFAULT_LOCALE;
     return validLocale as Locales;
}

export const mapPathWithoutLocale = (path:string): string => {
    const parts = path.split('/').filter(Boolean);
    if(LOCALES.includes(parts[0]?? '') ){
        parts.shift();
    }
    return `${parts.join('/')}`;
}