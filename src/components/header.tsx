"use client";
import Image from "next/image";
import type { CompanyCopy } from "@/lib/i18n/types";
import { sectionIds, type Locale } from "@/lib/i18n/locales";
import type { SyntheticEvent } from "react";
import { useEffect, useRef, useState } from "react";
function navigationLinks(copy: Pick<CompanyCopy, "navigation">) { return [["#beranda", copy.navigation.home], ["#tentang", copy.navigation.about], ["#layanan", copy.navigation.services], ["#iup-op-partners", copy.navigation.partners], ["#nilai", copy.navigation.values]]; }
export function Header({ locale, copy }: { locale: Locale; copy: Pick<CompanyCopy, "navigation" | "header" | "accessibility"> }) {
  const links = navigationLinks(copy);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }
    function outside(event: PointerEvent) { if (!header.current?.contains(event.target as Node)) setOpen(false); }
    const desktop = window.matchMedia("(min-width: 900px)");
    function resize() { if (desktop.matches) setOpen(false); }
    document.addEventListener("keydown", escape); document.addEventListener("pointerdown", outside); desktop.addEventListener("change", resize);
    return () => { document.removeEventListener("keydown", escape); document.removeEventListener("pointerdown", outside); desktop.removeEventListener("change", resize); };
  }, [open]);
  function languageHref(event: SyntheticEvent<HTMLAnchorElement>) {
    const target = event.currentTarget.dataset.locale;
    const fragment = window.location.hash;
    const validHash = sectionIds.some(id => fragment === `#${id}`) ? fragment : "";
    event.currentTarget.href = `/${target}${window.location.search}${validHash}`;
  }
  return <header className="site-header" ref={header}><a className="skip-link" href="#konten">{copy.accessibility.skipToContent}</a><div className="container header-inner"><a className="brand header-brand" href="#beranda" aria-label={copy.accessibility.headerBrandHome} onClick={() => setOpen(false)}><span className="header-logo-frame" style={{ display: "block", width: "100px", maxWidth: "100%" }}><Image className="brand-logo" src="/images/branding/ssu-logo-original.jpeg" alt="PT. Selaras Sinergi Utama (SSU)" width={1372} height={768} unoptimized loading="eager" style={{ display: "block", width: "100%", maxWidth: "100%", height: "auto", objectFit: "contain", position: "static" }} /></span></a><nav className="language-switcher" aria-label={copy.header.languageNavigationAria}>{(["id", "en"] as const).map(target => <a key={target} data-locale={target} href={`/${target}`} lang={target} hrefLang={target} aria-current={locale === target ? "page" : undefined} aria-label={target === "id" ? copy.header.indonesianAria : copy.header.englishAria} onFocus={languageHref} onPointerEnter={languageHref} onContextMenu={languageHref} onAuxClick={languageHref} onClick={event => { languageHref(event); setOpen(false); }}><span className="language-full">{target === "id" ? "Bahasa Indonesia" : "English"}</span><span className="language-short" aria-hidden="true">{target.toUpperCase()}</span></a>)}</nav><button className="menu-toggle" ref={toggle} type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? copy.header.closeAria : copy.header.openAria} onClick={() => setOpen(!open)}>{open ? copy.header.closeLabel : copy.header.openLabel}<span aria-hidden="true">{open ? "×" : "☰"}</span></button><nav id="main-navigation" aria-label={copy.accessibility.mainNavigation} className={`navigation${open ? " is-open" : ""}`} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== toggle.current) setOpen(false); }}>{links.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button dark" href="#kontak" onClick={() => setOpen(false)}>{copy.header.contactLabel} <span aria-hidden="true">↗</span></a></nav></div></header>;
}
