import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import GoogleRatingBadge from "../components/GoogleRatingBadge";
import ReviewCard from "../components/ReviewCard";

export const metadata: Metadata = {
  title: "5.0 Google Reviews | Blocksons Concrete | Plattsburgh NY",
  description:
    "Blocksons Concrete — same owner as Blocksons LLC, rated 5.0 stars across 49 Google reviews. Serving the North Country — Clinton, Essex, and Franklin County, NY.",
};

// TODO: If Dustin sets up a separate Google Business listing for the concrete side,
// update rating badge and link to use the concrete-specific listing.
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

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1C1C1E] py-16 px-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E07820] mb-3">
            Reputation
          </p>
          <h1
            className="text-5xl font-bold uppercase text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            5.0 Google Reviews
          </h1>

          {/* Big rating display */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-4xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              5.0 out of 5
            </p>
            <p className="text-[#6B7280] text-sm">Based on 49 Google reviews</p>
          </div>

          <div className="flex justify-center mb-4">
            <GoogleRatingBadge />
          </div>
          <a
            href="https://www.google.com/maps/search/Blocksons+LLC+Morrisonville+NY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#6B7280] hover:text-[#E07820] transition-colors"
          >
            View all reviews on Google <ExternalLink size={11} />
          </a>
        </div>
      </section>

      {/* Attribution note */}
      <section className="bg-[#111111] px-4 pt-8 pb-2">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1C1C1E] border border-white/10 rounded-lg px-6 py-4 text-sm text-[#6B7280] text-center">
            Reviews for owner Dustin across his businesses. Dustin operates both Blocksons LLC
            (tree service) and Blocksons Concrete — same operator, same standard of work.
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-[#111111] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/search/Blocksons+LLC+Morrisonville+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#E07820] font-medium hover:underline"
            >
              Read all 49 reviews on Google <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-[#1C1C1E] border-t border-b border-white/10 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { number: "5.0", label: "Average star rating" },
              { number: "49", label: "Google reviews" },
              { number: "100%", label: "5-star reviews" },
            ].map(({ number, label }) => (
              <div key={label}>
                <p
                  className="text-5xl font-bold text-[#E07820]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {number}
                </p>
                <p className="text-[#6B7280] text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl font-bold uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ready to Work With Dustin?
          </h2>
          <p className="text-[#6B7280] mb-8">
            The same operator behind those reviews is running your concrete pour.
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
