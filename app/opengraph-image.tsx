import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Blocksons Concrete — Boom Pump Truck Service | Plattsburgh, NY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Orange accent bar */}
        <div style={{ width: 80, height: 6, background: "#E07820", marginBottom: 40, display: "flex" }} />

        <div style={{ fontSize: 22, color: "#E07820", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24, display: "flex" }}>
          Boom Pump Truck Service
        </div>

        <div style={{ fontSize: 72, color: "#FFFFFF", fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 32, display: "flex", flexDirection: "column" }}>
          <span>Blocksons</span>
          <span style={{ color: "#E07820" }}>Concrete</span>
        </div>

        <div style={{ fontSize: 26, color: "#9CA3AF", display: "flex" }}>
          Seawalls · Foundations · Elevated Decks · Hard-to-Reach Pours
        </div>

        <div style={{ marginTop: 48, fontSize: 22, color: "#6B7280", display: "flex" }}>
          Serving Plattsburgh &amp; the North Country · (518) 570-3076
        </div>
      </div>
    ),
    size
  );
}
