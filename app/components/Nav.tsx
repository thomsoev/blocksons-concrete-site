"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Get a Quote" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#111111] border-b border-white/10">
      {/* Desktop nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="font-heading font-bold text-xl tracking-widest text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            BLOCKSONS CONCRETE
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  pathname === l.href
                    ? "text-[#E07820]"
                    : "text-white/80 hover:text-[#E07820]"
                } ${
                  l.href === "/contact"
                    ? "bg-[#E07820] text-white px-4 py-2 hover:bg-[#C4631A] hover:text-white rounded"
                    : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop phone */}
          <a
            href="tel:+15185703076"
            className="hidden md:flex items-center gap-2 text-[#E07820] font-medium text-sm hover:text-[#C4631A] transition-colors"
          >
            <Phone size={14} />
            (518) 570-3076
          </a>

          {/* Mobile: hamburger + phone */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+15185703076"
              className="flex items-center gap-1 text-[#E07820] font-medium text-sm"
            >
              <Phone size={14} />
              (518) 570-3076
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1C1C1E] border-t border-white/10">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium uppercase tracking-wider border-b border-white/5 transition-colors ${
                  pathname === l.href ? "text-[#E07820]" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
