import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Menu } from 'lucide-react';

export default function Hero() {
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const header = headerRef.current;
      if (!header) return;
      if (window.scrollY > 10) {
        header.classList.add('backdrop-blur-md', 'bg-[#0a0a0a]/60', 'shadow-[0_1px_0_0_rgba(255,255,255,0.06)]');
      } else {
        header.classList.remove('backdrop-blur-md', 'bg-[#0a0a0a]/60', 'shadow-[0_1px_0_0_rgba(255,255,255,0.06)]');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Sticky Nav */}
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-30 transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4]">
              <Shield className="h-5 w-5" />
            </div>
            <div className="text-lg font-semibold tracking-tight">The Silent</div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#why" className="hover:text-white">Why</a>
            <a href="#modules" className="hover:text-white">Modules</a>
            <a href="#compare" className="hover:text-white">Comparison</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#8B5CF6]/20 transition hover:opacity-90 md:inline-block">Join Waitlist</a>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient vignette overlay - allow interactions below */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18)_0%,rgba(6,182,212,0.12)_35%,rgba(10,10,10,0.9)_75%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#06B6D4]" />
          Your Digital Shadow Ends Here
        </span>
        <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
          Your Digital Shadow Ends Here
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base text-zinc-300 md:text-lg">
          The Silent erases your digital footprint across communications, wallets, and identity layers. Operate invisible. Stay untraceable.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#dashboard" className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#8B5CF6]/25 transition hover:opacity-90">
            Enter the Silence
          </a>
          <a href="#why" className="text-sm text-zinc-300 hover:text-white">Learn more</a>
        </div>
      </div>
    </section>
  );
}
