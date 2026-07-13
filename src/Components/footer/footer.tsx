import { MonitorDot } from "lucide-react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#030A18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <NavLink to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <MonitorDot className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Nexa<span className="text-blue-400">Core</span>
              </span>
            </NavLink>
            <p className="text-sm text-blue-200/50 leading-relaxed mb-6 max-w-xs">
              Engineering the software that moves businesses forward — from MVP
              to enterprise scale, across 32 countries.
            </p>
            <div className="flex gap-3">
              {[
                { label: "in", title: "LinkedIn" },
                { label: "t", title: "Twitter" },
                { label: "GH", title: "GitHub" },
                { label: "IG", title: "Instagram" },
                { label: "f", title: "Facebook" },
              ].map((item, i) => (
                <button
                  key={i}
                  title={item.title}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-300/60 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                >
                  <span className="text-sm font-semibold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {[
            { title: "Pages", links: NAV_LINKS },
            {
              title: "Services",
              links: [
                { label: "Custom Software", href: "/services" },
                { label: "Web Development", href: "/services" },
                { label: "Mobile Apps", href: "/services" },
                { label: "AI & ML", href: "/services" },
                { label: "Cloud Solutions", href: "/services" },
                { label: "DevOps", href: "/services" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "/" },
                { label: "Terms of Service", href: "/" },
                { label: "Cookie Policy", href: "/" },
                { label: "Security", href: "/" },
                { label: "SLA Agreement", href: "/" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4
                className="text-sm font-bold text-white mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <NavLink
                      to={l.href}
                      className="text-sm text-blue-200/50 hover:text-blue-300 transition-colors"
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-200/30">
            © {new Date().getFullYear()} NexaCore Technologies Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-blue-200/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            All systems operational · 99.97% uptime
          </div>
          <p className="text-xs text-blue-200/30">
            New York · London · Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
