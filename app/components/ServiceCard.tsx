import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="bg-[#1C1C1E] border border-white/10 rounded-lg p-6 flex flex-col gap-4 hover:border-[#E07820]/40 transition-colors group">
      <div className="w-12 h-12 rounded-lg bg-[#E07820]/10 flex items-center justify-center">
        <Icon size={22} className="text-[#E07820]" />
      </div>
      <div>
        <h3
          className="text-xl font-bold uppercase tracking-wide text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed">{description}</p>
      </div>
      {href && (
        <Link
          href={href}
          className="mt-auto flex items-center gap-1 text-sm text-[#E07820] font-medium hover:gap-2 transition-all"
        >
          Learn more <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
