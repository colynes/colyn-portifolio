import { BarChart3, Code2, HeadphonesIcon } from "lucide-react";

const groups = [
  {
    icon: BarChart3,
    title: "Data",
    description: "Turning raw numbers into clear, actionable insights.",
    skills: ["Excel", "Python", "Data Cleaning", "Data Analysis", "Reporting"],
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building practical systems that solve real business problems.",
    skills: ["PHP", "MySQL", "Laravel", "React", "Tailwind CSS","Node.js"],
  },
  {
    icon: HeadphonesIcon,
    title: "IT Support",
    description: "Keeping systems, networks, and people running smoothly.",
    skills: ["Troubleshooting", "Networking basics", "System support", "Windows setup", "User training"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">/ Skills</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            A toolkit built for <span className="gradient-text">end-to-end delivery</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {groups.map(({ icon: Icon, title, description, skills }) => (
            <div
              key={title}
              className="glass-card rounded-3xl p-7 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-md mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/60 text-foreground/80 border border-border hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
