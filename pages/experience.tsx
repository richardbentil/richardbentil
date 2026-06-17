import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";

const roles = [
  {
    period: "2025 — 2026",
    title: "Software Engineer",
    company: "Skillspad",
    desc: "Founded and built Ghana's creator economy platform — 360+ products across 8 product types, 1,200+ paying customers, 200 active creators on a single Next.js + MongoDB stack. Built tier-aware Paystack subscriptions, custom JWT + Firebase auth with cross-subdomain isolation, and cut media infrastructure cost ~70% by migrating to Cloudflare Stream + R2.",
  },
  {
    period: "2024 — 2026",
    title: "Back-end Engineer",
    company: "Teamart",
    desc: "Designed multi-tenant data isolation across a 10+ module NestJS API on AWS Lambda, pairing request-scoped AccountContext with CASL-based RBAC (40 subject×action permissions). Owned tenancy overlap validation for a UK property-billing platform and resolved a silent autocomplete defect across a 154,694-row, 245-country dataset.",
  },
  {
    period: "2022 — 2024",
    title: "Senior Front-end Engineer",
    company: "Peswa Finance",
    desc: "Led migration from monolithic UI to modular React/TypeScript architecture — 40% faster page loads, 50% faster initial load times on data-intensive applications. Built reusable component libraries for financial dashboards, integrated third-party APIs driving a 30% lift in user satisfaction, and mentored junior engineers on TypeScript and React patterns.",
  },
  {
    period: "2021 — 2022",
    title: "Front-end Engineer",
    company: "Hubtel",
    desc: "Built mobile-first React/TypeScript components from Figma designs for fintech and SaaS platforms serving 1,000+ daily users. Delivered SPA dashboards with complex data visualizations and designed internal admin panels that improved admin productivity by 20%.",
  },
  {
    period: "2020 — 2021",
    title: "Junior Front-end Engineer",
    company: "Amalitech Ghana",
    desc: "Built React web apps reducing manual processes by 75% through automated UI workflows. Contributed to a community e-commerce PWA that reached 200 users in its first month.",
  },
];

const projects = [
  {
    name: "SkillsPad",
    tag: "Creator Economy · SaaS",
    period: "2025 — 2026",
    desc: "Ghana's creator economy platform — 360+ products across 8 types (digital downloads, courses, community, coaching, webinars, services, e-books, playbooks), serving 1,200+ paying customers and 200 active creators on a single Next.js + MongoDB stack.",
    chips: ["Next.js", "MongoDB", "Paystack", "Cloudflare R2", "Firebase", "JWT"],
    shots: [
      { label: "Creator dashboard", img: "/img/skillspad 2.png" },
      { label: "Product storefront", img: "/img/skillspad.png" },
    ],
    href: null,
    liveUrl: "https://skillspad.org",
  },
  {
    name: "Bridge in Agriculture",
    tag: "Fintech · Impact",
    period: "2022 — 2023",
    desc: "Loan application portal for a Mastercard-backed initiative, onboarding 100+ farmers in 3 months. Designed for users with varying technical literacy — intuitive form workflows and data management built with React and TypeScript.",
    chips: ["React", "TypeScript", "Mastercard Foundation"],
    shots: [
      { label: "Loan application", img: "/img/bridgeinagric.png" },
      { label: "Farmer onboarding", img: "/img/bridgeinagric 2.png" },
    ],
    href: null,
    liveUrl: "https://bridgeinagric.com/",
  },
  {
    name: "Kobo",
    tag: "Fintech · Payments",
    period: "2022 — 2024",
    desc: "Financial platform built at Peswa Finance — modular React/TypeScript architecture with reusable component libraries for financial dashboards, delivering 40% faster page loads and 50% faster initial load times on data-intensive views.",
    chips: ["React", "TypeScript", "Next.js", "Financial APIs"],
    shots: [
      { label: "Dashboard", img: "/img/kobo.png" },
    ],
    href: null,
    liveUrl: "https://kobo.peswa.finance/",
  },
  {
    name: "MyGhQr",
    tag: "Payments · QR",
    period: "2022 — 2023",
    desc: "QR-based payments built on the GhQR spec — generate, scan, and settle across banks and mobile wallets. Card and mobile-money collection with idempotent payments and a consistent ledger.",
    chips: ["Next.js", "Node.js", "GhQR", "Mobile Money"],
    shots: [
      { label: "App screen", img: "/img/myghqr.png" },
      { label: "QR checkout", img: "/img/myghqr 2.png" },
    ],
    href: null,
    liveUrl: "https://myghqr.com/",
  },
];

