import React from 'react';
import { Check, Lock, Shield, KeyRound } from 'lucide-react';

const tiers = [
  {
    name: 'Free Demo',
    price: 'Free',
    features: ['Guided product tour', 'Sample data', 'No credit card required'],
    cta: 'Start Free Demo',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$49/user/mo',
    features: ['All core modules', 'Email & chat support', 'Calendar integrations', 'Role-based access'],
    cta: 'Start Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['SSO & SCIM', 'Dedicated success manager', 'Advanced security controls', 'Custom integrations'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const PlansSecurityCTA = () => {
  return (
    <section id="pricing" className="bg-[#0a0d12] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-300">Get started today. Scale as your practice grows.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`${t.highlight ? 'border-amber-400/60 ring-1 ring-amber-400/60' : 'border-white/10'} rounded-2xl border bg-white/5 p-6 shadow-sm`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300">Most popular</span>
                )}
              </div>
              <p className="mt-4 text-3xl font-bold text-white">{t.price}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 text-amber-300" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${t.highlight ? 'bg-amber-400 text-[#0a0d12] hover:bg-amber-300' : 'bg-white/10 text-white hover:bg-white/15'}`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <div id="security" className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-2xl font-semibold text-white">Security & Compliance</h3>
            <p className="mt-2 text-slate-300">Your data, protected at every level.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: 'ISO 27001 readiness' },
              { icon: Lock, title: 'GDPR compliance' },
              { icon: KeyRound, title: 'Encrypted data storage' },
              { icon: Shield, title: 'Role-based access control' },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-3 rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
                <Icon className="h-5 w-5 text-amber-300" />
                <span className="text-sm font-medium text-white">{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 p-8 text-center text-[#0a0d12] shadow-[0_0_40px_#f59e0b40]">
          <h3 className="text-2xl font-semibold">Experience the Future of Legal CRM</h3>
          <p className="mt-2 text-amber-950/80">Join growing firms optimizing their workflow with Prolex.ai.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-[#0a0d12] px-5 py-2 font-medium text-white transition hover:bg-black">
              Start Free Trial
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/20 px-5 py-2 font-medium text-[#0a0d12] ring-1 ring-black/10 transition hover:bg-white/30">
              Schedule a Demo
            </a>
          </div>
        </div>

        <footer className="mt-20 border-t border-white/10 pt-10 text-sm text-slate-300">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="space-y-3">
              <p className="font-semibold text-white">Product</p>
              <a href="#features" className="block hover:text-white">Features</a>
              <a href="#pricing" className="block hover:text-white">Pricing</a>
              <a href="#showcase" className="block hover:text-white">Showcase</a>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-white">Company</p>
              <a href="#" className="block hover:text-white">About</a>
              <a href="#" className="block hover:text-white">Careers</a>
              <a href="#" className="block hover:text-white">Blog</a>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-white">Resources</p>
              <a href="#" className="block hover:text-white">Help Center</a>
              <a href="#" className="block hover:text-white">Documentation</a>
              <a href="#" className="block hover:text-white">Status</a>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-white">Contact</p>
              <a href="mailto:contact@prolex.ai" className="block hover:text-white">contact@prolex.ai</a>
              <div className="text-slate-400">LinkedIn • X • YouTube</div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row">
            <p className="text-slate-400">© 2025 Prolex.ai. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PlansSecurityCTA;
