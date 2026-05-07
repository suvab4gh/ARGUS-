import { FileText, Download, CheckCircle, Clock } from "lucide-react";

export default function AuditLogs() {
  const audits = [
    {
      id: "AUD-8921-A",
      action: "BID_EVALUATION_COMPLETED",
      tender: "RFP-2026-CRPF-040",
      user: "System (ARGUS v2.4)",
      timestamp: "2026-05-07 16:30:12",
      hash: "8f4a2b9...e31c",
      status: "Verified",
    },
    {
      id: "AUD-8920-A",
      action: "MANUAL_OVERRIDE_APPROVED",
      tender: "RFP-2026-CRPF-042",
      user: "Officer K. Sharma (UID: 9481)",
      timestamp: "2026-05-07 14:15:00",
      hash: "c29d1ff...99ab",
      status: "Verified",
    },
    {
      id: "AUD-8919-C",
      action: "RULE_MODIFICATION",
      tender: "GLOBAL_CLAUSE_4.2",
      user: "Admin (UID: 0001)",
      timestamp: "2026-05-07 10:05:41",
      hash: "1a8b4cc...f021",
      status: "Verified",
    },
    {
      id: "AUD-8918-A",
      action: "BID_DISQUALIFIED_AUTO",
      tender: "RFP-2026-CRPF-043",
      user: "System (ARGUS v2.4)",
      timestamp: "2026-05-06 18:45:22",
      hash: "e7cf2a1...44bc",
      status: "Verified",
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-background p-6 custom-scrollbar flex flex-col">
      <div className="mx-auto max-w-6xl w-full space-y-6 pb-8 flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between border-b border-border pb-4 shrink-0">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Immutable Audit Trail</h1>
            <p className="text-xs text-muted-foreground mt-1">
              CAG/STQC compliant append-only logs with cryptographic signatures
            </p>
          </div>
          <button className="bg-[#111114] border border-[#27272A] p-2 rounded hover:bg-[#27272A] transition-colors text-zinc-400 hover:text-zinc-300 flex items-center gap-2 text-xs font-bold uppercase">
            <Download className="w-4 h-4" /> Export CSV logs
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 shrink-0">
            <div className="bg-[#111114] border border-[#27272A] rounded p-4">
                <div className="text-[10px] uppercase font-bold text-zinc-500 mb-2">Hashing Algorithm</div>
                <div className="font-mono text-sm text-[#E4E4E7]">SHA-256</div>
            </div>
            <div className="bg-[#111114] border border-[#27272A] rounded p-4">
                <div className="text-[10px] uppercase font-bold text-zinc-500 mb-2">Storage Medium</div>
                <div className="font-mono text-sm text-blue-400">PostgreSQL (WORM)</div>
            </div>
            <div className="bg-[#111114] border border-[#27272A] rounded p-4">
                <div className="text-[10px] uppercase font-bold text-zinc-500 mb-2">Latest Block Sync</div>
                <div className="font-mono text-sm text-emerald-500 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 2 Secs Ago
                </div>
            </div>
        </div>

        <div className="flex-1 bg-[#111114] border border-[#27272A] rounded flex flex-col min-h-0 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-3 border-b border-[#27272A] bg-[#0E0E11] text-[10px] font-bold uppercase tracking-widest text-zinc-500 shrink-0">
            <div className="col-span-2">Audit ID</div>
            <div className="col-span-3">Action Type</div>
            <div className="col-span-2">Target/Tender</div>
            <div className="col-span-2">Actor</div>
            <div className="col-span-3">Hash & Timestamp</div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {audits.map((log) => (
              <div
                key={log.id}
                className="grid grid-cols-12 gap-4 p-4 border-b border-[#27272A] hover:bg-zinc-800/30 transition-colors items-center"
              >
                <div className="col-span-2 font-mono text-xs text-zinc-400">
                  {log.id}
                </div>
                <div className="col-span-3 text-xs font-semibold text-zinc-300">
                  {log.action}
                </div>
                <div className="col-span-2 font-mono text-xs text-blue-400">
                  {log.tender}
                </div>
                <div className="col-span-2 text-xs text-zinc-500">
                  {log.user}
                </div>
                <div className="col-span-3">
                    <div className="font-mono text-[10px] text-zinc-500 truncate">{log.hash}</div>
                    <div className="text-[10px] text-zinc-400 mt-1 flex items-center gap-1">
                       <CheckCircle className="w-3 h-3 text-emerald-500" /> {log.timestamp}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
