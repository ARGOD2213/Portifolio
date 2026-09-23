"use client";
import { useState } from "react";
const nodes=[["client",12,50,"Client"],["api",30,50,"API"],["spring",50,50,"Spring Boot"],["db",78,25,"PostgreSQL"],["redis",78,43,"Redis"],["kafka",78,61,"Kafka"],["ai",78,79,"Spring AI"]];
const edges=[["client","api"],["api","spring"],["spring","db"],["spring","redis"],["spring","kafka"],["spring","ai"]];
export default function Network(){
 const [active,setActive]=useState("spring");
 const find=(id:string)=>nodes.find(n=>n[0]===id)!;
 return <div className="request-sheet">
   <div className="sheet-label">REQUEST TRACE</div>
   <div className="trace-meta">GET /api/payroll/employee/{'{id}'} <span>200 OK</span></div>
   <svg viewBox="0 0 100 100" aria-hidden="true" className="request-lines">
    {edges.map(([a,b])=>{const A=find(a),B=find(b);return <path key={a+b} d={`M ${A[1]} ${A[2]} L ${B[1]} ${B[2]}`} />})}
    {nodes.map(n=><circle key={n[0]} cx={n[1]} cy={n[2]} r={active===n[0]?2.6:1.8} className={active===n[0]?"active-node":""}/>)}
   </svg>
   {nodes.map(n=><button key={n[0]} className={`trace-node ${active===n[0]?"selected":""}`} style={{left:`${n[1]}%`,top:`${n[2]}%`}} onClick={()=>setActive(String(n[0]))}>
     <span>{n[3]}</span>
   </button>)}
   <div className="trace-footer"><strong>{String(find(active)[3])}</strong><span>Application-controlled request path</span></div>
 </div>;
}
