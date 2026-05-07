import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ShieldAlert, FileText, CornerDownRight, ZoomIn, Search, FileBadge } from "lucide-react";
import { motion } from "motion/react";

const DEBATE_TRANSCRIPT = [
  {
    agent: "BLUE",
    role: "Defense",
    message: "Bidder 'Alpha Defense Tech' has submitted MSME Certificate ending in 4920. According to Section 4.2 of the RFP, MSME registered firms are exempt from the EMD criteria. Recommending ELIGIBLE for EMD waiver.",
    timestamp: "10:24:01.002",
    citations: [{ doc: "Annexure_A_MSME.pdf", page: 1, text: "MSME Udyam Registration number UDYAM-DL-10-0004920" }]
  },
  {
    agent: "RED",
    role: "Prosecution",
    message: "Objection. Connecting to Temporal Knowledge Graph... The MSME certificate issuance date is 14-Aug-2025. The deadline for tender submission was 12-Aug-2025. The certificate was acquired AFTER the submission cutoff. Also, OCR confidence on turnover numbers in the preceding document 'Bal_Sheet_24.pdf' is 0.42 (blurry).",
    timestamp: "10:24:01.854",
    citations: [
      { doc: "RFP_Core.pdf", page: 12, text: "All eligibility certificates must be valid as of the bid submission deadline." },
      { doc: "Annexure_A_MSME.pdf", page: 1, text: "Date of Issue: 14/08/2025", isFocus: true }
    ]
  },
  {
    agent: "BLUE",
    role: "Defense",
    message: "Cross-referencing bidder clarifications... The bidder submitted a pre-bid query on 01-Aug regarding MSME portal downtime. However, no formal extension was granted in Corrigendum 1.",
    timestamp: "10:24:02.411",
    citations: []
  },
  {
    agent: "JUDGE",
    role: "Referee",
    message: "Analyzing debate. Red Agent's timeline objection is factually grounded in RFP_Core.pdf (Pg 12) and corroborated by the issue date on the MSME certificate. Furthermore, Red's assertion regarding low OCR confidence on 'Bal_Sheet_24.pdf' triggers strict security protocols. System cannot swallow ambiguity.",
    timestamp: "10:24:03.055",
    citations: []
  }
];

