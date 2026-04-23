import { Heart, AlertCircle } from "lucide-react";

interface Driver {
  id: number;
  name: string;
  vehicleId: string;
  bpm: number;
  fatigueScore: number;
  status: "safe" | "warning" | "critical";
}

const drivers: Driver[] = [
  { id: 402, name: "Marcus Rivera", vehicleId: "TRK-2847", bpm: 92, fatigueScore: 78, status: "critical" },
  { id: 187, name: "Sarah Chen", vehicleId: "TRK-1563", bpm: 74, fatigueScore: 62, status: "warning" },
  { id: 321, name: "James Okafor", vehicleId: "TRK-3190", bpm: 68, fatigueScore: 28, status: "safe" },
  { id: 545, name: "Elena Volkov", vehicleId: "TRK-4412", bpm: 88, fatigueScore: 71, status: "warning" },
];

export default function LiveMonitoringTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2a3a] bg-[#1a1a24]">
      <div className="flex items-center justify-between border-b border-[#2a2a3a] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="pulse-safe h-2 w-2 rounded-full bg-blue-400" />
          <h2 className="text-sm font-semibold text-slate-200">Live Driver Monitoring</h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#2a2a3a] bg-[#121218]/50">
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Driver
              </th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Vehicle
              </th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Heart className="h-3 w-3" /> BPM
                </span>
              </th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Fatigue
              </th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="border-b border-[#2a2a3a]/50 transition-colors hover:bg-white/[0.02]">
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-slate-200">{driver.name}</p>
                  <p className="font-mono text-[10px] text-slate-500">#{driver.id}</p>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">{driver.vehicleId}</td>
                <td className="px-4 py-3 font-mono text-sm font-semibold text-slate-200">{driver.bpm}</td>
                <td className="px-4 py-3 font-mono text-sm text-slate-200">{driver.fatigueScore}%</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold ${
                      driver.status === "critical"
                        ? "border border-red-500/20 bg-red-500/15 text-red-400"
                        : driver.status === "warning"
                          ? "border border-amber-500/20 bg-amber-500/15 text-amber-400"
                          : "border border-emerald-500/20 bg-emerald-500/15 text-emerald-400"
                    }`}
                  >
                    {driver.status === "critical" && <AlertCircle className="alert-flash h-3 w-3" />}
                    {driver.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
