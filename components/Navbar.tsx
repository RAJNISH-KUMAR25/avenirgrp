"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="glass-dark rounded-2xl shadow-xl px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-white">
            AVENIR
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-teal-400 transition"
          >
            Get in Touch
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>

        </nav>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Glass Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed top-6 left-4 right-4 z-50 rounded-3xl glass-dark p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold text-white">AVENIR</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <ul className="space-y-6 text-lg font-medium text-slate-200">
                <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
                <li><Link href="/products" onClick={() => setOpen(false)}>Products</Link></li>
                <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
              </ul>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-10 block text-center rounded-xl bg-teal-500 px-6 py-3 font-semibold text-slate-900 hover:bg-teal-400 transition"
              >
                Get in Touch
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
