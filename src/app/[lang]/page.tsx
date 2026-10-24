import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale } from "@/lib/i18n/locales";
import type { CompanyCopy } from "@/lib/i18n/types";
import { localizedMetadata } from "@/lib/site";
import Image from "next/image";
import { Header } from "@/components/header";
import { CompanyDirection, PartnershipApproach } from "@/components/company-profile";
import mining from "../../../public/images/coal-mining.jpg";
import port from "../../../public/images/cargo-port.jpg";

function valueRows(copy: CompanyCopy) { return [
  ["01", copy.values.integrity.title, copy.values.integrity.body],
  ["02", copy.values.reliability.title, copy.values.reliability.body],
  ["03", copy.values.professionalism.title, copy.values.professionalism.body],
]; }
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = await getDictionary(lang);
  const values = valueRows(copy);
  return <><Header locale={lang} copy={{ navigation: copy.navigation, header: copy.header, accessibility: copy.accessibility }} /><main id="konten">
    <section id="beranda" className="hero" aria-labelledby="hero-title">
      <Image src={mining} alt={copy.images.heroAlt} fill sizes="100vw" preload placeholder="blur" className="hero-image" /><div className="hero-shade" />
      <div className="container hero-content"><p className="eyebrow light">{copy.hero.eyebrow}</p><h1 id="hero-title">{copy.hero.heading.line1}<br />{copy.hero.heading.line2}<br /><span>{copy.hero.heading.line3}<br />{copy.hero.heading.line4}</span></h1><p className="hero-description">{copy.hero.description}</p><div className="hero-actions"><a className="button orange" href="#kontak">{copy.hero.partnershipCta} <span aria-hidden="true">↗</span></a><a className="secondary-link" href="#layanan">{copy.hero.servicesCta} <span aria-hidden="true">→</span></a></div></div>
      <div className="container hero-bottom"><span>{copy.hero.slogan}</span><a href="#tentang">{copy.hero.aboutCta} <span aria-hidden="true">↓</span></a></div>
    </section>
    <div className="expertise"><div className="container expertise-inner"><span>{copy.expertise.label}</span><p>{copy.expertise.tradingLabel} <b aria-hidden="true">/</b> {copy.expertise.logisticsLabel}</p><span aria-hidden="true" className="expertise-arrow">↗</span></div></div>
    <section id="tentang" className="container section about" aria-labelledby="about-title"><div className="about-photo"><Image src={port} alt={copy.images.aboutAlt} fill sizes="(max-width: 760px) 100vw, 45vw" placeholder="blur" /><span className="photo-caption">{copy.about.photoCaption}</span><div className="photo-tag"><strong>SSU</strong><span>{copy.about.photoTagLine1}<br />{copy.about.photoTagLine2}</span></div></div><div><p className="eyebrow">{copy.about.eyebrow}</p><h2 id="about-title">{copy.about.heading.lead} <span>{copy.about.heading.accent}</span></h2><p className="body-copy">{copy.about.paragraph1}</p><p className="body-copy">{copy.about.paragraph2}</p><div className="executive-overview"><h3>{copy.about.executiveTitle}</h3><p className="body-copy">{copy.about.executiveBody}</p></div><div className="about-note"><span aria-hidden="true">↗</span><p>{copy.about.note}</p></div><a className="text-link" href="#nilai">{copy.about.approachCta} <span aria-hidden="true">→</span></a></div></section>
    <CompanyDirection copy={copy.direction} />
    <section id="nilai" className="section container values" aria-labelledby="values-title"><div><p className="eyebrow">{copy.values.eyebrow}</p><h2 id="values-title">{copy.values.heading.line1}<br />{copy.values.heading.line2} <span>{copy.values.heading.accent}</span></h2><p className="body-copy">{copy.values.intro}</p></div><div className="values-list">{values.map(([number, title, description]) => <article key={number}><span className="value-number">{number}</span><div><h3>{title}</h3><p className="body-copy">{description}</p></div><span aria-hidden="true" className="value-plus">+</span></article>)}</div></section>
    <section id="layanan" className="section services" aria-labelledby="services-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">{copy.services.eyebrow}</p><h2 id="services-title">{copy.services.heading.lead}<br /><span>{copy.services.heading.accent}</span></h2></div><p className="body-copy">{copy.services.intro}</p></div><div className="service-grid">{[
      { title: copy.services.trading.title, image: mining, label: copy.services.trading.badgeLabel, alt: copy.images.tradingAlt, description: copy.services.trading.body, cta: copy.services.trading.cta },
      { title: copy.services.logistics.title, image: port, label: copy.services.logistics.badgeLabel, alt: copy.images.logisticsAlt, description: copy.services.logistics.body, cta: copy.services.logistics.cta },
    ].map(service => <article key={service.title} className="service-card"><div className="service-photo"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 50vw" placeholder="blur" /><span>{service.label}</span></div><div className="service-body"><h3>{service.title}</h3><p className="body-copy">{service.description}</p><a className="text-link" href="#kontak">{service.cta}<span aria-hidden="true">→</span></a></div></article>)}</div><p className="photo-note">{copy.services.illustrationNotice}</p></div></section>

    <PartnershipApproach copy={{ approach: copy.approach, compliance: copy.compliance, management: copy.management }} />
    <section id="kontak" className="contact section" aria-labelledby="contact-title"><div className="container contact-grid"><div><p className="eyebrow light">{copy.contact.eyebrow}</p><h2 id="contact-title">{copy.contact.heading.line1}<br />{copy.contact.heading.line2} <span>{copy.contact.heading.accent}</span></h2><p>{copy.contact.intro}</p></div><div className="contact-card"><span className="contact-arrow" aria-hidden="true">↗</span><h3>{copy.contact.cardTitle}</h3><p>{copy.contact.availabilityMessage}</p><span className="contact-status">{copy.contact.availabilityStatus}</span></div></div></section>
    </main><footer><div className="container footer-main"><div><a className="brand" href="#beranda" aria-label={copy.accessibility.footerBrandHome}><Image className="brand-logo" src="/images/branding/ssu-logo-original.jpeg" alt="PT. Selaras Sinergi Utama (SSU)" width={1372} height={768} unoptimized /></a><p>{copy.footer.descriptor}<br />{copy.footer.slogan}</p></div><nav aria-label={copy.accessibility.footerNavigation}><a href="#tentang">{copy.navigation.about}</a><a href="#layanan">{copy.navigation.services}</a><a href="#nilai">{copy.navigation.values}</a><a href="#kontak">{copy.footer.partnershipLabel}</a></nav><a className="back-top" href="#beranda">{copy.footer.backToTopLabel} <span aria-hidden="true">↑</span></a></div><div className="container footer-bottom"><span>© 2026 PT. Selaras Sinergi Utama.</span><span>{copy.footer.industryLabel}</span></div></footer></>;
}

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return localizedMetadata(lang, await getDictionary(lang));
}
