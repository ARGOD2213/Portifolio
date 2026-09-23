"use client";
import { useState } from "react";

type NodeId = "client" | "api" | "spring" | "postgres" | "redis" | "kafka" | "ai";
const nodes: Array<{id:NodeId; label:string; sub:string; x:number; y:number; z:number}> = [
  {id:"client",label:"Client",sub:"web / mobile",x:8,y:48,z:0},
  {id:"api",label:"REST API",sub:"HTTP",x:25,y:48,z:12},
  {id:"spring",label:"Spring Boot",sub:"service layer",x:45,y:48,z:24},
  {id:"postgres",label:"PostgreSQL",sub:"JPA / Hibernate",x:72,y:20,z:4},
  {id:"redis",label:"Redis",sub:"cache",x:73,y:42,z:10},
  {id:"kafka",label:"Kafka",sub:"events",x:72,y:64,z:16},
  {id:"ai",label:"Spring AI",sub:"RAG / LLM",x:71,y:84,z:22}
];
const edges:[NodeId,NodeId][] = [["client","api"],["api","spring"],["spring","postgres"],["spring","redis"],["spring","kafka"],["spring","ai"]];

export default function BackendWorld(){
  const [active,setActive]=useState<NodeId>("spring");
  const [tilt,setTilt]=useState({x:0,y:0});
  const activeNode=nodes.find(n=>n.id===active)!;
  function move(e:React.PointerEvent<HTMLDivElement>){
    const r=e.currentTarget.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    setTilt({x:y*4,y:x*-5});
  }
  return <div className="world" onPointerMove={move} onPointerLeave={()=>setTilt({x:0,y:0})}>
    <div className="world-topline"><span>BACKEND SYSTEM / LIVE VIEW</span><span>REQUEST 200 OK</span></div>
    <div className="world-scene" style={{"--tilt-x":String(tilt.x)+"deg","--tilt-y":String(tilt.y)+"deg"} as React.CSSProperties}>
      <div className="world-floor" aria-hidden="true"/>
      <svg className="world-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {edges.map(([a,b])=>{const A=nodes.find(n=>n.id===a)!; const B=nodes.find(n=>n.id===b)!; return <line key={a+b} x1={A.x} y1={A.y} x2={B.x} y2={B.y}/>})}
      </svg>
      <div className="packet packet-one" aria-hidden="true"/><div className="packet packet-two" aria-hidden="true"/>
      {nodes.map(n=><button key={n.id} className={"world-node "+(active===n.id?"selected":"")} style={{left:n.x+"%",top:n.y+"%",transform:"translate(-50%,-50%) translateZ("+n.z+"px)"}} onClick={()=>setActive(n.id)}>
        <span className="node-face"><strong>{n.label}</strong><small>{n.sub}</small></span><i aria-hidden="true"/>
      </button>)}
      <div className="world-core" aria-hidden="true"><span>JAVA</span><strong>21</strong></div>
    </div>
    <div className="world-info"><div><small>SELECTED COMPONENT</small><strong>{activeNode.label}</strong><span>{activeNode.sub}</span></div><p>Click a service to inspect the request path.</p></div>
  </div>;
}
