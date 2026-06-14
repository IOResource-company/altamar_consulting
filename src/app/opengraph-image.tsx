import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — AI for owner-led businesses`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1e2e",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#c8a46c",
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 48, height: 2, background: "#c8a46c" }} />
          Altamar Consulting
        </div>

        <div
          style={{
            display: "flex",
            color: "#f3eee2",
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 600,
            maxWidth: 900,
          }}
        >
          AI that actually works in your business.
        </div>

        <div style={{ display: "flex", color: "#adbccb", fontSize: 28 }}>
          Operator-led AI advisory · Ireland &amp; UK
        </div>
      </div>
    ),
    { ...size },
  );
}
