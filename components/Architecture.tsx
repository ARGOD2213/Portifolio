"use client";
import { useState } from "react";
const modes={Backend:["Client","Controller","Service","Repository","Database"],Distributed:["Service A","Kafka","Service B","Redis","Database"],AI:["User","Security","Retrieval","pgvector","Context","LLM"]};
export default function Architecture(){
 const [mode,setMode]=useState<keyof typeof modes>("Backend");
 return <div className="architecture-sheet">
  <div className="mode-tabs">{Object.keys(modes).map(m=><button key={m} onClick={()=>setMode(m as keyof typeof modes)} className={mode===m?"active":""}>{m}</button>)}</div>
  <div className="architecture-flow">{modes[mode].map((n,i)=><div className="architecture-step" key={n}><span>{n}</span>{i<modes[mode].length-1&&<i aria-hidden="true"/>}</div>)}</div>
  <p className="drawing-note">Conceptual architecture — not a one-to-one production topology.</p>
 </div>;
}