export default function Experience() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Experience & Projects — Richard Bentil</title>
        <meta name="description" content="The roles I've held and the systems I shipped in them — each project with the product it produced." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: #fff; color: #0a0a0a; }
        a { color: inherit; text-decoration: none; }
        .wrap { max-width: 1440px; margin: 0 auto; padding: 0 180px; }
        .lbl { font-family: 'Roboto Mono', monospace; font-size: 11px; font-weight: 400; letter-spacing: .06em; text-transform: uppercase; color: #8a8a8a; }
        .chip { font-family: 'Roboto Mono', monospace; font-size: 12px; color: #525252; border: 1px solid #e8e8e8; border-radius: 3px; padding: 4px 10px; background: #fff; }
        .menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 4px; line-height: 1; }
        .nav-offcanvas { position: fixed; top: 0; right: 0; width: 280px; height: 100vh; background: #fff; z-index: 1055; transform: translateX(100%); transition: transform 0.25s ease; box-shadow: -4px 0 24px rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 28px 24px; }
        .nav-offcanvas.open { transform: translateX(0); }
        .nav-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.25); z-index: 1050; opacity: 0; pointer-events: none; transition: opacity 0.25s ease; }
        .nav-backdrop.open { opacity: 1; pointer-events: auto; }
        @media (max-width: 1280px) { .wrap { padding: 0 80px; } }
        @media (max-width: 900px) {
          .wrap { padding: 0 32px; }
          .nav-links { display: none !important; }
          .nav-contact { display: none !important; }
          .menu-btn { display: flex; align-items: center; }
          .main-sec { padding-top: 52px !important; padding-bottom: 52px !important; }
          .mob-card { padding: 20px !important; }
        }
        @media (max-width: 768px) {
          .exp-h1 { font-size: 32px !important; }
          .exp-h2 { font-size: 22px !important; }
          .exp-row { flex-direction: column !important; gap: 4px !important; padding: 18px 20px !important; }
          .exp-period { min-width: unset !important; padding-top: 0 !important; font-size: 12px !important; }
          .shots-grid { grid-template-columns: 1fr !important; }
          .proj-top { flex-direction: column !important; gap: 4px !important; }
          .sec-meta { display: none !important; }
          .section-header { flex-wrap: wrap !important; }
        }
        @media (max-width: 480px) {
          .wrap { padding: 0 16px; }
          .exp-h1 { font-size: 24px !important; }
          .exp-h2 { font-size: 18px !important; }
          .main-sec { padding-top: 36px !important; padding-bottom: 36px !important; }
          .mob-card { padding: 14px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: "1px solid #e8e8e8", background: "#fff" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 18, paddingBottom: 18 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 600, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
            <GoDotFill style={{ color: "#22c55e", fontSize: 10, flexShrink: 0 }} />
            Richard Bentil
          </Link>
          <div className="nav-links" style={{ display: "flex", gap: 20, fontSize: 14, color: "#525252" }}>
            <Link href="/#work">Work</Link>
            <Link href="/experience" style={{ fontWeight: 600, color: "#0a0a0a" }}>Experience</Link>
            <Link href="/#writing">Writing</Link>
            <Link href="/about">About</Link>
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
          <Link href="/experience" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#0a0a0a", fontWeight: 600 }}>Experience</Link>
          <Link href="/#writing" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#0a0a0a", fontWeight: 500 }}>Writing</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#0a0a0a", fontWeight: 500 }}>About</Link>
        </div>
        <div style={{ marginTop: "auto", paddingTop: 32 }}>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", border: "1px solid #dcdcdc", color: "#0a0a0a", padding: "10px 14px", borderRadius: 7, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, textAlign: "center" }}>
            Contact
          </Link>
        </div>
      </div>

      {/* HEADER */}
      <section className="main-sec" style={{ padding: "80px 0 72px", borderBottom: "1px solid #e5e5e5" }}>
        <div className="wrap">
          <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
            <p className="lbl">Work Experience</p>
            <p className="sec-meta" style={{ fontSize: 13, color: "#888" }}>2020 — 2026</p>
          </div>
          <h1 className="exp-h1" style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24, color: "#111" }}>
            Experience &amp; projects
          </h1>
          <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7 }}>
            The roles I&apos;ve held and the systems I shipped in them — each project with the product it produced.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="main-sec" style={{ padding: "80px 0", borderBottom: "1px solid #e5e5e5" }}>
        <div className="wrap">
          <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
            <div>
              <p className="lbl" style={{ marginBottom: 16 }}>Experience</p>
              <h2 className="exp-h2" style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.025em", color: "#111" }}>
                Where I&apos;ve worked.
              </h2>
            </div>
            <p className="sec-meta" style={{ fontSize: 13, color: "#aaa", marginTop: 4 }}>5 roles · 2020 — 2026</p>
          </div>

          <div style={{ border: "1px solid #e5e5e5", borderRadius: 4, overflow: "hidden" }}>
            {roles.map((r, i) => (
              <div key={i} className="exp-row" style={{
                display: "flex",
                gap: 0,
                padding: "24px 32px",
                borderBottom: i < roles.length - 1 ? "1px solid #e5e5e5" : "none",
                alignItems: "flex-start",
              }}>
                <p className="exp-period" style={{ fontSize: 13, color: "#888", minWidth: 130, paddingTop: 3 }}>{r.period}</p>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>{r.title}</span>
                    <span style={{ fontSize: 14, color: "#aaa" }}>· {r.company}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#777", lineHeight: 1.6 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="main-sec" style={{ padding: "80px 0", borderBottom: "1px solid #e5e5e5" }}>
        <div className="wrap">
          <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
            <div>
              <p className="lbl" style={{ marginBottom: 16 }}>Projects</p>
              <h2 className="exp-h2" style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.025em", color: "#111" }}>
                What I built, with screenshots.
              </h2>
            </div>
            <p className="sec-meta" style={{ fontSize: 13, color: "#888", marginTop: 4 }}>4 projects</p>

          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {projects.map((p, i) => (
              <div key={i} className="mob-card" style={{ border: "1px solid #e5e5e5", borderRadius: 4, padding: 32 }}>
                {/* Top row */}
                <div className="proj-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#111", marginBottom: 6 }}>{p.name}</h3>
                    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#555" }}>
                      <GoDotFill style={{ color: "#22c55e", fontSize: 9 }} />
                      {p.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{p.period}</p>
                </div>

                {/* Desc */}
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, marginBottom: 18 }}>{p.desc}</p>

                {/* Chips */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
                  {p.chips.map((c, ci) => (
                    <span key={ci} className="chip">{c}</span>
                  ))}
                  <div style={{ display: "flex", gap: 16, marginLeft: 8 }}>
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 500, color: "#111", display: "flex", alignItems: "center", gap: 4 }}>
                        Visit site →
                      </a>
                    )}
                    {p.href && (
                      <Link href={p.href} style={{ fontSize: 13, fontWeight: 500, color: "#111", display: "flex", alignItems: "center", gap: 4 }}>
                        Case study →
                      </Link>
                    )}
                  </div>
                </div>

                {/* Screenshots */}
                <div className="shots-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {p.shots.map((s, si) => (
                    <div key={si} style={{ borderRadius: 6, overflow: "hidden", border: "1px solid #e8e8e8", height: 240, position: "relative" }}>
                      <img src={s.img} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 11, color: "#fff", background: "rgba(0,0,0,0.45)", padding: "2px 8px", borderRadius: 3 }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #e8e8e8", padding: "32px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 12, color: "#8a8a8a" }}>© 2026 Richard Bentil</p>
          <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 12, color: "#8a8a8a" }}>Built as a system — designed, shipped, operated.</p>
        </div>
      </footer>
    </>
  );
}
