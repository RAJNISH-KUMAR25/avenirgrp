"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoCarousel from "@/components/LogoCarousel";

/* ================= SERVICES ================= */
const services = [
  { title: "Automation & Engineering", image: "/services/automation.png" },
  { title: "Test Equipments & Test Solutions", image: "/services/test-equipment.png" },
  { title: "Smart Solutions & IoT", image: "/services/smart-iot.png" },
  { title: "Consulting & Services", image: "/services/consulting.png" },
  { title: "Infra Project & Turn-key", image: "/services/infra-turnkey.png" },
  { title: "Avenir Online", image: "/services/avenir-online.png" },
];

/* ================= PRODUCTS ================= */
const products = [
  { title: "IoT & Smart Solutions", desc: "Real-time monitoring, automation, and analytics-driven systems." },
  { title: "OEM Products", desc: "Custom-built hardware and embedded solutions for enterprises." },
  { title: "ATI Services", desc: "Advanced testing, instrumentation, and engineering services." },
  { title: "Oxygen & Wellness", desc: "Health-focused air and oxygen enhancement technologies." },
  { title: "VaayuPure", desc: "Premium indoor air purification for modern spaces." },
  { title: "Custom Engineering", desc: "Tailored solutions designed to scale with your business." },
];

export default function Home() {
  return (
    <main className="pt-28 min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[calc(100vh-7rem)] flex items-center bg-black">
        <div className="mx-auto max-w-7xl px-6 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* LEFT: BIG STATEMENT */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-tight">
                TOGETHER WE
                <br />
                <span className="inline-flex items-center gap-4">
                  ENGINEER
                  <span className="text-teal-400">&gt;</span>
                  FUTURE
                </span>
              </h1>
            </motion.div>

            {/* RIGHT: CONTEXT (FIXED POSITION) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex items-start -mt-10"
            >
              <div className="border-l border-white/20 pl-6 max-w-md">
                <span className="block mb-4 h-1 w-10 bg-teal-400" />
                <h3 className="text-xl font-semibold mb-4">
                  Shaping tomorrow, today
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  In a world of constant change, engineering excellence is a
                  continuous strategy. We partner with industries to redefine
                  automation, intelligence, and sustainable growth.
                </p>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:gap-3 transition-all"
                >
                  See what we do <span className="text-2xl">→</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Trusted by Industry Leaders
          </h2>
          <div className="mt-16">
            <LogoCarousel />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 bg-[#020617]">
        <div className="mx-auto max-w-7xl px-6">

          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center">
              Our Capabilities
            </h2>
          </ScrollReveal>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="group rounded-3xl overflow-hidden glass shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center">
              Our Product Solutions
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="rounded-2xl glass p-8 shadow-lg hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="py-24 bg-[#020617]">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold">
              News & Stories
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {[
              "Adani Power – Automation Deployment",
              "Defence Lab – Testing Solutions",
              "MSIL – Instrumentation Supply",
              "Exicom – Infrastructure Project",
            ].map((n, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl glass p-6 shadow-lg hover:shadow-xl transition text-slate-200">
                  {n}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
