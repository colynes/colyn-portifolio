import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const EMAIL = "collinsantelimy@gmail.com";
const WHATSAPP = "255718744415";
const LINKEDIN = "https://www.linkedin.com/";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\nΓÇö ${result.data.name} (${result.data.email})`);
    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      toast({ title: "Opening your email client", description: "Thanks for reaching out!" });
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 400);
  };

  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: `https://wa.me/${WHATSAPP}` },
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: LINKEDIN },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">/ Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Let's build something <span className="gradient-text">that works</span>.
          </h2>
          <p className="text-muted-foreground">
            Have a project, a dataset, or a system you'd like to improve? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Channels */}
          <div className="lg:col-span-2 space-y-3">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground shrink-0 shadow-md">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                  <div className="font-medium truncate group-hover:text-primary transition-colors">{value}</div>
                </div>
              </a>
            ))}

            <div className="glass-card rounded-2xl p-5 mt-6">
              <div className="text-xs uppercase tracking-wider text-primary font-mono mb-2">Response time</div>
              <p className="text-sm text-muted-foreground">
                I typically reply within 24 hours. For urgent requests, WhatsApp is fastest.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card rounded-3xl p-7 md:p-9 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-xl bg-background/50 h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="rounded-xl bg-background/50 h-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                maxLength={1000}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, data, or system..."
                rows={6}
                className="rounded-xl bg-background/50 resize-none"
                required
              />
              <div className="text-xs text-muted-foreground text-right">{form.message.length}/1000</div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="w-full rounded-xl bg-gradient-primary hover:opacity-90 shadow-glow h-12 group"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Send message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
