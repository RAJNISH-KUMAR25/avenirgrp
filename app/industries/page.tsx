export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">
          Industries We Serve
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Avenir’s solutions power mission-critical systems across diverse
          industries with reliability, intelligence, and scale.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Manufacturing & Automation",
            "Healthcare & Wellness",
            "Smart Buildings & Infrastructure",
            "Industrial IoT",
            "Commercial Spaces",
            "Research & Testing Labs"
          ].map((industry, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 p-10 shadow-sm hover:shadow-xl transition bg-white"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {industry}
              </h3>
              <p className="mt-4 text-slate-600 text-sm">
                Intelligent systems designed to meet real-world operational
                demands with precision and scalability.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
