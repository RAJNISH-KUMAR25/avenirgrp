"use client";

import Image from "next/image";

const logos = [
  "/clients/bhel.png",
  "/clients/hpgcl.png",
  "/clients/adani.png",
  "/clients/defence.png",
  "/clients/msil.png",
];

export default function LogoCarousel() {
  return (
    <div className="relative overflow-hidden">

      {/* Gradient fade edges (DARK MODE FIX) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee */}
      <div className="flex gap-20 animate-marquee w-max">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[180px]"
          >
            <Image
              src="/logo.jpg"
              alt="Client logo"
              width={150}
              height={70}
              className="opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
