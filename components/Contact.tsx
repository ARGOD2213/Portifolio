"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type Intent = "Hiring / Job" | "Freelance project" | "Just saying hi";

export default function Contact() {
  const [intent, setIntent] = useState<Intent>("Hiring / Job");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState("");
  const contactRef = useRef<HTMLElement>(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { threshold: 0.12 });
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.length < 20) nextErrors.message = "Please use at least 20 characters.";
    if (website) return;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("Sending…");
    try {
      const response = await fetch(`https://formspree.io/f/${site.formspreeId}`, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("Message sent. I’ll get back to you within 24 hours.");
    } catch {
      setStatus("Something went wrong. Please email me directly.");
    }
  }

  async function copy(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1500);
    } catch {}
  }

  const cards = [
    { label: "Email", value: site.email, href: `mailto:${site.email}?subject=Opportunity%20for%20Chintala%20Mahindra`, external: false },
    { label: "Phone", value: site.phone, href: `tel:${site.phone.replaceAll(" ", "")}`, external: false },
    { label: "LinkedIn", value: site.linkedin.replace("https://", ""), href: site.linkedin, external: true },
    { label: "Location", value: site.location, href: "#contact", external: false }
  ];

  return (
    <section ref={contactRef} id="contact" aria-labelledby="contact-title" className="section overflow-hidden border-t border-white/5">
      <div className="container-x">
        <div className="eyebrow"><span>08</span> / CONTACT</div>
        <div className="mt-5 grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 id="contact-title" className="section-title">LET&apos;S BUILD<br /><span className="muted-heading">SOMETHING USEFUL.</span></h2>
            <p className="section-copy mt-7">{site.availability}</p>
            <div className="mt-8 border border-white/10 bg-white/[.02] p-5">
              <div className="mono text-xs tracking-[.12em] text-cyan-200">RESPONSE TIME</div>
              <div className="mt-2 text-lg">{site.responseTime}</div>
            </div>
            <div className="mt-4 space-y-3">
              {cards.map((card) => (
                <div key={card.label} className="contact-card">
                  <a href={card.href} target={card.external ? "_blank" : undefined} rel={card.external ? "noreferrer" : undefined} aria-label={card.label + ": " + card.value}>
                    <span className="mono text-xs text-cyan-200">{card.label}</span>
                    <span className="contact-value">{card.value}</span>
                  </a>
                  {card.label !== "Location" && <button type="button" className="copy-button" onClick={() => copy(card.value, card.label)} aria-label={"Copy " + card.label}>⧉</button>}
                  {copied === card.label && <span className="copy-state">Copied ✓</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="tech-panel p-6 md:p-8">
            {site.formspreeId ? (
              <form onSubmit={submit} noValidate>
                <div className="mono text-xs tracking-[.16em] text-cyan-200">SEND A MESSAGE</div>
                <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Message intent">
                  {(["Hiring / Job", "Freelance project", "Just saying hi"] as Intent[]).map((item) => (
                    <button key={item} type="button" className={`intent-chip ${intent === item ? "active" : ""}`} onClick={() => setIntent(item)}>{item}</button>
                  ))}
                </div>
                <input type="hidden" name="subject" value={intent + " — Chintala Mahindra"} />
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-input" id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} />
                {errors.name && <span className="form-error">{errors.name}</span>}
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />
                {errors.email && <span className="form-error">{errors.email}</span>}
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-input min-h-40 resize-y" id="message" name="message" minLength={20} aria-invalid={Boolean(errors.message)} />
                {errors.message && <span className="form-error">{errors.message}</span>}
                <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
                <button className="primary-button mt-6 w-full" type="submit" disabled={status === "Sending…"}>{status === "Sending…" ? "SENDING…" : "SEND MESSAGE →"}</button>
                <p className="status-line" aria-live="polite">{status}</p>
              </form>
            ) : (
              <div>
                <div className="mono text-xs tracking-[.16em] text-cyan-200">PREFER EMAIL?</div>
                <p className="mt-4 text-lg text-slate-300">It&apos;s the fastest.</p>
                <a className="primary-button mt-6 inline-flex" href={`mailto:${site.email}`}>EMAIL ME →</a>
              </div>
            )}
          </div>
        </div>
      </div>
      {!formVisible && <div className="mobile-contact-bar md:hidden"><a href={`tel:${site.phone.replaceAll(" ", "")}`}>CALL</a><a href={`mailto:${site.email}`}>EMAIL</a><a href={site.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a></div>}
    </section>
  );
}
