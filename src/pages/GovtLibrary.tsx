import { useState } from "react";
import { BookOpen, Search, FileText, ArrowRight, BookMarked } from "lucide-react";

const books = [
  {
    id: "GFR-2017",
    title: "General Financial Rules (GFR)",
    year: 2017,
    category: "Finance",
    matches: 24,
    description: "Rules and orders made by the Government of India in matters involving public finances."
  },
  {
    id: "MOP-2022",
    title: "Manual for Procurement of Goods",
    year: 2022,
    category: "Procurement",
    matches: 112,
    description: "Guidelines and procedures for procurement of goods by Central Government Ministries/Departments."
  },
  {
    id: "CVC-GUIDE",
    title: "CVC Guidelines on Tenders",
    year: 2021,
    category: "Vigilance",
    matches: 8,
    description: "Central Vigilance Commission guidelines for transparency in tendering and contracts."
  },
  {
    id: "MSME-ACT",
    title: "MSME Development Act",
    year: 2006,
    category: "Legal",
    matches: 45,
    description: "Provisions relating to exemptions, preference, and delayed payments to MSMEs."
  }
];

export default function GovtLibrary() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full overflow-y-auto bg-background p-6 custom-scrollbar flex flex-col">
      <div className="mx-auto max-w-6xl w-full space-y-6 pb-8 flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between border-b border-border pb-4 shrink-0">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Government Reference Library</h1>
            <p className="text-xs text-muted-foreground mt-1">
              Search through official handbooks, rules, and procurement guidelines
            </p>
          </div>
          <div className="bg-[#111114] border border-[#27272A] px-4 py-2 rounded flex items-center gap-2 text-xs font-mono text-zinc-400">
            <BookOpen className="w-4 h-4 text-blue-500" /> 2,401 Documents Indexed
          </div>
        </div>

        <div className="bg-[#111114] border border-[#27272A] rounded p-6 shrink-0">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#E4E4E7] mb-4">Semantic Search</h2>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
              <input
                type="text"
                placeholder="Search rules, clauses, e.g., 'What is the EMD exemption for MSME?'"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0E0E11] border border-[#27272A] rounded-lg pl-12 pr-4 py-4 text-sm text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors">
                 Deep Search
              </button>
            </div>
            <div className="flex gap-2 mt-3 text-[10px] text-zinc-500">
                <span className="font-bold uppercase">Trending Queries:</span>
                <span className="hover:text-blue-400 cursor-pointer underline decoration-zinc-700 underline-offset-2 transition-colors">ISO 9001 validity cutoff</span>
                <span>|</span>
                <span className="hover:text-blue-400 cursor-pointer underline decoration-zinc-700 underline-offset-2 transition-colors">Joint venture turnover calculation</span>
                <span>|</span>
                <span className="hover:text-blue-400 cursor-pointer underline decoration-zinc-700 underline-offset-2 transition-colors">Make in India class 1 local supplier</span>
            </div>
        </div>

         <h2 className="text-xs font-bold uppercase tracking-widest text-[#E4E4E7] mt-4 shrink-0">Official Handbooks & Manuals</h2>
        
        <div className="grid grid-cols-2 gap-4">
            {filteredBooks.map(book => (
                <div key={book.id} className="bg-[#111114] border border-[#27272A] rounded p-5 hover:border-blue-500/50 transition-colors group cursor-pointer flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-[#0E0E11] border border-[#27272A] flex items-center justify-center group-hover:bg-blue-900/20 group-hover:border-blue-500/30 transition-colors">
                                <BookMarked className="w-5 h-5 text-zinc-400 group-hover:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm text-zinc-200 group-hover:text-white transition-colors">{book.title}</h3>
                                <div className="text-[10px] font-mono text-zinc-500 mt-0.5">{book.id} • {book.year}</div>
                            </div>
                        </div>
                        <div className="bg-zinc-800/50 border border-zinc-800 text-[9px] font-bold uppercase px-2 py-0.5 rounded text-zinc-400">
                            {book.category}
                        </div>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                        {book.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#27272A] flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                            <FileText className="w-3.5 h-3.5" />
                            <span>Indexed by ARGUS</span>
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-blue-500 group-hover:text-blue-400 flex items-center gap-1 transition-colors">
                            Explore Document <ArrowRight className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
