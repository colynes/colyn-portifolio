import { Mail, MessageCircle, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12 relative">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-semibold">Colline Swai</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Data &amp; Systems Analyst building practical, data-driven systems for modern businesses.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">Navigate</div>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Projects", "Experience", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">Connect</div>
            <div className="flex gap-2">
              {[
                { icon: Mail, href: "mailto:collinsantelimy@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/255718744415", label: "WhatsApp" },
                { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl glass-card grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Colline Swai. Crafted with care in Tanzania.
          </p>
          <a
            href="#home"
            className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};
