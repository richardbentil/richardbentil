export type PathNode = { l: string; s?: string } | "→";

export type Work = {
  // ── card summary (used on the home grid) ──
  slug: string;
  title: string;
  tag: string;
  description: string;
  flow: string;
  focus: string;

  // ── case study detail (used on /case-study/[slug]) ──
  headline: string;
  timeline: string;
  spec: { key: string; val: string; dot?: boolean }[];
  problem: string;
  context: string;
  constraints: { key: string; val: string }[];
  requestPath: PathNode[];
  recoveryPath: PathNode[];
  implementations: { label: string; items: string[] }[];
  keyDecisions: { num: string; title: string; desc: string }[];
  tradeoffs: { chose: string[]; gaveUp: string[] };
  outcomes: { stat: string; desc: string }[];
};

const works: Work[] = [
  {
    slug: "digopay",
    title: "Payment Flow Architecture",
    tag: "Payments",
    description:
      "End-to-end payment pipeline that stays correct under failure — safe retries, recovery points, and a consistent ledger.",
    flow: "Client · API gateway · Validation · Processor · Webhook · Ledger",
    focus: "Idempotency · failure recovery · transaction consistency",
    headline: "Digopay — reliable card & mobile-money collection",
    timeline: "2023 — Present",
    spec: [
      { key: "Role", val: "Full-stack engineer (lead)" },
      { key: "Timeline", val: "2023 — present" },
      { key: "Status", val: "In production", dot: true },
      { key: "Surface", val: "Merchant dashboard + API" },
      { key: "Stack", val: "Next.js · Node.js" },
      { key: "Data", val: "PostgreSQL · Redis" },
    ],
    problem:
      "Merchants needed to accept both card and mobile-money payments through one integration. The hard part was not the happy path — it was failure. A request could time out after the customer was charged, webhooks could arrive late or out of order, and a naive retry could double-charge. Merchants were losing trust and spending hours manually reconciling.",
    context:
      "Built for the Ghanaian market, where mobile money is the dominant rail and connectivity is uneven. The system had to treat the payment processor as unreliable and the network as hostile, while still feeling instant to the merchant.",
    constraints: [
      { key: "Idempotency", val: "every charge must be safe to retry" },
      { key: "Eventual settlement", val: "PSPs confirm late and out of order" },
      { key: "Auditability", val: "every state change must be explainable" },
    ],
    requestPath: [
      { l: "Client" }, "→",
      { l: "API gateway", s: "backend" }, "→",
      { l: "Validation", s: "layer" }, "→",
      { l: "Processor", s: "card / momo" }, "→",
      { l: "Webhook", s: "handler" }, "→",
      { l: "Ledger", s: "DB update" },
    ],
    recoveryPath: [
      { l: "Webhook", s: "retry" }, "→",
      { l: "Idempotency", s: "dedupe key" }, "→",
      { l: "Recovery", s: "point" }, "→",
      { l: "Ledger", s: "consistent" },
    ],
    implementations: [
      {
        label: "Frontend",
        items: [
          "Merchant dashboard in Next.js (server components)",
          "Payment states: optimistic → reconciled",
          "Client-side idempotency keys + validation",
        ],
      },
      {
        label: "Backend",
        items: [
          "Idempotent charge endpoint with dedupe keys",
          "Webhook ingestion + signature verification",
          "Reconciliation worker converges PSP state",
        ],
      },
      {
        label: "APIs",
        items: [
          "POST /charges (idempotent)",
          "POST /webhooks/psp",
          "GET /transactions/:id",
          "Card + mobile-money adapters",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "Idempotency keys on every charge",
        desc: "Network retries must never double-charge. The key makes a charge safe to repeat; the ledger stays the single source of truth.",
      },
      {
        num: "02",
        title: "Asynchronous reconciliation worker",
        desc: "Processors settle late and out of order. Combining webhooks with a polling worker lets state converge safely instead of trusting one signal.",
      },
      {
        num: "03",
        title: "Append-only ledger",
        desc: "Auditability and dispute resolution matter more than write convenience. Nothing is mutated in place — every transition is a new, explainable record.",
      },
    ],
    tradeoffs: {
      chose: [
        "A well-bounded modular monolith",
        "Strong consistency on the ledger",
        "Boring, observable technology",
      ],
      gaveUp: [
        "Independent service scaling (not needed yet)",
        "Some raw write throughput, for correctness",
        "Newer, less proven tooling",
      ],
    },
    outcomes: [
      { stat: "~0", desc: "double-charges after idempotency rollout" },
      { stat: "days → min", desc: "reconciliation time per cycle" },
      { stat: "100%", desc: "transactions traceable in the ledger" },
    ],
  },

  {
    slug: "myghqr",
    title: "MyGhQr — QR Payments",
    tag: "Payments · QR",
    description:
      "QR-based payments built on the GhQR spec — generate, scan, and settle across banks and wallets.",
    flow: "Merchant · QR gen · Customer scans · Bank/wallet · Webhook · Ledger",
    focus: "Spec compliance · interoperability · settlement state tracking",
    headline: "MyGhQr — QR-based payments on the GhQR spec",
    timeline: "2022 — 2023",
    spec: [
      { key: "Role", val: "Full-stack engineer" },
      { key: "Timeline", val: "2022 — 2023" },
      { key: "Status", val: "In production", dot: true },
      { key: "Surface", val: "Mobile app + merchant dashboard" },
      { key: "Stack", val: "Next.js · Node.js" },
      { key: "Data", val: "PostgreSQL · GhQR API" },
    ],
    problem:
      "Merchants and customers needed a standard, interoperable way to pay across banks and mobile wallets without card terminals. QR codes are the universal interface, but generating spec-compliant codes and tracking their settlement state reliably required careful state management on both the merchant and customer side.",
    context:
      "Built to Ghana's GhQR national standard, which mandates specific payload encoding and settlement flows. Every code generated had to be scannable by any GhQR-compliant app while the backend tracked its state from generated → scanned → settled.",
    constraints: [
      { key: "Spec compliance", val: "GhQR payload format is non-negotiable" },
      { key: "Interoperability", val: "codes must work across all GhQR apps" },
      { key: "State visibility", val: "merchant needs real-time settlement status" },
    ],
    requestPath: [
      { l: "Merchant", s: "dashboard" }, "→",
      { l: "QR gen", s: "GhQR spec" }, "→",
      { l: "Customer", s: "scans" }, "→",
      { l: "Bank / wallet", s: "settles" }, "→",
      { l: "Webhook", s: "inbound" }, "→",
      { l: "Ledger", s: "DB update" },
    ],
    recoveryPath: [
      { l: "Webhook", s: "miss" }, "→",
      { l: "Poll", s: "GhQR API" }, "→",
      { l: "Reconcile", s: "state" }, "→",
      { l: "Notify", s: "merchant" },
    ],
    implementations: [
      {
        label: "Frontend",
        items: [
          "QR code generator with GhQR payload builder",
          "Real-time payment status polling",
          "Merchant dashboard: history + analytics",
        ],
      },
      {
        label: "Backend",
        items: [
          "GhQR spec-compliant payload generation",
          "Webhook receiver for settlement events",
          "Polling fallback for missed webhooks",
        ],
      },
      {
        label: "APIs",
        items: [
          "POST /qr/generate",
          "GET /qr/:id/status",
          "POST /webhooks/ghqr",
          "GET /transactions (paginated)",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "Polling fallback alongside webhooks",
        desc: "GhQR webhooks are not guaranteed. A background poller reconciles any QR codes still in pending state after a threshold, ensuring no payment silently fails.",
      },
      {
        num: "02",
        title: "Immutable QR payload after generation",
        desc: "Once a QR code is generated it cannot change — the spec does not support amendments. The system tracks all state transitions as new records against the original code.",
      },
      {
        num: "03",
        title: "Merchant-visible status timeline",
        desc: "Every state (generated, scanned, processing, settled, failed) is surfaced to the merchant with timestamps, removing the guesswork of whether a payment is in flight.",
      },
    ],
    tradeoffs: {
      chose: [
        "Full spec compliance over convenience shortcuts",
        "Polling + webhooks for settlement reliability",
        "Merchant-first status transparency",
      ],
      gaveUp: [
        "Faster code generation (spec encoding has overhead)",
        "Simpler state model (spec requires all states)",
        "Reliance on a single settlement signal",
      ],
    },
    outcomes: [
      { stat: "100%", desc: "GhQR spec compliance, scannable across all apps" },
      { stat: "<2s", desc: "average time from scan to merchant notification" },
      { stat: "~0", desc: "unreconciled payments after polling fallback" },
    ],
  },

  {
    slug: "payroll",
    title: "HR Payroll Workflow",
    tag: "Operations",
    description:
      "Scheduled payroll lifecycle from employee data to payout, with an auditable history of every run.",
    flow: "Employee data · Payroll engine · Salary rules · Approval · Payout · Notify",
    focus: "Cron / job queue · audit trail · data integrity",
    headline: "Payroll & HR — auditable runs, every time",
    timeline: "2022 — 2024",
    spec: [
      { key: "Role", val: "Full-stack engineer" },
      { key: "Timeline", val: "2022 — 2024" },
      { key: "Status", val: "In production", dot: true },
      { key: "Surface", val: "HR dashboard + admin panel" },
      { key: "Stack", val: "Next.js · Node.js" },
      { key: "Data", val: "MongoDB · Job queue" },
    ],
    problem:
      "HR teams were running payroll from spreadsheets — prone to manual errors, with no audit trail and no way to reproduce a past run. A miscalculation meant an employee underpaid, often discovered only weeks later. The cost was not just financial but trust.",
    context:
      "A multi-company HR platform used across organizations with different salary structures, allowances, and deduction rules. Each payroll run had to be fully deterministic — the same inputs must always produce the same output — and every step had to be reversible and explainable.",
    constraints: [
      { key: "Determinism", val: "same inputs always produce the same output" },
      { key: "Audit trail", val: "every state change is logged and attributed" },
      { key: "Multi-tenancy", val: "each company's data and rules are isolated" },
    ],
    requestPath: [
      { l: "HR admin", s: "trigger run" }, "→",
      { l: "Validation", s: "employee data" }, "→",
      { l: "Rules engine", s: "salary calc" }, "→",
      { l: "Approval", s: "sign-off" }, "→",
      { l: "Payout", s: "bank transfer" }, "→",
      { l: "Audit log", s: "immutable" },
    ],
    recoveryPath: [
      { l: "Failed run", s: "detected" }, "→",
      { l: "Rollback", s: "to draft" }, "→",
      { l: "Fix input", s: "HR corrects" }, "→",
      { l: "Re-run", s: "idempotent" },
    ],
    implementations: [
      {
        label: "Frontend",
        items: [
          "Payroll wizard: draft → review → approve → pay",
          "Employee records with salary history",
          "Per-run audit viewer with change diff",
        ],
      },
      {
        label: "Backend",
        items: [
          "Rule engine: gross → deductions → net per employee",
          "Job queue for async payout processing",
          "Immutable audit log on every state change",
        ],
      },
      {
        label: "Data",
        items: [
          "Employee schema with versioned salary records",
          "Payroll run document: snapshot at time of run",
          "Audit entries append-only, never updated",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "Snapshot employee state at run time",
        desc: "Payroll calculations must be reproducible. Snapshotting the employee record at the moment of each run means historical runs stay correct even after employee data changes.",
      },
      {
        num: "02",
        title: "Approval step before payout",
        desc: "A mandatory sign-off before any bank transfer is initiated ensures a human reviews the run summary. Mistakes caught here are free; mistakes caught after payout are expensive.",
      },
      {
        num: "03",
        title: "Append-only audit log",
        desc: "Every status transition — draft, under review, approved, paid — creates a new audit record attributed to the actor. Retroactive edits are blocked; corrections create a new version.",
      },
    ],
    tradeoffs: {
      chose: [
        "Snapshot-based run records for reproducibility",
        "Async job queue for payout resilience",
        "Strict approval gate before disbursement",
      ],
      gaveUp: [
        "Simpler live-query payroll (would lose history)",
        "Synchronous payouts (would block on bank latency)",
        "One-click pay without approval (too risky)",
      ],
    },
    outcomes: [
      { stat: "0", desc: "payroll runs lost or unrecoverable after errors" },
      { stat: "100%", desc: "runs reproducible from stored snapshot + rules" },
      { stat: "hours → min", desc: "from run trigger to approval-ready" },
    ],
  },

  {
    slug: "data-collection",
    title: "Data Collection Platform",
    tag: "Product",
    description:
      "Offline-first data collection that captures reliably in the field and syncs when connectivity returns.",
    flow: "Field agent · IndexedDB · Sync queue · API · Server DB",
    focus: "Offline-first · background sync · conflict resolution",
    headline: "Data Collection — offline-first forms that sync",
    timeline: "2021 — 2022",
    spec: [
      { key: "Role", val: "Frontend engineer" },
      { key: "Timeline", val: "2021 — 2022" },
      { key: "Status", val: "Deployed", dot: true },
      { key: "Surface", val: "Field agent web app" },
      { key: "Stack", val: "React · Service Worker" },
      { key: "Data", val: "IndexedDB · REST sync" },
    ],
    problem:
      "Field agents collecting data in areas with unreliable connectivity would lose entire form submissions when the network dropped mid-submit. The result was incomplete datasets, frustrated agents who had to re-collect, and coordinators working with data full of gaps.",
    context:
      "Deployed in field conditions where connectivity was unpredictable — sometimes 2G, sometimes none. The app had to work as well offline as online, queue submissions, and resolve conflicts when the same record was updated from multiple devices.",
    constraints: [
      { key: "Offline-first", val: "forms must work with zero connectivity" },
      { key: "Sync on reconnect", val: "local changes push automatically when online" },
      { key: "Conflict resolution", val: "server-wins, with local history kept" },
    ],
    requestPath: [
      { l: "Field agent", s: "fills form" }, "→",
      { l: "IndexedDB", s: "local store" }, "→",
      { l: "Sync queue", s: "on reconnect" }, "→",
      { l: "API", s: "upload" }, "→",
      { l: "Server DB", s: "persisted" }, "→",
      { l: "Confirm", s: "agent notified" },
    ],
    recoveryPath: [
      { l: "Conflict", s: "detected" }, "→",
      { l: "Server wins", s: "strategy" }, "→",
      { l: "Local copy", s: "archived" }, "→",
      { l: "Agent sees", s: "diff" },
    ],
    implementations: [
      {
        label: "Frontend",
        items: [
          "Form builder with conditional field logic",
          "IndexedDB persistence — survives reload",
          "Sync indicator: pending / syncing / done",
        ],
      },
      {
        label: "Sync layer",
        items: [
          "Service Worker intercepts POSTs offline",
          "Background sync via SyncManager API",
          "Retry with exponential backoff on failure",
        ],
      },
      {
        label: "Backend",
        items: [
          "Idempotent submission endpoint (dedupes re-sends)",
          "Conflict detection: updated_at comparison",
          "Sync log per device for coordinator visibility",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "IndexedDB as the primary data store",
        desc: "All form data is written locally first — the network is never on the critical path of saving a response. The agent can close the tab and reopen it; data persists.",
      },
      {
        num: "02",
        title: "Background sync over manual upload",
        desc: "Agents should not have to think about syncing. The Service Worker watches for connectivity and automatically drains the queue, so the agent's only job is filling forms.",
      },
      {
        num: "03",
        title: "Idempotent submission endpoint",
        desc: "Retries are inevitable when sync queues replay submissions. Idempotent endpoints ensure a re-sent form creates one record, not duplicates, regardless of how many times it arrives.",
      },
    ],
    tradeoffs: {
      chose: [
        "IndexedDB + Service Worker for true offline support",
        "Server-wins conflict resolution for simplicity",
        "Background sync over agent-triggered upload",
      ],
      gaveUp: [
        "Rich offline conflict UX (deferred to v2)",
        "Real-time server-side validation (only on sync)",
        "Smaller JS bundle (SW + IndexedDB overhead)",
      ],
    },
    outcomes: [
      { stat: "0", desc: "form submissions lost to connectivity drops" },
      { stat: "100%", desc: "submissions auto-synced within 30s of reconnect" },
      { stat: "↓80%", desc: "re-collection requests from coordinators" },
    ],
  },

  {
    slug: "auth",
    title: "Authentication + JWT",
    tag: "Auth",
    description:
      "Secure auth flow with short-lived access tokens, refresh rotation, and middleware-guarded routes.",
    flow: "Login · Auth service · JWT · Refresh · Middleware · Protected routes",
    focus: "Token expiry · secure storage · middleware route guard",
    headline: "Authentication — short-lived tokens, safe rotation",
    timeline: "2022 — 2023",
    spec: [
      { key: "Role", val: "Full-stack engineer" },
      { key: "Timeline", val: "2022 — 2023" },
      { key: "Status", val: "In production", dot: true },
      { key: "Surface", val: "Auth service + middleware" },
      { key: "Stack", val: "Next.js · Node.js" },
      { key: "Data", val: "Redis · JWT" },
    ],
    problem:
      "The product needed authentication that was secure by default — resistant to token theft and replay — without forcing users to log in constantly. Long-lived tokens are convenient but dangerous; a single leaked token grants indefinite access. The challenge was balancing security with a smooth session experience.",
    context:
      "A multi-tenant SaaS with both browser and API clients. Tokens had to be verifiable statelessly at the edge for performance, yet revocable when a session was compromised — two goals that pull in opposite directions.",
    constraints: [
      { key: "Short-lived access", val: "access tokens expire in minutes, not days" },
      { key: "Refresh rotation", val: "each refresh issues a new token, old one revoked" },
      { key: "Revocability", val: "a stolen session can be killed immediately" },
    ],
    requestPath: [
      { l: "Login", s: "credentials" }, "→",
      { l: "Auth service", s: "verify" }, "→",
      { l: "JWT", s: "access + refresh" }, "→",
      { l: "Middleware", s: "validate" }, "→",
      { l: "Protected route", s: "granted" },
    ],
    recoveryPath: [
      { l: "Access expired", s: "401" }, "→",
      { l: "Refresh", s: "rotate token" }, "→",
      { l: "Reuse detected", s: "revoke all" }, "→",
      { l: "Re-login", s: "forced" },
    ],
    implementations: [
      {
        label: "Frontend",
        items: [
          "Silent refresh before access token expiry",
          "Tokens in httpOnly cookies, not localStorage",
          "Auto-redirect to login on hard 401",
        ],
      },
      {
        label: "Backend",
        items: [
          "Stateless JWT verification (signature + exp)",
          "Refresh token rotation with reuse detection",
          "Redis denylist for revoked sessions",
        ],
      },
      {
        label: "APIs",
        items: [
          "POST /auth/login",
          "POST /auth/refresh (rotating)",
          "POST /auth/logout (revokes session)",
          "Middleware guard on protected routes",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "Short-lived access + rotating refresh",
        desc: "Access tokens live for minutes so a leak has a tiny window. Refresh tokens rotate on every use, so a stolen refresh token is detectable when the original is replayed.",
      },
      {
        num: "02",
        title: "Refresh-token reuse detection",
        desc: "If a rotated (already-used) refresh token is presented, the whole session family is revoked. This turns a token theft into a self-defeating attack rather than silent persistence.",
      },
      {
        num: "03",
        title: "httpOnly cookies over localStorage",
        desc: "Storing tokens in httpOnly cookies keeps them out of reach of XSS-injected JavaScript, trading a little client convenience for a meaningfully smaller attack surface.",
      },
    ],
    tradeoffs: {
      chose: [
        "Stateless JWT verification at the edge",
        "Rotation + denylist for revocability",
        "httpOnly cookies for token storage",
      ],
      gaveUp: [
        "Fully stateless logout (needs the Redis denylist)",
        "Simpler client code (silent refresh adds logic)",
        "Long sessions without re-auth on sensitive actions",
      ],
    },
    outcomes: [
      { stat: "minutes", desc: "max exposure window for a leaked access token" },
      { stat: "100%", desc: "compromised sessions revocable in real time" },
      { stat: "0", desc: "tokens reachable by injected client-side scripts" },
    ],
  },

  {
    slug: "notifications",
    title: "Notification System",
    tag: "Messaging",
    description:
      "Event-driven delivery that fans out to SMS and email asynchronously, with retries on failure.",
    flow: "Event · Queue · Worker · SMS (Arkesel) / Email (Nodemailer)",
    focus: "Async processing · retry with backoff · failure handling",
    headline: "Notifications — async fan-out that doesn't drop messages",
    timeline: "2022 — 2023",
    spec: [
      { key: "Role", val: "Full-stack engineer" },
      { key: "Timeline", val: "2022 — 2023" },
      { key: "Status", val: "In production", dot: true },
      { key: "Surface", val: "Internal service" },
      { key: "Stack", val: "Node.js · BullMQ" },
      { key: "Data", val: "Redis · Arkesel / SMTP" },
    ],
    problem:
      "Notifications were sent synchronously inside request handlers, so a slow SMS provider would stall the user's request, and a provider outage would silently drop messages. Critical alerts — OTPs, payment confirmations — were occasionally never delivered, with no record of why.",
    context:
      "A high-throughput product sending OTPs, receipts, and alerts over both SMS (Arkesel) and email. Providers fail intermittently and rate-limit; delivery must survive that without blocking the user-facing request that triggered it.",
    constraints: [
      { key: "Async delivery", val: "sending must never block the originating request" },
      { key: "At-least-once", val: "a transient failure must not lose the message" },
      { key: "Observability", val: "every send attempt is logged with its outcome" },
    ],
    requestPath: [
      { l: "App event", s: "emit" }, "→",
      { l: "Queue", s: "BullMQ" }, "→",
      { l: "Worker", s: "consume" }, "→",
      { l: "Provider", s: "SMS / email" }, "→",
      { l: "Delivery log", s: "recorded" },
    ],
    recoveryPath: [
      { l: "Send fails", s: "provider error" }, "→",
      { l: "Backoff", s: "exponential" }, "→",
      { l: "Retry", s: "n attempts" }, "→",
      { l: "Dead letter", s: "if exhausted" },
    ],
    implementations: [
      {
        label: "Producer",
        items: [
          "Thin emit() API called from request handlers",
          "Returns immediately after enqueue",
          "Per-message channel + priority metadata",
        ],
      },
      {
        label: "Worker",
        items: [
          "BullMQ consumers with concurrency control",
          "Exponential backoff on transient failures",
          "Dead-letter queue for exhausted retries",
        ],
      },
      {
        label: "Channels",
        items: [
          "SMS adapter (Arkesel) with rate limiting",
          "Email adapter (Nodemailer / SMTP)",
          "Pluggable interface for new providers",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "Queue between event and delivery",
        desc: "Decoupling the emit from the send means a slow or down provider can never stall the user's request. The request enqueues and returns; the worker handles delivery on its own timeline.",
      },
      {
        num: "02",
        title: "Exponential backoff + dead-letter queue",
        desc: "Transient provider failures are retried with growing delays so we don't hammer a struggling provider. Messages that exhaust retries land in a dead-letter queue for inspection, never silently lost.",
      },
      {
        num: "03",
        title: "Pluggable channel adapters",
        desc: "Each channel implements a common send interface, so adding a new provider or swapping one out is a localized change that doesn't touch the producer or queue.",
      },
    ],
    tradeoffs: {
      chose: [
        "Async queue-based delivery",
        "At-least-once with idempotent consumers",
        "Dead-letter queue over silent drops",
      ],
      gaveUp: [
        "Exactly-once delivery (chose simpler at-least-once)",
        "Instant synchronous confirmation to the caller",
        "Lower infra footprint (Redis + workers required)",
      ],
    },
    outcomes: [
      { stat: "0", desc: "user requests blocked by provider latency" },
      { stat: "100%", desc: "send attempts logged with outcome" },
      { stat: "↓", desc: "dropped critical messages via retry + DLQ" },
    ],
  },

  {
    slug: "storage",
    title: "Cloudflare R2 Storage",
    tag: "Storage",
    description:
      "Object storage with validated uploads, signed-URL access control, and CDN-style retrieval.",
    flow: "Client · Backend API · Access (signed URL) · R2 · CDN",
    focus: "Signed URLs · upload validation · scalable object storage",
    headline: "Object Storage — validated uploads, signed access",
    timeline: "2023 — 2024",
    spec: [
      { key: "Role", val: "Full-stack engineer" },
      { key: "Timeline", val: "2023 — 2024" },
      { key: "Status", val: "In production", dot: true },
      { key: "Surface", val: "Upload + delivery API" },
      { key: "Stack", val: "Node.js · S3 SDK" },
      { key: "Data", val: "Cloudflare R2 · CDN" },
    ],
    problem:
      "User-generated files (documents, images) needed to be stored and served at scale without routing every byte through the application server, which was a bottleneck and a cost sink. Uploads also had to be validated and access-controlled — not every file should be public, and not every upload should be trusted.",
    context:
      "A product handling sensitive merchant documents. Files had to be cheap to store and fast to serve globally, but access had to be authorized per-request — a public bucket was not an option.",
    constraints: [
      { key: "Direct uploads", val: "bytes shouldn't transit the app server" },
      { key: "Authorized access", val: "every read requires a time-limited grant" },
      { key: "Validation", val: "type and size enforced before the object lands" },
    ],
    requestPath: [
      { l: "Client", s: "request upload" }, "→",
      { l: "Backend API", s: "validate" }, "→",
      { l: "Signed URL", s: "scoped" }, "→",
      { l: "R2", s: "direct PUT" }, "→",
      { l: "CDN", s: "cached read" },
    ],
    recoveryPath: [
      { l: "Bad type/size", s: "rejected" }, "→",
      { l: "No grant", s: "403" }, "→",
      { l: "Expired URL", s: "re-sign" }, "→",
      { l: "Access", s: "granted" },
    ],
    implementations: [
      {
        label: "Upload",
        items: [
          "Presigned PUT URLs scoped to type + size",
          "Client uploads directly to R2",
          "Server records metadata on completion",
        ],
      },
      {
        label: "Access",
        items: [
          "Presigned GET URLs with short expiry",
          "Per-request authorization check",
          "CDN caching for hot, public-safe objects",
        ],
      },
      {
        label: "APIs",
        items: [
          "POST /uploads (returns signed URL)",
          "GET /files/:id/url (returns signed read URL)",
          "S3-compatible SDK against R2",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "Presigned URLs for direct transfer",
        desc: "Clients upload and download straight from R2 using short-lived signed URLs. The app server issues grants but never proxies file bytes, removing it as a bottleneck and cost center.",
      },
      {
        num: "02",
        title: "Validate before the object lands",
        desc: "Signed upload URLs are scoped to an allowed content type and max size, so invalid uploads are rejected by storage itself rather than discovered after the fact.",
      },
      {
        num: "03",
        title: "R2 for zero egress fees",
        desc: "Cloudflare R2's S3-compatible API meant minimal code change versus S3, while its lack of egress charges made global, CDN-fronted delivery economical at scale.",
      },
    ],
    tradeoffs: {
      chose: [
        "Direct client ↔ R2 transfer via signed URLs",
        "S3-compatible API for portability",
        "Short URL expiry for tighter access control",
      ],
      gaveUp: [
        "Server-side stream processing of uploads",
        "Permanent public links (expiry adds re-signing)",
        "Single-provider lock-in convenience",
      ],
    },
    outcomes: [
      { stat: "0", desc: "file bytes routed through the app server" },
      { stat: "global", desc: "CDN-fronted delivery with low latency" },
      { stat: "100%", desc: "reads gated by a time-limited grant" },
    ],
  },

  {
    slug: "caching",
    title: "Redis + Upstash Caching",
    tag: "Caching",
    description:
      "Caching layer that absorbs read load with TTL-based invalidation and a database fallback on miss.",
    flow: "Client · Backend API · Redis (hit / miss) · Database fallback",
    focus: "Rate limiting · session cache · TTL strategy",
    headline: "Caching — absorbing read load without going stale",
    timeline: "2023 — 2024",
    spec: [
      { key: "Role", val: "Full-stack engineer" },
      { key: "Timeline", val: "2023 — 2024" },
      { key: "Status", val: "In production", dot: true },
      { key: "Surface", val: "API caching layer" },
      { key: "Stack", val: "Node.js · Redis" },
      { key: "Data", val: "Upstash Redis · Postgres" },
    ],
    problem:
      "Read-heavy endpoints were hitting the primary database on every request, driving up latency and cost. Naive caching risked serving stale data — unacceptable for things like balances and statuses — so the system needed a cache that was fast on the hot path but never silently wrong.",
    context:
      "A serverless deployment where database connections are scarce and cold reads are expensive. The cache had to work over HTTP (Upstash) to fit the serverless model, while keeping a clear, predictable invalidation story.",
    constraints: [
      { key: "Freshness", val: "stale reads bounded by an explicit TTL" },
      { key: "Fallback", val: "a cache miss always falls back to the database" },
      { key: "Serverless-fit", val: "cache reachable over HTTP, no persistent socket" },
    ],
    requestPath: [
      { l: "Client", s: "request" }, "→",
      { l: "Backend API", s: "lookup" }, "→",
      { l: "Redis", s: "hit?" }, "→",
      { l: "DB fallback", s: "on miss" }, "→",
      { l: "Cache set", s: "with TTL" },
    ],
    recoveryPath: [
      { l: "Write", s: "data changes" }, "→",
      { l: "Invalidate", s: "key" }, "→",
      { l: "Next read", s: "miss" }, "→",
      { l: "Refill", s: "fresh value" },
    ],
    implementations: [
      {
        label: "Cache layer",
        items: [
          "Read-through cache with per-key TTL",
          "Upstash Redis over HTTP (serverless-safe)",
          "Explicit invalidation on writes",
        ],
      },
      {
        label: "Rate limiting",
        items: [
          "Sliding-window counters in Redis",
          "Per-IP and per-user limits",
          "429 with retry-after on breach",
        ],
      },
      {
        label: "Sessions",
        items: [
          "Session cache keyed by token",
          "Short TTL, refreshed on activity",
          "Invalidated on logout / revoke",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "Read-through with bounded TTL",
        desc: "Every cached value carries an explicit TTL, so the worst-case staleness is known and small. On a miss the request transparently falls back to the database and repopulates the cache.",
      },
      {
        num: "02",
        title: "Invalidate on write, don't just expire",
        desc: "For data that must be fresh, writes actively invalidate the relevant keys rather than waiting for TTL expiry — combining a short staleness ceiling with immediate correctness after changes.",
      },
      {
        num: "03",
        title: "HTTP-based Redis for serverless",
        desc: "Upstash's HTTP interface avoids the connection-exhaustion problem that persistent Redis sockets cause in serverless functions, making the cache safe to use from short-lived instances.",
      },
    ],
    tradeoffs: {
      chose: [
        "Bounded-staleness TTL + active invalidation",
        "HTTP Redis to fit the serverless model",
        "Database fallback on every miss",
      ],
      gaveUp: [
        "Always-perfectly-fresh reads (TTL allows a small window)",
        "Lowest-possible latency of a socket connection",
        "Cache-only operation (DB stays the source of truth)",
      ],
    },
    outcomes: [
      { stat: "↓ load", desc: "read traffic absorbed before the database" },
      { stat: "bounded", desc: "staleness capped by explicit per-key TTL" },
      { stat: "0", desc: "connection-exhaustion incidents in serverless" },
    ],
  },

  {
    slug: "multitenancy",
    title: "Middleware Subdomain Routing",
    tag: "Multi-tenancy",
    description:
      "Multi-tenant routing that resolves the tenant from the subdomain and isolates each tenant's data.",
    flow: "Request · Middleware · Subdomain parser · Tenant resolver · Route · Tenant data",
    focus: "Tenant isolation · dynamic routing · request interception",
    headline: "Multi-tenancy — one app, isolated tenants by subdomain",
    timeline: "2023 — 2024",
    spec: [
      { key: "Role", val: "Full-stack engineer" },
      { key: "Timeline", val: "2023 — 2024" },
      { key: "Status", val: "In production", dot: true },
      { key: "Surface", val: "Edge middleware + app" },
      { key: "Stack", val: "Next.js middleware" },
      { key: "Data", val: "Postgres (scoped)" },
    ],
    problem:
      "A single codebase needed to serve many tenants — each on their own subdomain — without duplicating deployments, and without any chance of one tenant seeing another's data. The risk in multi-tenancy is not routing; it's the quiet data leak when a query forgets its tenant scope.",
    context:
      "A SaaS where each customer gets acme.app.com. Tenant resolution had to happen at the edge, before the app renders, and every data access downstream had to be scoped to the resolved tenant by construction, not by discipline.",
    constraints: [
      { key: "Tenant isolation", val: "no query can cross a tenant boundary" },
      { key: "Edge resolution", val: "tenant resolved before the app runs" },
      { key: "Single deploy", val: "one build serves every tenant" },
    ],
    requestPath: [
      { l: "Request", s: "subdomain" }, "→",
      { l: "Middleware", s: "intercept" }, "→",
      { l: "Parse", s: "tenant slug" }, "→",
      { l: "Resolve", s: "tenant ctx" }, "→",
      { l: "Route", s: "rewrite" }, "→",
      { l: "Tenant data", s: "scoped" },
    ],
    recoveryPath: [
      { l: "Unknown sub", s: "no tenant" }, "→",
      { l: "Reject", s: "404 / marketing" }, "→",
      { l: "Valid", s: "inject ctx" }, "→",
      { l: "Scoped query", s: "enforced" },
    ],
    implementations: [
      {
        label: "Edge",
        items: [
          "Middleware parses host → tenant slug",
          "Resolves tenant, injects context header",
          "Rewrites to the tenant-scoped route",
        ],
      },
      {
        label: "Data",
        items: [
          "Every query carries a tenant_id filter",
          "Repository layer enforces scope by default",
          "No raw model access outside the scope",
        ],
      },
      {
        label: "Routing",
        items: [
          "Unknown subdomains → marketing / 404",
          "Reserved subdomains (www, api) handled",
          "Single build, dynamic per-request tenant",
        ],
      },
    ],
    keyDecisions: [
      {
        num: "01",
        title: "Resolve the tenant in edge middleware",
        desc: "Tenant resolution happens before any page or API code runs, so the rest of the app receives an already-scoped context and never has to re-derive which tenant it's serving.",
      },
      {
        num: "02",
        title: "Scope by construction, not by discipline",
        desc: "The data layer requires a tenant context to issue a query, so forgetting to filter is a type error, not a silent leak. Isolation is enforced by the API surface itself.",
      },
      {
        num: "03",
        title: "One deployment for all tenants",
        desc: "A single build serves every subdomain dynamically. New tenants are data, not deploys — onboarding a tenant never requires shipping code.",
      },
    ],
    tradeoffs: {
      chose: [
        "Edge-resolved tenant context",
        "Enforced tenant scoping in the data layer",
        "Single shared deployment",
      ],
      gaveUp: [
        "Per-tenant physical DB isolation (shared, scoped instead)",
        "Per-tenant custom builds",
        "Simplest possible routing (middleware adds a hop)",
      ],
    },
    outcomes: [
      { stat: "0", desc: "cross-tenant data access by construction" },
      { stat: "1", desc: "deployment serving all tenants" },
      { stat: "data", desc: "onboarding a tenant needs no code change" },
    ],
  },
];

export default works;
