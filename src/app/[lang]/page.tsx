import { company } from "@/lib/company";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale } from "@/lib/i18n/locales";
import { CompanyValues } from "@/components/company-values";
import { localizedMetadata } from "@/lib/site";
import Image from "next/image";
import { Header } from "@/components/header";
import { CompanyDirection, PartnershipApproach } from "@/components/company-profile";
import { IupOpPartners } from "@/components/iup-op-partners";
import mining from "../../../public/images/coal-mining.jpg";
import coalStockpile from "../../../public/images/coal-mine-stockpile-sunset.jpg";
import coalLoading from "../../../public/images/coal-loading-excavator-truck.jpg";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = await getDictionary(lang);

  return <><Header locale={lang} copy={{ navigation: copy.navigation, header: copy.header, accessibility: copy.accessibility }} /><main id="konten">
    <section id="beranda" className="hero" aria-labelledby="hero-title">
      <Image src={coalLoading} alt={copy.images.tradingMiningAlt} fill sizes="100vw" preload placeholder="blur" className="hero-image" /><div className="hero-shade" />
      <div className="container hero-content"><p className="eyebrow light">{copy.hero.eyebrow}</p><h1 id="hero-title">{copy.hero.heading.line1}<br />{copy.hero.heading.line2}<br /><span>{copy.hero.heading.line3}<br />{copy.hero.heading.line4}</span></h1><p className="hero-description">{copy.hero.description}</p><div className="hero-actions"><a className="button dark" href="#layanan">{copy.hero.servicesCta}<span aria-hidden="true">&#8599;</span></a><a className="secondary-link" href="#kontak">{copy.header.contactLabel}<span aria-hidden="true">&#8594;</span></a></div></div>
      <div className="container hero-bottom"><span>{copy.hero.slogan}</span><a href="#tentang">{copy.hero.aboutCta} <span aria-hidden="true">↓</span></a></div>
    </section>
    <IupOpPartners copy={copy.iupOpPartners} />
    <CompanyValues copy={copy.values} />
    <div className="expertise"><div className="container expertise-inner"><span>{copy.expertise.label}</span><a href="#layanan"><span className="expertise-index" aria-hidden="true">01</span>{copy.expertise.tradingLabel}<span aria-hidden="true">↗</span></a><a href="#layanan"><span className="expertise-index" aria-hidden="true">02</span>{copy.expertise.logisticsLabel}<span aria-hidden="true">↗</span></a></div></div>
    <section id="tentang" className="container section about" aria-labelledby="about-title"><div className="about-photo"><Image className="about-mining-image" src={coalStockpile} alt={copy.images.aboutMiningAlt} fill sizes="(max-width: 760px) 100vw, 45vw" placeholder="blur" /><span className="photo-caption">{copy.about.photoCaption}</span><div className="photo-tag"><strong>SSU</strong><span>{copy.about.photoTagLine1}<br />{copy.about.photoTagLine2}</span></div></div><div><p className="eyebrow">{copy.about.eyebrow}</p><h2 id="about-title">{copy.about.heading.lead} <span>{copy.about.heading.accent}</span></h2><p className="body-copy">{copy.about.paragraph1}</p><p className="body-copy">{copy.about.paragraph2}</p><div className="executive-overview"><h3>{copy.about.executiveTitle}</h3><p className="body-copy">{copy.about.executiveBody}</p></div><div className="about-note"><span aria-hidden="true">↗</span><p>{copy.about.note}</p></div><a className="button dark profile-download" href={company.profileUrl} download>{copy.about.downloadLabel} <span aria-hidden="true">→</span></a></div></section>
    <section id="layanan" className="section services" aria-labelledby="services-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">{copy.services.eyebrow}</p><h2 id="services-title">{copy.services.heading.lead}<br /><span>{copy.services.heading.accent}</span></h2></div><p className="body-copy">{copy.services.intro}</p></div><div className="service-grid">{[
      { title: copy.services.trading.title, image: coalLoading, label: copy.services.trading.badgeLabel, alt: copy.images.tradingMiningAlt, description: copy.services.trading.body, cta: copy.services.trading.cta },
      { title: copy.services.quality.title, image: mining, label: copy.services.quality.badgeLabel, alt: copy.images.tradingAlt, description: copy.services.quality.body, cta: copy.services.quality.cta },
    ].map(service => <article key={service.title} className="service-card"><div className="service-photo"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1352px) calc((100vw - 140px) / 2), 606px" placeholder="blur" /><span>{service.label}</span></div><div className="service-body"><h3>{service.title}</h3><p className="body-copy">{service.description}</p><a className="text-link" href="#kontak">{service.cta}<span aria-hidden="true">→</span></a></div></article>)}</div><p className="photo-note">{copy.services.illustrationNotice}</p></div></section>

    <CompanyDirection copy={copy.direction} />
    <PartnershipApproach copy={{ approach: copy.approach, compliance: copy.compliance, management: copy.management }} />
    <section id="kontak" className="contact section" aria-labelledby="contact-title"><div className="container contact-grid"><div><p className="eyebrow light">{copy.contact.eyebrow}</p><h2 id="contact-title">{copy.contact.heading.line1}<br />{copy.contact.heading.line2} <span>{copy.contact.heading.accent}</span></h2><p>{copy.contact.intro}</p></div><div className="contact-card"><span className="contact-arrow" aria-hidden="true">↗</span><h3>{copy.contact.cardTitle}</h3><address className="official-contact"><p>{company.address}</p><a href={"mailto:" + company.email}>{company.email}</a><a href={company.phoneHref}>{company.phone}</a></address><a className="button dark profile-download" href={company.profileUrl} download>{copy.about.downloadLabel}<span aria-hidden="true">&#8595;</span></a></div></div></section>
    </main><footer><div className="container footer-main"><div><a className="brand" href="#beranda" aria-label={copy.accessibility.footerBrandHome}><Image className="brand-logo" src="/images/branding/ssu-gold-master.jpeg" alt="PT. Selaras Sinergi Utama (SSU)" width={1254} height={1254} unoptimized /></a><p>{copy.footer.descriptor}<br />{copy.footer.slogan}</p></div><nav aria-label={copy.accessibility.footerNavigation}><a href="#tentang">{copy.navigation.about}</a><a href="#layanan">{copy.navigation.services}</a><a href="#nilai">{copy.navigation.values}</a><a href="#kontak">{copy.footer.partnershipLabel}</a></nav><a className="back-top" href="#beranda">{copy.footer.backToTopLabel} <span aria-hidden="true">↑</span></a></div><div className="container footer-bottom"><span>© 2026 PT. Selaras Sinergi Utama.</span><span>{copy.footer.industryLabel}</span></div></footer></>;
}

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return localizedMetadata(lang, await getDictionary(lang));
}
