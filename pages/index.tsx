import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import works from "@/data/works";
import { GoDotFill } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const MONO = "'Roboto Mono', monospace";
const SANS = "'Inter', system-ui, -apple-system, sans-serif";
const BLACK = "#0a0a0a";
const GRAY = "#525252";
const GRAY_LIGHT = "#8a8a8a";
const BORDER = "#e8e8e8";
const BORDER_MED = "#dcdcdc";
const GREEN = "#22c55e";
const GREEN_TEXT = "#1f9d55";
const CONNECTOR = "#b5b5b5";

const HOME_SLUGS = ["digopay", "payroll", "auth", "notifications", "storage", "caching", "multitenancy"];
const homeWorks = HOME_SLUGS.map((slug) => works.find((w) => w.slug === slug)!);

const essays = [
  { num: "01", readTime: "8 min", title: "Designing systems before writing code", desc: "The questions I answer before the first commit: boundaries, data ownership, failure modes." },
  { num: "02", readTime: "11 min", title: "Modular monolith vs. microservices", desc: "Why I default to a well-bounded monolith, and the signals that justify splitting it." },
  { num: "03", readTime: "9 min", title: "Reliability in backend systems", desc: "Idempotency, retries, and reconciliation — the patterns that keep payment systems honest." },
];

const proofItems = [
  { label: "AI Design", title: "Screens designed with AI workflows", sub: "Figma → v0 → production-ready UI" },
  { label: "System Design", title: "Distributed systems from scratch", sub: "APIs · event queues · consistency" },
  { label: "Payments", title: "Founded SkillsPad", sub: "Paystack billing · 1,200+ customers" },
];

const snapshots = [
  { label: "Payment flow", nodes: [{ l: "Client", s: "merchant" }, "→", { l: "API", s: "idempotent" }, "→", { l: "Ledger", s: "Postgres" }, "→", { l: "PSP", s: "card/momo" }] },
  { label: "Payroll pipeline", nodes: [{ l: "Records", s: "employee" }, "→", { l: "Run engine", s: "deduct" }, "→", { l: "Audit", s: "immutable" }, "→", { l: "Payslips", s: "PDF" }] },
];

