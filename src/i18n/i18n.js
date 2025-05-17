import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEng from "../locale/en";
import translateRu from "../locale/ru";
import translateUz from "../locale/uz";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "ru",
  resources: {
    en: { translation: translateEng },
    ru: { translation: translateRu },
    uz: { translation: translateUz },
  },
});
export default i18n;
