import type { CompanyCopy } from "@/lib/i18n/types";
import { iupOpPartners } from "@/lib/iup-op-partners";

export function IupOpPartners({ copy }: { copy: CompanyCopy["iupOpPartners"] }) {
  return (
    <section id="iup-op-partners" className="section container" aria-labelledby="iup-op-partners-title">
      <div className="section-heading">
        <div><p className="eyebrow">{copy.eyebrow}</p><h2 id="iup-op-partners-title">IUP OP <span>Partners</span></h2></div>
        <p className="body-copy">{copy.subtitle}</p>
      </div>
      <div className="iup-partner-grid">
        {iupOpPartners.map((partner) => (
          <article className="profile-panel iup-partner-card" key={partner.name}>
            <h3>{partner.name}</h3>
            <dl>
              <dt>{copy.qualityLabel}</dt>
              <dd>{partner.specification}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