const contacts = [
  { label: "Email", val: "richardebo.bentil@gmail.com", href: "mailto:richardebo.bentil@gmail.com", Icon: MdOutlineEmail },
  { label: "GitHub", val: "github.com/richardbentil", href: "https://github.com/richardbentil", Icon: FaGithub },
  { label: "LinkedIn", val: "in/richard-bentil", href: "https://linkedin.com/in/richard-bentil", Icon: FaLinkedin },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Richard Bentil — Software Engineer</title>
        <meta name="description" content="Software Engineer building production systems that move money, run payroll, and hold up under real load." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: ${SANS}; background: #fff; color: ${BLACK}; }
        a { color: inherit; text-decoration: none; }
        .wrap { max-width: 1440px; margin: 0 auto; padding: 0 180px; }
        .menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 4px; line-height: 1; }
        .nav-offcanvas { position: fixed; top: 0; right: 0; width: 280px; height: 100vh; background: #fff; z-index: 1055; transform: translateX(100%); transition: transform 0.25s ease; box-shadow: -4px 0 24px rgba(0,0,0,0.08); display: flex; flex-direction: column; padding: 28px 24px; }
        .nav-offcanvas.open { transform: translateX(0); }
        .nav-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.25); z-index: 1050; opacity: 0; pointer-events: none; transition: opacity 0.25s ease; }
        .nav-backdrop.open { opacity: 1; pointer-events: auto; }
        @keyframes wave-drift {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-28px); }
        }
        @media (max-width: 1280px) { .wrap { padding: 0 80px; } }
        @media (max-width: 900px) {
          .wrap { padding: 0 32px; }
          .nav-links { display: none !important; }
          .nav-contact { display: none !important; }
          .menu-btn { display: flex; align-items: center; }
          .hero-row { flex-direction: column !important; gap: 28px !important; }
          .hero-portrait { width: 100% !important; height: 240px !important; max-width: 100% !important; flex-shrink: 1 !important; }
          .proof-bar { flex-wrap: wrap !important; gap: 16px !important; }
          .proof-sep { display: none !important; }
          .main-sec { padding-top: 52px !important; padding-bottom: 52px !important; }
          .mob-card { padding: 20px !important; }
        }
        @media (max-width: 700px) {
          .hero-h1 { font-size: 36px !important; line-height: 1.2 !important; }
          .hero-tagline { display: none !important; }
          .hero-desc { font-size: 17px !important; }
          .hero-inner-pad { padding-top: 52px !important; padding-bottom: 44px !important; }
          .thinking-flow { height: auto !important; display: flex !important; flex-direction: column !important; gap: 16px !important; }
          .thinking-card { position: static !important; width: 100% !important; }
          .thinking-conn { display: none !important; }
          .sec-meta { display: none !important; }
          .section-h2 { font-size: 22px !important; }
        }
        @media (max-width: 480px) {
          .wrap { padding: 0 16px; }
          .hero-h1 { font-size: 28px !important; }
          .hero-portrait { height: 180px !important; }
          .main-sec { padding-top: 36px !important; padding-bottom: 36px !important; }
          .mob-card { padding: 16px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: `1px solid ${BORDER}`, background: "#fff" }}>
        <div className="wrap d-flex align-items-center justify-content-between" style={{ paddingTop: 18, paddingBottom: 18 }}>
          <Link href="/" className="d-flex align-items-center gap-2" style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: BLACK, letterSpacing: "-0.01em" }}>
            <GoDotFill style={{ color: GREEN, fontSize: 10, flexShrink: 0 }} />
            Richard Bentil
          </Link>
          <div className="d-flex gap-4 nav-links" style={{ fontFamily: SANS, fontSize: 14, color: GRAY }}>
            <a href="#work">Work</a>
            <Link href="/experience">Experience</Link>
            <a href="#writing">Writing</a>
            <Link href="/about">About</Link>
          </div>
          <a href="#contact" className="nav-contact" style={{ border: `1px solid ${BORDER_MED}`, color: BLACK, padding: "7px 14px", borderRadius: 7, fontFamily: SANS, fontSize: 14, fontWeight: 500 }}>
            Contact
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <HiMenu style={{ fontSize: 24, color: BLACK }} />
          </button>
        </div>
      </nav>

      {/* OFFCANVAS */}
      <div className={`nav-backdrop${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
      <div className={`nav-offcanvas${menuOpen ? " open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <Link href="/" className="d-flex align-items-center gap-2" onClick={() => setMenuOpen(false)} style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: BLACK, letterSpacing: "-0.01em" }}>
            <GoDotFill style={{ color: GREEN, fontSize: 10 }} />
            Richard Bentil
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={{ background: "none", border: "none", cursor: "pointer", padding: 4, lineHeight: 1 }}>
            <HiX style={{ fontSize: 22, color: BLACK }} />
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {[
            { label: "Work", href: "#work" },
            { label: "Experience", href: "/experience" },
            { label: "Writing", href: "#writing" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) =>
            href.startsWith("/") ? (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{ fontFamily: SANS, fontSize: 16, color: BLACK, fontWeight: 500 }}>{label}</Link>
            ) : (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{ fontFamily: SANS, fontSize: 16, color: BLACK, fontWeight: 500 }}>{label}</a>
            )
          )}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 32 }}>
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", border: `1px solid ${BORDER_MED}`, color: BLACK, padding: "10px 14px", borderRadius: 7, fontFamily: SANS, fontSize: 14, fontWeight: 500, textAlign: "center" }}>
            Contact
          </a>
        </div>
      </div>

      {/* HERO */}
      <section style={{ background: "#fff", borderBottom: `1px solid ${BORDER}`, position: "relative", overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, width: "100%", height: "55%", pointerEvents: "none", opacity: 0.35 }} preserveAspectRatio="none" viewBox="0 0 1440 1100">
          {[
            "M0 60  Q360 -10 720 60  Q1080 130 1440 60",
            "M0 260 Q360 190 720 260 Q1080 330 1440 260",
            "M0 460 Q360 390 720 460 Q1080 530 1440 460",
            "M0 660 Q360 590 720 660 Q1080 730 1440 660",
            "M0 860 Q360 790 720 860 Q1080 930 1440 860",
            "M0 1060 Q360 990 720 1060 Q1080 1130 1440 1060",
          ].map((d, i) => (
            <path key={i} d={d} fill="none" stroke="#d4d4d4" strokeWidth="1"
              style={{ animation: `wave-drift ${6 + i * 0.6}s ease-in-out infinite`, animationDelay: `${i * -1.4}s` }}
            />
          ))}
        </svg>

        <div className="wrap hero-inner-pad" style={{ position: "relative", paddingTop: 96, paddingBottom: 80 }}>
          {/* text + portrait */}
          <div className="d-flex align-items-start mb-5 hero-row" style={{ gap: 64 }}>
            <div className="flex-grow-1">
              <p className="mb-4" style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT, letterSpacing: "0.08em", textTransform: "uppercase", textShadow: "0 0 14px rgba(255,255,255,1), 0 0 28px rgba(255,255,255,0.8)" }}>
                SOFTWARE ENGINEER · ACCRA, GH · OPEN TO SENIOR ROLES
              </p>
              <h1 className="mb-4 hero-h1" style={{ fontFamily: SANS, fontSize: 56, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.4, color: BLACK, textShadow: "0 0 20px rgba(255,255,255,1), 0 0 48px rgba(255,255,255,0.9)" }}>
                Richard Bentil
              </h1>
              <p className="mb-4 hero-tagline" style={{ fontFamily: MONO, fontSize: 18, color: GRAY_LIGHT, textShadow: "0 0 16px rgba(255,255,255,1), 0 0 32px rgba(255,255,255,0.8)" }}>
                Software Engineer (Systems + Product Builder)
              </p>
              <p className="hero-desc" style={{ fontFamily: SANS, fontSize: 21, lineHeight: 1.5, color: GRAY, textShadow: "0 0 16px rgba(255,255,255,1), 0 0 32px rgba(255,255,255,0.8)" }}>
                I build production systems that move money, run payroll, and hold up under real load — full-stack, frontend-heavy, with a bias toward correctness and clear failure handling.
              </p>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center flex-shrink-0 hero-portrait" style={{ width: 420, height: 560, background: "#efefef", border: `1px solid ${BORDER}`, borderRadius: 12, gap: 18, overflow: "hidden" }}>
              <svg width="190" height="150" viewBox="0 0 190 150" fill="none">
                <circle cx="95" cy="42" r="34" fill="#c8c8c8" />
                <path d="M18 150 C18 104 172 104 172 150" fill="#c8c8c8" />
              </svg>
              <div className="d-flex flex-column align-items-center" style={{ gap: 4 }}>
                <p style={{ fontFamily: MONO, fontSize: 12, color: GRAY }}>Professional photo</p>
                <p style={{ fontFamily: MONO, fontSize: 10, color: GRAY_LIGHT }}>half-body · replace</p>
              </div>
            </div>
          </div>

          {/* Proof bar */}
          <div className="d-flex align-items-stretch proof-bar">
            {proofItems.map((item, i) => (
              <div key={item.label} className="d-flex align-items-stretch flex-grow-1">
                {i > 0 && <div className="proof-sep" style={{ width: 1, background: BORDER, flexShrink: 0, margin: "0 40px" }} />}
                <div className="d-flex flex-column flex-grow-1" style={{ gap: 8 }}>
                  <p style={{ fontFamily: MONO, fontSize: 11, color: GRAY_LIGHT, letterSpacing: "0.06em", textTransform: "uppercase" }}>{item.label}</p>
                  <p style={{ fontFamily: SANS, fontSize: 15, fontWeight: 500, color: BLACK, letterSpacing: "-0.01em" }}>{item.title}</p>
                  <p style={{ fontFamily: SANS, fontSize: 13, color: GRAY }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="main-sec" style={{ padding: "72px 0", borderBottom: `1px solid ${BORDER}` }}>
        <div className="wrap">
          <div className="d-flex justify-content-between align-items-start mb-5">
            <div className="d-flex flex-column" style={{ gap: 14 }}>
              <p style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT, letterSpacing: "0.08em", textTransform: "uppercase" }}>Selected work</p>
              <h2 className="section-h2" style={{ fontFamily: SANS, fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: BLACK }}>
                Systems shipped to production, not demos.
              </h2>
            </div>
            <p className="sec-meta" style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT }}>Seven systems · 2021—2026</p>
          </div>

          <div className="row g-4">
            {homeWorks.map((w) => (
              <div key={w.slug} className="col-12 col-md-6 d-flex">
                <Link href={`/case-study/${w.slug}`} className="d-flex flex-column w-100 mob-card" style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: 32, gap: 16, color: "inherit", textDecoration: "none" }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 style={{ fontFamily: SANS, fontSize: 18, fontWeight: 600, color: BLACK, letterSpacing: "-0.01em", margin: 0 }}>{w.title}</h3>
                    <div className="d-flex align-items-center gap-2 flex-shrink-0 ms-3">
                      <GoDotFill style={{ color: BLACK, fontSize: 8 }} />
                      <span style={{ fontFamily: MONO, fontSize: 11, color: GRAY, whiteSpace: "nowrap" }}>{w.tag}</span>
                    </div>
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: 15, color: BLACK, lineHeight: 1.5, margin: 0 }}>{w.description}</p>
                  <div className="d-flex flex-column" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, gap: 12 }}>
                    {([["FLOW", w.flow], ["FOCUS", w.focus]] as [string, string][]).map(([label, val]) => (
                      <div key={label} className="d-flex" style={{ gap: 16 }}>
                        <span style={{ fontFamily: MONO, fontSize: 11, color: GRAY_LIGHT, letterSpacing: "0.05em", textTransform: "uppercase", width: 58, flexShrink: 0, lineHeight: 1.4 }}>{label}</span>
                        <span style={{ fontFamily: MONO, fontSize: 12.5, color: GRAY, lineHeight: 1.55 }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING THINKING */}
      <section id="writing" className="main-sec" style={{ padding: "72px 0", borderBottom: `1px solid ${BORDER}` }}>
        <div className="wrap">
          <div className="d-flex justify-content-between align-items-start mb-5">
            <div className="d-flex flex-column" style={{ gap: 14 }}>
              <p style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT, letterSpacing: "0.08em", textTransform: "uppercase" }}>Engineering thinking</p>
              <h2 className="section-h2" style={{ fontFamily: SANS, fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: BLACK }}>How I reason about the systems I build.</h2>
            </div>
            <p className="sec-meta" style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT }}>Notes &amp; essays</p>
          </div>

          <div className="d-flex flex-column" style={{ background: "#fafafa", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "32px 32px 40px", gap: 24 }}>
            <div className="d-flex justify-content-between align-items-center" style={{ flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontFamily: MONO, fontSize: 11, color: GRAY_LIGHT, letterSpacing: "0.05em", textTransform: "uppercase" }}>REASONING PIPELINE</span>
              <span className="sec-meta" style={{ fontFamily: MONO, fontSize: 11, color: GRAY_LIGHT }}>flowchart · how I move from problem to shipped</span>
            </div>

            <div className="thinking-flow" style={{ position: "relative", height: 535 }}>
              {essays.map((e, i) => (
                <div key={i} className="d-flex flex-column thinking-card" style={{ position: "absolute", top: i * 197, left: 228, width: 560, background: "#fff", border: `1.5px solid ${BORDER_MED}`, borderRadius: 10, padding: "22px 26px", gap: 9, overflow: "hidden" }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <GoDotFill style={{ color: GREEN, fontSize: 8 }} />
                      <span style={{ fontFamily: MONO, fontSize: 12, color: GREEN_TEXT }}>{e.num}</span>
                    </div>
                    <span style={{ fontFamily: MONO, fontSize: 11, color: GRAY_LIGHT }}>{e.readTime}</span>
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: 17, fontWeight: 600, color: BLACK, letterSpacing: "-0.01em", lineHeight: 1.3, margin: 0 }}>{e.title}</p>
                  <p style={{ fontFamily: SANS, fontSize: 13.5, color: GRAY, lineHeight: 1.5, margin: 0 }}>{e.desc}</p>
                </div>
              ))}

              {[141, 338].map((top, i) => (
                <div key={i} className="thinking-conn">
                  <div style={{ position: "absolute", left: 507, top, width: 2, height: 46, background: CONNECTOR, borderRadius: 1 }} />
                  <div className="d-flex align-items-center justify-content-center" style={{ position: "absolute", left: 503, top: top + 46, width: 10 }}>
                    <BsChevronDown style={{ color: CONNECTOR, fontSize: 10 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM SNAPSHOTS */}
      <section className="main-sec" style={{ padding: "72px 0", borderBottom: `1px solid ${BORDER}` }}>
        <div className="wrap">
          <div className="d-flex justify-content-between align-items-start mb-5">
            <div className="d-flex flex-column" style={{ gap: 14 }}>
              <p style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT, letterSpacing: "0.08em", textTransform: "uppercase" }}>System snapshots</p>
              <h2 className="section-h2" style={{ fontFamily: SANS, fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: BLACK }}>The shape of what I build.</h2>
            </div>
            <p className="sec-meta" style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT }}>Architecture, abbreviated</p>
          </div>

          <div className="row g-4">
            {snapshots.map((snap, si) => (
              <div key={si} className="col-12 col-md-6 d-flex">
                <div className="d-flex flex-column w-100" style={{ background: "#fafafa", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "32px 28px", gap: 20 }}>
                  <p style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0 }}>{snap.label}</p>
                  <div className="d-flex flex-wrap align-items-center" style={{ gap: 8 }}>
                    {snap.nodes.map((n, ni) =>
                      n === "→" ? (
                        <span key={ni} style={{ fontFamily: MONO, fontSize: 13, color: GRAY_LIGHT }}>→</span>
                      ) : (
                        <div key={ni} className="d-flex flex-column align-items-center flex-shrink-0" style={{ background: "#fff", border: `1px solid ${BORDER_MED}`, borderRadius: 6, padding: "10px 12px", gap: 2 }}>
                          <p style={{ fontFamily: MONO, fontSize: 11, color: BLACK, margin: 0 }}>{(n as { l: string; s: string }).l}</p>
                          <p style={{ fontFamily: MONO, fontSize: 9, color: GRAY_LIGHT, margin: 0 }}>{(n as { l: string; s: string }).s}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="main-sec" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <div className="d-flex flex-column mb-5" style={{ gap: 24 }}>
            <p style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>Contact</p>
            <h2 className="section-h2" style={{ fontFamily: SANS, fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: BLACK, margin: 0 }}>Building something that needs to be correct?</h2>
          </div>
          <div className="row g-4">
            {contacts.map(({ label, val, href, Icon }, i) => (
              <div key={i} className="col-12 col-md-4 d-flex">
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="d-flex w-100">
                  <div className="d-flex flex-column w-100 mob-card" style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "24px 28px", gap: 12 }}>
                    <Icon style={{ color: GRAY_LIGHT, fontSize: 20 }} />
                    <div className="d-flex flex-column" style={{ gap: 4 }}>
                      <p style={{ fontFamily: MONO, fontSize: 11, color: GRAY_LIGHT, letterSpacing: "0.05em", textTransform: "uppercase", margin: 0 }}>{label}</p>
                      <p style={{ fontFamily: SANS, fontSize: 15, fontWeight: 500, color: BLACK, margin: 0 }}>{val}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "32px 0" }}>
        <div className="wrap d-flex justify-content-between align-items-center">
          <p style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT, margin: 0 }}>© 2026 Richard Bentil</p>
          <p style={{ fontFamily: MONO, fontSize: 12, color: GRAY_LIGHT, margin: 0 }}>Built as a system — designed, shipped, operated.</p>
        </div>
      </footer>
    </>
  );
}
