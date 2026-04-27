import { ArrowUpRight, Database, Package, Coins, Store, Smartphone } from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "Records Management System",
    description: "Centralized digital records platform replacing paper-based tracking with searchable, auditable data.",
    tags: ["PHP", "MySQL", "Reporting"],
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Package,
    title: "Inventory Management System",
    description: "Real-time stock tracking with low-stock alerts, supplier management, and movement history.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    accent: "from-violet-500/20 to-blue-500/20",
  },
  {
    icon: Coins,
    title: "Microfinance System",
    description: "End-to-end loans, repayments, and member management with reporting for small lending institutions.",
    tags: ["Laravel", "MySQL", "Reports"],
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Store,
    title: "Multi-store Inventory System",
    description: "Unified inventory across multiple branches with transfers, role-based access, and consolidated dashboards.",
    tags: ["PHP", "MySQL", "Multi-tenant"],
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Smartphone,
    title: "Flutter Mobile App Prototype",
    description: "Cross-platform mobile prototype exploring offline-first data capture for field operations.",
    tags: ["Flutter", "Dart", "Mobile"],
    accent: "from-rose-500/20 to-pink-500/20",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">/ Projects</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Selected work shipping <span className="gradient-text">real business outcomes</span>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            A mix of internal business systems, dashboards, and mobile prototypes built across
            different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ icon: Icon, title, description, tags, accent }, i) => (
            <article
              key={title}
              className={`group relative glass-card rounded-3xl p-6 hover:-translate-y-1 hover:border-primary/40 transition-all duration-500 overflow-hidden ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative flex flex-col h-full min-h-[220px]">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-11 w-11 rounded-xl glass-card grid place-items-center text-primary border border-border">
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
