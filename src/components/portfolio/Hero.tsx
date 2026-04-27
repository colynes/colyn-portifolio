import { ArrowRight, Download, Sparkles, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-40 dark:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-blob animation-delay-500" />

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance mb-6 animate-fade-in-up animation-delay-100">
            <span className="gradient-text">I build data-driven</span>
            <br />
            <span className="gradient-text">systems that improve</span>
            <br />
            <span className="text-primary">business operations.</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance animate-fade-in-up animation-delay-200">
            I'm <span className="text-foreground font-medium">Colline Antelimy Sway</span> — a Data Analyst &amp; Planning Officer
            at Wilmar Tanzania. I help businesses organize data, automate workflows, and build practical
            systems using Excel, Power BI, PHP, MySQL, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-primary hover:opacity-90 shadow-glow hover:shadow-lg transition-all group h-12 px-7"
            >
              <a href="#projects">
                View my work
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full glass-card hover:bg-secondary/60 h-12 px-7"
            >
              <a href="/cv-colline-swai.pdf" download>
                <Download className="mr-1 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            {[
              { value: "5+", label: "Systems built" },
              { value: "3", label: "Years experience" },
              { value: "100%", label: "Client focus" },
              {
                icon: (
                  <a
                    href="https://github.com/colynes"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-md text-muted-foreground"
                  >
                    <Github size={22} />
                  </a>
                ),
                label: "GitHub",
              },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-5 hover:border-primary/30 transition-colors flex flex-col items-center">
                {stat.icon ? (
                  <div className="mb-2">{stat.icon}</div>
                ) : (
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                )}
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
