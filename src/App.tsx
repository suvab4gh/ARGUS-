import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import TenderDetails from "./pages/TenderDetails";
import ActiveTenders from "./pages/ActiveTenders";
import AgentRules from "./pages/AgentRules";
import VisualGraph from "./pages/VisualGraph";
import AuditLogs from "./pages/AuditLogs";
import GovtLibrary from "./pages/GovtLibrary";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden selection:bg-indigo-500/30">
      <Sidebar />
      <main className="flex-1 overflow-hidden relative">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tenders" element={<ActiveTenders />} />
          <Route path="/rules" element={<AgentRules />} />
          <Route path="/graph" element={<VisualGraph />} />
          <Route path="/audit" element={<AuditLogs />} />
          <Route path="/library" element={<GovtLibrary />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tender/:id" element={<TenderDetails />} />
        </Routes>
      </main>
    </div>
  );
}