export default function TenderDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"debate" | "graph">("debate");

  return (
    <div className="flex h-full w-full flex-col bg-background">
      {/* Header */}
      <header className="h-14 border-b border-[#27272A] bg-[#111114] flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-zinc-500 hover:text-zinc-300">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">A</div>
            <h1 className="font-semibold text-lg tracking-tight">ARGUS <span className="text-zinc-500 font-normal">| Review System</span></h1>
          </div>
          <div className="h-4 w-px bg-zinc-800"></div>
          <div className="text-xs font-mono text-zinc-400">RFP-ID: {id || "CRPF/MOD/2026/092-B"}</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-bold uppercase tracking-wider">Phase: Judicial Scrutiny</div>
          <div className="text-zinc-500 text-xs italic">Last Update: 10:36 PM IST</div>
        </div>
      </header>

      {/* Split Screen */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Evidence Viewer */}
        <div className="flex w-1/2 flex-col border-r border-[#27272A] bg-[#0E0E11]">
          <div className="flex h-12 items-center justify-between border-b border-[#27272A] px-4 bg-[#111114]">
            <div className="flex items-center gap-2">
              <FileBadge className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold">Annexure_A_MSME.pdf</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <button className="p-1 hover:text-zinc-300"><ZoomIn className="w-3.5 h-3.5" /></button>
              <button className="p-1 hover:text-zinc-300"><Search className="w-3.5 h-3.5" /></button>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
            {/* Mocked PDF Viewer with Bounding Box */}
            <div className="relative w-full max-w-sm aspect-[1/1.4] bg-zinc-200 rounded shadow-sm border border-border p-6 font-serif text-black">
              <div className="border-b-2 border-black pb-3 mb-3 text-center">
                <h2 className="text-sm font-bold uppercase">Government of India</h2>
                <h3 className="text-xs">Ministry of MSME</h3>
                <p className="text-[10px] mt-1">UDYAM REGISTRATION CERTIFICATE</p>
              </div>
              <div className="space-y-3 text-[10px] mt-6">
                <div className="flex justify-between">
                  <span className="font-semibold">UDYAM REGISTRATION NUMBER:</span>
                  <span>UDYAM-DL-10-0004920</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">NAME OF ENTERPRISE:</span>
                  <span>ALPHA DEFENSE TECH</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">DATE OF INCORPORATION:</span>
                  <span>10/05/2021</span>
                </div>

                {/* Highlighted bounding box for the objection */}
                <div className="absolute top-[40%] left-[6%] right-[6%] border-2 border-red-600 bg-red-500/20 p-2 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] z-10">
                  <div className="flex justify-between text-red-950 font-medium relative">
                    <span className="font-bold">DATE OF ISSUE:</span>
                    <span>14/08/2025</span>
                    <div className="absolute -top-5 -right-2 bg-red-600 text-white text-[8px] px-1.5 py-0.5 rounded-sm font-sans shadow-md flex items-center gap-1">
                      <ShieldAlert className="w-2.5 h-2.5" />
                      RED AGENT FLAG
                    </div>
                  </div>
                </div>
                
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 text-center text-[9px] text-gray-500">
                Digitally Signed. <br/> Mock document for UI demonstration.
              </div>
            </div>
          </div>
        </div>

        {/* Right: Agent Debate */}
        <div className="flex flex-1 flex-col bg-[#0A0A0C]">
          <div className="flex h-12 items-center border-b border-[#27272A] px-4 bg-[#111114]">
            <nav className="flex space-x-6">
              <button 
                onClick={() => setActiveTab('debate')}
                className={`text-[11px] uppercase tracking-widest font-bold h-12 border-b-2 transition-colors ${activeTab === 'debate' ? 'border-blue-500 text-blue-400' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
              >
                Debate Transcript
              </button>
              <button 
                onClick={() => setActiveTab('graph')}
                className={`text-[11px] uppercase tracking-widest font-bold h-12 border-b-2 transition-colors ${activeTab === 'graph' ? 'border-blue-500 text-blue-400' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
              >
                Knowledge Graph
              </button>
            </nav>
          </div>
          
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 overflow-auto p-4 space-y-4 custom-scrollbar">
            {activeTab === 'debate' ? (
              <div className="space-y-6">
                {DEBATE_TRANSCRIPT.map((entry, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    key={idx} 
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`px-2 py-0.5 rounded-sm text-[9px] uppercase font-bold tracking-widest ${
                        entry.agent === 'BLUE' ? 'bg-blue-900/40 text-blue-400 border border-blue-500/30' : 
                        entry.agent === 'RED' ? 'bg-red-900/40 text-red-400 border border-red-500/30' : 
                        'bg-amber-500/20 text-amber-500 border border-amber-500/30'
                      }`}>
                        Agent {entry.agent} ({entry.role})
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">{entry.timestamp}</span>
                    </div>
                    
                    <div className={`p-3 rounded border-l-2 text-xs leading-relaxed font-sans ${
                      entry.agent === 'BLUE' ? 'bg-[#16161D] border-blue-500 text-[#E4E4E7]' : 
                      entry.agent === 'RED' ? 'bg-[#1D1616] border-red-500 text-[#E4E4E7]' : 
                      'bg-amber-500/10 border-amber-500 text-[#E4E4E7]'
                    }`}>
                      {entry.message}
                      
                      {entry.citations.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-[#27272A] flex flex-col gap-2">
                          {entry.citations.map((cite, cIdx) => (
                            <button key={cIdx} className={`flex items-start gap-2 text-left p-2 rounded bg-black/20 hover:bg-black/40 border transition-colors ${
                              cite.isFocus ? 'border-red-500/40 ring-1 ring-red-500/20' : 'border-[#27272A]'
                            }`}>
                              <FileText className="w-3.5 h-3.5 mt-0.5 shrink-0 text-zinc-500" />
                              <div>
                                <div className="text-[10px] font-bold text-zinc-400">{cite.doc} • Pg {cite.page}</div>
                                <div className="text-[10px] text-zinc-500 mt-0.5 font-mono">"{cite.text}"</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Final Verdict Box */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: DEBATE_TRANSCRIPT.length * 0.2 + 0.3 }}
                  className="mt-6 border border-amber-500/20 bg-amber-500/10 rounded p-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                  <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" />
                    Status: MANUAL REVIEW REQUIRED
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400">
                    Agent JUDGE has determined that contradictory temporal evidence exists, and OCR confidence on preceding financial documents falls below the acceptable threshold (0.42 &lt; 0.85). 
                  </p>
                  <div className="mt-3 bg-black/40 border border-[#27272A] rounded p-3">
                    <h4 className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider mb-1">Required Human Action</h4>
                    <p className="text-[11px] text-zinc-300">Verify the issuance date of the MSME Certificate relative to Corrigendum 1 modifications. Verify the 'Trade Payables' table in Bal_Sheet_24.pdf.</p>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-zinc-500 space-y-4">
                <div className="w-64 h-64 border border-dashed border-[#27272A] rounded-full flex items-center justify-center relative">
                    <div className="w-14 h-14 bg-blue-900/20 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 absolute top-8 left-8 text-xs font-bold">Alpha</div>
                    <div className="w-14 h-14 bg-emerald-900/20 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-400 absolute bottom-8 right-12 z-10 text-xs font-bold">MSME</div>
                    <div className="w-16 h-16 bg-red-900/20 rounded-full border border-red-500 flex flex-col items-center justify-center text-red-400 absolute top-20 right-8 text-[10px] text-center z-10 font-mono">Date<br/>14-Aug</div>
                    <svg className="absolute inset-0 w-full h-full -z-0">
                      <line x1="80" y1="80" x2="200" y2="100" stroke="#27272A" strokeWidth="2" strokeDasharray="4" />
                      <line x1="80" y1="80" x2="160" y2="180" stroke="#27272A" strokeWidth="2" strokeDasharray="4" />
                      <line x1="160" y1="180" x2="200" y2="100" stroke="#ef4444" strokeWidth="2" />
                    </svg>
                </div>
                <p className="text-xs uppercase tracking-widest">Knowledge Graph Visualization</p>
              </div>
            )}
            </div>
            
            <aside className="w-72 border-l border-[#27272A] bg-[#0E0E11] p-4 flex flex-col shrink-0">
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Chief Justice Actions</div>
              <div className="space-y-3">
                <button className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-[11px] font-bold tracking-wider uppercase rounded border border-zinc-700 transition-all text-zinc-300">Inspect Evidence</button>
                <button className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-[11px] font-bold tracking-wider uppercase rounded transition-all text-white">Reject Bidder</button>
                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-[11px] font-bold tracking-wider uppercase rounded transition-all text-white">Approve & Sign</button>
              </div>
              <div className="mt-8">
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-bold">Provenance Graph</div>
                <div className="space-y-3 p-3 bg-black/40 rounded border border-zinc-800 font-mono text-[9px] leading-relaxed">
                  <div className="flex gap-2 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1"></div>
                    <div><span className="text-zinc-500">NODE:</span> <span className="text-zinc-300">REL-DEF-FIN-01</span><br/><span className="text-zinc-500">SRC:</span> <span className="text-zinc-400">scan_912_p12.tiff</span></div>
                  </div>
                  <div className="flex gap-2 items-start opacity-70">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1"></div>
                    <div><span className="text-zinc-500">HASH:</span> <span className="text-zinc-300">b32a...e981</span><br/><span className="text-zinc-500">TS:</span> <span className="text-zinc-400">2026-04-30 22:36:01</span></div>
                  </div>
                  <div className="flex gap-2 items-start text-red-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1"></div>
                    <div><span className="text-red-500">CONFLICT:</span> DATA_MISMATCH<br/><span className="text-zinc-500">SYS:</span> RedAgent_v2.4</div>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-[#27272A]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                  <span className="text-[10px] text-zinc-400 font-mono">SECURE CONNECTION: ESTABLISHED</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
