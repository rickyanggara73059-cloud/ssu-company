import type { CompanyCopy } from "@/lib/i18n/types";

export function CompanyDirection({ copy: direction }: { copy: CompanyCopy["direction"] }) {
  const copy = { direction };
  return (
    <section id="arah-perusahaan" className="section profile-band" aria-labelledby="direction-title">
      <div className="container">
        <div className="section-heading">
          <div><p className="eyebrow">{copy.direction.eyebrow}</p><h2 id="direction-title">{copy.direction.heading.lead}<br /><span>{copy.direction.heading.accent}</span></h2></div>
          <p className="body-copy">{copy.direction.intro}</p>
        </div>
        <div className="profile-grid">
          <article className="profile-panel"><p className="eyebrow">{copy.direction.visionLabel}</p><h3>{copy.direction.visionStatement}</h3></article>
          <article className="profile-panel"><p className="eyebrow">{copy.direction.missionLabel}</p><ul className="profile-list">
            <li>{copy.direction.mission.trade}</li>
            <li>{copy.direction.mission.logistics}</li>
            <li>{copy.direction.mission.integrity}</li>
            <li>{copy.direction.mission.compliance}</li>
          </ul></article>
        </div>
      </div>
    </section>
  );
}

function advantageRows(copy: Pick<CompanyCopy, "approach">) { return [
  [copy.approach.needs.title, copy.approach.needs.body],
  [copy.approach.alignment.title, copy.approach.alignment.body],
  [copy.approach.communication.title, copy.approach.communication.body],
]; }

export function PartnershipApproach({ copy }: { copy: Pick<CompanyCopy, "approach" | "compliance" | "management"> }) {
  const advantages = advantageRows(copy);
  return (
    <>
      <section id="keunggulan" className="section profile-band" aria-labelledby="advantages-title">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">{copy.approach.eyebrow}</p><h2 id="advantages-title">{copy.approach.heading.lead}<br /><span>{copy.approach.heading.accent}</span></h2></div><p className="body-copy">{copy.approach.intro}</p></div>
          <div className="profile-grid profile-grid-three">{advantages.map(([title, copy], index) => <article className="profile-panel" key={title}><span className="value-number">0{index + 1}</span><h3>{title}</h3><p className="body-copy">{copy}</p></article>)}</div>
        </div>
      </section>
      <section id="legalitas" className="section container profile-grid" aria-labelledby="compliance-title">
        <div><p className="eyebrow">{copy.compliance.eyebrow}</p><h2 id="compliance-title">{copy.compliance.heading.lead}<br /><span>{copy.compliance.heading.accent}</span></h2></div>
        <div className="profile-copy"><p className="body-copy">{copy.compliance.paragraph1}</p><p className="body-copy">{copy.compliance.paragraph2}</p></div>
      </section>
      <section id="manajemen" className="section profile-band" aria-labelledby="management-title">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">{copy.management.eyebrow}</p><h2 id="management-title">{copy.management.heading.lead}<br /><span>{copy.management.heading.accent}</span></h2></div><p className="body-copy">{copy.management.intro}</p></div>
          <div className="profile-grid">
            <article className="profile-panel"><h3>{copy.management.coordination.title}</h3><p className="body-copy">{copy.management.coordination.body}</p></article>
            <article className="profile-panel"><h3>{copy.management.coverage.title}</h3><p className="body-copy">{copy.management.coverage.body}</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
