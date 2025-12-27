"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <ScrollReveal>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight">
            Let’s build something
            <span className="block text-teal-400 mt-2">
              meaningful together
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-lg text-slate-300">
            Whether you’re exploring industrial automation, smart systems,
            or wellness technology, our team is ready to collaborate.
          </p>
        </ScrollReveal>

        <section className="mt-20 grid gap-10 md:grid-cols-2">
          <div className="glass-dark rounded-3xl p-8">
            <h3 className="text-xl font-semibold">Contact Details</h3>
            <p className="mt-4 text-slate-300">
              📍 Gurugram, India<br />
              📧 support@avenirgroup.in<br />
              📞 +91 87504 79698
            </p>
          </div>

          <div className="glass-dark rounded-3xl p-8">
            <h3 className="text-xl font-semibold">Why Avenir?</h3>
            <p className="mt-4 text-slate-300">
              We design systems that scale, endure, and quietly power
              the future of industries.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
