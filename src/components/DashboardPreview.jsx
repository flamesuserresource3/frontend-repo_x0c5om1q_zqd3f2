import { useEffect, useState } from 'react';
import { Network, Gauge, ShieldCheck, Activity } from 'lucide-react';

export default function DashboardPreview() {
  const [score, setScore] = useState(0);
  const [aliases, setAliases] = useState(0);
  const [wallets, setWallets] = useState(0);
  const [relays, setRelays] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setScore(94), 300);
    const t2 = setTimeout(() => setAliases(28), 500);
    const t3 = setTimeout(() => setWallets(12), 700);
    const t4 = setTimeout(() => setRelays(6), 900);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  return (
    <section id="dashboard" className="relative w-full bg-[#0a0a0a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Operational Snapshot</h2>
          <p className="mt-3 text-zinc-400">A glimpse of the control surface you command with The Silent.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Glass card main */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <MetricCard label="Privacy Score" value={`${score}%`} icon={Gauge} accent="from-[#8B5CF6] to-[#06B6D4]" />
              <MetricCard label="Active Aliases" value={aliases} icon={Activity} accent="from-[#06B6D4] to-[#8B5CF6]" />
              <MetricCard label="Wallets Protected" value={wallets} icon={ShieldCheck} accent="from-[#10b981] to-[#06B6D4]" />
              <MetricCard label="Active Relays" value={relays} icon={Network} accent="from-[#8B5CF6] to-[#10b981]" />
            </div>

            {/* Ring meter */}
            <div className="mt-8 flex items-center justify-center">
              <div className="relative h-40 w-40">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="#2a2a2a" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#grad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - score / 100)}`}
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <div className="text-center text-3xl font-bold">{score}%</div>
                    <div className="text-center text-xs text-zinc-400">Privacy Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latency table */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="mb-4 text-lg font-semibold">Relay Latency</h3>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 text-zinc-300">Relay</th>
                    <th className="px-4 py-3 text-zinc-300">Region</th>
                    <th className="px-4 py-3 text-zinc-300">Latency</th>
                    <th className="px-4 py-3 text-zinc-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Node-7e', region: 'EU-West', latency: 18 },
                    { name: 'Node-42', region: 'US-East', latency: 22 },
                    { name: 'Node-19', region: 'AP-SG', latency: 31 },
                    { name: 'Node-88', region: 'EU-Central', latency: 25 },
                  ].map((r, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="px-4 py-3">{r.name}</td>
                      <td className="px-4 py-3 text-zinc-300">{r.region}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-md bg-white/5 px-2 py-1 text-xs">{r.latency} ms</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs ${r.latency < 25 ? 'text-[#10b981]' : 'text-[#f59e0b]'}`}>{r.latency < 25 ? 'Optimal' : 'Good'}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value, icon: Icon, accent }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
      <div className={`pointer-events-none absolute inset-0 opacity-40 blur-2xl bg-gradient-to-r ${accent}`} />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-zinc-400">{label}</div>
            <div className="mt-1 text-2xl font-semibold">{value}</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
            <Icon className="h-5 w-5 text-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
