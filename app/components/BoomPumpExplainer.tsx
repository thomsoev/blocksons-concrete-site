import { Truck, RotateCcw, Zap } from "lucide-react";

export default function BoomPumpExplainer() {
  return (
    <section className="bg-[#1C1C1E] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-3">
              Know the Equipment
            </p>
            <h2
              className="text-4xl font-bold uppercase text-white mb-5 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              What Is a Boom Pump Truck?
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              A truck-mounted boom pump uses a multi-section articulating arm to place concrete
              precisely where standard equipment can&apos;t reach — over obstacles, up heights,
              and into tight spaces like seawalls and elevated decks.
            </p>
            <p className="text-white/70 leading-relaxed">
              Standard chute trucks require direct access. A boom pump doesn&apos;t. That&apos;s
              the difference between a pour that works and one that can&apos;t happen at all.
            </p>
          </div>

          {/* Feature callouts */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: Truck,
                title: "Mounted on a Heavy-Duty Truck",
                body: "The pump unit travels to the job site fully self-contained. No separate equipment required.",
              },
              {
                icon: RotateCcw,
                title: "Multi-Section Articulating Arm",
                body: "The boom extends and pivots to reach over walls, fences, waterfront obstacles, or up to elevated structures.",
              },
              {
                icon: Zap,
                title: "Precision Placement",
                body: "Concrete goes exactly where it needs to go — reducing waste, labor, and access headaches.",
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
