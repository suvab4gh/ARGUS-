import { Scale, FileText, CheckCircle, Search, FileBadge, ArrowRight } from "lucide-react";

export default function AgentRules() {
  return (
    <div className="h-full overflow-y-auto bg-background p-6 custom-scrollbar">
      <div className="mx-auto max-w-6xl space-y-6 pb-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Agent Rules & Criteria</h1>
            <p className="text-xs text-muted-foreground mt-1">
              Visual Rule Composer and Adversarial Logic configuration
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded transition-colors">
            + Formulate New Rule
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            <div className="bg-[#111114] border border-[#27272A] rounded p-4">
              <div className="relative mb-4">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search rules..."
                  className="w-full bg-[#0E0E11] border border-[#27272A] rounded pl-9 pr-4 py-2 text-xs text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Core Clauses</div>
                <button className="w-full text-left p-2 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium">
                  4.2.1: Annual Turnover
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-zinc-800 text-zinc-400 text-xs transition-colors">
                  4.3.1: MSME Exemption
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-zinc-800 text-zinc-400 text-xs transition-colors">
                  5.1.2: ISO Certification
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-zinc-800 text-zinc-400 text-xs transition-colors">
                  6.4: OEM Authorization
                </button>
              </div>
            </div>
            
            <div className="bg-[#111114] border border-[#27272A] rounded p-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#E4E4E7] mb-3">Agent Directives</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded bg-blue-500"></div>
                        <span className="text-zinc-400 font-mono">Agent BLUE</span>
                        <span className="text-zinc-600 ml-auto">Defend Bidder</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded bg-red-500"></div>
                        <span className="text-zinc-400 font-mono">Agent RED</span>
                        <span className="text-zinc-600 ml-auto">Prosecute/Find Flaws</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded bg-amber-500"></div>
                        <span className="text-zinc-400 font-mono">Agent JUDGE</span>
                        <span className="text-zinc-600 ml-auto">Determine Verdict</span>
                    </div>
                </div>
            </div>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="bg-[#111114] border border-[#27272A] rounded p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-blue-400">Clause 4.2.1: Annual Turnover</h2>
                  <p className="text-xs text-zinc-400 mt-1">Financial criteria for bidders</p>
                </div>
                <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-[10px] font-bold uppercase rounded">
                  Active
                </div>
              </div>

              <div className="bg-[#0E0E11] border border-[#27272A] rounded p-4 mb-6">
                <div className="text-[10px] font-mono text-zinc-500 mb-2">ORIGINAL TENDER TEXT</div>
                <p className="text-xs text-zinc-300 leading-relaxed font-serif">
                  "The average annual financial turnover of the bidder during the last three years, ending on 31st March of the previous financial year, should be at least ₹150.00 Crores. The turnover must explicitly exclude non-operating income. Documentary evidence in the form of certified Audited Balance Sheets of relevant periods must be provided."
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#E4E4E7]">System Prompts & Constraints</h3>
                
                <div className="border border-blue-500/30 bg-blue-900/10 rounded p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Agent BLUE Instructions</span>
                  </div>
                  <ul className="list-inside list-disc text-xs text-zinc-400 space-y-1 ml-2 font-mono">
                    <li>Extract "Turnover" or "Total Revenue" from P&L Statements.</li>
                    <li>Sum and average the last 3 financial years.</li>
                    <li>If "Non-Operating Income" is listed separately, subtract it.</li>
                    <li>If Average &gt;= 150 Cr, argue ELIGIBLE. Cite specific pages.</li>
                  </ul>
                </div>

                <div className="border border-red-500/30 bg-red-900/10 rounded p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">Agent RED Instructions</span>
                  </div>
                  <ul className="list-inside list-disc text-xs text-zinc-400 space-y-1 ml-2 font-mono">
                    <li>Verify documents are signed by a Chartered Accountant (verify UDIN).</li>
                    <li>Check if the turnover includes subsidiary revenue not part of the bid entity.</li>
                    <li>Alert if OCR confidence on turnover numerical values is &lt; 0.85.</li>
                    <li>If Average &lt; 150 Cr, argue INELIGIBLE. Provide conflict node.</li>
                  </ul>
                </div>
                
                 <div className="border border-amber-500/30 bg-amber-500/5 rounded p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">Agent JUDGE Logic Gate</span>
                  </div>
                  <div className="p-3 bg-black/40 rounded border border-zinc-800 text-xs font-mono text-zinc-400">
                    <span className="text-blue-400">IF</span> RED.objections.contains("OCR_LOW_CONFIDENCE")<br/>
                    <span className="text-amber-500">THEN</span> return MANUAL_REVIEW<br/><br/>
                    <span className="text-blue-400">IF</span> BLUE.average &gt;= 150 AND RED.validations.passed == true<br/>
                    <span className="text-emerald-500">THEN</span> return ELIGIBLE
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
