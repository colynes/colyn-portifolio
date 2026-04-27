import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    // Default to light mode on first visit
    const stored = localStorage.getItem("theme");
    if (stored) {
      document.documentElement.classList.toggle("dark", stored === "dark");
    }

    // SEO: structured data
    const ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Colline Swai",
      jobTitle: "Data Analyst & Planning Officer",
      worksFor: { "@type": "Organization", name: "Wilmar Tanzania Limited" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Eastern Africa Statistical Training Centre (EASTC)" },
      email: "collinsantelimy@gmail.com",
      telephone: "+255718744415",
      address: { "@type": "PostalAddress", addressLocality: "Dar es Salaam", addressCountry: "Tanzania" },
      knowsAbout: ["Data Analysis", "Microsoft Office", "Python", "PHP", "MySQL", "Planning", "Reporting"],
    };
    let script = document.getElementById("ld-json") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(ld);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
