import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Check,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Library,
  Moon,
  Network,
  Presentation,
  Search,
  Sun,
} from "lucide-react";
import { CATEGORIES, courses, type Course } from "@/data/catalog";
import { decks } from "@/data/decks";
import { lectures, lectureStubs } from "@/data/lectures";
import { noteLines, notePacks } from "@/data/notes";
import { coreCourses, tracks, type TrackId } from "@/data/program";
import { capstones, days, pairings, pillars, sources, weeks } from "@/data/schedule";
import { downloadPdf, downloadPptx } from "@/lib/export";

type Tab = "overview" | "catalog" | "lectures" | "program" | "downloads" | "schedule";

const TABS: { id: Tab; label: string; icon: typeof Library }[] = [
  { id: "overview", label: "Overview", icon: Library },
  { id: "catalog", label: "Catalog", icon: BookOpen },
  { id: "lectures", label: "Lectures", icon: Presentation },
  { id: "program", label: "30-credit plan", icon: GraduationCap },
  { id: "downloads", label: "Downloads", icon: Download },
  { id: "schedule", label: "Schedule", icon: CalendarDays },
];

const PAIR_ICONS = [Database, Cpu, Network, Network];

function resourcesFor(code: string) {
  const nums = code.match(/\d{3}/g) ?? [];
  const hits = courses.filter((course) => nums.some((n) => course.code.endsWith(n)));
  const seen = new Set<string>();
  return hits.flatMap((course) =>
    course.free.filter((item) => {
      if (seen.has(item.url)) return false;
      seen.add(item.url);
      return true;
    }),
  );
}

function stamp() {
  return new Date().toLocaleDateString();
}

