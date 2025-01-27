/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "nl-NL" | "de-DE" | "fr-FR"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "Learn and master WinUI 3.",
  "nl-NL": "Leer en master WinUI 3",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    lightweight: "Lightweight",
    realtime: "Realtime",
    suspense: "Suspense",
    pagination: "Pagination",
    backendAgnostic: "Backend Agnostic",
    renderingStrategies: "SSR / SSG Ready",
    typescript: "TypeScript Ready",
    remoteLocal: "Remote + Local",
  },
  "fr-FR": {
    lightweight: "Léger",
    realtime: "Temps réel",
    backendAgnostic: "Indépendant du Backend",
  },
  "pt-BR": {
    lightweight: "Leve",
    realtime: "Tempo-real",
    suspense: "Suspense",
    pagination: "Paginação",
    backendAgnostic: "Backend Agnóstico",
    renderingStrategies: "Pronto para SSR / SSG",
    typescript: "Pronto para TypeScript",
    remoteLocal: "Remoto + Local",
  },
  ru: {
    lightweight: "Лёгкий",
    realtime: "В реальном времени",
    suspense: "Задержка",
    pagination: "Пагинация",
    backendAgnostic: "Бэкэнд-независимый",
    renderingStrategies: "SSR / SSG",
    typescript: "TypeScript",
    remoteLocal: "Удалённо + Локально",
  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US": "WinUI Blog helps you learn and master WinUI 3 with a modern docs with samples and templates.",
  "nl-NL": "WinUI Blog helpt you met het leeren and mastere van het programmeer taal WinUI 3 met een moderne docs met samples and templates.",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "nl-NL": "Vraag? Geef ons feedback →",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "nl-NL": "Bewerk deze pagina op github →",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "swr", text: "Powered by" },
  "es-ES": { utmSource: "swr_es-es", text: "Desarrollado por" },
  "fr-FR": { utmSource: "swr_fr-fr", text: "Propulsé par" },
  "pt-BR": { utmSource: "swr_pt-br", text: "Desenvolvido por" },
  "zh-CN": { utmSource: "swr_zh-cn", text: "由", suffix: "驱动" },
  ja: { utmSource: "swr_ja", text: "提供" },
  ko: { utmSource: "swr_ko", text: "Powered by" },
  ru: { utmSource: "swr_ru", text: "Работает на" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "nl-NL": "Op deze pagina",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "nl-NL": "Zoek documentatie...",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
"en-US": "Last updated on",
  "nl-NL": "laats geupdate op",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};
