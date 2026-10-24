import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale } from "@/lib/i18n/locales";

// A real not-found route, never a fallback rendering of the company profile.
export function generateStaticParams() { return [{ missing: ["not-found"] }]; }
export default function MissingPage() { notFound(); }

export async function generateMetadata({ params }: PageProps<"/[lang]/[...missing]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { notFound: copy } = await getDictionary(lang);
  return { title: copy.title, description: copy.description, robots: { index: false, follow: false } };
}
