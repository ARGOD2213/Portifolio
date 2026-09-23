export default function RagLab(){
 const steps=["Document","Chunk","Embedding","pgvector","Retrieve","Context","LLM","Response"];
 return <div className="rag-sheet"><div className="sheet-label">RETRIEVAL PATH</div><div className="rag-flow">{steps.map((s,i)=><div key={s} className="rag-step"><span>{s}</span>{i<steps.length-1&&<i aria-hidden="true"/>}</div>)}</div><div className="rag-caption">Authorization and retrieval scope remain application responsibilities before model context is assembled.</div></div>;
}
