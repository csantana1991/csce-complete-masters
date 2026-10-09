import type { NoteSection } from "@/lib/export";

export type NotePack = {
  code: string;
  title: string;
  file: string;
  sections: NoteSection[];
};

export const notePacks: NotePack[] = [
  {
    code: "608",
    title: "Database Systems",
    file: "CSCE_608_Database_Systems_Notes.pdf",
    sections: [
      {
        h: "Modules",
        bullets: [
          "ER diagrams to relational mapping",
          "Relational algebra and SQL optimization",
          "BCNF decomposition",
          "B+ tree indexing and cost model",
          "Transactions: ACID, WAL, 2PL",
        ],
      },
      {
        h: "TAMU description",
        bullets: [
          "Implementation of a storage engine, query processing, and recovery — paired with CSCE 310",
        ],
      },
    ],
  },
  {
    code: "611",
    title: "Operating Systems",
    file: "CSCE_611_Operating_Systems_Notes.pdf",
    sections: [
      {
        h: "Modules",
        bullets: [
          "CPU scheduling FCFS / SJF / RR",
          "Virtual memory paging and Sv39 page-table entries",
          "xv6 proc.c scheduler() and swtch()",
          "File system inodes and logging",
        ],
      },
      {
        h: "TAMU description",
        bullets: ["Processes, threads, synchronization, virtual memory — xv6 labs"],
      },
    ],
  },
  {
    code: "614",
    title: "Computer Architecture",
    file: "CSCE_614_Architecture_Notes.pdf",
    sections: [
      {
        h: "Modules",
        bullets: [
          "RISC-V 5-stage IF/ID/EX/MEM/WB pipeline",
          "Data hazards: forwarding versus stalling",
          "Cache L1/L2/L3 hierarchy and AMAT",
          "Multiprocessor MESI coherence",
        ],
      },
      { h: "Beta CPU", bullets: ["MIT 6.004 Beta CPU implementation"] },
    ],
  },
  {
    code: "633-636",
    title: "ML and Deep Learning",
    file: "CSCE_633_636_ML_Notes.pdf",
    sections: [
      {
        h: "Modules",
        bullets: [
          "Gradient descent: theta := theta - alpha * grad",
          "Neural nets and backprop",
          "CNN kernel convolution",
          "Transformer attention: softmax(QK^T / sqrt(dk)) V",
          "PyTorch nn.Conv2d and MultiheadAttention",
        ],
      },
      { h: "Projects", bullets: ["CIFAR-10 CNN and a mini-GPT"] },
    ],
  },
  {
    code: "641",
    title: "Computer Graphics",
    file: "CSCE_641_Graphics_Notes.pdf",
    sections: [
      {
        h: "Modules",
        bullets: [
          "Ray tracing versus rasterization",
          "OpenGL shading pipeline",
          "Phong illumination I = ka + kd(N·L) + ks(R·V)^n",
          "Cornell box, global illumination, and BVH",
        ],
      },
      {
        h: "TAMU description",
        bullets: ["Physically based rendering and PBRT — paired with CSCE 441"],
      },
    ],
  },
];

export function noteLines(pack: NotePack): string[] {
  const lines = [
    `Texas A&M CSCE ${pack.code} — ${pack.title}`,
    "Complete Self-Contained Masters — All in One",
    `Generated ${new Date().toLocaleDateString()}`,
    "",
    "======================================================================",
  ];
  for (const section of pack.sections) {
    lines.push("", section.h.toUpperCase(), "----------------------------------------------------------------------");
    for (const bullet of section.bullets) lines.push(`  - ${bullet}`);
  }
  lines.push(
    "",
    "Sources: catalog.tamu.edu, ocw.mit.edu, archive.org, edx.org, cs144.github.io, pdos.csail.mit.edu",
  );
  return lines;
}
