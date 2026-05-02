import type { Metadata } from "next";
import Link from "next/link";
import { Waves, Building2, Layers, HardHat, TreePine, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Pumping Services | Seawalls, Foundations & More | Blocksons Concrete",
  description:
    "Boom pump truck services for seawalls, foundations, elevated decks, commercial slabs, and hard-to-access sites. Serving the North Country — Clinton, Essex, and Franklin County, NY.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: Waves,
    title: "Seawall Concrete Pumping",
    badge: "Primary Specialty",
    description: [
      "Seawall and waterfront concrete work is one of the most access-constrained pours in the industry. Standard truck mixers can't navigate waterfront terrain — a boom pump is often the only practical solution.",
      "Dustin's boom pump arm reaches over seawall obstacles, rocky shorelines, and waterfront landscaping to place concrete precisely along seawalls, retaining walls, and waterfront structures.",
      "If you're on Lake Champlain or anywhere along the North Country waterfront, this is the equipment your project requires.",
    ],
  },
  {
    icon: Building2,
    title: "Foundations & Basement Slabs",
    badge: null,
    description: [
      "Pump concrete directly into formed foundations and basement floors, reducing labor and placement time significantly compared to wheelbarrow, chute, or manual methods.",
      "The boom arm extends into the excavation from above — no staging equipment in the hole, no bottlenecks, faster pours.",
      "Ideal for residential foundations, basement floor slabs, and footings where access or depth makes chute delivery impractical.",
    ],
  },
  {
    icon: Layers,
    title: "Elevated Decks & Structural Pours",
    badge: null,
    description: [
      "Second-story decks, elevated platforms, and structural elements that chute trucks simply can't serve are straightforward for a boom pump.",
      "The articulating arm reaches up and over to deposit concrete at height without scaffolding, extra labor stages, or crane-assisted equipment.",
      "Common applications: elevated deck piers, structural beams, second-floor slabs, and outdoor living structures.",
    ],
  },
  {
    icon: HardHat,
    title: "Commercial Slabs & Flatwork",
    badge: null,
    description: [
      "Large-volume commercial pours benefit from boom pump service — the arm covers more area, reduces crew requirements, and speeds up placement on tight deadlines.",
      "Warehouse floors, commercial building pads, parking areas, and large flatwork pours where multiple setup positions slow a chute truck down.",
      "Consistent placement quality across the entire slab with fewer cold joints and placement delays.",
    ],
  },
  {
    icon: TreePine,
    title: "Hard-to-Access Sites",
    badge: null,
    description: [
      "Anything with limited access — tight urban lots, landscaped properties with fencing or mature trees, hillside builds, or sites where driving a standard mixer truck would damage the property.",
      "The boom arm reaches up to 100+ feet from the truck position, meaning the truck can often stay on the road or driveway while the concrete goes exactly where it needs to.",
      "If your contractor said it can't be done — call Dustin.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1C1C1E] py-16 px-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-3">
            What We Offer
          </p>
          <h1
            className="text-5xl font-bold uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Concrete Pumping Services
          </h1>
          <p className="text-[#6B7280] leading-relaxed">
            Boom pump truck service for projects where standard equipment won&apos;t cut it.
            Serving the North Country — Clinton, Essex, and Franklin County, NY.
          </p>
        </div>
      </section>

      {/* Services */}
      {/* TODO for Dustin: Review and confirm this service list. Add or remove services as appropriate. Flag any specialties we missed. */}
      <div className="bg-[#111111]">
        {services.map((s, i) => (
          <section
            key={s.title}
            className={`py-16 px-4 border-b border-white/10 ${
              i % 2 === 1 ? "bg-[#1C1C1E]" : "bg-[#111111]"
            }`}
          >
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left: heading + icon */}
                <div>
                  <div className="w-14 h-14 rounded-lg bg-[#E07820]/10 flex items-center justify-center mb-5">
                    <s.icon size={26} className="text-[#E07820]" />
                  </div>
                  {s.badge && (
                    <span className="inline-block bg-[#E07820] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
                      {s.badge}
                    </span>
                  )}
                  <h2
                    className="text-4xl font-bold uppercase text-white leading-tight mb-4"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {s.title}
                  </h2>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#E07820] text-white font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#C4631A] transition-colors rounded"
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right: description */}
                <div className="flex flex-col gap-4">
                  {s.description.map((para, j) => (
                    <p key={j} className="text-white/70 leading-relaxed text-sm">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#E07820] py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl font-bold uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Not Sure What You Need?
          </h2>
          <p className="text-white/80 mb-8">
            Describe your pour — Dustin will tell you if a boom pump is the right call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#E07820] font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#F4F4F4] transition-colors rounded"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+15185703076"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-white/10 transition-colors rounded"
            >
              <Phone size={16} />
              (518) 570-3076
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
