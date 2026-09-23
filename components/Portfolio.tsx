"use client";
import { useEffect, useState } from "react";
import BackendWorld from "./BackendWorld";
import Contact from "./Contact";
import { site, type Project } from "@/lib/site";

function ProjectWorld({project}:{project:Project}){
  const labels=project.name.startsWith("Digital")?["Client","REST API","Spring Boot","PostgreSQL","Redis","AWS"]:["Document","Chunk","Embedding","pgvector","Retrieve","Spring AI","Response"];
  return <div className="mini-world" aria-label={project.name+" architecture"}><div className="mini-track">{labels.map((x,i)=><div className="mini-node" key={x}><span>{x}</span>{i<labels.length-1&&<i aria-hidden="true"/>}</div>)}</div></div>;
}
const nav=[["Work","#work"],["Experience","#experience"],["AI Lab","#ai-lab"],["Stack","#stack"],["Contact","#contact"]];
export default function Portfolio(){
 const [menu,setMenu]=useState(false),[scroll,setScroll]=useState(0);
 useEffect(()=>{const f=()=>setScroll(window.scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100);addEventListener("scroll",f,{passive:true});f();return()=>removeEventListener("scroll",f)},[]);
 return <>
  <div className="scroll-progress" style={{width:scroll+"%"}} aria-hidden="true"/>
  <header className="site-header"><nav className="nav-shell" aria-label="Primary navigation"><a className="brand" href="#top">CM</a><div className="desktop-nav">{nav.map(([n,h])=><a key={n} href={h}>{n}</a>)}</div><a className="nav-contact" href="#contact">Let’s talk</a><button className="menu-button" aria-expanded={menu} aria-label="Open navigation" onClick={()=>setMenu(!menu)}><span/><span/><span/></button></nav>{menu&&<div className="mobile-menu"><div>{nav.map(([n,h])=><a key={n} href={h} onClick={()=>setMenu(false)}>{n}</a>)}</div></div>}</header>
  <main id="main-content">
   <section id="top" className="hero-section"><div className="hero-copy-wrap"><div className="hero-copy-block"><p className="eyebrow">Java backend engineer / Hyderabad</p><h1>I build the systems<br/><em>behind the product.</em></h1><p className="hero-copy">Spring Boot services, secure APIs, distributed systems and practical AI integration — designed from request to data layer.</p><div className="hero-actions"><a className="action-primary" href="#work">Explore the work</a><a className="action-secondary" href={site.resume} download>Resume PDF</a></div></div><BackendWorld/></div><div className="hero-bottom"><span>01 — Backend</span><span>02 — Distributed systems</span><span>03 — AI applications</span></div></section>

   <section className="statement-section"><div className="section-width statement-grid"><p className="eyebrow">The engineering idea</p><h2>AI is a capability.<br/><span>The backend is the system.</span></h2><p className="statement-copy">I work from the reliable parts outward: API contracts, authentication, persistence, messaging, caching and cloud delivery. AI then plugs into those boundaries through retrieval, embeddings and controlled model access.</p></div></section>

   <section id="work" className="work-section"><div className="section-width"><div className="section-heading"><p className="eyebrow">Selected builds</p><h2>Systems I’m building.</h2></div><div className="project-stack">{site.projects.map((p,i)=><article className={"project-panel project-"+(i+1)} key={p.name}><div className="project-number">0{i+1}</div><div className="project-main"><span className="status">{p.status}</span><h3>{p.name}</h3><p className="project-problem">{p.problem}</p><div className="project-columns"><div><h4>Built</h4><ul>{p.built.map(x=><li key={x}>{x}</li>)}</ul></div><div><h4>Decisions</h4><ul>{p.decisions.map(x=><li key={x}>{x}</li>)}</ul></div></div><div className="tags">{p.stack.map(x=><span key={x}>{x}</span>)}</div></div><ProjectWorld project={p}/></article>)}</div></div></section>

   <section id="experience" className="experience-section"><div className="section-width experience-grid"><div><p className="eyebrow">Experience</p><h2>Tata Consultancy Services</h2><p className="role-meta">Software Engineer — Java Backend · Aug 2024 — Present · Hyderabad</p></div><div className="experience-list">{[["Backend","Spring Boot 3 microservices on Java 21; REST APIs and Spring Data JPA across PostgreSQL and SQL Server."],["Security","Spring Security with JWT authentication and role-based access control across employee, HR and administrative endpoints."],["Messaging & caching","Apache Kafka for asynchronous event processing and Redis caching for high-frequency payroll and attendance lookups."],["AI integration","Spring AI integration for document- and policy-based Q&A using retrieval and embeddings, with application-level access controls applied to retrieved context."],["Operations","Production debugging, API and database issue resolution, and ongoing backend enhancements in Agile delivery."]].map(([a,b])=><div key={a}><strong>{a}</strong><p>{b}</p></div>)}</div></div></section>

   <section id="ai-lab" className="ai-section"><div className="section-width"><div className="section-heading"><p className="eyebrow">AI application engineering</p><h2>Retrieval before generation.</h2><p>Authorization stays in the application. Retrieval decides the context. The model generates from that controlled context.</p></div><div className="ai-architecture"><div className="ai-node">DOCUMENT</div><i/><div className="ai-node">CHUNK</div><i/><div className="ai-node">EMBEDDING</div><i/><div className="ai-node accent">PGVECTOR</div><i/><div className="ai-node">RETRIEVE</div><i/><div className="ai-node accent">SPRING AI</div><i/><div className="ai-node">RESPONSE</div></div></div></section>

   <section id="stack" className="stack-section"><div className="section-width"><div className="section-heading"><p className="eyebrow">Stack</p><h2>The tools around the core.</h2></div><div className="stack-wall">{[["Java 21","Runtime"],["Spring Boot 3","Backend"],["Spring Security","JWT / RBAC"],["JPA / Hibernate","Persistence"],["PostgreSQL","Data"],["Kafka","Events"],["Redis","Caching"],["AWS","Cloud"],["Spring AI","AI integration"],["pgvector","Semantic retrieval"]].map(([a,b])=><div key={a} className="stack-item"><strong>{a}</strong><span>{b}</span></div>)}</div></div></section>

   <section className="closing-section"><div className="section-width closing-grid"><div><p className="eyebrow">From request to response</p><h2>Good backend work should be visible.</h2></div><div><p>I like systems where you can explain what happens after the request arrives: which service handles it, what data it touches, what event it emits, and where AI is allowed to participate.</p><a className="action-primary" href="#contact">Start a conversation</a></div></div></section>
   <Contact/>
  </main>
  <footer><div><span>{site.name} · {site.role} · Hyderabad</span><a href={"mailto:"+site.email}>{site.email}</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top</a><span>© {new Date().getFullYear()}</span></div></footer>
 </>;
}
