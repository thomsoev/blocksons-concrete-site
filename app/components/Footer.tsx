import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p
              className="text-2xl font-bold tracking-widest uppercase text-white mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              BLOCKSONS CONCRETE
            </p>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Boom pump truck service for precision concrete placement in
              hard-to-reach locations. Serving the North Country — Clinton, Essex &amp; Franklin County, NY.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Request a Quote" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/70 hover:text-[#E07820] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+15185703076"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#E07820] transition-colors"
              >
                <Phone size={14} className="text-[#E07820]" />
                (518) 570-3076
              </a>
              <a
                href="mailto:blocksonsconcrete@gmail.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#E07820] transition-colors"
              >
                <Mail size={14} className="text-[#E07820]" />
                blocksonsconcrete@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={14} className="text-[#E07820]" />
                Morrisonville, NY — Serving the North Country
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} Blocksons Concrete. All rights reserved.
          </p>
          <p className="text-xs text-[#6B7280]">
            Same owner as{" "}
            <a
              href="https://www.google.com/maps/search/Blocksons+LLC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07820] transition-colors"
            >
              Blocksons LLC
            </a>{" "}
            — 5.0 ★ Google rated
          </p>
        </div>
      </div>
    </footer>
  );
}
