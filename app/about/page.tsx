"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* ================= HERO ================= */}
        <ScrollReveal>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight">
            Engineering solutions that
            <span className="block text-teal-400 mt-2">
              power industries worldwide
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-10 max-w-4xl text-lg text-slate-300 leading-relaxed">
            AVENIR TVPL is a fresh endeavour of industry professionals with
            extensive experience across IT, Power, Industrial Automation,
            Engineering, and Business Management. With strong financial backing
            and technical expertise, AVENIR delivers mission-critical solutions
            across India, Africa, and the Pacific region.
          </p>
        </ScrollReveal>

        {/* ================= SECTIONS ================= */}
        <section className="mt-40 space-y-32">

          {/* Engineering */}
          <ScrollReveal>
            <div className="max-w-4xl border-l border-white/10 pl-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Engineering & Automation
              </h2>
              <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                AVENIR owns independent companies including Microsystem Engineers
                and Future Microsystem Pvt. Ltd., operating across Power,
                Telecom, Railways, Defence, and Industrial OEM sectors. Our teams
                have delivered solutions for NTPC, PGCIL, Railways, Defence,
                Tata, Adani, and Reliance.
              </p>
            </div>
          </ScrollReveal>

          {/* Test Equipment */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl border-l border-white/10 pl-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Test Equipment & Technology
              </h2>
              <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                Through Greenwatt Global Solutions Pvt. Ltd., AVENIR supplies
                advanced test equipment for power transmission and distribution
                networks. Our products are approved across five Indian states
                and are known for strong field performance and cost efficiency.
              </p>
            </div>
          </ScrollReveal>

          {/* Global Strength */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl border-l border-white/10 pl-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Global Reach & Capability
              </h2>
              <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                Backed by intellectual capital from the US and strong Indian
                partnerships, AVENIR combines global expertise with local
                execution to deliver scalable, reliable, and future-ready
                engineering solutions.
              </p>
            </div>
          </ScrollReveal>

        </section>

        {/* ================= MANAGEMENT ================= */}
        <ScrollReveal>
          <div className="mt-40 border-t border-white/10 pt-20">
            <h3 className="text-2xl font-semibold mb-6">
              AVENIR Management & Board
            </h3>
            <p className="text-slate-300 text-lg max-w-4xl leading-relaxed mb-6">
              AVENIR is led by Mr. Dinesh Pratap Singh and supported by a diverse
              board of professionals across India and the United States.
            </p>

            <ul className="space-y-2 text-slate-300">
              <li>• Mr. Rajiv Parashar</li>
              <li>• Mr. Dinesh Pratap Singh</li>
              <li>• Dr. Vikesh Bhadauria</li>
              <li>• Mr. Mayank Tomar</li>
              <li>• Mr. Anurag Mishra</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* ================= CLOSING ================= */}
        <ScrollReveal>
          <div className="mt-32">
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              At AVENIR, technology is not just built to function.
              <span className="block mt-3 font-semibold text-white">
                It is built to endure.
              </span>
            </p>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
