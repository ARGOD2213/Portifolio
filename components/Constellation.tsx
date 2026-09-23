"use client";
import { useState } from "react";
const techs=[["Java",50,12,"runtime"],["Kafka",18,27,"async events"],["Redis",80,27,"caching"],["Security",18,55,"JWT / RBAC"],["JPA",80,55,"persistence"],["PostgreSQL",25,82,"relational data"],["Spring AI",76,82,"AI integration"],["RAG",50,91,"retrieval"],["Spring Boot",50,50,"core backend"]];
export default function Constellation(){
 const [active,setActive]=useState("Spring Boot");
 return <div className="constellation-sheet"><svg viewBox="0 0 100 100" aria-hidden="true">{techs.filter(t=>t[0]!=="Spring Boot").map(t=><line key={t[0]} x1="50" y1="50" x2={t[1]} y2={t[2]}/>)}</svg>{techs.map(t=><button key={t[0]} className={active===t[0]?"tech-node active":"tech-node"} style={{left:t[1]+"%",top:t[2]+"%"}} onClick={()=>setActive(t[0])}><strong>{t[0]}</strong><small>{t[3]}</small></button>)}<div className="constellation-caption">Selected: <strong>{active}</strong></div></div>;
}
