import { lang } from "next/root-params";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionary";
import { defaultLocale, isLocale } from "@/lib/i18n/locales";

export default async function NotFound() {
  const value = await lang();
  const locale = isLocale(value) ? value : defaultLocale;
  const { notFound: copy } = await getDictionary(locale);
  return <main className="container section not-found">
    {/* React hoists these even when Next renders the HTTP error fallback. */}
    <title>{copy.title}</title>
    <meta name="description" content={copy.description} />
    <p className="eyebrow">404</p>
    <h1>{copy.title}</h1>
    <p className="body-copy">{copy.description}</p>
    <a className="button dark" href={`/${locale}`}>{copy.homeLabel}</a>
    <nav aria-label={copy.languageLabel}><Link href="/id" lang="id" hrefLang="id" prefetch={false}>Bahasa Indonesia</Link><Link href="/en" lang="en" hrefLang="en" prefetch={false}>English</Link></nav>
  </main>;
}
