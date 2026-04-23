"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Radio,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Shield,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Radio, label: "Real-time Fleet" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Driver Database" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <aside
      className={`relative flex flex-col border-r border-[#2a2a3a] bg-[#0d0d14] transition-all duration-300 ${
        collapsed ? "w-[68px]" : "w-[220px]"
      }`}
    >
      <div className="flex items-center gap-3 border-b border-[#2a2a3a] px-4 py-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
          <Shield className="h-5 w-5 text-blue-400" />
        </div>
        {!collapsed && (
          <div className="animate-fade-in-up">
            <h1 className="text-sm font-bold tracking-wide text-slate-100">NEURO DRIVE</h1>
            <p className="text-[10px] font-medium uppercase tracking-widest text-blue-400/70">
              Fleet Command
            </p>
          </div>
        )}
      </div>

      <nav className="flex-1 space-y-1 px-2 py-4">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeIdx === idx;
          return (
            <button
              key={item.label}
              onClick={() => setActiveIdx(idx)}
              className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-500/15 text-blue-400 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.2)]"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              <Icon
                className={`h-[18px] w-[18px] shrink-0 ${
                  isActive
                    ? "text-blue-400"
                    : "text-slate-500 group-hover:text-slate-300"
                }`}
              />
              {!collapsed && <span className="animate-fade-in-up truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="animate-fade-in-up mx-3 mb-3 rounded-lg border border-[#2a2a3a] bg-[#121218] p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="pulse-safe h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-medium text-slate-400">System Online</span>
          </div>
          <div className="text-[10px] text-slate-500">Uptime: 99.97% - Latency: 12ms</div>
        </div>
      )}

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#2a2a3a] bg-[#1a1a24] text-slate-400 transition-colors hover:bg-[#2a2a3a] hover:text-slate-200"
      >
        {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </button>
    </aside>
  );
}
