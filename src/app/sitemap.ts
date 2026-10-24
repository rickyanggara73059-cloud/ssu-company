import type { MetadataRoute } from "next";
import { languageAlternates, siteIndexable, siteOrigin } from "@/lib/site";
import { locales } from "@/lib/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteOrigin || !siteIndexable) return [];
  const origin = siteOrigin;
  return locales.map(locale => ({ url: `${origin}/${locale}`, alternates: { languages: languageAlternates(origin) } }));
}
