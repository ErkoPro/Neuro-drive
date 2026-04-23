"use client";

import { Users, AlertTriangle, ShieldCheck, Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface StatCardData {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  change: string;
  changeType: "up" | "down" | "neutral";
}

const stats: StatCardData[] = [
  {
    label: "Total Drivers Active",
    value: 247,
    icon: Users,
    color: "text-blue-400",
    bgColor: "bg-blue-500/15",
    borderColor: "border-blue-500/20",
    change: "+12 this hour",
    changeType: "up",
  },
  {
    label: "Active Warnings",
    value: 18,
    icon: AlertTriangle,
    color: "text-amber-400",
    bgColor: "bg-amber-500/15",
    borderColor: "border-amber-500/20",
    change: "3 critical",
    changeType: "neutral",
  },
  {
    label: "Critical Incidents Blocked",
    value: 142,
    icon: ShieldCheck,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/15",
    borderColor: "border-emerald-500/20",
    change: "+5 today",
    changeType: "up",
  },
  {
    label: "Avg Fleet Fatigue Score",
    value: 23,
    suffix: "/100",
    icon: Activity,
    color: "text-blue-400",
    bgColor: "bg-blue-500/15",
    borderColor: "border-blue-500/20",
    change: "-2 from avg",
    changeType: "down",
  },
];

function AnimatedNumber({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{display}</span>;
}

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`group animate-fade-in-up relative overflow-hidden rounded-xl border ${stat.borderColor} bg-[#1a1a24] p-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div
              className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${stat.bgColor} opacity-50 blur-2xl transition-opacity group-hover:opacity-80`}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="mb-1 text-xs font-medium text-slate-400">{stat.label}</p>
                <p className="count-up text-2xl font-bold text-slate-100">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix && (
                    <span className="ml-0.5 text-sm font-normal text-slate-500">{stat.suffix}</span>
                  )}
                </p>
                <p
                  className={`mt-1.5 text-[11px] font-medium ${
                    stat.changeType === "up"
                      ? "text-emerald-400"
                      : stat.changeType === "down"
                        ? "text-blue-400"
                        : "text-amber-400"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
