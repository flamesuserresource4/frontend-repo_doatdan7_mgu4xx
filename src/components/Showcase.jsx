import React from 'react';
import { LayoutDashboard, Users, CalendarDays, Search, MessageSquare } from 'lucide-react';

const ShowcaseCard = ({ title, desc, children }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
    </div>
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-4">
      {children}
    </div>
  </div>
);

const PlaceholderUI = ({ lines = 4 }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="h-4 w-40 rounded bg-blue-200/60" />
      <div className="h-7 w-24 rounded bg-blue-200/60" />
    </div>
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-blue-200/40" />
        <div className="h-3 w-full rounded bg-blue-200/60" />
      </div>
    ))}
  </div>
);

const Showcase = () => {
  return (
    <section className="bg-blue-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product showcase</h2>
          <p className="mt-4 text-gray-600">Clean, modern UI designed for clarity and speed.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ShowcaseCard title="Dashboard overview" desc="See what matters at a glance: cases, hearings, tasks.">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="h-5 w-5 text-blue-700" />
                <div className="h-3 w-48 rounded bg-blue-200/60" />
              </div>
              <PlaceholderUI lines={4} />
            </div>
          </ShowcaseCard>
          <ShowcaseCard title="Case & client management" desc="Organize cases, contacts, and timelines in one place.">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-700" />
                <div className="h-3 w-48 rounded bg-blue-200/60" />
              </div>
              <PlaceholderUI lines={5} />
            </div>
          </ShowcaseCard>
          <ShowcaseCard title="Hearing details" desc="Upcoming, history, judge info, and invitees at a glance.">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-blue-700" />
                <div className="h-3 w-48 rounded bg-blue-200/60" />
              </div>
              <PlaceholderUI lines={3} />
            </div>
          </ShowcaseCard>
          <ShowcaseCard title="AI insights assistant" desc="Summaries, smart search, and context-aware suggestions.">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-blue-700" />
                <div className="h-3 w-48 rounded bg-blue-200/60" />
              </div>
              <div className="rounded-lg border border-blue-100 bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MessageSquare className="h-4 w-4 text-blue-600" /> Ask Prolex AI
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-3 w-5/6 rounded bg-blue-200/60" />
                  <div className="h-3 w-4/6 rounded bg-blue-200/60" />
                  <div className="h-3 w-3/6 rounded bg-blue-200/60" />
                </div>
              </div>
            </div>
          </ShowcaseCard>
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Designed for every legal team</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { title: 'Law Firms', desc: 'Streamline matters, hearings, billing.' },
              { title: 'In-House Teams', desc: 'Collaborate with business stakeholders.' },
              { title: 'Legal Startups', desc: 'Move fast with compliance in mind.' },
              { title: 'Independent Practitioners', desc: 'Stay organized and client-focused.' }
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-blue-50" />
                <p className="mt-3 font-medium text-gray-900">{c.title}</p>
                <p className="text-sm text-gray-600">{c.desc}</p>
                <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-blue-700">
                  Learn more
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
