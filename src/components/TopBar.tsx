import { Search, Bell, Wifi, Shield, ChevronDown } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-[#2a2a3a] bg-[#0d0d14]/80 px-5 backdrop-blur-md">
      <div className="flex max-w-md flex-1 items-center gap-3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search drivers, vehicles, alerts..."
            className="w-full rounded-lg border border-[#2a2a3a] bg-[#121218] py-2 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-500 transition-colors focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30"
          />
          <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center rounded border border-[#2a2a3a] bg-[#1a1a24] px-1.5 py-0.5 font-mono text-[10px] text-slate-500 sm:inline-flex">
            Cmd+K
          </kbd>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="mr-2 hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1.5 rounded-md border border-[#2a2a3a] bg-[#121218] px-2.5 py-1.5">
            <Wifi className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[11px] font-medium text-emerald-400">LIVE</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-[#2a2a3a] bg-[#121218] px-2.5 py-1.5">
            <Shield className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-[11px] font-medium text-slate-400">Secure</span>
          </div>
        </div>
        <button className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a3a] bg-[#121218] text-slate-400 transition-colors hover:bg-[#1a1a24] hover:text-slate-200">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
            3
          </span>
        </button>
        <div className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-[#2a2a3a] bg-[#121218] px-2.5 py-1.5 transition-colors hover:bg-[#1a1a24]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="leading-tight text-xs font-medium text-slate-200">J. Davis</p>
            <p className="leading-tight text-[10px] text-slate-500">Fleet Admin</p>
          </div>
          <ChevronDown className="hidden h-3 w-3 text-slate-500 sm:block" />
        </div>
      </div>
    </header>
  );
}
