import React from 'react';
import { Brain, Calendar, Folder, MessageSquare, Shield, Puzzle, CheckCircle2, Gauge, Scale, Receipt } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Case Management',
    desc: 'Automate intake, document tagging, task creation, and next-step suggestions.'
  },
  {
    icon: Calendar,
    title: 'Smart Hearing Scheduler',
    desc: 'Auto-sync with calendars, judge info, conflicts, and team reminders.'
  },
  {
    icon: Folder,
    title: 'Evidence & Document Control',
    desc: 'Secure, searchable vault with versioning and granular permissions.'
  },
  {
    icon: MessageSquare,
    title: 'Client & Team Collaboration',
    desc: 'Shared timelines, secure portals, and structured updates across matters.'
  },
  {
    icon: Receipt,
    title: 'Billing & Timekeeping',
    desc: 'Time capture from activity, invoicing, realization tracking, and LEDES.'
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    desc: 'Encryption, audit trails, RBAC, and regional data residency options.'
  }
];

const differentiators = [
  { icon: Gauge, title: 'Real-time performance', desc: 'Matter health, workload, and SLA risk at-a-glance.' },
  { icon: Brain, title: 'Contextual AI', desc: 'On-device and server AI tuned for legal workflows.' },
  { icon: Puzzle, title: 'Composable platform', desc: 'Plug modules you need without vendor lock-in.' },
  { icon: Scale, title: 'Built for law', desc: 'Terminology, structures, and reports made for legal.' },
];

const integrs = ['Google Calendar', 'Outlook', 'WhatsApp', 'Microsoft Teams', 'Zoom', 'Drive', 'OneDrive'];

const roles = [
  {
    role: 'Lawyers',
    benefits: ['Fewer admin steps', 'AI drafting & summaries', 'Hearing prep kits'],
  },
  {
    role: 'Firm Managers',
    benefits: ['Utilization insights', 'Pipeline & revenue view', 'Risk & compliance signals'],
  },
  {
    role: 'Clients',
    benefits: ['Clear status updates', 'Secure document exchange', 'Fast responses'],
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-[#0a0d12] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_20%_0%,rgba(245,158,11,0.12),transparent_50%),radial-gradient(30%_30%_at_80%_20%,rgba(56,189,248,0.1),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Built for modern legal teams</h2>
          <p className="mt-4 text-slate-300">Powerful modules with a minimal, fast interface.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-amber-300">
                Learn more
                <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-8">
            <h3 className="text-xl font-semibold text-white">How we’re different</h3>
            <p className="mt-2 text-slate-300">Not just a database with tabs — a living legal operating system.</p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {differentiators.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{title}</p>
                    <p className="text-slate-300">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Integrations</h3>
            <p className="mt-2 text-slate-300">Connect calendars, storage, and communication tools you already use.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {integrs.map((name) => (
                <div key={name} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-amber-300" />
                  <span className="text-sm text-slate-200">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-semibold text-white">Who benefits</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {roles.map(({ role, benefits }) => (
              <div key={role} className="rounded-xl border border-white/10 bg-[#0c1118] p-6">
                <p className="text-base font-semibold text-white">{role}</p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-300" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#features" className="text-base font-semibold text-amber-300">
            Explore All Features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
