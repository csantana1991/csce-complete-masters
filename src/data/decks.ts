// Course map recovered from the CSCE Complete Masters study file.
export type Slide = { title: string; bullets: string[] };
export type Deck = { label: string; slides: Slide[] };
export const decks: Deck[] = [
  {
    "label": "CSCE 608 Slides (6 slides)",
    "slides": [
      {
        "title": "ER Diagrams",
        "bullets": [
          "Entities, relationships, cardinality",
          "Participation total/partial",
          "Mapping to relational"
        ]
      },
      {
        "title": "Relational Algebra",
        "bullets": [
          "Selection sigma, projection pi",
          "Join optimization"
        ]
      },
      {
        "title": "SQL Optimization",
        "bullets": [
          "EXPLAIN ANALYZE",
          "Index selection"
        ]
      },
      {
        "title": "Indexing",
        "bullets": [
          "B+ Tree structure",
          "Clustered vs unclustered"
        ]
      },
      {
        "title": "Transactions",
        "bullets": [
          "ACID, WAL, LSN",
          "Conflict serializable"
        ]
      },
      {
        "title": "Distributed DB",
        "bullets": [
          "Spanner, CockroachDB",
          "CAP tradeoff"
        ]
      }
    ]
  },
  {
    "label": "CSCE 611 Slides",
    "slides": [
      {
        "title": "CPU Scheduling",
        "bullets": [
          "FCFS, SJF, RR",
          "Turnaround & wait"
        ]
      },
      {
        "title": "Virtual Memory",
        "bullets": [
          "Paging, Sv39",
          "PTE flags"
        ]
      },
      {
        "title": "xv6 proc.c",
        "bullets": [
          "scheduler() loop",
          "swtch()"
        ]
      },
      {
        "title": "File Systems",
        "bullets": [
          "Inode bitmap",
          "Logging"
        ]
      }
    ]
  },
  {
    "label": "CSCE 614 Slides",
    "slides": [
      {
        "title": "RISC-V 5-Stage",
        "bullets": [
          "IF/ID/EX/MEM/WB",
          "Beta CPU"
        ]
      },
      {
        "title": "Hazards",
        "bullets": [
          "RAW forwarding",
          "Control flush"
        ]
      },
      {
        "title": "Cache Hierarchy",
        "bullets": [
          "L1 32KB direct-mapped",
          "AMAT"
        ]
      },
      {
        "title": "Multiprocessor",
        "bullets": [
          "MESI coherence"
        ]
      }
    ]
  },
  {
    "label": "CSCE 633/636 Slides",
    "slides": [
      {
        "title": "Gradient Descent",
        "bullets": [
          "J(theta)=1/2m sum(h-y)^2",
          "theta := theta - alpha*grad"
        ]
      },
      {
        "title": "Neural Nets",
        "bullets": [
          "Forward z=W x+b",
          "Backprop"
        ]
      },
      {
        "title": "CNN",
        "bullets": [
          "3x3 kernel conv",
          "Padding/stride"
        ]
      },
      {
        "title": "Transformers",
        "bullets": [
          "Q=XW_Q K=XW_K V=XW_V",
          "Attention=softmax(QK^T/sqrt(dk))V"
        ]
      }
    ]
  },
  {
    "label": "CSCE 641 Slides",
    "slides": [
      {
        "title": "Ray vs Raster",
        "bullets": [
          "Raster: MVP + z-buffer",
          "Ray: O+tD"
        ]
      },
      {
        "title": "OpenGL Pipeline",
        "bullets": [
          "VAO, VBO",
          "Vertex/Fragment shader"
        ]
      },
      {
        "title": "Phong",
        "bullets": [
          "I=ka+kd(N·L)+ks(R·V)^n"
        ]
      },
      {
        "title": "Cornell Box",
        "bullets": [
          "Global illumination",
          "PBRT"
        ]
      }
    ]
  },
  {
    "label": "Complete Masters Deck",
    "slides": [
      {
        "title": "TAMU CSCE Masters Overview",
        "bullets": [
          "70 courses mapped",
          "4 tracks",
          "100% free audit"
        ]
      },
      {
        "title": "Core 12cr",
        "bullets": [
          "629 CLRS, 608 BusTub, 611 xv6, 614 Beta CPU"
        ]
      },
      {
        "title": "Free Resources",
        "bullets": [
          "MIT OCW, Stanford, CMU, edX",
          "No paywall"
        ]
      },
      {
        "title": "Capstone",
        "bullets": [
          "RAFT, NeRF, mini-DBMS, secure chat"
        ]
      }
    ]
  }
];
