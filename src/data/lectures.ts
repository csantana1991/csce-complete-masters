// Course map recovered from the CSCE Complete Masters study file.
export type Lecture = {
  code: string;
  title: string;
  duration: string;
  topics: string[];
  bullets: string[];
  script: string;
};
export const lectures: Lecture[] = [
  {
    "code": "CSCE 608",
    "title": "Database Systems — Storage to Transactions",
    "duration": "18:42",
    "topics": [
      "ER diagrams",
      "Relational model & algebra",
      "SQL optimization",
      "BCNF / 3NF",
      "B+ Tree indexing",
      "ACID & WAL"
    ],
    "bullets": [
      "ER → Relational mapping with keys",
      "Heuristic query optimization",
      "Index selection & cost model",
      "Conflict serializable schedules"
    ],
    "script": "This whiteboard lecture starts with an Entity-Relationship diagram for TAMU registration — Students, Courses, Sections — showing cardinality and participation. We translate it to relations, emphasizing primary key choice and foreign key constraints. Next we walk through relational algebra: sigma for selection, pi for projection, and join optimization — pushing selection down to reduce cardinality. The board shows SQL examples with EXPLAIN ANALYZE, demonstrating how a B+ tree index on (dept, course_no) turns a seq scan into index scan. Then BCNF decomposition: we test a functional dependency StudentID → Major, detect violation, and split. Finally ACID: we draw WAL log with LSN, redo/undo phases, and discuss strict 2PL vs OCC. The payoff is building a mini BusTub storage engine that passes all SQL logic tests."
  },
  {
    "code": "CSCE 611",
    "title": "Operating Systems — Scheduling to xv6",
    "duration": "22:17",
    "topics": [
      "FCFS / SJF / RR scheduling",
      "Virtual memory & paging",
      "xv6 proc.c code",
      "File systems"
    ],
    "bullets": [
      "Gantt charts for turnaround time",
      "Multi-level page table walk",
      "proc.c scheduler loop",
      "Inode allocation"
    ],
    "script": "We open with three processes P1=24ms, P2=3ms, P3=3ms and draw Gantt charts for FCFS (avg wait 17ms), SJF (avg 3ms), and Round Robin q=4ms showing context switch overhead. The whiteboard shows ready queue and p->state transitions in xv6. Then virtual memory: we map VA 0x8000 to PA via Sv39 three-level page table, with PTE flags R/W/X/U/V. The proc.c excerpt shows scheduler() infinite loop calling sched() and swtch(). We trace fork() copying pagetable and usertrap handling page faults. Finally we sketch xv6 log-structured file system, inode bitmap, and crash consistency via logging."
  },
  {
    "code": "CSCE 614",
    "title": "Computer Architecture — Pipeline & Cache",
    "duration": "24:05",
    "topics": [
      "RISC-V 5-stage IF/ID/EX/MEM/WB",
      "Data & control hazards",
      "L1/L2/L3 cache hierarchy",
      "Multiprocessor coherence MESI"
    ],
    "bullets": [
      "Forwarding vs stalling",
      "Branch predictor BTB",
      "Cache hit ratio calculation",
      "Beta CPU from MIT 6.004"
    ],
    "script": "The lecture draws the classic 5-stage pipeline with registers IF/ID, ID/EX, EX/MEM, MEM/WB. We insert instructions lw, add, sw and show RAW hazard needing forwarding from EX/MEM to ID/EX. Control hazard: beq mispredict flushes IF/ID. We compute CPI with stalls. Then cache: we draw direct-mapped L1 32KB, 64B lines, tag/index/offset split, and show LRU vs pseudo-LRU. L2 inclusive, L3 shared. We walk through address 0xABCD and calculate hit/miss, then derive AMAT = hitTime + missRate*missPenalty."
  },
  {
    "code": "CSCE 633/636",
    "title": "ML & Deep Learning — From GD to Transformers",
    "duration": "26:33",
    "topics": [
      "Gradient descent theta update",
      "Neural nets & backprop",
      "CNN kernel",
      "Transformer QKV attention",
      "PyTorch code"
    ],
    "bullets": [
      "theta := theta - alpha * grad",
      "Conv2d im2col",
      "Attention(Q,K,V)=softmax(QK^T/sqrt(d_k))V",
      "torch.nn.Transformer"
    ],
    "script": "We start with linear regression cost J(theta)=1/2m sum(h-y)^2 and derive gradient, writing the whiteboard update theta_j := theta_j - alpha * dJ/dtheta_j. We plot loss surface and show batch vs SGD vs Adam. Then a 2-layer net: forward z2=W1x+b1, a2=sigmoid(z2), backward chain rule delta. CNN: we draw 3x3 kernel sliding over 5x5 image, compute feature map, and discuss padding/stride. For Transformers we write Q=XW_Q, K=XW_K, V=XW_V and the scaled dot-product attention formula with softmax row-wise and masking. PyTorch snippet shows nn.Conv2d and nn.MultiheadAttention."
  },
  {
    "code": "CSCE 641",
    "title": "Computer Graphics — Raster vs Ray",
    "duration": "20:11",
    "topics": [
      "Ray tracing vs rasterization",
      "OpenGL shading pipeline",
      "Phong illumination",
      "Cornell box & BVH"
    ],
    "bullets": [
      "Primary ray O = eye + t*d",
      "Vertex/Fragment shader",
      "I = ka + kd(N·L) + ks(R·V)^shininess",
      "BVH traversal"
    ],
    "script": "Side-by-side: rasterization projects triangles via MVP matrix and z-buffer, while ray tracing shoots primary rays O + tD and tests intersection. We derive ray-triangle Moller-Trumbore and draw BVH tree reducing O(N) to O(log N). Then OpenGL pipeline: VAO, vertex shader gl_Position = projection*view*model*vec4(pos,1), fragment shader Phong. We write Phong equation on board: ambient + diffuse max(N·L,0) + specular pow(max(R·V,0), shininess). Cornell box scene demonstrates global illumination, soft shadows via shadow rays, and reflection recursion."
  }
];

export type LectureStub = { code: string; title: string; topics: string[]; note: string };
export const lectureStubs: LectureStub[] = [
  {
    "code": "CSCE 701",
    "title": "Cybersecurity — Threat Modeling & Exploit Dev",
    "topics": [
      "STRIDE",
      "Buffer overflow & ROP",
      "XSS/CSRF",
      "TLS"
    ],
    "note": "Full lecture script included, video coming — covers stack canaries, ASLR bypass, secure coding from RIT & MIT 6.858"
  },
  {
    "code": "CSCE 612",
    "title": "Computer Networks — TCP to SDN",
    "topics": [
      "TCP congestion",
      "BGP",
      "QUIC & HTTP/3",
      "SDN OpenFlow"
    ],
    "note": "Full lecture script included, video coming — Mininet lab building L2 learning switch"
  }
];
