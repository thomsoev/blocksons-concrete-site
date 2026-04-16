import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Waves, Building2, Layers, HardHat, CheckCircle, MapPin } from "lucide-react";
import GoogleRatingBadge from "./components/GoogleRatingBadge";
import ReviewCard from "./components/ReviewCard";
import ServiceCard from "./components/ServiceCard";
import BoomPumpExplainer from "./components/BoomPumpExplainer";

export const metadata: Metadata = {
  title: "Concrete Boom Pump Truck | Plattsburgh, NY | Blocksons Concrete",
  description:
    "Boom pump truck service for seawalls, foundations, elevated decks, and hard-to-reach pours. Serving Plattsburgh and Clinton County, NY. Call (518) 570-3076.",
};

const services = [
  {
    icon: Waves,
    title: "Seawalls",
    description:
      "Boom arm reaches over waterfront obstacles for precision placement along seawalls and retaining walls.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Foundations & Slabs",
    description:
      "Pump directly into formed foundations and basement floors — faster and cleaner than wheelbarrow or chute.",
    href: "/services",
  },
  {
    icon: Layers,
    title: "Elevated & Hard-to-Reach",
    description:
      "Second-story decks, elevated platforms, and structural pours that chute trucks simply can't serve.",
    href: "/services",
  },
  {
    icon: HardHat,
    title: "Residential & Commercial",
    description:
      "Large-volume commercial slabs, tight residential lots, and anywhere a standard mixer truck would cause damage.",
    href: "/services",
  },
];

const reviews = [
  {
    name: "Brandon Craft",
    timeAgo: "1 year ago",
    excerpt:
      "Highly recommend Blocksons for tree service work! Dustin was great to work with and is a true master of his trade. We had a large, precarious tree partially over hanging the home we recently purchased and there was no room to fit equipment…",
  },
  {
    name: "Laura Leavine",
    timeAgo: "2 years ago",
    excerpt:
      "Dustin is amazing. He cut down both of these huge trees. He is very professional and cleans up the area. Thank you Dustin. I don't have to worry about these trees this winter. I would highly recommend Dustin.",
  },
  {
    name: "Andrew Krug",
    timeAgo: "2 years ago",
    excerpt:
      "Dustin was great to work with, from coming out for the estimate, having a formal estimate (professional document) and all the way through clean up after tree removal. I highly recommend and appreciate his follow-through, honesty, and professionalism.",
  },
];

const whyUs = [
  {
    icon: CheckCircle,
    title: "Specialized Equipment",
    body: "A truck-mounted boom pump is rare in this region. Most contractors don't have one — Dustin does.",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    body: "Based in Morrisonville. Serving Plattsburgh and surrounding Clinton County with fast response times.",
  },
  {
    icon: CheckCircle,
    title: "Trusted 5.0 Rating",
    body: "Same owner as Blocksons LLC — 49 five-star Google reviews across his businesses.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#111111] overflow-hidden">
        {/* Stock photo background — swap for Dustin's real equipment photo when available */}
        <Image
          src="https://images.pexels.com/photos/36782541/pexels-photo-36782541.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Concrete boom pump truck with extended arm at a construction site"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#111111]/75" aria-hidden="true" />
        <div
          className="relative w-full min-h-[620px] flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-3xl">
              <GoogleRatingBadge className="mb-8" />
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none text-white mb-6 tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Precision Concrete
                <br />
                <span className="text-[#E07820]">Placement —</span>
                <br />
                Anywhere.
              </h1>
              <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
                Boom pump truck service for hard-to-reach pours. Seawalls, foundations, decks,
                and more — serving Plattsburgh and Clinton County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#E07820] text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#C4631A] transition-colors rounded"
                >
                  Request a Quote <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+15185703076"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:bg-white/5 transition-colors rounded"
                >
                  <Phone size={16} />
                  Call Now: (518) 570-3076
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Boom Pump Explainer ── */}
      <BoomPumpExplainer />

      {/* ── Services Strip ── */}
      <section className="bg-[#111111] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-2">
              What We Do
            </p>
            <h2
              className="text-4xl font-bold uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[#E07820] font-medium hover:underline"
            >
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Blocksons ── */}
      <section className="bg-[#1C1C1E] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-2">
              Why Us
            </p>
            <h2
              className="text-4xl font-bold uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Why Blocksons
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#E07820]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-[#E07820]" />
                </div>
                <h3
                  className="text-xl font-bold uppercase text-white mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-[#111111] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-2">
              What People Say
            </p>
            <h2
              className="text-4xl font-bold uppercase text-white mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Reviews
            </h2>
          </div>
          <div className="flex justify-center mb-8">
            <GoogleRatingBadge />
          </div>
          <p className="text-center text-xs text-[#6B7280] mb-8">
            Reviews for owner Dustin across his businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm text-[#E07820] font-medium hover:underline"
            >
              See all reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Adirondack lake background */}
        <Image
          src="https://images.pexels.com/photos/36398832/pexels-photo-36398832.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1"
          alt="Adirondack lake in the North Country region of New York"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#111111]/80" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <MapPin size={22} className="text-[#E07820] mx-auto mb-4" />
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-3">
            Where We Work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-white mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Serving the North Country
          </h2>
          <p className="text-white/60 text-base mb-6 leading-relaxed">
            Plattsburgh · Morrisonville · Champlain · Peru · Keeseville · Rouses Point
            <br className="hidden sm:block" />
            · Malone · Saranac Lake · Lake Placid · and surrounding Clinton &amp; Essex Counties
          </p>
          <p className="text-[#6B7280] text-sm">
            Based in Morrisonville, NY — call for availability and service area confirmation.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#E07820] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Need a boom pump for your next pour?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Call for availability or submit a quote request — Dustin will get back to you directly.
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
