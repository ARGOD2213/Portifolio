import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Chintala Mahindra — Java Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#05070b", color: "#f5f7fb", padding: "72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", color: "#48e4e8", fontSize: 24, letterSpacing: "0.16em" }}>CM / JAVA</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: "-0.04em" }}>{site.name}</div>
        <div style={{ fontSize: 32, color: "#8e9aae" }}>{site.role}</div>
        <div style={{ fontSize: 22, color: "#cbd3df" }}>Spring Boot · Microservices · AI Application Integration</div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#8e9aae" }}>{site.email}</div>
    </div>
  );
}
