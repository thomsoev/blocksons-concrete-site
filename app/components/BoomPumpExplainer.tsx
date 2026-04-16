import { Clock, ShieldCheck, Truck } from "lucide-react";

export default function BoomPumpExplainer() {
  return (
    <section className="bg-[#1C1C1E] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-3">
              For GCs &amp; Contractors
            </p>
            <h2
              className="text-4xl font-bold uppercase text-white mb-5 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              The pump that gets<br />to jobs others can&apos;t.
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              When a chute truck can&apos;t reach the pour — waterfront lot, elevated slab, tight
              urban site, hillside build — a boom pump is the call. Dustin&apos;s truck-mounted
              unit reaches over obstacles with a multi-section articulating arm, placing concrete
              exactly where your crew needs it without staging, scaffolding, or extra labor.
            </p>
            <p className="text-white/70 leading-relaxed">
              One truck. Self-contained setup. No separate equipment, no coordination overhead.
              Book Dustin the same way you&apos;d book any trade — call, describe the pour, confirm
              the date.
            </p>
          </div>

          {/* Feature callouts */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: Truck,
                title: "Self-Contained — No Separate Equipment",
                body: "The pump unit arrives ready to work. No crane, no secondary staging, no extra crew requirements.",
              },
              {
                icon: Clock,
                title: "Faster Pour Times",
                body: "Continuous high-volume placement keeps your crews moving. Less downtime waiting on chute repositioning.",
              },
              {
                icon: ShieldCheck,
                title: "One Operator, Full Accountability",
                body: "Dustin runs the equipment himself and stands behind the work. Same reliability his 49 five-star reviews are built on.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded bg-[#E07820]/10 flex items-center justify-center">
                  <Icon size={18} className="text-[#E07820]" />
                </div>
                <div>
                  <p
                    className="font-bold text-white text-lg uppercase tracking-wide leading-tight mb-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {title}
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
