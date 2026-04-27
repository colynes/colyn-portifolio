import { LayoutDashboard, LineChart, Cog, ShieldCheck, Database } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Business System Development",
    description: "Custom PHP/MySQL systems for inventory, records, and operations — built to fit your workflow.",
  },
  {
    icon: LineChart,
    title: "Data Analysis & Reporting",
    description: "Clean, analyze, and translate your data into clear reports that support better decisions.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development",
    description: "Interactive Power BI and web dashboards that make KPIs visible and actionable.",
  },
  {
    icon: ShieldCheck,
    title: "IT Support & Troubleshooting",
    description: "Hardware, software, and network support to keep your team productive.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Well-structured MySQL databases designed for performance, integrity, and growth.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">/ Services</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            How I can help <span className="gradient-text">your business</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`glass-card rounded-3xl p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group ${
                i === 0 ? "lg:row-span-2 lg:flex lg:flex-col lg:justify-between bg-gradient-to-br from-primary/5 to-transparent" : ""
              }`}
            >
              <div>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 grid place-items-center text-primary mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
              {i === 0 && (
                <div className="hidden lg:block mt-8 pt-8 border-t border-border">
                  <div className="text-xs uppercase tracking-widest text-primary mb-2 font-mono">Most requested</div>
                  <p className="text-sm text-muted-foreground">
                    From simple internal tools to multi-branch platforms — built to evolve with your business.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
