import type { CompanyCopy } from "@/lib/i18n/types";
import { iupOpPartners } from "@/lib/iup-op-partners";

export function IupOpPartners({ copy }: { copy: CompanyCopy["iupOpPartners"] }) {
  return (
    <section id="iup-op-partners" className="section partners-section" aria-labelledby="iup-op-partners-title">
      <div className="container">
      <div className="partners-heading">
        <p className="eyebrow" lang="en">OUR COOPERATION WITH</p>
        <h2 id="iup-op-partners-title">IUP OP <span>PARTNERS</span></h2>
        <p className="body-copy">{copy.subtitle}</p>
      </div>
      <div className="iup-partner-grid">
        {iupOpPartners.map((partner, index) => (
          <article className="profile-panel iup-partner-card" key={partner.name}>
            <span className="partner-index" aria-hidden="true">SSU / 0{index + 1}</span>
            <h3>{partner.name}</h3>
            <dl>
              <dt>{copy.qualityLabel}</dt>
              <dd>{partner.specification}</dd>
            </dl>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
