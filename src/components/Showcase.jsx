import React from 'react';
import { LayoutDashboard, Users, CalendarDays, Search, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ShowcaseCard = ({ title, desc, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{desc}</p>
      </div>
    </div>
    <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
      {children}
    </div>
  </div>
);

const PlaceholderUI = ({ lines = 4 }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="h-4 w-40 rounded bg-white/10" />
      <div className="h-7 w-24 rounded bg-white/10" />
    </div>
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-white/10" />
        <div className="h-3 w-full rounded bg-white/10" />
      </div>
    ))}
  </div>
);

const Showcase = () => {
  return (
    <section id="showcase" className="bg-[#0a0d12] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">See the CRM in motion</h2>
          <p className="mt-4 text-slate-300">Modern UI with subtle motion so you can understand whats happening instantly.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ShowcaseCard title="Dashboard overview" desc="Matters, hearings, tasks — prioritized by AI risk & urgency.">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="h-5 w-5 text-amber-300" />
                <div className="h-3 w-48 rounded bg-white/10" />
              </div>
              <PlaceholderUI lines={4} />
            </div>
          </ShowcaseCard>

          <ShowcaseCard title="Drag-and-drop hearings" desc="Conflict-free scheduling that syncs to your calendar.">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-amber-300" />
                <div className="h-3 w-48 rounded bg-white/10" />
              </div>
              <div className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <motion.div
                  className="absolute left-4 top-6 h-8 w-40 rounded-md bg-amber-400/30"
                  animate={{ x: [0, 200, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute left-8 top-24 h-8 w-32 rounded-md bg-white/10"
                  animate={{ x: [0, 160, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                />
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard title="Auto-tagging documents" desc="Evidence and filings are auto-tagged and linked to issues.">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-amber-300" />
                <div className="h-3 w-48 rounded bg-white/10" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="h-16 rounded-lg border border-white/10 bg-white/5"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  />
                ))}
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard title="AI insights assistant" desc="Summaries, smart search, and suggested next steps.">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-amber-300" />
                <div className="h-3 w-48 rounded bg-white/10" />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <MessageSquare className="h-4 w-4 text-amber-300" /> Ask Prolex AI
                </div>
                <motion.div className="mt-3 space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <motion.div className="h-3 w-5/6 rounded bg-white/10" initial={{ width: 0 }} animate={{ width: '83%' }} transition={{ duration: 1.2 }} />
                  <motion.div className="h-3 w-4/6 rounded bg-white/10" initial={{ width: 0 }} animate={{ width: '66%' }} transition={{ duration: 1.1, delay: 0.2 }} />
                  <motion.div className="h-3 w-3/6 rounded bg-white/10" initial={{ width: 0 }} animate={{ width: '50%' }} transition={{ duration: 1.0, delay: 0.4 }} />
                </motion.div>
              </div>
            </div>
          </ShowcaseCard>
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="text-2xl font-semibold text-white">Designed for every legal team</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { title: 'Law Firms', desc: 'Streamline matters, hearings, billing.' },
              { title: 'In-House Teams', desc: 'Collaborate with business stakeholders.' },
              { title: 'Legal Startups', desc: 'Move fast with compliance in mind.' },
              { title: 'Solo Practitioners', desc: 'Stay organized and client-focused.' }
            ].map((c, idx) => (
              <motion.div
                key={c.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-10 w-10 rounded-lg bg-white/10" />
                <p className="mt-3 font-medium text-white">{c.title}</p>
                <p className="text-sm text-slate-300">{c.desc}</p>
                <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-amber-300">
                  Learn more
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
