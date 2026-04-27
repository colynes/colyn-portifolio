import { Building2 } from "lucide-react";

const experiences = [
  {
    role: "Record Keeper",
    company: "Transocean Tanzania Ltd",
    period: "Recent",
    points: [
      "Managed invoices and business records across logistics operations",
      "Performed data reconciliation and produced regular reports",
      "Tracked exbond fees, agency fees, and revenue records",
    ],
  },
  {
    role: "IT Technician",
    company: "Paulsam Geo Engineering",
    period: "Prior",
    points: [
      "Provided system maintenance and troubleshooting",
      "Built and supported PHP/MySQL business systems",
      "Supported data analysis and visualization using Excel and Power BI",
      "Assisted users with technical support and training",
    ],
  },
  {
    role: "ICT Internship",
    company: "KCB Bank",
    period: "Earlier",
    points: [
      "Supported hardware and software troubleshooting",
      "Assisted with BitLocker encryption setup",
      "Supported network and security-related tasks",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">/ Experience</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            A track record across <span className="gradient-text">data, IT, and operations</span>.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-10">
                  <div className="h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-background" />
                </div>

                <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-muted-foreground mt-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Building2 size={14} />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                </div>

                <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass-card rounded-2xl p-5 hover:border-primary/30 transition-colors">
                    <ul className="space-y-2.5">
                      {exp.points.map((point) => (
                        <li key={point} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
