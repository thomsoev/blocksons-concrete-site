import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  timeAgo: string;
  excerpt: string;
}

export default function ReviewCard({ name, timeAgo, excerpt }: ReviewCardProps) {
  return (
    <div className="bg-[#1C1C1E] border border-white/10 rounded-lg p-6 flex flex-col gap-4">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-white/80 text-sm leading-relaxed">&ldquo;{excerpt}&rdquo;</p>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
        <span className="text-sm font-semibold text-white">{name}</span>
        <span className="text-xs text-[#6B7280]">{timeAgo}</span>
      </div>
    </div>
  );
}
