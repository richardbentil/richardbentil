import Link from "next/link";
import { Work } from "@/data/works";

const MONO = "'Roboto Mono', ui-monospace, monospace";
const SANS = "'Inter', system-ui, -apple-system, sans-serif";
const BLACK = "#0a0a0a";
const GRAY = "#525252";
const GRAY_LIGHT = "#8a8a8a";
const BORDER = "#e8e8e8";

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/case-study/${work.slug}`}
      className="work-card"
      aria-label={`${work.title} — read case study`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        height: "100%",
        background: "#fff",
        border: `1px solid ${BORDER}`,
        borderRadius: 8,
        padding: 32,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontFamily: SANS, fontSize: 18, fontWeight: 600, color: BLACK, letterSpacing: "-0.01em" }}>{work.title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, marginLeft: 12 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: BLACK, display: "inline-block" }} />
          <span style={{ fontFamily: MONO, fontSize: 11, color: GRAY, whiteSpace: "nowrap" }}>{work.tag}</span>
        </div>
      </div>

      <p style={{ fontFamily: SANS, fontSize: 15, color: BLACK, lineHeight: 1.5 }}>{work.description}</p>

      <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, display: "flex", flexDirection: "column", gap: 12, marginTop: "auto" }}>
        {([["FLOW", work.flow], ["FOCUS", work.focus]] as [string, string][]).map(([label, val]) => (
          <div key={label} style={{ display: "flex", gap: 16 }}>
            <span style={{ fontFamily: MONO, fontSize: 11, color: GRAY_LIGHT, letterSpacing: "0.05em", textTransform: "uppercase", width: 58, flexShrink: 0, lineHeight: 1.4 }}>{label}</span>
            <span style={{ fontFamily: MONO, fontSize: 12.5, color: GRAY, lineHeight: 1.55 }}>{val}</span>
          </div>
        ))}
      </div>

      <span style={{ fontFamily: MONO, fontSize: 12, color: BLACK, fontWeight: 500 }}>Case study →</span>
    </Link>
  );
}
