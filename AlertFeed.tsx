"use client";

import { AlertTriangle, Zap, Bell, ShieldAlert, Activity } from "lucide-react";
import { useState, useEffect } from "react";

interface Alert {
  id: number;
  time: string;
  driverId: number;
  type: "micro-sleep" | "hrv-anomaly" | "high-bpm" | "fatigue-spike" | "lane-departure";
  message: string;
  action: string;
  severity: "critical" | "warning" | "info";
}

const initialAlerts: Alert[] = [
  { id: 1, time: "14:32:07", driverId: 402, type: "micro-sleep", message: "Micro-sleep detected", action: "Haptic Alert Sent", severity: "critical" },
  { id: 2, time: "14:30:45", driverId: 278, type: "micro-sleep", message: "Micro-sleep detected", action: "Haptic Alert Sent", severity: "critical" },
  { id: 3, time: "14:28:12", driverId: 187, type: "hrv-anomaly", message: "HRV anomaly detected", action: "Dashboard Notified", severity: "warning" },
];

function getAlertIcon(type: Alert["type"]) {
  if (type === "micro-sleep") return ShieldAlert;
  if (type === "hrv-anomaly") return Activity;
  if (type === "high-bpm") return Zap;
  if (type === "fatigue-spike") return AlertTriangle;
  return Bell;
}

export default function AlertFeed() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  useEffect(() => {
    const timer = setInterval(() => {
      const newAlert: Alert = {
        id: Date.now(),
        time: new Date().toLocaleTimeString("en-US", { hour12: false }),
        driverId: [402, 187, 545, 278][Math.floor(Math.random() * 4)],
        type: ["micro-sleep", "hrv-anomaly", "high-bpm", "fatigue-spike"][Math.floor(Math.random() * 4)] as Alert["type"],
        message: ["Micro-sleep detected", "HRV anomaly detected", "Elevated heart rate", "Fatigue score spike"][Math.floor(Math.random() * 4)],
        action: ["Haptic Alert Sent", "Dashboard Notified", "Monitoring Increased", "Audio Alert Sent"][Math.floor(Math.random() * 4)],
        severity: (["critical", "warning", "info"] as const)[Math.floor(Math.random() * 3)],
      };
      setAlerts((prev) => [newAlert, ...prev.slice(0, 14)]);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#2a2a3a] bg-[#1a1a24]">
      <div className="shrink-0 border-b border-[#2a2a3a] px-4 py-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          <h2 className="text-sm font-semibold text-slate-200">Alert Feed</h2>
        </div>
      </div>
      <div className="max-h-[420px] flex-1 overflow-y-auto">
        {alerts.map((alert, idx) => {
          const Icon = getAlertIcon(alert.type);
          return (
            <div key={alert.id} className={`border-b border-[#2a2a3a]/50 px-4 py-2.5 ${idx === 0 ? "animate-slide-in-left" : ""}`}>
              <div className="flex items-start gap-2.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-500">{alert.time}</span>
                    <span className="font-mono text-[11px] font-semibold text-slate-300">
                      Driver #{alert.driverId}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{alert.message}</p>
                  <span className="mt-1 inline-flex items-center rounded-md border border-amber-500/20 bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-amber-400">
                    {alert.action}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
