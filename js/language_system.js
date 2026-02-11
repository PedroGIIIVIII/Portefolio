import { BASE_PATH_JS, LANGUAGES_FORMATTING } from './constants.js';

let TRANSLATIONS_JSON = {};
let ActiveLang = LANGUAGES_FORMATTING.ENGLISH;

export function GetDefinedLang() {
    return ActiveLang;
}

export function GetTranslationFromKey(key) {
    if (TRANSLATIONS_JSON[ActiveLang])
    {
        return TRANSLATIONS_JSON[ActiveLang][key];
    }
    else 
    {
        return;
    }
;}

export async function SwitchLanguage(lang) {
    ActiveLang = lang;
}

function LoadTranslation(lang) {
    document.title = TRANSLATIONS_JSON[lang].title;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-translations]').forEach(el => {
        const key = el.getAttribute('data-translations');
        if (TRANSLATIONS_JSON[lang][key]) {
            el.textContent = TRANSLATIONS_JSON[lang][key];
        }
    });
}

window.SwitchLanguage = SwitchLanguage;