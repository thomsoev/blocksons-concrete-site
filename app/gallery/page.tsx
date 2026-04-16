import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Pumping Gallery | Blocksons Concrete | Plattsburgh NY",
  description:
    "Photo gallery of boom pump concrete jobs — seawalls, foundations, elevated decks, and commercial slabs across the North Country — Clinton, Essex, and Franklin County, NY.",
};

// Stock photos used until Dustin's real job photos are available.
// TODO: Replace each src with a real job photo from Dustin. Keep alt text.
const photos = [
  {
    src: "https://images.pexels.com/photos/32817699/pexels-photo-32817699.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Boom pump truck placing concrete on seawall at Lake Champlain in Plattsburgh NY",
    label: "Seawall Pour — Lake Champlain",
    category: "Seawall",
  },
  {
    src: "https://images.pexels.com/photos/26107203/pexels-photo-26107203.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Concrete pumped into residential foundation forms in Plattsburgh NY",
    label: "Residential Foundation — Plattsburgh",
    category: "Foundation",
  },
  {
    src: "https://images.pexels.com/photos/35886615/pexels-photo-35886615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Boom pump arm extended to reach elevated deck pour in Clinton County NY",
    label: "Elevated Deck Pour",
    category: "Elevated Pour",
  },
  {
    src: "https://images.pexels.com/photos/18283538/pexels-photo-18283538.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Large commercial slab concrete pour via boom pump in Clinton County NY",
    label: "Commercial Slab — Clinton County",
    category: "Commercial",
  },
  {
    src: "https://images.pexels.com/photos/36782541/pexels-photo-36782541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Boom pump truck with arm fully extended on a job site in northern New York",
    label: "Boom Arm Extended — Job Site",
    category: "Equipment",
  },
  {
    src: "https://images.pexels.com/photos/12032961/pexels-photo-12032961.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Blocksons Concrete boom pump truck full equipment photo",
    label: "Equipment Photo — Truck & Boom",
    category: "Equipment",
  },
];

const categoryColors: Record<string, string> = {
  Seawall: "bg-blue-900/60 text-blue-200",
  Foundation: "bg-stone-800/70 text-stone-300",
  "Elevated Pour": "bg-amber-900/60 text-amber-200",
  Commercial: "bg-slate-800/70 text-slate-300",
  Equipment: "bg-[#E07820]/30 text-[#E07820]",
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
            Representative work across the North Country — Lake Champlain, Clinton, Essex, and Franklin County.
            Real job photos from Dustin will be added as they come in.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#111111] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((item) => (
              <div
                key={item.label}
                className="group relative bg-[#1C1C1E] rounded-lg overflow-hidden aspect-[4/3] hover:ring-1 hover:ring-[#E07820]/40 transition-all"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Category badge */}
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold uppercase tracking-widest px-2 py-1 rounded backdrop-blur-sm ${categoryColors[item.category] ?? "bg-white/10 text-white/60"}`}
                >
                  {item.category}
                </span>

                {/* Label */}
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#6B7280] mt-8">
            Stock photos shown until Dustin&apos;s real job photos are available. Contact us to
            see recent work.
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
