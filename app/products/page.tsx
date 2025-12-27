"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HERO ================= */}
        <ScrollReveal>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight">
            Products built for
            <span className="block text-teal-400 mt-3">
              real-world scale
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-10 max-w-4xl text-lg text-slate-300 leading-relaxed">
            Avenir delivers advanced technology solutions across IoT, automation,
            testing, power systems, and wellness products — engineered for
            reliability, accuracy, and long-term deployment.
          </p>
        </ScrollReveal>

        {/* ================= PRODUCTS ================= */}
        <section className="mt-40 space-y-32">

          {/* IoT */}
          <ScrollReveal>
            <div className="max-w-5xl border-l border-white/10 pl-6">
              <h2 className="text-3xl font-bold">IoT & Smart Solutions</h2>
              <ul className="mt-6 space-y-3 text-slate-300 text-lg">
                <li>• Online Earth Resistance Monitor (AVENIR NoC)</li>
                <li>• Monitoring for Power Networks, Solar Plants & Critical Assets</li>
                <li>• AVENIR InFormer – Human Aid & Support Management System</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* OEM */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-5xl border-l border-white/10 pl-6">
              <h2 className="text-3xl font-bold">OEM Products</h2>
              <p className="mt-4 text-slate-300 text-lg">
                Enterprise-grade OEM solutions designed for power, infrastructure,
                and industrial automation environments.
              </p>
            </div>
          </ScrollReveal>

          {/* ATI */}
          <ScrollReveal delay={0.15}>
            <div className="max-w-5xl border-l border-white/10 pl-6">
              <h2 className="text-3xl font-bold">ATI – Advanced Test & Instrumentation</h2>
              <ul className="mt-6 space-y-3 text-slate-300 text-lg">
                <li>• Non-Contact Temperature Monitoring & Logging (Static & Drone)</li>
                <li>• Automated Thermal Imaging (Coal Yards, Sub-stations, OHE, Processes)</li>
                <li>• PLC Systems & Automation Control Panels</li>
                <li>• AC & DC Load Banks up to 1 MW</li>
                <li>• LV & HV Equipment for Power Generation, Dx & Tx</li>
                <li>• Acoustic Monitors, Ultraprobe & Thermal Imagers</li>
                <li>• GEW for Railway Electrification</li>
                <li>• Solar Turn-Key Projects</li>
                <li>• High-Temperature Boiler Furnace Cameras</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-5xl border-l border-white/10 pl-6">
              <h2 className="text-3xl font-bold">Services</h2>
              <ul className="mt-6 space-y-3 text-slate-300 text-lg">
                <li>• Thermal Imaging</li>
                <li>• Ultrasonic / Acoustic Detection</li>
                <li>• Power Quality Analysis</li>
                <li>• Solar Plant Validation & Consultancy</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Oxygen */}
          <ScrollReveal delay={0.25}>
            <div className="max-w-5xl border-l border-white/10 pl-6">
              <h2 className="text-3xl font-bold">Oxygen & Wellness Products</h2>
              <p className="mt-4 text-slate-300 text-lg italic">
                VaayuPure – Make your home breathe like mountains
              </p>

              <h3 className="mt-8 text-xl font-semibold text-white">
                VPM – Oxygen Integration Modules
              </h3>
              <ul className="mt-4 space-y-3 text-slate-300 text-lg">
                <li>• VPM – Integrates with existing oxygen concentrators</li>
                <li>• VPM-I2 – Coverage 8 × 8 sq.ft</li>
                <li>• VPM-I5 – Coverage 15 × 12 sq.ft</li>
                <li>• VPM-I10 – Coverage 20 × 18 sq.ft</li>
              </ul>

              <h3 className="mt-10 text-xl font-semibold text-white">
                Oxygen Concentrators (Make in India)
              </h3>
              <ul className="mt-4 space-y-3 text-slate-300 text-lg">
                <li>• AOC-5 – 5 LPM, 93% Purity</li>
                <li>• AOC-10 – 10 LPM, 93% Purity</li>
                <li>• AOC-10P – Smart Probe (SpO₂, Pulse, Temperature)</li>
                <li>• AOC-10A – Smart Probe, Auto Control & IoT Monitoring</li>
              </ul>
            </div>
          </ScrollReveal>

        </section>

        {/* ================= CLOSING ================= */}
        <ScrollReveal>
          <div className="mt-40 border-t border-white/10 pt-20">
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Every solution is engineered for performance, safety, and longevity.
              <span className="block mt-3 font-semibold text-white">
                Built for today. Ready for tomorrow.
              </span>
            </p>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
