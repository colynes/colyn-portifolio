import { Building2 } from "lucide-react";

const experiences = [
  {
    role: "Planning & Data Analysis Officer",
    company: "Wilmar Tanzania Limited",
    period: "Feb 2026 – Present",
    points: [
      "Support planning and coordination of production for cooking oil, rice, and pasta",
      "Maintain accurate production, inventory, and operational records for decision-making",
      "Build Excel-based sheet reports to monitor output, stock levels, and performance",
      "Analyze production and inventory data to identify inefficiencies and recommend improvements",
      "Support data-driven planning to minimize waste and optimize raw material usage",
    ],
  },
  {
    role: "Record Keeper",
    company: "Transocean Tanzania Limited",
    period: "Sep 2025 – Present",
    points: [
      "Maintained physical and digital records of shipments, clients, and transactions",
      "Generated invoices and monitored payments for accurate financial records",
      "Produced reports on cargo movements, payments, and agency activities",
      "Cross-checked and verified data to resolve discrepancies and ensure integrity",
    ],
  },
  {
    role: "IT Department Intern",
    company: "KCB Bank",
    period: "Jul – Oct 2024",
    points: [
      "Backed up critical data and configured external storage to prevent data loss",
      "Installed and configured hardware: computers, printers, and servers",
      "Performed network troubleshooting and system diagnostics",
      "Implemented BitLocker encryption and managed recovery keys across devices",
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
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0; // role on left, card on right
              return (
                <div
                  key={exp.company}
                  className="relative grid md:grid-cols-2 gap-8 items-start"
                >
                  {/* Dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-background" />
                  </div>

                  {/* Role / company */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft
                        ? "md:order-1 md:text-right md:pr-12"
                        : "md:order-2 md:text-left md:pl-12"
                    }`}
                  >
                    <div className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div
                      className={`flex items-center gap-2 text-muted-foreground mt-1 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <Building2 size={14} />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                  </div>

                  {/* Responsibilities card */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"
                    }`}
                  >
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
