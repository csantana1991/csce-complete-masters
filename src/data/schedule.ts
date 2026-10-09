export const weeks = [
  { week: 1, lecture: "CSCE 629 — Asymptotic Analysis", lab: "CLRS MergeSort + Inversions", paper: "CLRS Ch 2-4", hours: "8-10h" },
  { week: 2, lecture: "CSCE 608 — ER Model + Relational Algebra", lab: "BusTub Buffer Pool", paper: "Stonebraker Postgres", hours: "10h" },
  { week: 3, lecture: "CSCE 608 — SQL Optimization + BCNF", lab: "BusTub B+ Tree + SQL", paper: "CMU 15-445 L7", hours: "12h" },
  { week: 4, lecture: "CSCE 611 — Scheduling + xv6 Proc", lab: "xv6 Lab 1: Utilities", paper: "xv6 Book Ch1-2", hours: "12h" },
  { week: 5, lecture: "CSCE 611 — Virtual Memory + Paging", lab: "xv6 Lab 2: Page Tables", paper: "OSTEP Ch18-20", hours: "12h" },
  { week: 6, lecture: "CSCE 614 — RISC-V Pipeline", lab: "Build Beta CPU", paper: "Patterson & Hennessy Ch4", hours: "10h" },
  { week: 7, lecture: "CSCE 614 — Cache L1/L2/L3 + MESI", lab: "Cache simulator", paper: "MIT 6.004 Cache Lab", hours: "10h" },
  { week: 8, lecture: "CSCE 633 — Linear Models + GD", lab: "GD from scratch", paper: "CS229 Notes 1", hours: "8h" },
  { week: 9, lecture: "CSCE 633/636 — CNN + Backprop", lab: "CNN CIFAR-10 PyTorch", paper: "AlexNet 2012", hours: "10h" },
  { week: 10, lecture: "CSCE 636 — Transformer QKV", lab: "Mini-GPT LM", paper: "Attention Is All You Need", hours: "12h" },
  { week: 11, lecture: "CSCE 641 — Ray vs Raster", lab: "Ray tracer Cornell box", paper: "PBRT Ch1-3", hours: "12h" },
  { week: 12, lecture: "CSCE 641 — Phong + OpenGL", lab: "Phong shader + shadows", paper: "LearnOpenGL", hours: "10h" },
  { week: 13, lecture: "CSCE 701/612 — Security & Networks", lab: "Overflow + Mininet", paper: "Smashing the Stack", hours: "10h" },
  { week: 14, lecture: "Track Electives", lab: "Track project checkpoint", paper: "Track classic paper", hours: "12h" },
  { week: 15, lecture: "Capstone Architecture Review", lab: "RAFT / NeRF / mini-DBMS", paper: "Capstone proposal", hours: "15h" },
  { week: 16, lecture: "Final Demo", lab: "Final presentation + report", paper: "Write-up", hours: "15h" },
] as const;

export const days = [
  { day: "Mon", focus: "Lecture video + notes", time: "90m watch + 30m notes" },
  { day: "Tue", focus: "Paper reading", time: "60m read + 30m summary" },
  { day: "Wed", focus: "Lab implementation", time: "2h coding" },
  { day: "Thu", focus: "Lab debug + tests", time: "2h" },
  { day: "Fri", focus: "Peer review", time: "1h" },
  { day: "Sat", focus: "Project deep work", time: "3h" },
  { day: "Sun", focus: "Rest + retro PDF", time: "30m export" },
] as const;

export const pairings = [
  { title: "608 ↔ 310 Database", body: "ER to relational, BCNF, B+ tree, ACID. BusTub plus MIT 6.5830 OCW." },
  { title: "611 ↔ 410 Operating Systems", body: "FCFS/SJF/RR, virtual memory, xv6 proc.c scheduler loop." },
  { title: "614 ↔ 350 Architecture", body: "RISC-V 5-stage IF/ID/EX/MEM/WB, hazards, L1/L2/L3, MESI." },
  { title: "612 ↔ 463 Networks", body: "TCP congestion, BGP, SDN. Stanford CS144 plus MIT 6.824." },
] as const;

export const pillars = [
  { title: "Foundations", desc: "606 SE, 622 generic programming, 634 HCI, 655 architecture.", courses: "CSCE 606 · 622 · 634 · 655" },
  { title: "AI / ML", desc: "625 AI, 633 ML with the theta update, 636 transformers, 676 visualization.", courses: "CSCE 625 · 633 · 636 · 676" },
  { title: "Systems & security", desc: "605 compiler, 608 DB, 611 OS xv6, 614 RISC-V pipeline, 701 cyber.", courses: "CSCE 605 · 611 · 614 · 701" },
  { title: "Graphics, vision, robotics", desc: "641 ray versus raster, Phong, Cornell box. 646 vision, 650 robotics, 679 NeRF.", courses: "CSCE 641 · 646 · 650 · 679" },
] as const;

export const capstones = [
  { name: "RAFT consensus", detail: "Go or Rust, leader election, log replication", href: "https://raft.github.io/" },
  { name: "NeRF novel view", detail: "PyTorch, volumetric rendering, positional encoding", href: "https://arxiv.org/abs/2003.08934" },
  { name: "mini-DBMS MVCC", detail: "WAL, MVCC snapshot isolation, B+ tree", href: "https://15445.courses.cs.cmu.edu/" },
  { name: "Secure chat E2E", detail: "Double ratchet, X3DH, formal verification", href: "https://signal.org/docs/specifications/doubleratchet/" },
] as const;

export const sources = [
  "catalog.tamu.edu",
  "ocw.mit.edu",
  "cs144.github.io",
  "archive.org",
  "edx.org",
  "pdos.csail.mit.edu",
  "introtodeeplearning.com",
  "people.eecs.berkeley.edu/~pabbeel/cs287-fa19",
  "rit.edu",
] as const;
