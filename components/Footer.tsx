export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Glass blur layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Avenir<span className="text-teal-400">.</span>
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Engineering smart, sustainable, and future-ready solutions across
              industries and wellness domains.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About</li>
              <li>Why Avenir</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Solutions</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>IoT & Smart Systems</li>
              <li>OEM Products</li>
              <li>ATI Services</li>
              <li>VaayuPure</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>India</li>
              <li>info@avenirgroup.in</li>
              <li>+91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Avenir Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
