import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-container">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-card shadow-md" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-semibold tracking-tight">Colline Swai</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex rounded-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-md"
            >
              <a href="#contact">Hire me</a>
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 text-sm rounded-lg hover:bg-secondary/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 rounded-full bg-gradient-primary">
                <a href="#contact" onClick={() => setOpen(false)}>Hire me</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
