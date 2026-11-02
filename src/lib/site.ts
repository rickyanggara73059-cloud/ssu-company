import type { Metadata } from "next";
import type { CompanyCopy } from "./i18n/types";
import type { Locale } from "./i18n/locales";

// No origin is assumed. Owner confirmation and release approval are separate.
function configuredOrigin(): string | undefined {
  const value = process.env.SITE_URL?.trim();
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash || /^(localhost|127\.|\[::1\])/.test(url.hostname)) {
    throw new Error("SITE_URL must be a verified HTTPS origin without credentials, path, query, or fragment");
  }
  return url.origin;
}
export const siteOrigin = configuredOrigin();
export const siteIndexable = process.env.SITE_INDEXABLE === "true";
if (siteIndexable && !siteOrigin) throw new Error("Public indexing requires an owner-confirmed SITE_URL");

export function languageAlternates(origin: string) {
  return { id: `${origin}/id`, en: `${origin}/en`, "x-default": `${origin}/id` };
}

export function localizedMetadata(locale: Locale, copy: CompanyCopy): Metadata {
  const url = siteOrigin && siteIndexable ? `${siteOrigin}/${locale}` : undefined;
  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    robots: { index: siteIndexable, follow: siteIndexable },
    ...(url && siteOrigin ? {
      metadataBase: new URL(siteOrigin),
      alternates: { canonical: url, languages: languageAlternates(siteOrigin) },
    } : {}),
    openGraph: {
      type: "website",
      siteName: "PT. Selaras Sinergi Utama",
      title: copy.metadata.title,
      description: copy.metadata.description,
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: [locale === "id" ? "en_US" : "id_ID"],
      images: [{
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Selaras Sinergi Utama (SSU)",
      }],
      ...(url ? { url } : {}),
    },
  };
}
