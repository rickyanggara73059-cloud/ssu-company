export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";
export function isLocale(value: string): value is Locale {
  return value === "id" || value === "en";
}
export const sectionIds = ["konten", "beranda", "tentang", "arah-perusahaan", "nilai", "layanan", "iup-op-partners", "keunggulan", "legalitas", "manajemen", "kontak"] as const;
