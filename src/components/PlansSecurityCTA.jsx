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
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600">Get started today. Scale as your practice grows.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`${t.highlight ? 'border-blue-600 ring-1 ring-blue-600' : 'border-gray-200'} rounded-2xl border bg-white p-6 shadow-sm`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Most popular</span>
                )}
              </div>
              <p className="mt-4 text-3xl font-bold text-gray-900">{t.price}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 text-blue-600" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${t.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-gray-200 bg-white p-8">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900">Security & Compliance</h3>
            <p className="mt-2 text-gray-600">Your data, protected at every level.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: 'ISO 27001 readiness' },
              { icon: Lock, title: 'GDPR compliance' },
              { icon: KeyRound, title: 'Encrypted data storage' },
              { icon: Shield, title: 'Role-based access control' },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <Icon className="h-5 w-5 text-blue-700" />
                <span className="text-sm font-medium text-gray-900">{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white">
          <h3 className="text-2xl font-semibold">Experience the Future of Legal CRM</h3>
          <p className="mt-2 text-blue-100">Join hundreds of law firms optimizing their workflow with Prolex.ai.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50">
              Start Free Trial
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-500/20 px-5 py-2 font-medium text-white ring-1 ring-white/30 transition hover:bg-blue-500/30">
              Schedule a Demo
            </a>
          </div>
        </div>

        <footer className="mt-20 border-t border-gray-200 pt-10 text-sm text-gray-600">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="space-y-3">
              <p className="font-semibold text-gray-900">Product</p>
              <a href="#" className="block hover:text-gray-900">Features</a>
              <a href="#pricing" className="block hover:text-gray-900">Pricing</a>
              <a href="#" className="block hover:text-gray-900">Integrations</a>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-gray-900">Company</p>
              <a href="#" className="block hover:text-gray-900">About</a>
              <a href="#" className="block hover:text-gray-900">Careers</a>
              <a href="#" className="block hover:text-gray-900">Blog</a>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-gray-900">Resources</p>
              <a href="#" className="block hover:text-gray-900">Help Center</a>
              <a href="#" className="block hover:text-gray-900">Documentation</a>
              <a href="#" className="block hover:text-gray-900">Status</a>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-gray-900">Contact</p>
              <a href="mailto:contact@prolex.ai" className="block hover:text-gray-900">contact@prolex.ai</a>
              <div className="text-gray-500">LinkedIn • X • YouTube</div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-center sm:flex-row">
            <p className="text-gray-500">© 2025 Prolex.ai. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Security</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PlansSecurityCTA;
