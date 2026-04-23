import { MapPin, Maximize2 } from "lucide-react";

interface MapDriver {
  id: number;
  name: string;
  x: number;
  y: number;
  status: "safe" | "warning" | "critical";
}

const mapDrivers: MapDriver[] = [
  { id: 402, name: "M. Rivera", x: 25, y: 35, status: "critical" },
  { id: 187, name: "S. Chen", x: 55, y: 22, status: "warning" },
  { id: 321, name: "J. Okafor", x: 72, y: 55, status: "safe" },
  { id: 545, name: "E. Volkov", x: 38, y: 68, status: "warning" },
  { id: 109, name: "D. Park", x: 82, y: 30, status: "safe" },
  { id: 278, name: "A. Morales", x: 15, y: 58, status: "critical" },
  { id: 433, name: "T. Bradley", x: 62, y: 75, status: "safe" },
  { id: 256, name: "L. Wei", x: 45, y: 45, status: "warning" },
];

function getDotClasses(status: MapDriver["status"]) {
  if (status === "safe") return { dot: "bg-emerald-400", pulse: "pulse-safe", ring: "ring-emerald-400/30" };
  if (status === "warning")
    return { dot: "bg-amber-400", pulse: "pulse-warning", ring: "ring-amber-400/30" };
  return { dot: "bg-red-400", pulse: "pulse-critical", ring: "ring-red-400/30" };
}

export default function InteractiveMap() {
  const safeCount = mapDrivers.filter((d) => d.status === "safe").length;
  const warningCount = mapDrivers.filter((d) => d.status === "warning").length;
  const criticalCount = mapDrivers.filter((d) => d.status === "critical").length;

  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2a3a] bg-[#1a1a24]">
      <div className="flex items-center justify-between border-b border-[#2a2a3a] px-4 py-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-400" />
          <h2 className="text-sm font-semibold text-slate-200">Fleet Location Map</h2>
          <span className="rounded-md bg-[#121218] px-2 py-0.5 font-mono text-[10px] text-slate-500">
            {mapDrivers.length} ACTIVE
          </span>
        </div>
        <button className="flex h-7 w-7 items-center justify-center rounded-md border border-[#2a2a3a] bg-[#121218] text-slate-400 transition-colors hover:bg-[#1a1a24] hover:text-slate-200">
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="relative h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url("https://mgx-backend-cdn.metadl.com/generate/images/1140550/2026-04-21/nbwmiyiaaflq/dark-map-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/60" />
        {mapDrivers.map((driver) => {
          const dotClasses = getDotClasses(driver.status);
          return (
            <div
              key={driver.id}
              className="group absolute cursor-pointer"
              style={{ left: `${driver.x}%`, top: `${driver.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className={`absolute inset-0 h-3 w-3 rounded-full ${dotClasses.dot} ${dotClasses.pulse} opacity-40`} />
              <div
                className={`relative h-3 w-3 rounded-full ${dotClasses.dot} ring-2 ${dotClasses.ring} transition-transform group-hover:scale-150`}
              />
            </div>
          );
        })}
        <div className="absolute bottom-3 left-3 flex items-center gap-3 rounded-lg border border-[#2a2a3a] bg-[#0d0d14]/90 px-3 py-2 backdrop-blur-sm">
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> {safeCount} Safe
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-amber-400">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> {warningCount} Warning
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-red-400">
            <span className="h-2 w-2 rounded-full bg-red-400" /> {criticalCount} Critical
          </span>
        </div>
      </div>
    </div>
  );
}
