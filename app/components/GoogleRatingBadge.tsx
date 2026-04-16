import { Star } from "lucide-react";

interface GoogleRatingBadgeProps {
  className?: string;
}

export default function GoogleRatingBadge({ className = "" }: GoogleRatingBadgeProps) {
  return (
    // TODO: If Dustin sets up a separate Google Business listing for the concrete side,
    // update this link to the concrete-specific Google Maps listing.
    <a
      href="https://www.google.com/maps/search/Blocksons+LLC+Morrisonville+NY"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 hover:bg-white/15 transition-colors ${className}`}
    >
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <span className="text-sm font-medium text-white">
        5.0 · 49 Google Reviews
      </span>
    </a>
  );
}
