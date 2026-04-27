import { GraduationCap, MapPin, Briefcase, BookOpen } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card group">
              <img
                src={portrait}
                alt="Colline Swai, Data and Systems Analyst"
                width={896}
                height={1152}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">Based in</div>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <MapPin size={16} /> Dar es Salaam, Tanzania
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-lg animate-float hidden md:block">
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="text-sm font-semibold">Pursuing Data Science</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">/ About</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              A hybrid professional bridging <span className="gradient-text">data, systems, and operations</span>.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With a Diploma in Statistics and an ongoing journey in Data Science, I sit at the
                intersection of analytics and engineering — turning messy spreadsheets into clean
                dashboards, and manual workflows into reliable systems.
              </p>
              <p>
                Across roles in record-keeping, IT support, and system development, I've learned
                that the best technical solutions are the ones that genuinely improve how a
                business runs day-to-day.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {[
                { icon: GraduationCap, label: "Education", value: "Diploma in Statistics" },
                { icon: BookOpen, label: "Studying", value: "Data Science" },
                { icon: Briefcase, label: "Focus", value: "Data & Systems" },
                { icon: MapPin, label: "Location", value: "Tanzania" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="glass-card rounded-2xl p-4 flex items-center gap-3 hover:border-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-semibold truncate">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
