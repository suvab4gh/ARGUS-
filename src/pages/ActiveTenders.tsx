import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight, Clock, CheckCircle, ShieldAlert } from "lucide-react";

const activeTenders = [
  {
    id: "RFP-2026-CRPF-042",
    title: "Procurement of Tactical Drones Class III",
    bidders: 12,
    status: "MANUAL REVIEW",
    progress: 100,
    timeRemaining: "Action Required",
    department: "Air Wing",
    value: "₹45.5 Cr"
  },
  {
    id: "RFP-2026-CRPF-043",
    title: "Supply of Level IV Body Armor",
    bidders: 24,
    status: "PROCESSING",
    progress: 45,
    timeRemaining: "2h 15m left",
    department: "Logistics",
    value: "₹120.0 Cr"
  },
  {
    id: "RFP-2026-CRPF-040",
    title: "Border Surveillance Optical Sensors",
    bidders: 8,
    status: "COMPLETED",
    progress: 100,
    timeRemaining: "Evaluated",
    department: "Signal",
    value: "₹12.8 Cr"
  },
  {
    id: "RFP-2026-CRPF-045",
    title: "All-Terrain Vehicles (ATV) for LWE Areas",
    bidders: 5,
    status: "PROCESSING",
    progress: 10,
    timeRemaining: "8h 30m left",
    department: "Operations",
    value: "₹85.0 Cr"
  }
];

export default function ActiveTenders() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTenders = activeTenders.filter(tender =>
    tender.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tender.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full overflow-y-auto bg-background p-6 custom-scrollbar flex flex-col">
      <div className="mx-auto max-w-6xl w-full space-y-6 pb-8 flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between border-b border-border pb-4 shrink-0">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Active Tenders</h1>
            <p className="text-xs text-muted-foreground mt-1">
              Real-time monitoring and evaluation Pipeline
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search RFPs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#111114] border border-[#27272A] rounded pl-9 pr-4 py-1.5 text-xs text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors w-64"
              />
            </div>
            <button className="bg-[#111114] border border-[#27272A] p-1.5 rounded hover:bg-[#27272A] transition-colors text-zinc-400 hover:text-zinc-300">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#111114] border border-[#27272A] rounded flex flex-col min-h-0 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-3 border-b border-[#27272A] bg-[#0E0E11] text-[10px] font-bold uppercase tracking-widest text-zinc-500 shrink-0">
            <div className="col-span-3">RFP ID & Title</div>
            <div className="col-span-2">Department</div>
            <div className="col-span-2">Est. Value</div>
            <div className="col-span-2 text-center">Bidders</div>
            <div className="col-span-3">Status</div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filteredTenders.map((tender) => (
              <Link
                key={tender.id}
                to={`/tender/${tender.id}`}
                className="grid grid-cols-12 gap-4 p-4 border-b border-[#27272A] hover:bg-zinc-800/50 transition-colors group items-center"
              >
                <div className="col-span-3">
                  <div className="font-mono text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">{tender.id}</div>
                  <div className="text-xs text-zinc-400 mt-1 truncate">{tender.title}</div>
                </div>
                <div className="col-span-2 text-xs text-zinc-500">
                  {tender.department}
                </div>
                <div className="col-span-2 text-xs font-mono text-zinc-400">
                  {tender.value}
                </div>
                <div className="col-span-2 text-center text-xs font-mono">
                  <span className="bg-zinc-800 px-2 py-1 rounded text-zinc-300">{tender.bidders}</span>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center border rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
                        tender.status === "MANUAL REVIEW"
                          ? "bg-amber-500/10 text-amber-500 border-amber-500/30"
                          : tender.status === "PROCESSING"
                          ? "bg-blue-500/10 text-blue-500 border-blue-500/30"
                          : "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                      }`}
                    >
                      {tender.status === "MANUAL REVIEW" && <ShieldAlert className="w-3 h-3 mr-1" />}
                      {tender.status === "PROCESSING" && <Clock className="w-3 h-3 mr-1" />}
                      {tender.status === "COMPLETED" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {tender.status}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </div>
                  {tender.status === "PROCESSING" && (
                    <div className="mt-3 w-full bg-zinc-800 rounded-sm h-1 block">
                      <div
                        className="bg-blue-500 h-1 rounded-sm transition-all duration-1000"
                        style={{ width: `${tender.progress}%` }}
                      />
                    </div>
                  )}
                  <div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-bold">
                    {tender.timeRemaining}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
