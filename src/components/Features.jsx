import React from 'react';
import { Brain, Calendar, Folder, MessageSquare, Shield, Puzzle, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Case Management',
    desc: 'Automate repetitive tasks, document tracking, and case updates.'
  },
  {
    icon: Calendar,
    title: 'Smart Hearing Scheduler',
    desc: 'Manage hearings with real-time updates, judge info, and invitations.'
  },
  {
    icon: Folder,
    title: 'Document & Evidence Management',
    desc: 'Securely store, tag, and retrieve all legal files.'
  },
  {
    icon: MessageSquare,
    title: 'Client & Team Collaboration',
    desc: 'Built-in communication tools for lawyers, clients, and associates.'
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    desc: 'GDPR-compliant data protection and role-based access control.'
  }
];

const why = [
  {
    icon: Puzzle,
    title: 'Integrated Legal Workflow',
    desc: 'All-in-one solution for hearings, clients, and billing.'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    desc: 'Enterprise-grade encryption and access control.'
  },
  {
    icon: Brain,
    title: 'AI-Driven Efficiency',
    desc: 'Reduce admin work and focus on strategy.'
  }
];

const integrs = ['Google Calendar', 'Outlook', 'WhatsApp', 'Microsoft Teams', 'Zoom'];

const Features = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for modern legal teams</h2>
          <p className="mt-4 text-gray-600">Powerful features with a minimal, intuitive interface.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-700">
                Learn more
                <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8">
            <h3 className="text-xl font-semibold text-gray-900">Why choose Prolex.ai</h3>
            <p className="mt-2 text-gray-600">Balance innovation with compliance and trust.</p>
            <ul className="mt-6 space-y-4">
              {why.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-gray-900">Integrations</h3>
            <p className="mt-2 text-gray-600">Seamlessly integrate with your favorite tools.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {integrs.map((name) => (
                <div key={name} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#features" className="text-base font-semibold text-blue-700">
            Explore All Features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
