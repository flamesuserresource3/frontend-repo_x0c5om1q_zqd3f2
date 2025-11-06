import { Ghost, Broom, Network, CheckCircle2, Mail, Zap } from 'lucide-react';

export default function Features() {
  return (
    <section id="why" className="w-full bg-[#0a0a0a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why The Silent?</h2>
          <p className="mt-3 text-zinc-400">Purpose-built modules engineered to eliminate your digital exhaust.</p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <GlassCard icon={Ghost} title="Ghost Mode" text="Generate disposable identities for email, Telegram, and SMS. Reply without revealing your real identity." />
          <GlassCard icon={Broom} title="Clean Sweep" text="Remove wallet traces, revoke dangerous permissions, and eliminate metadata before it's exploited." />
          <GlassCard icon={Network} title="Shadow Network" text="Route messages through encrypted relay nodes. Zero logs. Zero traces. Different path every time." />
        </div>

        {/* Core Modules */}
        <div id="modules" className="mt-20 grid gap-8">
          <Module
            name="SilentMask"
            description="Auto-generate anonymous aliases that forward and reply without exposing real IDs"
            features={[
              'One-click alias creation',
              'Secure forwarding system',
              'Reply protection',
              'Multi-platform support',
            ]}
            icon={Mail}
          />
          <Module
            name="SilentScrub"
            description="Scan and clean your wallet footprint"
            features={['Smart contract scanner', 'Permission revocation', 'Metadata wiping', 'Risk detection']}
            icon={Zap}
          />
          <Module
            name="SilentRelay"
            description="Encrypted message routing through stateless nodes"
            features={['End-to-end encryption', 'Dynamic routing', 'No-log policy', 'Self-hosting option']}
            icon={Network}
          />
        </div>
      </div>
    </section>
  );
}

function GlassCard({ icon: Icon, title, text }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-0 opacity-40 blur-2xl bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4]" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-[#8B5CF6]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{text}</p>
      </div>
    </div>
  );
}

function Module({ name, description, features, icon: Icon }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6">
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-xl border border-white/10 bg-white/5 p-3 text-[#06B6D4]">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="mt-1 text-zinc-400">{description}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-[#10b981]" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
