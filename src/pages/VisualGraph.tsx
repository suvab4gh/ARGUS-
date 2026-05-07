import { Search, ZoomIn, ZoomOut, Maximize, Share2 } from "lucide-react";

export default function VisualGraph() {
  return (
    <div className="h-full overflow-hidden bg-background flex flex-col">
      <div className="flex items-center justify-between border-b border-border bg-[#111114] px-6 py-4 shrink-0">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Temporal Knowledge Graph</h1>
          <p className="text-xs text-muted-foreground mt-1">
            4D Cross-document validation and evidence provenance mapping
          </p>
        </div>
        <div className="flex gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search nodes (e.g., REL-DEF-FIN-01)..."
                className="bg-[#0E0E11] border border-[#27272A] rounded pl-9 pr-4 py-1.5 text-xs text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors w-64"
              />
            </div>
            <button className="bg-[#0E0E11] border border-[#27272A] p-1.5 rounded hover:bg-[#27272A] transition-colors text-zinc-400 hover:text-zinc-300">
              <Share2 className="w-4 h-4" />
            </button>
        </div>
      </div>

      <div className="flex-1 flex relative">
        {/* Main Graph Area */}
        <div className="flex-1 relative bg-[#0A0A0C] border-r border-[#27272A] overflow-hidden flex items-center justify-center">
            
            {/* Graph Controls */}
            <div className="absolute top-4 left-4 bg-[#111114] border border-[#27272A] rounded p-1 flex flex-col gap-1 z-10">
                <button className="p-1.5 hover:bg-[#27272A] rounded text-zinc-400 transition-colors"><ZoomIn className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-[#27272A] rounded text-zinc-400 transition-colors"><ZoomOut className="w-4 h-4" /></button>
                <div className="w-full h-px bg-[#27272A] my-1"></div>
                <button className="p-1.5 hover:bg-[#27272A] rounded text-zinc-400 transition-colors"><Maximize className="w-4 h-4" /></button>
            </div>

            {/* Mock D3 Graph Rendering */}
            <div className="relative w-[800px] h-[600px] text-zinc-500">
                {/* Lines (Edges) */}
                <svg className="absolute inset-0 w-full h-full -z-0">
                    <line x1="400" y1="300" x2="200" y2="150" stroke="#27272A" strokeWidth="2" />
                    <line x1="400" y1="300" x2="600" y2="200" stroke="#27272A" strokeWidth="2" />
                    <line x1="400" y1="300" x2="350" y2="500" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="400" y1="300" x2="550" y2="450" stroke="#27272A" strokeWidth="2" />
                    
                    <line x1="200" y1="150" x2="100" y2="100" stroke="#27272A" strokeWidth="1" opacity="0.3" />
                    <line x1="200" y1="150" x2="300" y2="80" stroke="#27272A" strokeWidth="1" opacity="0.3" />
                    
                    <line x1="600" y1="200" x2="700" y2="100" stroke="#27272A" strokeWidth="1" opacity="0.3" />
                    <line x1="600" y1="200" x2="750" y2="250" stroke="#27272A" strokeWidth="1" opacity="0.3" />
                </svg>

                {/* Nodes */}
                {/* Central Node */}
                <div className="absolute top-[300px] left-[400px] -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-blue-900/20 rounded-full border-2 border-blue-500 flex flex-col items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <span className="text-xs font-bold font-mono">BID-04</span>
                        <span className="text-[8px] uppercase tracking-widest text-zinc-400">Alpha Tech</span>
                    </div>
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-[150px] left-[200px] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                    <div className="w-16 h-16 bg-emerald-900/20 rounded-full border border-emerald-500 flex flex-col items-center justify-center text-emerald-400 hover:scale-110 transition-transform">
                        <span className="text-[10px] font-bold font-mono">MSME</span>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-black/80 border border-zinc-800 p-2 rounded text-[10px] font-mono text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        Doc: Annexure_A_MSME.pdf<br/>Valid: Yes
                    </div>
                </div>

                <div className="absolute top-[200px] left-[600px] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                    <div className="w-16 h-16 bg-emerald-900/20 rounded-full border border-emerald-500 flex flex-col items-center justify-center text-emerald-400 hover:scale-110 transition-transform">
                        <span className="text-[10px] font-bold font-mono">ISO</span>
                        <span className="text-[8px]">9001</span>
                    </div>
                </div>

                <div className="absolute top-[500px] left-[350px] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10">
                    <div className="w-20 h-20 bg-red-900/20 rounded-full border-2 border-red-500 flex flex-col items-center justify-center text-red-500 hover:scale-110 transition-transform shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                        <span className="text-[10px] font-bold uppercase">Turnover</span>
                        <span className="text-[8px] text-red-400">Conflict</span>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-red-950/90 border border-red-500 p-2 rounded text-[10px] font-mono text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        Conflict: Temporal Integrity<br/>OCR Confidence: 0.42<br/>Path: /financials/Bal_Sheet_24.pdf
                    </div>
                </div>
                
                <div className="absolute top-[450px] left-[550px] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                    <div className="w-14 h-14 bg-zinc-900/40 rounded-full border border-zinc-500 flex flex-col items-center justify-center text-zinc-400 hover:scale-110 transition-transform">
                        <span className="text-[10px] font-bold">OEM</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-6 text-[10px] text-zinc-500 font-mono">
                Powered by Neo4j & LangChain Graph Transformers
            </div>
        </div>

        {/* Sidebar Info */}
        <aside className="w-80 bg-[#0E0E11] p-4 flex flex-col">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#E4E4E7] mb-4">Node Inspector</h2>
            
             <div className="bg-[#111114] border border-red-500/30 rounded p-4 flex-1">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-red-500 font-mono">NODE: Turnover_Conflict</span>
                </div>
                
                <div className="space-y-4 text-xs">
                    <div>
                        <div className="text-[10px] uppercase text-zinc-500 font-bold mb-1">Entity Reference</div>
                        <div className="font-mono text-zinc-300">Alpha Defense Tech (Bid #04)</div>
                    </div>
                    
                    <div>
                        <div className="text-[10px] uppercase text-zinc-500 font-bold mb-1">Source Material</div>
                        <div className="font-mono text-blue-400 cursor-pointer hover:underline">Bal_Sheet_24.pdf [Page 12]</div>
                    </div>

                    <div>
                        <div className="text-[10px] uppercase text-zinc-500 font-bold mb-1">Graph Relation</div>
                        <div className="bg-[#0A0A0C] p-2 border border-[#27272A] rounded font-mono text-[10px] text-zinc-400">
                            (Bid:04)-[SUBMITTED]-&gt;(Doc:Bal_Sheet)<br/>
                            (Doc:Bal_Sheet)-[CONTAINS_VALUE]-&gt;(Value:162.4Cr)<br/>
                            <span className="text-red-400">(Agent:Red)-[DISPUTES {"{reason: \"OCR_CONF_LOW\"}"}]-&gt;(Value:162.4Cr)</span>
                        </div>
                    </div>

                    <div>
                        <div className="text-[10px] uppercase text-zinc-500 font-bold mb-1">Resolution Protocol</div>
                        <p className="text-zinc-400">Requires Chief Justice manual verification of bounding box coordinates [X:410, Y:890] on original document scan.</p>
                    </div>
                </div>
             </div>
        </aside>
      </div>
    </div>
  );
}
