import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-blue-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-70">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-700">
            <Sparkles className="h-4 w-4" /> AI-driven Legal CRM
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            AI-Powered Legal CRM for the Modern Law Firm
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-600">
            Prolex.ai helps you manage cases, hearings, and clients — all in one secure platform powered by AI.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Start Free Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Book a Consultation
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Shield className="h-4 w-4" /> GDPR-ready • Encrypted • Role-based access
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500">
            Trusted by leading law firms and legal professionals
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex h-16 items-center justify-center rounded-md border border-gray-200 bg-white text-sm text-gray-500"
              >
                Firm Logo
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            From solo practitioners to enterprise legal teams — Prolex.ai adapts to your workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
