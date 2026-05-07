import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Scale, Settings, Users, FileText, CheckCircle, ShieldAlert, BookOpen } from "lucide-react";
import { cn } from "../lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Active Tenders", href: "/tenders", icon: FileText },
  { name: "Agent Rules", href: "/rules", icon: Scale },
  { name: "Visual Graph", href: "/graph", icon: Users },
  { name: "Audit Logs", href: "/audit", icon: CheckCircle },
  { name: "Govt Library", href: "/library", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-[#0E0E11]">
      <div className="flex h-14 shrink-0 items-center px-4 border-b border-border bg-[#111114]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-[10px]">A</div>
          <span className="font-semibold text-sm tracking-tight text-[#E4E4E7]">ARGUS <span className="text-zinc-500 font-normal">| Review</span></span>
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto px-3 py-4">
        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-bold px-2">Navigation</div>
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || (location.pathname.startsWith('/tender/') && item.href === '/tenders');
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  isActive
                    ? "bg-blue-600/10 border-blue-600/40 text-blue-400 border"
                    : "text-zinc-400 hover:bg-zinc-800 border border-transparent",
                  "group flex items-center rounded px-2 py-1.5 text-xs transition-colors"
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? "text-blue-400" : "text-zinc-500 group-hover:text-zinc-300",
                    "mr-3 h-4 w-4 shrink-0 transition-colors"
                  )}
                  aria-hidden="true"
                />
                {item.name}
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-border p-4 bg-[#111114]">
        <div className="bg-zinc-900/50 p-3 border border-zinc-800 rounded">
          <div className="text-[10px] text-zinc-500 uppercase mb-2">Audit Integrity</div>
          <div className="text-[10px] font-mono break-all opacity-60">SHA-256: f4e3a89...d91c</div>
          <div className="w-full h-1 bg-zinc-800 rounded mt-2">
            <div className="w-full h-full bg-emerald-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
