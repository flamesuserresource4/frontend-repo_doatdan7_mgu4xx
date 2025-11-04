import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import PlansSecurityCTA from './components/PlansSecurityCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-slate-200">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#0a0d12]/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-amber-400 shadow-[0_0_40px_#f59e0b40]" />
              <span className="text-base font-semibold tracking-tight">Prolex.ai</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#showcase" className="hover:text-white">Showcase</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#security" className="hover:text-white">Security</a>
              <a href="#contact" className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-2 font-medium text-amber-300 shadow-[0_0_20px_#f59e0b20] transition hover:bg-amber-400/20 hover:text-amber-200">Start Free Demo</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-28">
        <Hero />
        <Features />
        <Showcase />
        <PlansSecurityCTA />
      </main>
    </div>
  );
}

export default App;
