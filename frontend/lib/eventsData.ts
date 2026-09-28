export interface EventItem {
  id: string;
  name: string; // Crisp 1-2 word display title (e.g. "HACKATHON", "WEB DEVELOPMENT")
  fullTitle: string; // Complete descriptive name (e.g. "Crucible — Flagship 12-Hour Hackathon")
  badge: string;
  badgeLevel: "Crucible" | "Advanced" | "Intermediate" | "Beginner";
  isFlagship?: boolean;
  trackId: string;
  trackName: string;
  shortDesc: string;
  fullDesc: string;
  time: string;
  date: string;
  prize: string;
  price: string;
  team: string;
  venue: string;
  accentColor: string; // e.g. '#35e0c9'
  glowColor: string;   // rgba
  borderColor: string; // CSS border color
  image: string;
  highlights: string[];
  rules: string[];
}

export interface TrackItem {
  id: string;
  num: string;
  letter: string;
  name: string;
  subtitle: string;
  description: string;
  accentColor: string;
  badgeClass: string;
}

export const TRACKS: TrackItem[] = [
  {
    id: "all",
    num: "00",
    letter: "ALL",
    name: "ALL ARENAS",
    subtitle: "Complete Directory",
    description: "Browse all 15 competitive arenas across engineering, gaming, and design.",
    accentColor: "#35e0c9",
    badgeClass: "border-circuit/60 text-circuit bg-circuit/10",
  },
  {
    id: "technical",
    num: "01",
    letter: "A",
    name: "TECHNICAL & CODING",
    subtitle: "Software & Systems",
    description: "Hackathons, competitive coding, bug hunting, data analytics, and web development.",
    accentColor: "#35e0c9",
    badgeClass: "border-[#35e0c9]/60 text-[#35e0c9] bg-[#35e0c9]/10",
  },
  {
    id: "ideation",
    num: "02",
    letter: "B",
    name: "KNOWLEDGE & IDEATION",
    subtitle: "AI & Intelligence",
    description: "AI prompt duels, tech history trivia, and academic paper defense.",
    accentColor: "#c084fc",
    badgeClass: "border-purple-400/60 text-purple-300 bg-purple-500/10",
  },
  {
    id: "learning",
    num: "03",
    letter: "C",
    name: "HANDS-ON LEARNING",
    subtitle: "Masterclasses & Workshops",
    description: "Intensive workshops on low-latency engineering, kernel systems, and AI.",
    accentColor: "#f472b6",
    badgeClass: "border-pink-400/60 text-pink-300 bg-pink-500/10",
  },
  {
    id: "adventure",
    num: "04",
    letter: "D",
    name: "FUN & ADVENTURE",
    subtitle: "Robotics & Ciphers",
    description: "Cryptographic scavenger hunts and high-octane robotic obstacle races.",
    accentColor: "#fbbf24",
    badgeClass: "border-amber-400/60 text-amber-300 bg-amber-500/10",
  },
  {
    id: "gaming",
    num: "05",
    letter: "E",
    name: "GAMING ARENA",
    subtitle: "Esports Tournaments",
    description: "High-stakes squad esports tournaments live on stage.",
    accentColor: "#60a5fa",
    badgeClass: "border-blue-400/60 text-blue-300 bg-blue-500/10",
  },
  {
    id: "mun",
    num: "06",
    letter: "F",
    name: "GLOBAL AFFAIRS MUN",
    subtitle: "Diplomacy & AI Policy",
    description: "Simulated UN committee debating autonomous weapons and cyberwarfare.",
    accentColor: "#34d399",
    badgeClass: "border-emerald-400/60 text-emerald-300 bg-emerald-500/10",
  },
  {
    id: "suggested",
    num: "07",
    letter: "G",
    name: "SPECIAL ARENAS",
    subtitle: "Experimental Challenges",
    description: "Wildcard challenges like screenless blind coding and pure mental logic.",
    accentColor: "#f87171",
    badgeClass: "border-rose-400/60 text-rose-300 bg-rose-500/10",
  },
];

