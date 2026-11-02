import type { CompanyCopy } from "@/lib/i18n/types";

const icons = {
  integrity: "M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3ZM8 12l3 3 5-6",
  synergy: "M8 5H5v5m0-5 6 6m5 8h3v-5m0 5-6-6M16 5h3v5m0-5-6 6M8 19H5v-5m0 5 6-6",
  reliability: "M21 12a9 9 0 1 1-3-6.7M8 11l4 4 9-10",
  professionalism: "M8 7V4h8v3M3 7h18v13H3V7Zm0 5 9 4 9-4M12 13v5",
};

export function CompanyValues({ copy }: { copy: CompanyCopy["values"] }) {
  return (
    <section id="nilai" className="company-values" aria-labelledby="values-title">
      <div className="container">
        <div className="values-heading">
          <h2 id="values-title">{copy.eyebrow}</h2>
          <p className="body-copy">{copy.intro}</p>
        </div>
        <div className="company-values-grid">
          {(["integrity", "synergy", "reliability", "professionalism"] as const).map(key => (
            <article className="company-value" key={key}>
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icons[key]} /></svg>
              <h3>{copy[key].title}</h3>
              <p className="body-copy">{copy[key].body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
