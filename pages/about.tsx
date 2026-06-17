import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";

const principles = [
  { num: "01", label: "Design before code" },
  { num: "02", label: "Make failure visible" },
  { num: "03", label: "Boring tech, on purpose" },
  { num: "04", label: "Optimize for the next engineer" },
];

const sections = [
  {
    label: "Engineering philosophy",
    heading: "Correctness, then clarity, then speed — in that order.",
    body: "Most software is read and changed far more often than it's written, so I optimize for the engineer who shows up six months later: clear boundaries, obvious data flow, and failure handling that's visible instead of hidden. Speed matters, but it's the last thing I trade correctness for — never the first.",
  },
  {
    label: "Why building systems matters",
    heading: "If payroll is wrong, someone doesn't get paid.",
    body: "I'm drawn to systems where the stakes are concrete. A double-charge isn't a failed test — it's someone's money. A missed payroll run isn't a ticket — it's rent. That framing changes how I design: I assume the network will fail, the processor will be late, and the rare edge case will happen on a Friday night. My job is to make the system behave predictably anyway.",
  },
  {
    label: "From frontend to full-stack",
    heading: "I followed the problems past the API boundary.",
    body: "I started on the frontend, close to users and interfaces. But the problems that held my attention kept living on the other side of the API — in data models, consistency, and how state actually moves through a system. So I followed them. Today I build the whole path: the interface a merchant trusts, the endpoints behind it, and the data layer that has to stay correct under load.",
  },
  {
    label: "How I work",
    heading: "I write the decision down before I write the code.",
    body: "Before the first commit I answer a few questions in plain language — what are the boundaries, who owns this data, how does it fail? Writing it down turns vague intentions into decisions I can defend and revisit later. I default to boring, observable technology, keep systems only as complex as the problem demands, and would rather ship something correct and legible than clever and fragile.",
  },
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>About — Richard Bentil</title>
        <meta name="description" content="I care about what happens after the code ships." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style>{`
        .port-body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: #fff; color: #0a0a0a; }
        .port-wrap { max-width: 1440px; margin: 0 auto; padding: 0 180px; }
        .lbl { font-family: 'Roboto Mono', monospace; font-size: 11px; font-weight: 400; letter-spacing: .06em; text-transform: uppercase; color: #8a8a8a; margin: 0; }
        a { color: inherit; text-decoration: none; }
        .menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 4px; line-height: 1; }
        .nav-offcanvas { position: fixed; top: 0; right: 0; width: 280px; height: 100vh; background: #fff; z-index: 1055; transform: translateX(100%); transition: transform 0.25s ease; box-shadow: -4px 0 24px rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 28px 24px; }
        .nav-offcanvas.open { transform: translateX(0); }
        .nav-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.25); z-index: 1050; opacity: 0; pointer-events: none; transition: opacity 0.25s ease; }
        .nav-backdrop.open { opacity: 1; pointer-events: auto; }
        @media (max-width: 1280px) { .port-wrap { padding: 0 80px; } }
        @media (max-width: 900px) {
          .port-wrap { padding: 0 32px; }
          .nav-links { display: none !important; }
          .nav-contact { display: none !important; }
          .menu-btn { display: flex; align-items: center; }
          .abt-h1 { font-size: 34px !important; }
          .abt-hero { padding-top: 56px !important; padding-bottom: 44px !important; }
          .main-sec { padding-top: 40px !important; padding-bottom: 40px !important; }
          .principles-grid { grid-template-columns: 1fr 1fr !important; }
          .principles-cell { border-right: 1px solid #e5e5e5 !important; border-bottom: 1px solid #e5e5e5 !important; }
          .principles-cell:nth-child(2n) { border-right: 1px solid #e5e5e5 !important; }
        }
        @media (max-width: 560px) {
          .abt-h1 { font-size: 26px !important; }
          .abt-h2 { font-size: 19px !important; }
          .principles-grid { grid-template-columns: 1fr !important; }
          .principles-cell { border-right: 1px solid #e5e5e5 !important; }
        }
        @media (max-width: 480px) {
          .port-wrap { padding: 0 16px; }
          .abt-hero { padding-top: 40px !important; padding-bottom: 32px !important; }
          .main-sec { padding-top: 32px !important; padding-bottom: 32px !important; }
        }
      `}</style>

      <div className="port-body">

        {/* NAV */}
        <nav style={{ borderBottom: "1px solid #e8e8e8", background: "#fff" }}>
          <div className="port-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 18, paddingBottom: 18 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 600, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
              <GoDotFill style={{ color: "#22c55e", fontSize: 10, flexShrink: 0 }} />
              Richard Bentil
            </Link>
            <div className="nav-links" style={{ display: "flex", gap: 20, fontSize: 14, color: "#525252" }}>
              <Link href="/#work">Work</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/#writing">Writing</Link>
              <Link href="/about" style={{ fontWeight: 600, color: "#0a0a0a" }}>About</Link>
            </div>
            <Link href="/#contact" className="nav-contact" style={{ border: "1px solid #dcdcdc", color: "#0a0a0a", padding: "7px 14px", borderRadius: 7, fontSize: 14, fontWeight: 500 }}>
              Contact
            </Link>
            <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <HiMenu style={{ fontSize: 24, color: "#0a0a0a" }} />
            </button>
          </div>
        </nav>

        {/* OFFCANVAS */}
        <div className={`nav-backdrop${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
        <div className={`nav-offcanvas${menuOpen ? " open" : ""}`}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 600, color: "#0a0a0a" }} onClick={() => setMenuOpen(false)}>
              <GoDotFill style={{ color: "#22c55e", fontSize: 10 }} />
              Richard Bentil
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={{ background: "none", border: "none", cursor: "pointer", padding: 4, lineHeight: 1 }}>
              <HiX style={{ fontSize: 22, color: "#0a0a0a" }} />
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <Link href="/#work" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#0a0a0a", fontWeight: 500 }}>Work</Link>
            <Link href="/experience" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#0a0a0a", fontWeight: 500 }}>Experience</Link>
            <Link href="/#writing" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#0a0a0a", fontWeight: 500 }}>Writing</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#0a0a0a", fontWeight: 600 }}>About</Link>
          </div>
          <div style={{ marginTop: "auto", paddingTop: 32 }}>
            <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", border: "1px solid #dcdcdc", color: "#0a0a0a", padding: "10px 14px", borderRadius: 7, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, textAlign: "center" }}>
              Contact
            </Link>
          </div>
        </div>

        {/* HERO */}
        <section className="abt-hero" style={{ padding: "96px 0 80px", borderBottom: "1px solid #e5e5e5" }}>
          <div className="port-wrap">
            <p className="lbl" style={{ marginBottom: 28 }}>About</p>
            <h1 className="abt-h1" style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 780, marginBottom: 32, color: "#111" }}>
              I care about what happens after the code ships.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#666", maxWidth: 680 }}>
              I&apos;m a software engineer in Accra building full-stack systems — payments, payroll, field data collection — where being wrong has real consequences. I work frontend-first but follow problems all the way down to the data.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY SECTIONS */}
        {sections.map((s, i) => (
          <section key={i} className="main-sec" style={{ padding: "56px 0", borderBottom: "1px solid #e5e5e5" }}>
            <div className="port-wrap">
              <p className="lbl" style={{ marginBottom: 16 }}>{s.label}</p>
              <h2 className="abt-h2" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 700, marginBottom: 20, color: "#111" }}>
                {s.heading}
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#666", maxWidth: 640 }}>{s.body}</p>
            </div>
          </section>
        ))}

        {/* PRINCIPLES */}
        <section className="main-sec" style={{ padding: "56px 0", borderBottom: "1px solid #e5e5e5" }}>
          <div className="port-wrap">
            <p className="lbl" style={{ marginBottom: 32 }}>Principles</p>
            <div className="principles-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              {principles.map((p, i) => (
                <div key={i} className="principles-cell" style={{
                  border: "1px solid #e5e5e5",
                  borderRight: i < 3 ? "none" : "1px solid #e5e5e5",
                  padding: "24px 22px",
                }}>
                  <p style={{ fontSize: 13, color: "#aaa", fontWeight: 500, marginBottom: 16 }}>{p.num}</p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "#111", margin: 0 }}>{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="main-sec" style={{ padding: "56px 0", borderBottom: "1px solid #e5e5e5" }}>
          <div className="port-wrap">
            <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", color: "#111", marginBottom: 24 }}>
              Currently open to senior software engineering roles.
            </h2>
            <div style={{ display: "flex", gap: 8, fontSize: 15, color: "#555", alignItems: "center", flexWrap: "wrap" }}>
              <a href="mailto:richardebo.bentil@gmail.com" style={{ color: "#111" }}>richardebo.bentil@gmail.com</a>
              <span style={{ color: "#ccc" }}>·</span>
              <a href="https://github.com/richardbentil" target="_blank" rel="noopener noreferrer" style={{ color: "#111" }}>github.com/richardbentil</a>
              <span style={{ color: "#ccc" }}>·</span>
              <a href="https://linkedin.com/in/richard-bentil" target="_blank" rel="noopener noreferrer" style={{ color: "#111" }}>in/richard-bentil</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid #e8e8e8", padding: "32px 0" }}>
          <div className="port-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 12, color: "#8a8a8a", margin: 0 }}>© 2026 Richard Bentil</p>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 12, color: "#8a8a8a", margin: 0 }}>Built as a system — designed, shipped, operated.</p>
          </div>
        </footer>

      </div>
    </>
  );
}