export const EVENTS: EventItem[] = [
  // --- TECHNICAL & CODING ---
  {
    id: "crucible",
    name: "HACKATHON",
    fullTitle: "Crucible — Flagship 12-Hour Hackathon",
    badge: "Crucible",
    badgeLevel: "Crucible",
    isFlagship: true,
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "12 hours to build, hack, and demo a real working prototype from scratch.",
    fullDesc: "Crucible is XaviTech's flagship 12-hour hackathon. Bring your team, pick a real-world problem in AI, civic tech, or developer tools, and build a working prototype. Mentors will be on the floor throughout the sprint, leading up to live stage demos before our panel of industry judges.",
    time: "09:30 AM – 09:30 PM",
    date: "24 Oct 2026",
    prize: "₹50,000",
    price: "₹1,499",
    team: "2 to 4 Members",
    venue: "Aryabhata Computing Center",
    accentColor: "#ff6848",
    glowColor: "rgba(255,104,72,0.25)",
    borderColor: "rgba(255,104,72,0.5)",
    image: "/images/hackathon.jpeg",
    highlights: [
      "12-Hour Continuous Product Sprint",
      "Direct Mentorship by Senior Tech Architects",
      "Live 3-Minute Stage Pitch & Demo Session",
      "Cloud Credits & API Access Provided"
    ],
    rules: [
      "All code must be written during the 12-hour window.",
      "Open-source libraries and APIs are permitted.",
      "Teams must consist of 2 to 4 members.",
      "Final submission requires a working demo and public Git repo."
    ]
  },
  {
    id: "code-sprint",
    name: "CODE SPRINT",
    fullTitle: "Code Sprint — Competitive Algorithmic Arena",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Battle through timed algorithmic challenges and prove your coding speed.",
    fullDesc: "Test your raw speed, logic, and data structure mastery. Code Sprint puts competitive programmers against a series of algorithmic problems with automated instant evaluation and strict runtime constraints.",
    time: "11:00 AM – 01:30 PM",
    date: "24 Oct 2026",
    prize: "₹15,000",
    price: "₹899",
    team: "Individual",
    venue: "Turing Computer Labs",
    accentColor: "#35e0c9",
    glowColor: "rgba(53,224,201,0.25)",
    borderColor: "rgba(53,224,201,0.4)",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Automated IO Judge Platform",
      "Speed-Based Time Penalties",
      "Language support: C++, Python, Java, Rust, Go"
    ],
    rules: [
      "Individual participation only.",
      "No external AI assistants or search engines allowed during rounds.",
      "Plagiarism detection will run automatically on all submissions."
    ]
  },
  {
    id: "debugging-crucible",
    name: "DEBUGGING",
    fullTitle: "Debugging Arena — Bug Hunting & Optimization",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Track down memory leaks, concurrency bugs, and broken logic under pressure.",
    fullDesc: "Dive into deliberately broken codebases filled with memory leaks, race conditions, and deadlocks. Your goal: diagnose the root cause, fix the bugs, and make sure all unit tests pass before time runs out.",
    time: "02:00 PM – 04:00 PM",
    date: "24 Oct 2026",
    prize: "₹10,000",
    price: "₹699",
    team: "Individual or Pairs (1–2)",
    venue: "Systems Lab",
    accentColor: "#35e0c9",
    glowColor: "rgba(53,224,201,0.25)",
    borderColor: "rgba(53,224,201,0.4)",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Real Bug Diagnosis Scenarios",
      "Profiling & Debugging Tools Allowed",
      "Bonus Points for Runtime Speedups"
    ],
    rules: [
      "Fix bugs without breaking existing test suites.",
      "Time elapsed and test pass rate determine score."
    ]
  },
  {
    id: "data-analytics",
    name: "DATA ANALYTICS",
    fullTitle: "Data Analytics & Insight Sprint",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Turn raw datasets into actionable insights and executive dashboards.",
    fullDesc: "Uncover hidden patterns in real-world datasets. Clean messy data, perform exploratory analysis, and present a compelling data dashboard to convince our panel of data scientists.",
    time: "01:30 PM – 04:30 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹999",
    team: "1 to 2 Members",
    venue: "Analytics Studio",
    accentColor: "#35e0c9",
    glowColor: "rgba(53,224,201,0.25)",
    borderColor: "rgba(53,224,201,0.4)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Real-World Industry Dataset",
      "Choice of Python, SQL, Excel, Power BI or Tableau",
      "Executive Dashboard Pitch Round"
    ],
    rules: [
      "Open choice of analytical tools.",
      "Final submission requires interactive dashboard + summary presentation."
    ]
  },
  {
    id: "ui-ux-designathon",
    name: "UI/UX DESIGN",
    fullTitle: "UI/UX Designathon — Design Systems & Workflows",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Design high-fidelity interfaces and modern design systems for web apps.",
    fullDesc: "Take a user problem statement and transform it into a stunning, responsive UI prototype. Focus on micro-interactions, accessibility, component consistency, and visual hierarchy.",
    time: "10:30 AM – 02:00 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹899",
    team: "1 to 2 Members",
    venue: "Design Innovation Lab",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Figma / Framer Interactive Prototyping",
      "Design System & Accessibility Evaluation",
      "Live Design Critique by Senior Product Designers"
    ],
    rules: [
      "All designs must be original work created during the event.",
      "Prototypes must show desktop and mobile views."
    ]
  },
  {
    id: "web-craft",
    name: "WEB DEVELOPMENT",
    fullTitle: "Web Craft — Interactive Web App Build",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Build interactive full-stack web applications with modern frameworks.",
    fullDesc: "Create dynamic, fast, and visually striking web apps using Next.js, React, Three.js, or Tailwind. Ship your app live by the deadline and demonstrate performance and polished UI.",
    time: "01:00 PM – 05:00 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹999",
    team: "1 to 2 Members",
    venue: "Computing Lab 5",
    accentColor: "#f0a15b",
    glowColor: "rgba(240,161,91,0.25)",
    borderColor: "rgba(240,161,91,0.4)",
    image: "/images/webdev.jpeg",
    highlights: [
      "Modern Web Stack: Next.js, React, Tailwind, Framer",
      "Performance & Responsive UI Evaluation",
      "Live Deployment Verification"
    ],
    rules: [
      "App must be deployed live on Vercel / Netlify / Render by deadline.",
      "Teams of 1 to 2 members."
    ]
  },

  // --- KNOWLEDGE & IDEATION ---
  {
    id: "ai-prompt-duel",
    name: "AI PROMPT BATTLE",
    fullTitle: "AI Prompt & Agent Duel",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "ideation",
    trackName: "KNOWLEDGE & IDEATION",
    shortDesc: "Craft AI prompts and autonomous agents to outsmart rivals in real time.",
    fullDesc: "Put your prompt engineering skills to the test. Combine system prompts, context windows, and autonomous agent chains to solve complex logic puzzles faster than rival teams.",
    time: "03:00 PM – 05:00 PM",
    date: "24 Oct 2026",
    prize: "₹10,000",
    price: "₹799",
    team: "Individual",
    venue: "Cognitive Computing Theater",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "/events/ai_prompt_duel.jpg",
    highlights: [
      "Prompt Optimization & Agentic Workflows",
      "Token Efficiency & Accuracy Scoring",
      "Live Arena Leaderboard"
    ],
    rules: [
      "Individual competition.",
      "Standard LLM API keys provided at event start."
    ]
  },
  {
    id: "chronos-tech-quiz",
    name: "TECH QUIZ",
    fullTitle: "The Chronos Tech Quiz & Trivia",
    badge: "Beginner",
    badgeLevel: "Beginner",
    trackId: "ideation",
    trackName: "KNOWLEDGE & IDEATION",
    shortDesc: "Fast-paced trivia covering computing history, silicon, and sci-fi lore.",
    fullDesc: "From the early days of computing to modern AI breakthroughs and internet lore, Chronos tests your team's knowledge across rapid-fire buzzer rounds and visual trivia.",
    time: "11:30 AM – 01:30 PM",
    date: "24 Oct 2026",
    prize: "₹8,000",
    price: "₹499",
    team: "Pairs (2 Members)",
    venue: "Auditorium Minor",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Buzzer & Audio-Visual Trivia Rounds",
      "Tech History, Silicon, Cryptography & Pop Culture",
      "Live Stage Finalist Showdown"
    ],
    rules: [
      "Teams of 2 members.",
      "No electronic devices during active rounds."
    ]
  },
  {
    id: "research-paper-symposium",
    name: "RESEARCH SYMPOSIUM",
    fullTitle: "Research Paper Symposium & Defense",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "ideation",
    trackName: "KNOWLEDGE & IDEATION",
    shortDesc: "Present and defend original research in AI, systems, or cybersecurity.",
    fullDesc: "An academic defense stage for student researchers. Present your papers or literature reviews before computer science faculty, explain your methodology, and answer jury questions.",
    time: "02:00 PM – 05:00 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹999",
    team: "1 to 3 Authors",
    venue: "Academic Senate Chamber",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "10-Minute Slide Defense + Q&A",
      "Faculty Peer Review Feedback",
      "Publication opportunity in Fest Proceedings"
    ],
    rules: [
      "10-minute presentation + 5-minute Q&A defense.",
      "1 to 3 authors per paper submission."
    ]
  },

  // --- HANDS-ON LEARNING ---
  {
    id: "masterclass-applied-systems",
    name: "MASTERCLASS",
    fullTitle: "Masterclass: Applied Systems & AI",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "learning",
    trackName: "HANDS-ON LEARNING",
    shortDesc: "Hands-on workshop on low-latency systems and kernel engineering.",
    fullDesc: "An interactive session led by senior systems engineers. Learn how low-latency code works under the hood, how to profile performance, and how to optimize Linux systems.",
    time: "02:30 PM – 05:00 PM",
    date: "24 Oct 2026",
    prize: "Masterclass Badge",
    price: "₹1,299",
    team: "Individual Access",
    venue: "Auditorium Major",
    accentColor: "#f472b6",
    glowColor: "rgba(244,114,182,0.25)",
    borderColor: "rgba(244,114,182,0.4)",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Live Guided Code Walkthroughs",
      "Digital Certificate of Mastery",
      "Take-Home Code Repositories & Resources"
    ],
    rules: [
      "Open to all registered attendees.",
      "Bring a laptop with Python/Docker installed."
    ]
  },

  // --- FUN & ADVENTURE ---
  {
    id: "geodesic-cipher-hunt",
    name: "CIPHER HUNT",
    fullTitle: "The Geodesic Cipher Hunt — Treasure Quest",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "adventure",
    trackName: "FUN & ADVENTURE",
    shortDesc: "Campus-wide cryptographic treasure hunt decoding steganography and ciphers.",
    fullDesc: "Race across campus solving steganographic images, QR codes, cipher riddles, and physical hardware beacons. First team to unlock the final master vault wins.",
    time: "03:30 PM – 06:00 PM",
    date: "24 Oct 2026",
    prize: "₹10,000",
    price: "₹699",
    team: "Teams of 3 to 4",
    venue: "Campus-wide",
    accentColor: "#fbbf24",
    glowColor: "rgba(251,191,36,0.25)",
    borderColor: "rgba(251,191,36,0.4)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Physical & Digital Hybrid Clues",
      "QR Codes & Hardware Beacon Intercepts",
      "Real-Time Leaderboard Tracking"
    ],
    rules: [
      "Teams of 3 to 4 members.",
      "All clues must be solved within campus boundaries."
    ]
  },
  {
    id: "death-race",
    name: "DEATH RACE",
    fullTitle: "Death Race: Robotic Obstacle Arena",
    badge: "Advanced",
    badgeLevel: "Advanced",
    isFlagship: true,
    trackId: "adventure",
    trackName: "FUN & ADVENTURE",
    shortDesc: "Custom robotic rovers battling through mud, inclines, and obstacles.",
    fullDesc: "Build your wired or wireless robotic rover and take on our rugged obstacle arena. Maneuver through incline ramps, rotating barriers, and tight bridges in a high-speed timed race.",
    time: "01:00 PM – 04:00 PM",
    date: "24 Oct 2026",
    prize: "₹15,000",
    price: "₹1,199",
    team: "2 to 3 Members",
    venue: "Outdoor Robotics Colosseum",
    accentColor: "#fbbf24",
    glowColor: "rgba(251,191,36,0.25)",
    borderColor: "rgba(251,191,36,0.4)",
    image: "/events/death_race.jpg",
    highlights: [
      "Custom Outdoor Obstacle Course",
      "Timed Speed Laps + Obstacle Clearances",
      "Bot Inspection & Pit Stop Area"
    ],
    rules: [
      "Bot weight must not exceed 5 kg.",
      "Maximum supply voltage ≤ 24V."
    ]
  },

  // --- GAMING ARENA ---
  {
    id: "bgmi-arena",
    name: "BGMI ESPORTS",
    fullTitle: "BGMI: Battlegrounds Squad Tournament",
    badge: "Crucible",
    badgeLevel: "Crucible",
    isFlagship: true,
    trackId: "gaming",
    trackName: "GAMING ARENA",
    shortDesc: "High-stakes BGMI squad tournament across Erangel and Miramar.",
    fullDesc: "Assemble your squad and drop into custom private lobbies. Battle across 4 intense matches on Erangel and Miramar with live shoutcasting on the main arena screen.",
    time: "02:00 PM – 06:00 PM",
    date: "24 Oct 2026",
    prize: "₹15,000",
    price: "₹999",
    team: "Squad of 4 (+1 Sub)",
    venue: "Esports Arena",
    accentColor: "#60a5fa",
    glowColor: "rgba(96,165,250,0.25)",
    borderColor: "rgba(96,165,250,0.4)",
    image: "/events/bgmi_arena.jpg",
    highlights: [
      "Custom Private Lobbies with Live Casting",
      "4 Match Rotation (Erangel & Miramar)",
      "Main Stage Live Broadcast"
    ],
    rules: [
      "Mobile devices only (No emulators allowed).",
      "Squads must have 4 active players."
    ]
  },

  // --- GLOBAL AFFAIRS MUN ---
  {
    id: "tech-mun",
    name: "TECH MUN",
    fullTitle: "Tech MUN: AI Sovereignty & Cyberwarfare",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "mun",
    trackName: "GLOBAL AFFAIRS MUN",
    shortDesc: "Model UN simulation debating autonomous weapons and AI sovereignty.",
    fullDesc: "Represent global delegates, deliberate on international AI treaties, and negotiate cyber-warfare protocols in a realistic Model United Nations committee setting.",
    time: "11:00 AM – 04:30 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹899",
    team: "Individual Delegate",
    venue: "Convention Hall Alpha",
    accentColor: "#34d399",
    glowColor: "rgba(52,211,153,0.25)",
    borderColor: "rgba(52,211,153,0.4)",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "UN DISEC Simulation Committee",
      "Real-Time Emergency Crisis Scenario",
      "Best Delegate & Commendation Awards"
    ],
    rules: [
      "Formal western business attire required.",
      "Position papers due prior to session opening."
    ]
  },

  // --- SUGGESTED ARENAS ---
  {
    id: "blind-coding",
    name: "BLIND CODING",
    fullTitle: "Blind Coding & Screenless Logic",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "suggested",
    trackName: "SPECIAL ARENAS",
    shortDesc: "Write error-free code with your monitor switched off.",
    fullDesc: "No visual feedback allowed! You get the problem statement, but your screen is turned off while you type. Rely purely on mental syntax and compilation before running your code.",
    time: "04:00 PM – 05:30 PM",
    date: "24 Oct 2026",
    prize: "₹6,000",
    price: "₹499",
    team: "Individual",
    venue: "Retro Computing Lab",
    accentColor: "#f87171",
    glowColor: "rgba(248,113,113,0.25)",
    borderColor: "rgba(248,113,113,0.4)",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Monitors Turned Off During Typing Phase",
      "Mental Syntax & Compilation Test",
      "Instant Code Run at Final Bell"
    ],
    rules: [
      "Monitors must remain off during typing.",
      "Compilation or syntax errors incur point deductions."
    ]
  }
];
