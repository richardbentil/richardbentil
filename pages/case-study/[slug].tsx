import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import works, { Work, PathNode } from "@/data/works";
import { GoDotFill } from "react-icons/go";

type Props = { study: Work };

function ArchRow({ nodes }: { nodes: PathNode[] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, rowGap: 8, flexWrap: "wrap" }}>
      {nodes.map((n, i) =>
        n === "→" ? (
          <span key={i} style={{ color: "#bbb", fontSize: 14 }}>→</span>
        ) : (
          <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: 4, padding: "8px 12px", textAlign: "center" }}>
            <p style={{ fontSize: 12, fontWeight: 600, margin: 0, color: "#111", whiteSpace: "nowrap" }}>
              {(n as { l: string; s?: string }).l}
            </p>
            {(n as { l: string; s?: string }).s && (
              <p style={{ fontSize: 11, color: "#aaa", margin: 0, whiteSpace: "nowrap" }}>
                {(n as { l: string; s?: string }).s}
              </p>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default function CaseStudyPage({ study }: Props) {
  return (
    <>
      <Head>
        <title>{study.title} — Case Study · Richard Bentil</title>
        <meta name="description" content={study.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style>{`
        .port-body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: #fff; color: #111; }
        .port-wrap { max-width: 1440px; margin: 0 auto; padding: 0 180px; }
        .lbl { font-size: 11px; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; color: #888; margin: 0; }
        a { color: inherit; text-decoration: none; }
        .sec-num { font-size: 14px; color: #aaa; font-weight: 500; margin-right: 12px; }
        .sec-h { font-size: 20px; font-weight: 700; letter-spacing: -0.01em; color: #111; margin: 0; }
        .divider { border: none; border-top: 1px solid #e5e5e5; margin: 20px 0; }
        .body-text { font-size: 14px; line-height: 1.75; color: #666; margin: 0; }

        .cs-body { display: flex; gap: 64px; align-items: flex-start; }
        .cs-sidebar { flex-shrink: 0; width: 248px; }
        .cs-main { flex: 1; min-width: 0; }
        .cs-h1 { font-size: 48px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        @media (max-width: 1280px) { .port-wrap { padding: 0 80px; } }
        @media (max-width: 860px) {
          .port-wrap { padding: 0 32px; }
          .cs-body { flex-direction: column; gap: 40px; }
          .cs-sidebar { width: 100%; }
          .grid-3 { grid-template-columns: 1fr 1fr; }
          .cs-header-row { flex-direction: column; gap: 16px; }
          .cs-header-sec { padding: 52px 0 !important; }
          .cs-body-sec { padding: 44px 0 60px !important; }
        }
        @media (max-width: 560px) {
          .cs-h1 { font-size: 26px; }
          .grid-3, .grid-2 { grid-template-columns: 1fr; }
          .sec-h { font-size: 16px; }
          .arch-row { flex-wrap: wrap; }
        }
        @media (max-width: 480px) {
          .port-wrap { padding: 0 16px; }
          .cs-header-sec { padding: 36px 0 !important; }
          .cs-body-sec { padding: 32px 0 48px !important; }
        }
      `}</style>

      <div className="port-body">

        {/* NAV */}
        <nav style={{ borderBottom: "1px solid #e5e5e5", height: 58, display: "flex", alignItems: "center" }}>
          <div className="port-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 500, color: "#111" }}>
              <GoDotFill style={{ color: "#22c55e", fontSize: 10 }} />
              Richard Bentil
            </Link>
            <Link href="/" style={{ fontSize: 14, color: "#888", display: "flex", alignItems: "center", gap: 4 }}>
              ← Back to work
            </Link>
          </div>
        </nav>

        {/* HEADER */}
        <section className="cs-header-sec" style={{ padding: "80px 0 72px", borderBottom: "1px solid #e5e5e5" }}>
          <div className="port-wrap">
            <p className="lbl" style={{ marginBottom: 24 }}>
              Case Study · {study.tag} · {study.timeline}
            </p>
            <h1 className="cs-h1" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 820, marginBottom: 28, color: "#111" }}>
              {study.headline}
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#666", maxWidth: 700, margin: 0 }}>
              {study.description}
            </p>
          </div>
        </section>

        {/* BODY */}
        <section className="cs-body-sec" style={{ padding: "64px 0 80px" }}>
          <div className="port-wrap cs-body">

            {/* SPEC SIDEBAR */}
            <div className="cs-sidebar">
              <div style={{ border: "1px solid #e5e5e5", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e5e5" }}>
                  <p className="lbl">Spec Sheet</p>
                </div>
                {study.spec.map((item, i) => (
                  <div key={i} style={{ padding: "14px 20px", borderBottom: "1px solid #e5e5e5" }}>
                    <p style={{ fontSize: 11, color: "#aaa", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }}>
                      {item.key}
                    </p>
                    {item.dot ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <GoDotFill style={{ color: "#22c55e", fontSize: 9 }} />
                        <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{item.val}</span>
                      </div>
                    ) : (
                      <p style={{ fontSize: 14, fontWeight: 500, color: "#111", margin: 0 }}>{item.val}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* MAIN */}
            <div className="cs-main">

              {/* 01 Problem */}
              <div style={{ marginBottom: 56 }}>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="sec-num">01</span>
                  <h2 className="sec-h">Problem</h2>
                </div>
                <hr className="divider" />
                <p className="body-text">{study.problem}</p>
              </div>

              {/* 02 Context */}
              <div style={{ marginBottom: 56 }}>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="sec-num">02</span>
                  <h2 className="sec-h">Context &amp; constraints</h2>
                </div>
                <hr className="divider" />
                <p className="body-text" style={{ marginBottom: 24 }}>{study.context}</p>
                <div style={{ border: "1px solid #e5e5e5", borderRadius: 4, overflow: "hidden" }}>
                  {study.constraints.map((c, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", gap: 24, padding: "12px 24px", borderBottom: i < study.constraints.length - 1 ? "1px solid #e5e5e5" : "none", alignItems: "center" }}
                    >
                      <span style={{ fontSize: 13, fontWeight: 600, minWidth: 150, color: "#111" }}>{c.key}</span>
                      <span style={{ fontSize: 13, color: "#888" }}>{c.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 Architecture */}
              <div style={{ marginBottom: 56 }}>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="sec-num">03</span>
                  <h2 className="sec-h">Architecture</h2>
                </div>
                <hr className="divider" />
                <div style={{ border: "1px solid #e5e5e5", borderRadius: 4, padding: "28px 28px 32px" }}>
                  <p className="lbl" style={{ marginBottom: 20 }}>Request path</p>
                  <div style={{ marginBottom: 36 }}>
                    <ArchRow nodes={study.requestPath} />
                  </div>
                  <p className="lbl" style={{ marginBottom: 20 }}>Failure recovery &amp; consistency</p>
                  <ArchRow nodes={study.recoveryPath} />
                </div>
              </div>

              {/* 04 Implementation */}
              <div style={{ marginBottom: 56 }}>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="sec-num">04</span>
                  <h2 className="sec-h">Implementation</h2>
                </div>
                <hr className="divider" />
                <div className="grid-3">
                  {study.implementations.map((col, i) => (
                    <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: 4, padding: "20px 22px" }}>
                      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".06em", color: "#aaa", textTransform: "uppercase", marginBottom: 16 }}>
                        {col.label}
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {col.items.map((item, j) => (
                          <li key={j} style={{ fontSize: 13, lineHeight: 1.65, color: "#444", marginBottom: 10, display: "flex", gap: 8 }}>
                            <span style={{ color: "#ccc", flexShrink: 0 }}>·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 Key decisions */}
              <div style={{ marginBottom: 56 }}>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="sec-num">05</span>
                  <h2 className="sec-h">Key decisions</h2>
                </div>
                <hr className="divider" />
                <div style={{ border: "1px solid #e5e5e5", borderRadius: 4, overflow: "hidden" }}>
                  {study.keyDecisions.map((d, i) => (
                    <div key={i} style={{ padding: "24px 28px", borderBottom: i < study.keyDecisions.length - 1 ? "1px solid #e5e5e5" : "none" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                        <span style={{ fontSize: 13, color: "#aaa", fontWeight: 500 }}>{d.num}</span>
                        <h4 style={{ fontSize: 15, fontWeight: 600, color: "#111", margin: 0 }}>{d.title}</h4>
                      </div>
                      <p style={{ fontSize: 14, color: "#888", lineHeight: 1.65, margin: 0, paddingLeft: 26 }}>{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 Tradeoffs */}
              <div style={{ marginBottom: 56 }}>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="sec-num">06</span>
                  <h2 className="sec-h">Tradeoffs</h2>
                </div>
                <hr className="divider" />
                <div className="grid-2">
                  <div style={{ border: "1px solid #e5e5e5", borderRadius: 4, padding: "20px 22px" }}>
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".06em", color: "#aaa", textTransform: "uppercase", marginBottom: 16 }}>Chose</p>
                    {study.tradeoffs.chose.map((s, i) => (
                      <p key={i} style={{ fontSize: 14, color: "#444", marginBottom: 10, display: "flex", gap: 8 }}>
                        <span style={{ color: "#ccc" }}>·</span>{s}
                      </p>
                    ))}
                  </div>
                  <div style={{ border: "1px solid #e5e5e5", borderRadius: 4, padding: "20px 22px" }}>
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".06em", color: "#aaa", textTransform: "uppercase", marginBottom: 16 }}>Gave up</p>
                    {study.tradeoffs.gaveUp.map((s, i) => (
                      <p key={i} style={{ fontSize: 14, color: "#444", marginBottom: 10, display: "flex", gap: 8 }}>
                        <span style={{ color: "#ccc" }}>·</span>{s}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* 07 Outcome */}
              <div>
                <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="sec-num">07</span>
                  <h2 className="sec-h">Outcome</h2>
                </div>
                <hr className="divider" />
                <div className="grid-3">
                  {study.outcomes.map((o, i) => (
                    <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: 4, padding: "24px" }}>
                      <p style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.03em", color: "#111", marginBottom: 12 }}>{o.stat}</p>
                      <p style={{ fontSize: 14, color: "#888", lineHeight: 1.5, margin: 0 }}>{o.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid #e5e5e5", padding: "32px 0" }}>
          <div className="port-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, color: "#aaa", margin: 0 }}>© 2026 Richard Bentil</p>
            <p style={{ fontSize: 13, color: "#aaa", margin: 0 }}>Built as a system — designed, shipped, operated.</p>
          </div>
        </footer>

      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = works.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const study = works.find((s) => s.slug === params?.slug);
  if (!study) return { notFound: true };
  return { props: { study } };
};
