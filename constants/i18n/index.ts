import { World } from "@doubco/world";

import tr from "./translations/tr.json";
import en_US from "./translations/en-US.json";
import nextConfig from "../../next.config";
import { NextRouter } from "next/dist/client/router";

const { i18n } = nextConfig;

const defaultLanguage = i18n?.defaultLocale || "en-US";
const locales = i18n?.locales || [defaultLanguage];
export const translations = {
  tr,
  // "en-US": en_US,
};

export const generateWorldInstance = (router: NextRouter) => {
  const instance = new World({
    locale: router.locale || defaultLanguage,
    locales: locales,
    fallbackLocale: defaultLanguage,
    translations,
  });

  return instance;
};
