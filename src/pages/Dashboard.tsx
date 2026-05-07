import { Link } from "react-router-dom";
import { FileText, Clock, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const performanceData = [
  { name: "Week 1", manual: 300, argus: 300 },
  { name: "Week 2", manual: 300, argus: 250 },
  { name: "Week 3", manual: 300, argus: 150 },
  { name: "Week 4", manual: 300, argus: 80 },
  { name: "Week 5", manual: 300, argus: 30 },
];

const tenders = [
  {
    id: "RFP-2026-CRPF-042",
    title: "Procurement of Tactical Drones Class III",
    bidders: 12,
    status: "MANUAL REVIEW",
    progress: 100,
    timeRemaining: "Action Required",
  },
  {
    id: "RFP-2026-CRPF-043",
    title: "Supply of Level IV Body Armor",
    bidders: 24,
    status: "PROCESSING",
    progress: 45,
    timeRemaining: "2h 15m left",
  },
  {
    id: "RFP-2026-CRPF-040",
    title: "Border Surveillance Optical Sensors",
    bidders: 8,
    status: "COMPLETED",
    progress: 100,
    timeRemaining: "Evaluated",
  },
];

export default function Dashboard() {
  return (
    <div className="h-full overflow-y-auto bg-background p-6 custom-scrollbar">
      <div className="mx-auto max-w-6xl space-y-6 pb-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">System Overview</h1>
            <p className="text-xs text-muted-foreground mt-1">
              ARGUS Tender Evaluation pipeline status
            </p>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-[10px] font-mono px-3 py-1.5 rounded flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            SYSTEM ONLINE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
          <div className="bg-[#111114] p-4 flex items-center gap-4">
            <div className="flex items-center gap-4 w-full">
              <div className="bg-blue-500/10 p-2.5 rounded text-blue-500 border border-blue-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Active RFPs</p>
                <p className="text-lg font-mono mt-0.5">14</p>
              </div>
            </div>
          </div>
          <div className="bg-[#111114] p-4 flex items-center gap-4">
            <div className="flex items-center gap-4 w-full">
              <div className="bg-emerald-500/10 p-2.5 rounded text-emerald-500 border border-emerald-500/20">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Hours Saved</p>
                <p className="text-lg font-mono mt-0.5">4,200h</p>
              </div>
            </div>
          </div>
          <div className="bg-[#111114] p-4 flex items-center gap-4">
            <div className="flex items-center gap-4 w-full">
              <div className="bg-amber-500/10 p-2.5 rounded text-amber-500 border border-amber-500/20">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Overrides</p>
                <p className="text-lg font-mono mt-0.5">12</p>
              </div>
            </div>
          </div>
          <div className="bg-[#111114] p-4 flex items-center gap-4">
            <div className="flex items-center gap-4 w-full">
              <div className="bg-indigo-500/10 p-2.5 rounded text-indigo-500 border border-indigo-500/20">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Audit Ready</p>
                <p className="text-lg font-mono mt-0.5">89</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#E4E4E7]">Recent Tenders</h2>
              <button className="text-[10px] font-bold text-blue-500 hover:text-blue-400 uppercase tracking-widest">View all</button>
            </div>
            <div className="rounded border border-border overflow-hidden bg-card">
              <ul className="divide-y divide-border">
                {tenders.map((tender) => (
                  <li key={tender.id}>
                    <Link
                      to={`/tender/${tender.id}`}
                      className="block hover:bg-secondary/50 transition-colors p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-mono text-sm tracking-tight">{tender.id}</h3>
                            <span
                              className={`inline-flex items-center border rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
                                tender.status === "MANUAL REVIEW"
                                  ? "bg-amber-500/10 text-amber-500 border-amber-500/30"
                                  : tender.status === "PROCESSING"
                                  ? "bg-blue-500/10 text-blue-500 border-blue-500/30"
                                  : "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                              }`}
                            >
                              {tender.status}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">{tender.title}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 text-right">
                          <p className="text-xs font-mono">{tender.bidders} Bidders</p>
                          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{tender.timeRemaining}</p>
                        </div>
                        <ArrowRight className="ml-4 w-4 h-4 text-zinc-600" />
                      </div>
                      {tender.status === "PROCESSING" && (
                        <div className="mt-3 w-full bg-zinc-800 rounded-sm h-1 block">
                          <div
                            className="bg-blue-500 h-1 rounded-sm transition-all duration-1000"
                            style={{ width: `${tender.progress}%` }}
                          />
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#E4E4E7] border-b border-border pb-2">Evaluation Velocity</h2>
            <div className="rounded border border-border bg-[#111114] p-4 h-[390px] flex flex-col">
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-4">Avg. Hours per RFP</p>
              <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#71717a" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#71717a" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorArgus" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#111114', border: '1px solid #27272a', borderRadius: '4px', fontSize: '11px' }}
                      itemStyle={{ fontSize: '11px' }}
                    />
                    <Area type="monotone" dataKey="manual" stroke="#71717a" strokeWidth={2} fillOpacity={1} fill="url(#colorManual)" name="Standard Manual" />
                    <Area type="monotone" dataKey="argus" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorArgus)" name="ARGUS Pipeline" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