export function MastersApp() {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [openCourse, setOpenCourse] = useState<string | null>(null);
  const [activeLecture, setActiveLecture] = useState(lectures[0].code);
  const [track, setTrack] = useState<TrackId>("A");
  const [core, setCore] = useState<Record<string, boolean>>({});
  const [electives, setElectives] = useState<Record<string, boolean>>({});
  const [read, setRead] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const plan = JSON.parse(localStorage.getItem("csce-plan") || "{}") as {
        core?: Record<string, boolean>;
        electives?: Record<string, boolean>;
        track?: TrackId;
      };
      if (plan.core) setCore(plan.core);
      if (plan.electives) setElectives(plan.electives);
      if (plan.track && plan.track in tracks) setTrack(plan.track);
      if (localStorage.getItem("csce-theme") === "dark") setDark(true);
      const savedRead = JSON.parse(localStorage.getItem("csce-read") || "{}") as Record<string, boolean>;
      if (savedRead) setRead(savedRead);
    } catch {
      /* keep defaults */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("csce-plan", JSON.stringify({ core, electives, track }));
    localStorage.setItem("csce-theme", dark ? "dark" : "light");
    localStorage.setItem("csce-read", JSON.stringify(read));
  }, [ready, core, electives, track, dark, read]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((course) => {
      const hay = `${course.code} ${course.title} ${course.desc} ${course.prereq} ${course.category}`.toLowerCase();
      return (category === "All" || course.category === category) && (!q || hay.includes(q));
    });
  }, [query, category]);

  const trackCourses = tracks[track].courses;
  const electiveCount = trackCourses.filter((course) => electives[course.code]).length;
  const coreCount = coreCourses.filter((course) => core[course.code]).length;
  const picked = coreCount + electiveCount;
  const progress = Math.min(100, Math.round((picked / 10) * 100));
  const lecture = lectures.find((item) => item.code === activeLecture) ?? lectures[0];

  function exportCatalog() {
    const lines = [
      `Texas A&M CSCE — ${courses.length}-course catalog`,
      "Descriptions, prerequisites, and free audit paths",
      `Generated ${stamp()}`,
      "",
    ];
    for (const course of courses) {
      lines.push(
        `${course.code} — ${course.title} [${course.category}] (${course.credits} cr)`,
        course.desc,
        `Prereq: ${course.prereq}`,
        `Free: ${course.free.map((item) => item.label).join(", ")}`,
        "",
      );
    }
    downloadPdf("CSCE_Course_Catalog.pdf", lines);
  }

  function exportPlan() {
    const lines = [
      "My 30-credit program plan — Texas A&M CSCE",
      "10 courses × 3 credits. Core 12 cr plus 18 cr on one track.",
      `Generated ${stamp()}`,
      "",
      "CORE 12 CR",
    ];
    for (const course of coreCourses) {
      lines.push(`${core[course.code] ? "[x]" : "[ ]"} ${course.code} — ${course.title}`, `    Project: ${course.proj}`);
    }
    lines.push("", `${tracks[track].label.toUpperCase()}`);
    for (const course of trackCourses) {
      lines.push(`${electives[course.code] ? "[x]" : "[ ]"} ${course.code} — ${course.title}`);
    }
    lines.push("", `${picked}/10 courses selected · ${picked * 3} credits`);
    downloadPdf("CSCE_30_Credit_Program_Plan.pdf", lines);
  }

  function exportLecture(code: string) {
    const item = lectures.find((lectureItem) => lectureItem.code === code);
    if (!item) return;
    downloadPdf(
      `CSCE_${item.code.replace(/\W+/g, "_")}_Lecture.pdf`,
      [
        `Texas A&M CSCE ${item.code} — ${item.title}`,
        `Reading length marked ${item.duration}`,
        "",
        "TOPICS",
        ...item.topics.map((topic) => `  - ${topic}`),
        "",
        "BOARD",
        ...item.bullets.map((bullet) => `  - ${bullet}`),
        "",
        "SCRIPT",
        item.script,
      ],
    );
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-bg text-ink">
        <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent font-display text-sm font-semibold text-accent-ink">
                A&M
              </div>
              <div className="min-w-0 leading-tight">
                <div className="display truncate text-base font-semibold">CSCE Complete Masters</div>
                <div className="truncate text-xs tracking-widest text-muted uppercase">Texas A&M · offline study</div>
              </div>
            </div>
            <button
              type="button"
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              onClick={() => setDark((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
          <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3">
            {TABS.map((item) => {
              const Icon = item.icon;
              const on = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  className={`flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium ${
                    on ? "border-accent bg-accent text-accent-ink" : "border-line bg-surface text-ink"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">
          {tab === "overview" && (
            <div className="space-y-6">
              <section className="rounded-3xl border border-line bg-surface p-6 md:p-10">
                <p className="text-xs font-medium tracking-widest text-muted uppercase">Texas A&M · CSCE · free audit path</p>
                <h1 className="display mt-3 max-w-3xl text-4xl leading-none font-semibold md:text-5xl">
                  Texas A&M CSCE <span className="text-accent">Complete Masters</span>
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  {courses.length} graduate courses mapped to free MIT, Stanford, and CMU audits. Five lecture scripts you can
                  read offline, notes and slide decks built in the browser, and a 30-credit plan that stays on this device.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setTab("lectures")}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-ink"
                  >
                    <BookOpen className="h-4 w-4" />
                    Read lectures
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("catalog")}
                    className="inline-flex h-11 items-center rounded-full border border-line bg-surface-2 px-5 text-sm font-medium"
                  >
                    Browse {courses.length} courses
                  </button>
                </div>
                <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3">
                  {[
                    [String(courses.length), "Courses"],
                    [String(lectures.length), "Scripts"],
                    ["30", "Credits"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-line bg-surface-2 p-3">
                      <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
                      <dd className="display mt-1 text-2xl font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="grid gap-4 md:grid-cols-4">
                {pillars.map((pillar) => (
                  <article key={pillar.title} className="rounded-2xl border border-line bg-surface p-5">
                    <h2 className="display text-lg font-semibold">{pillar.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.desc}</p>
                    <p className="mt-3 text-xs tracking-wide text-muted uppercase">{pillar.courses}</p>
                  </article>
                ))}
              </section>

              <section className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-line bg-surface p-6 md:col-span-2">
                  <h2 className="display text-xl font-semibold">How TAMU maps to free</h2>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {pairings.map((pair, index) => {
                      const Icon = PAIR_ICONS[index] ?? Database;
                      return (
                        <div key={pair.title} className="flex gap-3 rounded-xl border border-line bg-surface-2 p-3">
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <div>
                            <div className="text-sm font-medium">{pair.title}</div>
                            <p className="mt-1 text-sm leading-relaxed text-muted">{pair.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h2 className="display text-xl font-semibold">100% free audit path</h2>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-center justify-between gap-3">
                      <span>MIT OCW 6.5830 DB</span>
                      <span className="rounded-full border border-line bg-surface-2 px-2 py-1 text-xs">Core</span>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span>Stanford CS144 + CS229</span>
                      <span className="rounded-full border border-line bg-surface-2 px-2 py-1 text-xs">Networks / ML</span>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span>MIT 6.S081 + 6.004</span>
                      <span className="rounded-full border border-line bg-surface-2 px-2 py-1 text-xs">Systems</span>
                    </li>
                  </ul>
                  <p className="mt-5 rounded-xl border border-dashed border-line bg-surface-2 p-3 text-xs leading-relaxed text-muted">
                    Official links only: ocw.mit.edu, archive.org, cs144.github.io, edx.org, pdos.csail.mit.edu.
                  </p>
                </div>
              </section>
            </div>
          )}

          {tab === "catalog" && (
            <div className="space-y-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <label className="relative block w-full max-w-xl">
                  <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search code, name, or topic — 608, graphics, learning"
                    className="h-11 w-full rounded-full border border-line bg-surface pr-4 pl-10 text-sm outline-none focus:border-accent"
                  />
                </label>
                <p className="text-sm text-muted">
                  {filtered.length} of {courses.length}
                </p>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {CATEGORIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`h-10 shrink-0 rounded-full border px-4 text-sm font-medium ${
                      category === item ? "border-accent bg-accent text-accent-ink" : "border-line bg-surface"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {filtered.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-line bg-surface p-8 text-center text-sm text-muted">
                  Nothing matches that search. Try a course number, like 611.
                </p>
              ) : (
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((course) => (
                    <CourseCard
                      key={course.code}
                      course={course}
                      open={openCourse === course.code}
                      onToggle={() => setOpenCourse((current) => (current === course.code ? null : course.code))}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "lectures" && (
            <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
              <div className="space-y-2">
                {lectures.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setActiveLecture(item.code);
                      setRead((current) => ({ ...current, [item.code]: true }));
                    }}
                    className={`w-full rounded-2xl border p-4 text-left ${
                      item.code === lecture.code ? "border-accent bg-surface" : "border-line bg-surface"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium tracking-wide text-muted uppercase">{item.code}</span>
                      <span className="text-xs text-muted">{item.duration}</span>
                    </div>
                    <div className="mt-1 text-sm font-medium">{item.title}</div>
                    {read[item.code] && <div className="mt-2 text-xs text-gold">Opened</div>}
                  </button>
                ))}
                {lectureStubs.map((item) => (
                  <div key={item.code} className="rounded-2xl border border-dashed border-line bg-surface-2 p-4">
                    <div className="text-xs font-medium tracking-wide text-gold uppercase">Script notes · no clip</div>
                    <div className="mt-1 text-sm font-medium">{item.title}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{item.note}</p>
                  </div>
                ))}
              </div>
              <article className="rounded-3xl border border-line bg-surface p-6 md:p-8">
                <p className="text-xs tracking-widest text-muted uppercase">{lecture.code}</p>
                <h2 className="display mt-2 text-3xl font-semibold">{lecture.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lecture.topics.map((topic) => (
                    <span key={topic} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-2">
                  {lecture.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-xl border border-line bg-surface-2 px-3 py-2 text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base leading-relaxed">{lecture.script}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => exportLecture(lecture.code)}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-ink"
                  >
                    <FileText className="h-4 w-4" />
                    Notes PDF
                  </button>
                  {resourcesFor(lecture.code).map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface-2 px-4 text-sm font-medium"
                    >
                      {item.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </article>
            </div>
          )}

          {tab === "program" && (
            <div className="space-y-5">
              <section className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="display text-2xl font-semibold">My 30-credit program</h2>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm text-muted">
                      {picked}/10 courses · {picked * 3} cr · {progress}%
                    </p>
                    <div className="h-2 w-36 overflow-hidden rounded-full border border-line bg-surface-2">
                      <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
                    </div>
                    <button
                      type="button"
                      onClick={exportPlan}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-ink"
                    >
                      <FileText className="h-4 w-4" />
                      Export plan PDF
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted">Check all 4 core courses and 6 electives on one track. The plan stays in this browser.</p>
                <h3 className="mt-6 text-xs tracking-widest text-muted uppercase">Core 12 cr — required</h3>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {coreCourses.map((course) => {
                    const on = Boolean(core[course.code]);
                    return (
                      <button
                        key={course.code}
                        type="button"
                        onClick={() => setCore((current) => ({ ...current, [course.code]: !current[course.code] }))}
                        className={`rounded-2xl border p-4 text-left ${on ? "border-accent bg-surface-2" : "border-line bg-surface"}`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border ${
                              on ? "border-accent bg-accent text-accent-ink" : "border-line"
                            }`}
                            aria-hidden
                          >
                            {on ? <Check className="h-3 w-3" /> : null}
                          </span>
                          <span>
                            <span className="block text-sm font-medium">
                              {course.code} — {course.title}
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed text-muted">{course.proj}</span>
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(Object.keys(tracks) as TrackId[]).map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setTrack(id)}
                      className={`h-10 rounded-full border px-4 text-sm font-medium ${
                        track === id ? "border-accent bg-accent text-accent-ink" : "border-line bg-surface"
                      }`}
                    >
                      {tracks[id].label}
                    </button>
                  ))}
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {trackCourses.map((course) => {
                    const on = Boolean(electives[course.code]);
                    return (
                      <button
                        key={course.code}
                        type="button"
                        onClick={() => setElectives((current) => ({ ...current, [course.code]: !current[course.code] }))}
                        className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-sm font-medium ${
                          on ? "border-accent bg-surface-2" : "border-line bg-surface"
                        }`}
                      >
                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded border ${
                            on ? "border-accent bg-accent text-accent-ink" : "border-line"
                          }`}
                          aria-hidden
                        >
                          {on ? <Check className="h-3 w-3" /> : null}
                        </span>
                        {course.code} — {course.title}
                      </button>
                    );
                  })}
                </div>
              </section>
              <section className="rounded-2xl border border-line bg-surface p-6">
                <h2 className="display text-xl font-semibold">Capstone — clone options</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {capstones.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-line bg-surface-2 p-4"
                    >
                      <div className="flex items-center justify-between gap-2 text-sm font-medium">
                        {item.name}
                        <ExternalLink className="h-3.5 w-3.5 text-muted" />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          )}

          {tab === "downloads" && (
            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <h2 className="display text-xl font-semibold">Notes PDFs</h2>
                </div>
                <p className="mt-2 text-sm text-muted">Built in the browser. Lines wrap instead of being cut off.</p>
                <div className="mt-4 grid gap-2">
                  {notePacks.map((pack) => (
                    <button
                      key={pack.file}
                      type="button"
                      onClick={() => downloadPdf(pack.file, noteLines(pack))}
                      className="flex h-11 items-center justify-between rounded-full border border-line bg-surface-2 px-4 text-left text-sm font-medium"
                    >
                      CSCE {pack.code} {pack.title}
                      <Download className="h-4 w-4" />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={exportCatalog}
                    className="flex h-11 items-center justify-between rounded-full border border-line bg-surface-2 px-4 text-left text-sm font-medium"
                  >
                    Complete {courses.length}-course catalog
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </section>
              <section className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-2">
                  <Presentation className="h-5 w-5" />
                  <h2 className="display text-xl font-semibold">Slide decks</h2>
                </div>
                <p className="mt-2 text-sm text-muted">Office Open XML, no upload. Open the .pptx in PowerPoint or Keynote.</p>
                <div className="mt-4 grid gap-2">
                  {decks.map((deck) => (
                    <button
                      key={deck.label}
                      type="button"
                      onClick={() => downloadPptx(`${deck.label.replace(/\s+/g, "_")}.pptx`, deck.label, [...deck.slides])}
                      className="flex h-11 items-center justify-between rounded-full border border-line bg-surface-2 px-4 text-left text-sm font-medium"
                    >
                      {deck.label}
                      <Download className="h-4 w-4" />
                    </button>
                  ))}
                </div>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {lectures.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => exportLecture(item.code)}
                      className="flex h-11 items-center justify-between rounded-xl border border-line px-3 text-left text-xs font-medium"
                    >
                      <span className="truncate">
                        {item.code} script
                      </span>
                      <Download className="h-3.5 w-3.5 shrink-0" />
                    </button>
                  ))}
                </div>
              </section>
            </div>
          )}

          {tab === "schedule" && (
            <div className="space-y-5">
              <section className="rounded-2xl border border-line bg-surface p-6">
                <h2 className="display text-2xl font-semibold">16-week core timeline</h2>
                <div className="mt-5 grid gap-2">
                  {weeks.map((week) => (
                    <div
                      key={week.week}
                      className="flex flex-col gap-2 rounded-2xl border border-line bg-surface-2 p-3 md:flex-row md:items-center md:gap-4"
                    >
                      <div className="grid h-8 w-16 place-items-center rounded-full border border-line bg-surface text-xs font-medium">
                        Week {week.week}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium">{week.lecture}</div>
                        <div className="text-xs text-muted">
                          Lab: {week.lab} · Paper: {week.paper}
                        </div>
                      </div>
                      <div className="w-fit rounded-full bg-accent px-3 py-1 text-xs text-accent-ink">{week.hours}</div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="rounded-2xl border border-line bg-surface p-6">
                <h2 className="display text-xl font-semibold">Daily template, Mon–Sun</h2>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-7">
                  {days.map((day) => (
                    <div key={day.day} className="rounded-xl border border-line bg-surface-2 p-3">
                      <div className="text-sm font-semibold">{day.day}</div>
                      <p className="mt-1 text-xs leading-snug text-muted">{day.focus}</p>
                      <div className="mt-2 w-fit rounded-full border border-line bg-surface px-2 py-1 text-xs">{day.time}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </main>

        <footer className="mt-10 border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="flex flex-wrap gap-2 text-xs text-muted">
              <span className="self-center">Sources</span>
              {sources.map((source) => (
                <span key={source} className="rounded-full border border-line bg-surface-2 px-2 py-1">
                  {source}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted">
              Study map of the Texas A&M CSCE graduate sequence. Course text follows public catalog descriptions and free
              course sites. It is not an official TAMU degree audit, and it does not enroll you.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function CourseCard({ course, open, onToggle }: { course: Course; open: boolean; onToggle: () => void }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs tracking-wide text-muted uppercase">
            {course.category} · {course.credits} cr
          </p>
          <h3 className="mt-1 text-sm font-semibold">
            {course.code} — {course.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="h-10 shrink-0 rounded-full border border-line px-3 text-xs font-medium"
          aria-expanded={open}
        >
          {open ? "Hide" : "Free path"}
        </button>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{course.desc}</p>
      <p className="mt-2 text-xs text-muted">Prereq: {course.prereq}</p>
      {open && (
        <div className="mt-3 flex flex-wrap gap-2">
          {course.free.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-line bg-surface-2 px-3 py-2 text-xs"
            >
              {item.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
