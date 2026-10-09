// Course map recovered from the CSCE Complete Masters study file.
export type CoreCourse = { code: string; title: string; proj: string };
export type Elective = { code: string; title: string };
export const coreCourses: CoreCourse[] = [
  {
    "code": "CSCE 629",
    "title": "Analysis of Algorithms — CLRS Implementation",
    "proj": "Implement 12 CLRS algorithms + amortized analysis proof + benchmark vs stdlib sort"
  },
  {
    "code": "CSCE 608",
    "title": "Database Systems — BusTub Storage Engine",
    "proj": "Buffer pool, B+ tree, hash index, SQL binder/planner/executor — pass bustub sqllogictest"
  },
  {
    "code": "CSCE 611",
    "title": "Operating Systems — xv6 Labs",
    "proj": "Add lottery scheduler, copy-on-write, mmap, and user-level threads to xv6"
  },
  {
    "code": "CSCE 614",
    "title": "Computer Architecture — Beta CPU Pipeline",
    "proj": "Single-cycle → 5-stage pipeline with forwarding & hazard detection in Verilog"
  }
];
export const tracks = {
  "A": {
    "id": "A",
    "label": "Track A · AI/ML",
    "courses": [
      {
        "code": "CSCE 625",
        "title": "AI — A* + CSP + MDP"
      },
      {
        "code": "CSCE 633",
        "title": "ML — Stanford CS229"
      },
      {
        "code": "CSCE 636",
        "title": "DL — 6.S191 + Transformers"
      },
      {
        "code": "CSCE 638",
        "title": "PGM — Bayesian Networks"
      },
      {
        "code": "CSCE 642",
        "title": "Adv AI — Neurosymbolic"
      },
      {
        "code": "CSCE 676",
        "title": "Visualization — D3 + Tableau"
      }
    ]
  },
  "B": {
    "id": "B",
    "label": "Track B · Systems/Sec",
    "courses": [
      {
        "code": "CSCE 612",
        "title": "Networks — CS144 + Mininet"
      },
      {
        "code": "CSCE 678",
        "title": "Distributed Sec — TLS"
      },
      {
        "code": "CSCE 711",
        "title": "NetSec — IDS/BGP"
      },
      {
        "code": "CSCE 701",
        "title": "Cyber Fundamentals — RIT"
      },
      {
        "code": "CSCE 652",
        "title": "Robotics Planning — RRT"
      },
      {
        "code": "CSCE 716",
        "title": "Secure Software — Fuzzing"
      }
    ]
  },
  "C": {
    "id": "C",
    "label": "Track C · Graphics",
    "courses": [
      {
        "code": "CSCE 641",
        "title": "Graphics — Ray vs Raster"
      },
      {
        "code": "CSCE 646",
        "title": "Vision — SIFT/SfM"
      },
      {
        "code": "CSCE 650",
        "title": "Comp Robotics — Kinematics"
      },
      {
        "code": "CSCE 635",
        "title": "AI Robotics — SLAM"
      },
      {
        "code": "CSCE 630",
        "title": "Intelligent Agents — BDI"
      },
      {
        "code": "CSCE 679",
        "title": "3D Reconstruction — NeRF"
      }
    ]
  }
} as const;
export type TrackId = keyof typeof tracks;
