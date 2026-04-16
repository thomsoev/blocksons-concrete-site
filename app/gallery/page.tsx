import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Pumping Gallery | Blocksons Concrete | Plattsburgh NY",
  description:
    "Photo gallery of boom pump concrete jobs — seawalls, foundations, elevated decks, and commercial slabs in the Plattsburgh and Clinton County area.",
};

// TODO: Replace placeholder cards with real job photos from Dustin
const placeholders = [
  {
    label: "Seawall Pour — Lake Champlain",
    alt: "Boom pump truck placing concrete on seawall at Lake Champlain in Plattsburgh NY",
    category: "Seawall",
  },
  {
    label: "Residential Foundation — Plattsburgh",
    alt: "Concrete pumped into residential foundation forms in Plattsburgh NY",
    category: "Foundation",
  },
  {
    label: "Elevated Deck Pour",
    alt: "Boom pump arm extended to reach elevated deck pour in Clinton County NY",
    category: "Elevated Pour",
  },
  {
    label: "Commercial Slab — Clinton County",
    alt: "Large commercial slab concrete pour via boom pump in Clinton County NY",
    category: "Commercial",
  },
  {
    label: "Boom Arm Extended — Job Site",
    alt: "Boom pump truck with arm fully extended on a job site in northern New York",
    category: "Equipment",
  },
  {
    label: "Equipment Photo — Truck & Boom",
    alt: "Blocksons Concrete boom pump truck full equipment photo",
    category: "Equipment",
  },
];

const categoryColors: Record<string, string> = {
  Seawall: "bg-blue-900/40 text-blue-300",
  Foundation: "bg-stone-800/60 text-stone-300",
  "Elevated Pour": "bg-amber-900/40 text-amber-300",
  Commercial: "bg-slate-800/60 text-slate-300",
  Equipment: "bg-[#E07820]/20 text-[#E07820]",
};

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1C1C1E] py-16 px-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-3">
            Our Work
          </p>
          <h1
            className="text-5xl font-bold uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Gallery
          </h1>
          <p className="text-[#6B7280] leading-relaxed">
            Jobs completed across Plattsburgh, Lake Champlain, and Clinton County. Photos
            coming soon — check back after the next pour.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#111111] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* TODO: Replace placeholder cards with real job photos from Dustin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map((item) => (
              <div
                key={item.label}
                className="group relative bg-[#1C1C1E] border border-white/10 rounded-lg overflow-hidden aspect-[4/3] flex flex-col items-center justify-center hover:border-[#E07820]/30 transition-colors"
                role="img"
                aria-label={item.alt}
              >
                {/* Placeholder background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
                  }}
                  aria-hidden="true"
                />

                {/* Category badge */}
                <span
                  className={`absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest px-2 py-1 rounded ${categoryColors[item.category] ?? "bg-white/10 text-white/60"}`}
                >
                  {item.category}
                </span>

                {/* Label */}
                <div className="relative text-center px-6">
                  <p className="text-[#6B7280] text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-white/20 mt-1">Photo coming soon</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#6B7280] mt-8">
            Real job photos from Dustin will be added here — contact us to see recent work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1E] border-t border-white/10 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold uppercase text-white mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ready to Start Your Pour?
          </h2>
          <p className="text-[#6B7280] mb-6 text-sm">
            Request a quote or call Dustin directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#E07820] text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#C4631A] transition-colors rounded"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
