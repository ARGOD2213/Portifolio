"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Network from "./Network";
import Architecture from "./Architecture";
import RagLab from "./RagLab";
import Constellation from "./Constellation";
import Contact from "./Contact";
import { site, type Project } from "@/lib/site";

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .65 }} className={className}>{children}</motion.div>;
}

function Flow({ project }: { project: Project }) {
  const labels = project.name.startsWith("Digital") ? ["CLIENT", "API / SECURITY", "SERVICE", "POSTGRESQL / REDIS"] : project.name.startsWith("Policy") ? ["INGEST", "EMBED", "PGVECTOR", "RETRIEVE", "LLM"] : ["CLIENT", "SPRING SECURITY", "AI ORCHESTRATOR", "RETRIEVAL", "STRUCTURED RESPONSE"];
  return <div className="flow" aria-label={project.name + " architecture flow"}>{labels.map((label, index) => <div className="flow-node" key={label}><span>{label}</span>{index < labels.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}</div>)}</div>;
}

const nav = [["WORK", "#work"], ["EXPERIENCE", "#experience"], ["AI LAB", "#ai-lab"], ["STACK", "#stack"], ["PLAYGROUND", "#playground"], ["TIMELINE", "#timeline"], ["CONTACT", "#contact"]];

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => setScroll((window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: scroll + "%" }} aria-hidden="true" />
      <header className="site-header">
        <nav className="container-x nav-shell" aria-label="Primary navigation">
          <a href="#top" className="brand" aria-label="Chintala Mahindra home">CM<span>/</span>JAVA</a>
          <div className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
          <div className="availability"><span className="availability-dot" /> <span className="availability-text">AVAILABLE</span></div>
          <a className="nav-contact" href="#contact">HIRE ME</a>
          <button className="menu-button" type="button" aria-expanded={menu} aria-controls="mobile-menu" aria-label="Open navigation" onClick={() => setMenu(!menu)}><span /><span /><span /></button>
        </nav>
        {menu && <div id="mobile-menu" className="mobile-menu"><div className="mobile-menu-inner">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenu(false)}>{label}</a>)}<a className="primary-button" href="#contact" onClick={() => setMenu(false)}>HIRE ME →</a></div></div>}
      </header>

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-orb" />
          <div className="container-x hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span>00</span> / JAVA BACKEND ENGINEER / HYDERABAD / INDIA</div>
              <h1 id="hero-title" className="display">CHINTALA<br /><span>MAHINDRA</span></h1>
              <div className="role-line"><i /> <span>JAVA BACKEND ENGINEER</span></div>
              <p className="hero-subtitle">Building secure Spring Boot systems, distributed backend services and practical AI applications.</p>
              <div className="hero-actions">
                <a className="primary-button" href={`mailto:${site.email}?subject=Opportunity%20for%20Chintala%20Mahindra`}>EMAIL ME</a>
                <a className="secondary-button" href={site.resume} download>DOWNLOAD RESUME</a>
                <a className="secondary-button icon-link" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">LinkedIn</a>
                <a className="secondary-button icon-link" href={`tel:${site.phone.replaceAll(" ", "")}`} aria-label="Call Chintala Mahindra">Phone</a>
              </div>
              <div className="availability-strip"><strong>Open to:</strong> Java backend roles · AI-enabled backend projects · freelance <span>·</span> Hyderabad, India <span>·</span> {site.responseTime}</div>
              <div className="proof-grid">
                <div><span>JAVA / BACKEND</span><strong>Java 21 / Spring Boot 3</strong></div>
                <div><span>DISTRIBUTED</span><strong>Kafka + Redis</strong></div>
                <div><span>AI APPLICATIONS</span><strong>Spring AI / RAG</strong></div>
              </div>
            </div>
            <Network />
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="profile-title">
          <div className="container-x">
            <Reveal><div className="eyebrow"><span>01</span> / ENGINEERING PROFILE</div><h2 id="profile-title" className="section-title">SYSTEMS FIRST.<br /><span className="muted-heading">AI WHERE IT FITS.</span></h2><p className="section-copy">Java backend engineering is the center of gravity: APIs, persistence, security, messaging, caching and cloud delivery. AI is layered into that foundation through practical application patterns such as retrieval, embeddings and controlled LLM access.</p></Reveal>
            <div className="mt-14 grid gap-4 lg:grid-cols-3">{[
              ["BACKEND", "Java 21", "Spring Boot 3", "REST APIs", "JPA / Hibernate", "Microservices"],
              ["DISTRIBUTED", "Apache Kafka", "Redis", "AWS", "Docker", "CI/CD"],
              ["AI APPLICATIONS", "Spring AI", "RAG", "Embeddings", "Vector Search", "pgvector"]
            ].map((s, i) => <Reveal key={s[0]}><div className="tech-panel p-6"><div className="eyebrow"><span>0{i + 1}</span> / {s[0]}</div><div className="mt-7 space-y-3">{s.slice(1).map(x => <div key={x} className="skill-row"><span>{x}</span><span className="mono text-xs text-slate-500">●</span></div>)}</div></div></Reveal>)}</div>
          </div>
        </section>

        <section id="work" className="section border-y border-white/5" aria-labelledby="work-title">
          <div className="container-x"><Reveal><div className="eyebrow"><span>02</span> / SELECTED WORK</div><h2 id="work-title" className="section-title">ENGINEERING<br /><span className="muted-heading">IN PRACTICE.</span></h2></Reveal>
            <div className="mt-14 grid gap-5 lg:grid-cols-2">{site.projects.map((project, i) => <Reveal key={project.name}><article className="tech-panel project-card">
              <div className="project-head"><div><div className="eyebrow"><span>0{i + 1}</span> / PERSONAL PROJECT</div><h3>{project.name}</h3><p className="project-meta">{project.role} · {project.period}</p></div><span className={"status-pill " + project.status.toLowerCase().replaceAll(" ", "-")}>{project.status}</span></div>
              <p className="project-problem">{project.problem}</p>
              <div className="project-columns"><div><h4>WHAT I BUILT</h4><ul>{project.built.map(x => <li key={x}>{x}</li>)}</ul></div><div><h4>KEY DECISIONS</h4><ul>{project.decisions.map(x => <li key={x}>{x}</li>)}</ul></div></div>
              <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              <Flow project={project} />
              {(project.github || project.live) && <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">GITHUB ↗</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}</div>}
            </article></Reveal>)}</div>
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <div className="container-x"><Reveal><div className="eyebrow"><span>03</span> / PROFESSIONAL EXPERIENCE</div><div className="experience-grid"><div><div className="mono text-xs text-cyan-200">AUG 2024 — PRESENT</div><h2 id="experience-title">Tata Consultancy Services</h2><p>Software Engineer — Java Backend</p><span>Hyderabad · Enterprise HRMS & Finance Microservices</span></div><div className="experience-groups">{[
            ["BACKEND", "Spring Boot 3 microservices on Java 21; REST APIs and Spring Data JPA across PostgreSQL / SQL Server."],
            ["SECURITY", "Spring Security with JWT authentication and role-based access control across employee, HR and administrative endpoints."],
            ["MESSAGING & CACHING", "Apache Kafka for asynchronous event processing and Redis caching for high-frequency payroll and attendance lookups."],
            ["AI INTEGRATION", "Spring AI integration for document- and policy-based Q&A using retrieval and embeddings, with application-level access controls applied to retrieved context."],
            ["OPERATIONS", "Production debugging, API and database issue resolution, and ongoing enhancements across backend services in Agile delivery."]
          ].map(([label, text]) => <div className="experience-row" key={label}><strong>{label}</strong><p>{text}</p></div>)}</div></div></Reveal></div>
        </section>

        <section id="ai-lab" className="section border-y border-white/5" aria-labelledby="ai-title">
          <div className="container-x"><Reveal><div className="eyebrow"><span>04</span> / AI APPLICATION LAB</div><h2 id="ai-title" className="section-title">PRACTICAL AI.<br /><span className="muted-heading">BACKEND CONTROL.</span></h2><p className="section-copy">RAG and LLM capabilities are application components—not an authorization layer. The backend controls identity, access scope and retrieval before context reaches the model.</p></Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_.6fr]"><RagLab /><div className="tech-panel p-6"><div className="eyebrow"><span>SEC</span> / RAG</div><div className="security-flow">{["USER","JWT","SPRING SECURITY","RBAC","AUTHORIZED DATA SCOPE","VECTOR RETRIEVAL","CONTEXT","LLM","RESPONSE"].map((x, i) => <div key={x}><span className="node-dot" /><span>{x}</span>{i < 8 && <i />}</div>)}</div><div className="note">THE MODEL DOES NOT DECIDE AUTHORIZATION.<br />APPLICATION LOGIC CONTROLS RETRIEVED CONTEXT.</div></div></div>
          </div>
        </section>

        <section id="stack" className="section" aria-labelledby="stack-title"><div className="container-x"><Reveal><div className="eyebrow"><span>05</span> / ENGINEERING CONSTELLATION</div><h2 id="stack-title" className="section-title">THE STACK<br /><span className="muted-heading">AROUND THE CORE.</span></h2></Reveal><div className="mt-10"><Constellation /></div></div></section>

        <section id="playground" className="section border-y border-white/5" aria-labelledby="playground-title"><div className="container-x"><Reveal><div className="eyebrow"><span>06</span> / ARCHITECTURE PLAYGROUND</div><h2 id="playground-title" className="section-title">THINK IN<br /><span className="muted-heading">SYSTEMS.</span></h2><p className="section-copy">A conceptual playground for backend, distributed and AI application architecture.</p></Reveal><div className="mt-10"><Architecture /></div></div></section>

        <section id="timeline" className="section" aria-labelledby="timeline-title"><div className="container-x"><Reveal><div className="eyebrow"><span>07</span> / TIMELINE</div><h2 id="timeline-title" className="sr-only">Career and project timeline</h2><div className="timeline"><div><span>2024</span><h3>TCS / Java Backend</h3><p>Enterprise HRMS & Finance Microservices</p></div><div><span>2025</span><h3>Digital Library</h3><p>Spring Boot backend platform</p></div><div><span>PRESENT</span><h3>PolicyDocs / AI Application Engineering</h3><p>Spring AI, RAG, embeddings, pgvector and controlled retrieval</p></div></div></Reveal></div></section>

        <Contact />
      </main>

      <aside className="desktop-contact-rail" aria-label="Quick contact"><a href={`mailto:${site.email}`} aria-label="Email">✉</a><a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href={`tel:${site.phone.replaceAll(" ", "")}`} aria-label="Phone">☎</a></aside>

      <footer><div className="container-x footer-inner"><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} {site.name}</span></div></footer>
    </>
  );
}
