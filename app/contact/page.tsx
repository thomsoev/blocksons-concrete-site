import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Concrete Pump Quote | Plattsburgh, NY | Blocksons Concrete",
  description:
    "Request a concrete boom pump quote from Blocksons Concrete. Serving the North Country — Clinton, Essex, and Franklin County, NY.",
};

const pourTypes = [
  "Seawall",
  "Foundation",
  "Elevated Deck",
  "Commercial Slab",
  "Basement Floor",
  "Hard-to-Access Site",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1C1C1E] py-16 px-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-3">
            Get Started
          </p>
          <h1
            className="text-5xl font-bold uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Request a Quote
          </h1>
          <p className="text-[#6B7280] leading-relaxed">
            Describe your pour and Dustin will get back to you directly. For faster response,
            call during business hours.
          </p>
        </div>
      </section>

      <section className="bg-[#111111] py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          {/* Contact info — never hidden behind a form */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <p
                className="text-xl font-bold uppercase text-white mb-5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Contact Dustin Directly
              </p>
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+15185703076"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded bg-[#E07820]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} className="text-[#E07820]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-white font-medium group-hover:text-[#E07820] transition-colors">
                      (518) 570-3076
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:blocksonsconcrete@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded bg-[#E07820]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} className="text-[#E07820]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-white font-medium text-sm group-hover:text-[#E07820] transition-colors break-all">
                      blocksonsconcrete@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-[#E07820]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-[#E07820]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white font-medium">
                      Morrisonville, NY
                    </p>
                    <p className="text-[#6B7280] text-sm mt-0.5">
                      Serving the North Country
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-[#E07820]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} className="text-[#E07820]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="text-white font-medium">Mon–Sat · Call ahead to confirm</p>
                    <p className="text-[#6B7280] text-sm mt-0.5">
                      Scheduling fills quickly — call early for tight timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-[#E07820]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-[#E07820]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">Service Area</p>
                    <p className="text-white font-medium">Clinton, Essex &amp; Franklin County</p>
                    <p className="text-[#6B7280] text-sm mt-0.5">
                      Including Plattsburgh, Lake Champlain waterfront, Saranac Lake, Lake Placid, Malone, and surrounding towns. Not sure if we cover you? Just call.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1C1C1E] border border-white/10 rounded-lg p-5">
              <p
                className="text-lg font-bold uppercase text-white mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What to Have Ready
              </p>
              <ul className="text-[#6B7280] text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#E07820] mt-0.5">—</span>
                  Job site address
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E07820] mt-0.5">—</span>
                  Type of pour (seawall, foundation, deck, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E07820] mt-0.5">—</span>
                  Approximate cubic yards (if known)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E07820] mt-0.5">—</span>
                  Any access constraints or obstacles
                </li>
              </ul>
            </div>
          </div>

          {/* Quote form */}
          <div className="md:col-span-3">
            <div className="bg-[#1C1C1E] border border-white/10 rounded-lg p-8">
              <p
                className="text-2xl font-bold uppercase text-white mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Quote Request Form
              </p>

              {/*
                TODO: Configure Formspree — replace REPLACE_WITH_FORMSPREE_ID with your form ID.
                Sign up at https://formspree.io, create a form, and paste the ID here.
              */}
              <form
                action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
                method="POST"
                className="flex flex-col gap-5"
              >
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5"
                    >
                      Name <span className="text-[#E07820]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-[#111111] border border-white/15 rounded px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#E07820] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5"
                    >
                      Phone <span className="text-[#E07820]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full bg-[#111111] border border-white/15 rounded px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#E07820] transition-colors"
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full bg-[#111111] border border-white/15 rounded px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#E07820] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Job site address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5"
                  >
                    Job Site Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="w-full bg-[#111111] border border-white/15 rounded px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#E07820] transition-colors"
                    placeholder="Street, city, zip"
                  />
                </div>

                {/* Type of pour + cubic yards */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="pour_type"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5"
                    >
                      Type of Pour
                    </label>
                    <select
                      id="pour_type"
                      name="pour_type"
                      className="w-full bg-[#111111] border border-white/15 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E07820] transition-colors appearance-none"
                    >
                      <option value="">Select a type...</option>
                      {pourTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="cubic_yards"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5"
                    >
                      Approx. Cubic Yards{" "}
                      <span className="text-white/30 font-normal normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="cubic_yards"
                      name="cubic_yards"
                      type="text"
                      className="w-full bg-[#111111] border border-white/15 rounded px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#E07820] transition-colors"
                      placeholder="e.g. 20 yards"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5"
                  >
                    Description &amp; Access Notes
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full bg-[#111111] border border-white/15 rounded px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#E07820] transition-colors resize-y"
                    placeholder="Describe your job, any obstacles, waterfront access, tight lot, etc."
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label
                    htmlFor="referral"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5"
                  >
                    How Did You Hear About Us?
                  </label>
                  <input
                    id="referral"
                    name="referral"
                    type="text"
                    className="w-full bg-[#111111] border border-white/15 rounded px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#E07820] transition-colors"
                    placeholder="Google, referral, Blocksons LLC, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-[#E07820] text-white font-bold text-sm uppercase tracking-wider py-4 hover:bg-[#C4631A] transition-colors rounded"
                >
                  Send Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
