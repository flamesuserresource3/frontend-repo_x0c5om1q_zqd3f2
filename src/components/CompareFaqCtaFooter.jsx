import { Twitter, Telegram, BadgeCheck, BookOpenText, Shield, FileText } from 'lucide-react';

export default function CompareFaqCtaFooter() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white">
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Comparison() {
  const rows = [
    { feature: 'Alias Reply System', silent: '✓', vpn: '✗', proxy: '✗' },
    { feature: 'Wallet Trace Cleaner', silent: '✓', vpn: '✗', proxy: '✗' },
    { feature: 'Metadata Erasure', silent: '✓', vpn: '✗', proxy: '✗' },
    { feature: 'Self-Hosted Relays', silent: '✓', vpn: '✗', proxy: '✗' },
    { feature: 'Zero Logs', silent: '✓', vpn: '？', proxy: '？' },
  ];
  return (
    <section id="compare" className="w-full bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How we compare</h2>
          <p className="mt-3 text-zinc-400">Built for privacy at the identity and transaction layer, not just IP masking.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">The Silent</th>
                <th className="px-4 py-3">VPNs</th>
                <th className="px-4 py-3">Proxies</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="px-4 py-3 text-zinc-300">{r.feature}</td>
                  <td className="px-4 py-3 font-medium">{r.silent}</td>
                  <td className="px-4 py-3">{r.vpn}</td>
                  <td className="px-4 py-3">{r.proxy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: 'What does The Silent actually do?', a: 'It eliminates your digital exhaust by masking communications, scrubbing wallet traces, and routing messages through encrypted relay nodes with zero logs.' },
    { q: 'Do you log or track anything?', a: 'No. Relays are stateless, and we enforce a strict no-log policy across all modules.' },
    { q: 'How do Silent Relays work?', a: 'Messages are encrypted end-to-end and dynamically routed across a pool of ephemeral nodes. Each path is unique per request.' },
    { q: 'Can I host my own relay?', a: 'Yes. Deploy a self-hosted node and connect it to your control surface in minutes.' },
    { q: 'Which networks are supported?', a: 'Major L1/L2 chains and popular messaging platforms. Support expands continuously.' },
    { q: 'Why trust The Silent?', a: 'Transparent design, battle-tested cryptography, and community-led audits.' },
  ];

  return (
    <section id="faq" className="w-full bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {items.map((item, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-left">
                <span className="font-medium">{item.q}</span>
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-sm text-zinc-300">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative w-full overflow-hidden bg-[#0a0a0a] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,rgba(6,182,212,0.15)_40%,rgba(10,10,10,1)_80%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <BadgeCheck className="h-3.5 w-3.5 text-[#10b981]" /> Coming Soon - 2025
        </span>
        <h3 className="mt-4 text-3xl font-bold md:text-4xl">Disappear from the feed</h3>
        <p className="mt-2 text-zinc-400">The Silent keeps you visible only when you choose to be</p>
        <div className="mt-6 flex justify-center">
          <a href="#" className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#8B5CF6]/25 transition hover:opacity-90">Join Waitlist</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4]">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="text-lg font-semibold tracking-tight">The Silent</div>
          </div>
          <p className="mt-3 max-w-xs text-sm text-zinc-400">Your Digital Shadow Ends Here</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-zinc-300">Product</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li><a href="#why" className="hover:text-white">Why</a></li>
            <li><a href="#modules" className="hover:text-white">Features</a></li>
            <li><a href="#compare" className="hover:text-white">Comparison</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-zinc-300">Resources</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-white flex items-center gap-2"><BookOpenText className="h-4 w-4" /> Docs</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-zinc-300">Legal</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-white flex items-center gap-2"><FileText className="h-4 w-4" /> Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
          <div className="mt-6 flex items-center gap-3 text-zinc-400">
            <a aria-label="Twitter" href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a aria-label="Telegram" href="#" className="hover:text-white"><Telegram className="h-5 w-5" /></a>
            <a aria-label="Medium" href="#" className="hover:text-white"><svg width="20" height="20" viewBox="0 0 1043.63 592.71" fill="currentColor" aria-hidden="true"><path d="M588.67,296.36c0,163.65-131.18,296.35-293.6,296.35S1.47,460,1.47,296.36,132.65,0,295.07,0,588.67,132.7,588.67,296.36Zm300.1,0c0,154.52-65.6,279.86-146.56,279.86S595.65,450.88,595.65,296.36,661.25,16.5,742.21,16.5,888.77,141.84,888.77,296.36Zm154.79,0c0,142-23.84,257.13-53.26,257.13S937,438.32,937,296.36,960.81,39.22,990.23,39.22s53.33,115.14,53.33,257.14Z"/></svg></a>
          </div>
          <p className="mt-4 text-xs text-zinc-500">© 2025 The Silent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
