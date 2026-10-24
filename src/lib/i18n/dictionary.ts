import type { Locale } from "./locales";
import type { CompanyCopy } from "./types";

const dictionaries = {
  id: () => import("./dictionaries/id").then(module => module.copy),
  en: () => import("./dictionaries/en").then(module => module.copy),
} satisfies Record<Locale, () => Promise<CompanyCopy>>;

function assertCopy(value: unknown, path = "copy"): void {
  if (typeof value === "string") {
    if (!value.trim() || /PENDING OWNER INPUT|\[Alamat Lengkap\]|\[Nama Perusahaan Anda\]|info@namaperusahaan\.com/.test(value)) {
      throw new Error(`Incomplete translation: ${path}`);
    }
  } else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) assertCopy(child, `${path}.${key}`);
  }
}

export async function getDictionary(locale: Locale): Promise<CompanyCopy> {
  const copy = await dictionaries[locale]();
  assertCopy(copy);
  return copy;
}
