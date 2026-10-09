// Course map recovered from the CSCE Complete Masters study file.
export type FreeResource = { label: string; url: string };
export type Course = {
  code: string;
  title: string;
  desc: string;
  prereq: string;
  category: string;
  credits: number;
  free: FreeResource[];
};
export const courses: Course[] = [
  {
    "code": "CSCE 603",
    "title": "Database Systems II",
    "desc": "Advanced database: distributed DB, NoSQL, NewSQL, query optimization, concurrency control. TAMU catalog: implementation of storage engine.",
    "prereq": "CSCE 310, 608",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.5830 OCW",
        "url": "https://ocw.mit.edu/courses/6-5830-database-systems-fall-2023/"
      },
      {
        "label": "Stanford CS145",
        "url": "https://archive.org/details/Stanford-CS145"
      }
    ]
  },
  {
    "code": "CSCE 604",
    "title": "Programming Language Design",
    "desc": "Formal semantics, type systems, lambda calculus, polymorphism.",
    "prereq": "CSCE 314",
    "category": "Foundations",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS242",
        "url": "https://web.stanford.edu/class/cs242/"
      }
    ]
  },
  {
    "code": "CSCE 605",
    "title": "Compiler Design",
    "desc": "Lexical analysis, parsing, semantic analysis, optimization, code generation.",
    "prereq": "CSCE 314, 410",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "Neso Academy Compiler",
        "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXRgjPNzeS-Lfy-q"
      },
      {
        "label": "Stanford CS143",
        "url": "https://web.stanford.edu/class/cs143/"
      }
    ]
  },
  {
    "code": "CSCE 606",
    "title": "Software Engineering",
    "desc": "Agile, requirements, design patterns, testing, CI/CD. TAMU paired with CSCE 431.",
    "prereq": "CSCE 431",
    "category": "Foundations",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.1040",
        "url": "https://web.mit.edu/6.1040/"
      }
    ]
  },
  {
    "code": "CSCE 608",
    "title": "Database Systems",
    "desc": "Relational model, ER diagrams, relational algebra, SQL, normalization BCNF/3NF, indexing B+ trees, ACID.",
    "prereq": "CSCE 310",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.5830 OCW",
        "url": "https://ocw.mit.edu/courses/6-5830-database-systems-fall-2023/"
      },
      {
        "label": "CMU 15-445 BusTub",
        "url": "https://15445.courses.cs.cmu.edu/"
      }
    ]
  },
  {
    "code": "CSCE 611",
    "title": "Operating Systems",
    "desc": "Processes, threads, CPU scheduling FCFS/SJF/RR, synchronization, virtual memory, paging, file systems. xv6 labs.",
    "prereq": "CSCE 410",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.S081",
        "url": "https://pdos.csail.mit.edu/6.S081/2020/"
      },
      {
        "label": "6.S081 YouTube",
        "url": "https://www.youtube.com/playlist?list=PLTsf9UeqkReZHXWY9yJvTwLJWYYPcKEqK"
      }
    ]
  },
  {
    "code": "CSCE 612",
    "title": "Computer Networks",
    "desc": "OSI, TCP/IP, routing BGP/OSPF, congestion control, SDN. Paired with 463.",
    "prereq": "CSCE 463",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS144",
        "url": "https://cs144.github.io/"
      },
      {
        "label": "CS144 YouTube",
        "url": "https://www.youtube.com/playlist?list=PLoCMsyE1cvdWKsOwLPdLGb9W9pAN6R3h4"
      }
    ]
  },
  {
    "code": "CSCE 613",
    "title": "Advanced Operating Systems",
    "desc": "Distributed OS, virtualization, containers, microkernels.",
    "prereq": "CSCE 611",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.824",
        "url": "https://pdos.csail.mit.edu/6.824/"
      }
    ]
  },
  {
    "code": "CSCE 614",
    "title": "Computer Architecture",
    "desc": "RISC-V 5-stage pipeline IF/ID/EX/MEM/WB, hazards, branch prediction, cache L1/L2/L3, multiprocessor coherence.",
    "prereq": "CSCE 350, 410",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.004 OCW",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      },
      {
        "label": "edX MITx 6.004.1x",
        "url": "https://courses.edx.org/courses/course-v1:MITx+6.004.1x_3+3T2016/course/"
      }
    ]
  },
  {
    "code": "CSCE 620",
    "title": "Computational Geometry",
    "desc": "Convex hull, triangulation, Voronoi diagrams.",
    "prereq": "CSCE 629",
    "category": "Theory",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.850",
        "url": "https://courses.csail.mit.edu/6.850/"
      }
    ]
  },
  {
    "code": "CSCE 621",
    "title": "Randomized Algorithms",
    "desc": "Probabilistic analysis, Chernoff bounds, Monte Carlo.",
    "prereq": "CSCE 629",
    "category": "Theory",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.1210",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "code": "CSCE 622",
    "title": "Generic Programming",
    "desc": "C++ templates, STL, concepts.",
    "prereq": "CSCE 121",
    "category": "Foundations",
    "credits": 3,
    "free": [
      {
        "label": "CppCon",
        "url": "https://www.youtube.com/c/CppCon"
      }
    ]
  },
  {
    "code": "CSCE 624",
    "title": "Computational Logic",
    "desc": "SAT, SMT, model checking.",
    "prereq": "CSCE 221",
    "category": "Theory",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS157",
        "url": "https://web.stanford.edu/class/cs157/"
      }
    ]
  },
  {
    "code": "CSCE 625",
    "title": "Artificial Intelligence",
    "desc": "Search A*, CSP, logic, planning, MDPs. Paired with 420.",
    "prereq": "CSCE 420",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.034 OCW",
        "url": "http://ocw.mit.edu/6-034F10"
      },
      {
        "label": "CS50 AI edX",
        "url": "https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python"
      }
    ]
  },
  {
    "code": "CSCE 627",
    "title": "Computational Complexity",
    "desc": "P vs NP, reductions, Cook-Levin.",
    "prereq": "CSCE 629",
    "category": "Theory",
    "credits": 3,
    "free": [
      {
        "label": "MIT 18.404",
        "url": "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/"
      }
    ]
  },
  {
    "code": "CSCE 629",
    "title": "Analysis of Algorithms",
    "desc": "CLRS implementation, divide & conquer, DP, greedy, amortized analysis. Core grad algorithms.",
    "prereq": "CSCE 221",
    "category": "Theory",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.1210",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      },
      {
        "label": "MIT 6.1200J",
        "url": "https://www.youtube.com/watch?v=sbpCTjmw85g"
      }
    ]
  },
  {
    "code": "CSCE 630",
    "title": "Intelligent Agents",
    "desc": "Multi-agent systems, BDI architecture.",
    "prereq": "CSCE 625",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "Berkeley CS188",
        "url": "https://inst.eecs.berkeley.edu/~cs188/"
      }
    ]
  },
  {
    "code": "CSCE 632",
    "title": "NLP",
    "desc": "Transformers, BERT, seq2seq, attention.",
    "prereq": "CSCE 633",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS224N",
        "url": "https://web.stanford.edu/class/cs224n/"
      }
    ]
  },
  {
    "code": "CSCE 633",
    "title": "Machine Learning",
    "desc": "Linear regression, logistic, SVM, gradient descent theta := theta - alpha * grad, bias/variance.",
    "prereq": "CSCE 625",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS229",
        "url": "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU"
      }
    ]
  },
  {
    "code": "CSCE 634",
    "title": "HCI",
    "desc": "User studies, prototyping, accessibility.",
    "prereq": "CSCE 431",
    "category": "HCI",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.813",
        "url": "https://ocw.mit.edu/courses/6-813-user-interface-design-and-implementation-spring-2011/"
      }
    ]
  },
  {
    "code": "CSCE 635",
    "title": "AI Robotics",
    "desc": "SLAM, path planning, perception.",
    "prereq": "CSCE 625",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "Berkeley CS287",
        "url": "https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/"
      }
    ]
  },
  {
    "code": "CSCE 636",
    "title": "Deep Learning",
    "desc": "Neural nets, CNN kernel conv, Transformer attention QKV formula, PyTorch.",
    "prereq": "CSCE 633",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.S191",
        "url": "https://introtodeeplearning.com"
      },
      {
        "label": "6.S191 YouTube",
        "url": "https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVOv4U5BMwcM"
      }
    ]
  },
  {
    "code": "CSCE 638",
    "title": "Probabilistic Graphical Models",
    "desc": "Bayesian networks, MRFs, inference.",
    "prereq": "CSCE 633",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS228",
        "url": "https://cs.stanford.edu/~ermon/cs228/index.html"
      }
    ]
  },
  {
    "code": "CSCE 641",
    "title": "Computer Graphics",
    "desc": "Ray tracing vs rasterization, OpenGL shading, Phong illumination, Cornell box, BVH.",
    "prereq": "CSCE 441",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "UCSD CSE167x edX",
        "url": "https://www.edx.org/course/computer-graphics"
      }
    ]
  },
  {
    "code": "CSCE 644",
    "title": "Advanced Computer Graphics",
    "desc": "Global illumination, path tracing, photon mapping.",
    "prereq": "CSCE 641",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS348B",
        "url": "https://graphics.stanford.edu/courses/cs348b-21-spring/"
      }
    ]
  },
  {
    "code": "CSCE 646",
    "title": "Computer Vision",
    "desc": "Feature matching SIFT, stereo, structure from motion.",
    "prereq": "CSCE 641",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS231n",
        "url": "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv"
      }
    ]
  },
  {
    "code": "CSCE 650",
    "title": "Computational Robotics",
    "desc": "Kinematics, dynamics, motion planning RRT.",
    "prereq": "CSCE 625",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "Berkeley CS287",
        "url": "https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/"
      }
    ]
  },
  {
    "code": "CSCE 651",
    "title": "Parallel Computing",
    "desc": "MPI, OpenMP, CUDA.",
    "prereq": "CSCE 614",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.172",
        "url": "https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/"
      }
    ]
  },
  {
    "code": "CSCE 652",
    "title": "Robotics Planning",
    "desc": "Configuration space, sampling-based planning.",
    "prereq": "CSCE 650",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "Berkeley CS287",
        "url": "https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/"
      }
    ]
  },
  {
    "code": "CSCE 655",
    "title": "Software Architecture",
    "desc": "Microservices, event-driven.",
    "prereq": "CSCE 606",
    "category": "Foundations",
    "credits": 3,
    "free": [
      {
        "label": "CMU 17-313",
        "url": "https://cmu-313.github.io/"
      }
    ]
  },
  {
    "code": "CSCE 656",
    "title": "Information Retrieval",
    "desc": "Indexing, ranking TF-IDF, PageRank.",
    "prereq": "CSCE 633",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS276",
        "url": "https://web.stanford.edu/class/cs276/"
      }
    ]
  },
  {
    "code": "CSCE 662",
    "title": "Distributed Systems",
    "desc": "Consensus Paxos/Raft, 2PC.",
    "prereq": "CSCE 611",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.824",
        "url": "https://pdos.csail.mit.edu/6.824/"
      }
    ]
  },
  {
    "code": "CSCE 665",
    "title": "Formal Methods",
    "desc": "TLA+, verification.",
    "prereq": "CSCE 629",
    "category": "Theory",
    "credits": 3,
    "free": [
      {
        "label": "TLA+ Video",
        "url": "https://www.youtube.com/watch?v=5YcLWZ-O1Xk"
      }
    ]
  },
  {
    "code": "CSCE 668",
    "title": "Graph Algorithms",
    "desc": "Max flow, matching, spectral.",
    "prereq": "CSCE 629",
    "category": "Theory",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS261",
        "url": "https://web.stanford.edu/class/cs261/"
      }
    ]
  },
  {
    "code": "CSCE 672",
    "title": "Computer Architecture II",
    "desc": "Out-of-order, superscalar, speculation.",
    "prereq": "CSCE 614",
    "category": "Systems",
    "credits": 3,
    "free": [
      {
        "label": "Onur Mutlu",
        "url": "https://www.youtube.com/c/OnurMutluLectures"
      }
    ]
  },
  {
    "code": "CSCE 675",
    "title": "Data Mining",
    "desc": "Clustering, frequent patterns.",
    "prereq": "CSCE 633",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS246",
        "url": "https://web.stanford.edu/class/cs246/"
      }
    ]
  },
  {
    "code": "CSCE 676",
    "title": "Data Visualization",
    "desc": "D3.js, Tableau, visual encoding.",
    "prereq": "CSCE 633",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "CMU 05-839",
        "url": "https://courses.cs.cmu.edu/05-839/"
      }
    ]
  },
  {
    "code": "CSCE 678",
    "title": "Distributed Systems Security",
    "desc": "Auth, TLS, zero trust.",
    "prereq": "CSCE 611",
    "category": "Security",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.858",
        "url": "https://css.csail.mit.edu/6.858/2020/"
      }
    ]
  },
  {
    "code": "CSCE 679",
    "title": "3D Reconstruction",
    "desc": "NeRF, SfM, multi-view stereo.",
    "prereq": "CSCE 646",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS231n",
        "url": "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv"
      }
    ]
  },
  {
    "code": "CSCE 681",
    "title": "Grad Seminar",
    "desc": "Research presentations, paper reviews.",
    "prereq": "Grad standing",
    "category": "Foundations",
    "credits": 1,
    "free": [
      {
        "label": "TAMU Colloquium",
        "url": "https://www.youtube.com/@TAMUCSCE"
      }
    ]
  },
  {
    "code": "CSCE 689",
    "title": "Special Topics",
    "desc": "Rotating topics: LLM Systems, Vector DB.",
    "prereq": "Varies",
    "category": "AI/ML",
    "credits": 3,
    "free": [
      {
        "label": "Stanford MLSys",
        "url": "https://mlsys.stanford.edu/"
      }
    ]
  },
  {
    "code": "CSCE 701",
    "title": "Cybersecurity Fundamentals",
    "desc": "Threat modeling, crypto, buffer overflow, ROP, web sec XSS/CSRF.",
    "prereq": "CSCE 465",
    "category": "Security",
    "credits": 3,
    "free": [
      {
        "label": "RIT Cybersecurity",
        "url": "https://www.rit.edu/advancedmanufacturing/industry40/course/cybersecurity-fundamentals"
      }
    ]
  },
  {
    "code": "CSCE 704",
    "title": "Advanced Cryptography",
    "desc": "Zero-knowledge, MPC, lattice crypto.",
    "prereq": "CSCE 701",
    "category": "Security",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS255",
        "url": "https://crypto.stanford.edu/cs255/"
      }
    ]
  },
  {
    "code": "CSCE 711",
    "title": "Advanced Networking Security",
    "desc": "DDoS, BGP hijack, IDS.",
    "prereq": "CSCE 612, 701",
    "category": "Security",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.858",
        "url": "https://css.csail.mit.edu/6.858/2020/"
      }
    ]
  },
  {
    "code": "CSCE 716",
    "title": "Secure Software",
    "desc": "Fuzzing, symbolic execution, KLEE.",
    "prereq": "CSCE 701",
    "category": "Security",
    "credits": 3,
    "free": [
      {
        "label": "CMU 18-730",
        "url": "https://www.cs.cmu.edu/~ckaestne/15313/"
      }
    ]
  },
  {
    "code": "CSCE 720",
    "title": "Cloud Security",
    "desc": "IAM, confidential computing, SGX.",
    "prereq": "CSCE 701",
    "category": "Security",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.858",
        "url": "https://css.csail.mit.edu/6.858/2020/"
      }
    ]
  },
  {
    "code": "CSCE 750",
    "title": "Advanced Graphics Lab",
    "desc": "Research project in rendering.",
    "prereq": "CSCE 641",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "MIT 6.837",
        "url": "https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/"
      }
    ]
  },
  {
    "code": "CSCE 752",
    "title": "Robotics II",
    "desc": "Dynamics, control, manipulation.",
    "prereq": "CSCE 652",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "Berkeley CS287",
        "url": "https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/"
      }
    ]
  },
  {
    "code": "CSCE 753",
    "title": "Computer Vision II",
    "desc": "Deep learning for vision, Vision Transformers, DETR.",
    "prereq": "CSCE 646",
    "category": "Graphics",
    "credits": 3,
    "free": [
      {
        "label": "Stanford CS231n",
        "url": "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv"
      }
    ]
  },
  {
    "code": "CSCE 765",
    "title": "Applied ML Security",
    "desc": "Adversarial examples, model extraction.",
    "prereq": "CSCE 633, 701",
    "category": "Security",
    "credits": 3,
    "free": [
      {
        "label": "Berkeley CS294",
        "url": "https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/"
      }
    ]
  }
];

export const CATEGORIES = ["All", "Foundations", "Theory", "AI/ML", "Systems", "Security", "Graphics", "HCI"] as const;
