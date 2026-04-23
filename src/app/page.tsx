import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import StatCards from "@/components/StatCards";
import LiveMonitoringTable from "@/components/LiveMonitoringTable";
import InteractiveMap from "@/components/InteractiveMap";
import AlertFeed from "@/components/AlertFeed";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 space-y-5 overflow-y-auto p-5">
          <div className="relative overflow-hidden rounded-xl border border-[#2a2a3a] bg-[#1a1a24]">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'url("https://mgx-backend-cdn.metadl.com/generate/images/1140550/2026-04-21/nbwmfmyaafma/dashboard-hero-bg.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
            <div className="relative flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/1140550/2026-04-21/nbwl3wiaafmq/neuro-drive-logo.png"
                  alt="Neuro Drive"
                  className="h-10 w-10 rounded-lg"
                />
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-slate-100">
                    Neuro Drive Fleet Command
                  </h1>
                  <p className="text-xs text-slate-400">
                    Real-time Driver Safety & Fatigue Monitoring System
                  </p>
                </div>
              </div>
              <div className="hidden items-center gap-4 md:flex">
                <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
                  <div className="pulse-safe h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400">
                    All Systems Operational
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Last Sync</p>
                  <p className="font-mono text-xs text-slate-300">Just Now</p>
                </div>
              </div>
            </div>
          </div>
          <StatCards />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <InteractiveMap />
            </div>
            <div className="lg:col-span-1">
              <AlertFeed />
            </div>
          </div>
          <LiveMonitoringTable />
          <footer className="flex items-center justify-between border-t border-[#2a2a3a] pb-2 pt-4">
            <p className="text-[11px] text-slate-500">
              Neuro Drive v2.4.1 - Fleet Safety Intelligence Platform
            </p>
            <p className="text-[11px] text-slate-600">
              Data refreshes every 2s - Encrypted & HIPAA Compliant
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
