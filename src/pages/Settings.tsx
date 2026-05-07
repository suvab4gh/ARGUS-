import { Settings as SettingsIcon, Shield, Database, Users, Bell, Lock } from "lucide-react";

export default function Settings() {
  return (
    <div className="h-full overflow-y-auto bg-background p-6 custom-scrollbar flex flex-col">
      <div className="mx-auto max-w-6xl w-full space-y-6 pb-8 flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between border-b border-border pb-4 shrink-0">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">System Configuration</h1>
            <p className="text-xs text-muted-foreground mt-1">
               Manage ARGUS instance settings, security policies, and integrations
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded transition-colors">
            Save Changes
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 flex-1 min-h-0">
            {/* Settings Sidebar */}
            <div className="col-span-1 space-y-1">
                <button className="w-full flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded transition-colors text-xs font-medium">
                    <Shield className="w-4 h-4" /> Agent Parameters
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-[#111114] text-zinc-400 rounded transition-colors text-xs font-medium">
                    <Database className="w-4 h-4" /> Knowledge Graph
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-[#111114] text-zinc-400 rounded transition-colors text-xs font-medium">
                    <Users className="w-4 h-4" /> Access Control
                </button>
                 <button className="w-full flex items-center gap-3 p-3 hover:bg-[#111114] text-zinc-400 rounded transition-colors text-xs font-medium">
                    <Lock className="w-4 h-4" /> Audit & Compliance
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-[#111114] text-zinc-400 rounded transition-colors text-xs font-medium">
                    <Bell className="w-4 h-4" /> Notifications
                </button>
            </div>

            {/* Settings Content */}
            <div className="col-span-3 bg-[#111114] border border-[#27272A] rounded p-6 overflow-y-auto custom-scrollbar">
               <h2 className="text-sm font-semibold tracking-tight text-[#E4E4E7] mb-6 flex items-center gap-2">
                   <SettingsIcon className="w-4 h-4 text-zinc-500" /> Agent Parameters
               </h2>

               <div className="space-y-6">
                   <div className="space-y-4">
                       <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-[#27272A] pb-2">OCR & Vision Confidence</h3>
                       
                       <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs font-medium text-zinc-300">Minimum OCR Confidence Threshold</div>
                                <div className="text-[10px] text-zinc-500 mt-1">If Red Agent detects confidence below this value, auto-trigger MANUAL REVIEW.</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="range" min="0.5" max="0.99" step="0.01" defaultValue="0.85" className="w-32 accent-blue-500" />
                                <span className="bg-[#0E0E11] border border-[#27272A] px-2 py-1 rounded text-xs font-mono text-zinc-300">0.85</span>
                            </div>
                       </div>
                   </div>

                   <div className="space-y-4">
                       <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-[#27272A] pb-2 pt-4">LLM Orchestration</h3>
                       
                       <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs font-medium text-zinc-300">Debate Depth (Turn Limit)</div>
                                <div className="text-[10px] text-zinc-500 mt-1">Maximum number of exchanges between Blue and Red before Judge intervenes.</div>
                            </div>
                            <select defaultValue="3" className="bg-[#0E0E11] border border-[#27272A] px-3 py-1.5 rounded text-xs text-zinc-300 focus:outline-none focus:border-blue-500">
                                <option value="1">1 Exchange (Fast)</option>
                                <option value="2">2 Exchanges (Standard)</option>
                                <option value="3">3 Exchanges (Deep)</option>
                            </select>
                       </div>

                       <div className="flex items-center justify-between pt-2">
                            <div>
                                <div className="text-xs font-medium text-zinc-300">Model Fallback Chain</div>
                                <div className="text-[10px] text-zinc-500 mt-1">Order of models for redundancy.</div>
                            </div>
                            <div className="text-xs font-mono text-zinc-400 bg-[#0E0E11] border border-[#27272A] px-3 py-1.5 rounded">
                                Llama-3.1-70B &rarr; GPT-4o &rarr; Claude-3.5
                            </div>
                       </div>
                   </div>
                   
                   <div className="space-y-4">
                       <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-[#27272A] pb-2 pt-4">Strict Adherence Modes</h3>
                       
                       <label className="flex flex-row items-center justify-between cursor-pointer group">
                           <div>
                                <div className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">Zero-Tolerance Temporal Mode</div>
                                <div className="text-[10px] text-zinc-500 mt-1">Instantly flag documents dated after RFP deadline, regardless of content.</div>
                            </div>
                            <div className="relative">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
                            </div>
                       </label>
                   </div>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
}
