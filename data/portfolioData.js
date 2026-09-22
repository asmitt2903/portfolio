export const personalInfo = {
  name: "Asmit Raj",
  title: "Aspiring Software Engineer",
  tagline: "Building scalable, modern, and user-focused web applications.",
  bio: "I'm a Computer Science Engineering student and Aspiring Software Engineer passionate about building modern, scalable and interactive web applications. I enjoy solving programming problems, developing backend systems and creating clean user experiences.",
  availability: "Available for Opportunities",
  education: {
    institution: "Lovely Professional University (LPU)",
    degree: "B.Tech – Computer Science and Engineering",
    duration: "2023 – 2027",
    location: "Phagwara, Punjab, India",
    description: "Specializing in software engineering, core algorithms, database systems, web development, and cloud computing architectures.",
    highlights: [
      "Data Structures & Algorithms",
      "Full Stack Web Development",
      "Database Management Systems",
      "Operating Systems & Computer Networks"
    ]
  },
  links: {
    resume: "YOUR_GOOGLE_DRIVE_RESUME_LINK",
    github: "YOUR_GITHUB_PROFILE",
    linkedin: "YOUR_LINKEDIN_PROFILE",
    email: "YOUR_EMAIL", // e.g. mailto:asmitraj@example.com
  },
  stats: [
    { label: "Technologies", value: 10, suffix: "+" },
    { label: "Full Stack Projects", value: 10, suffix: "+" },
    { label: "Coding Problems", value: 400, suffix: "+" },
    { label: "Education", text: "B.Tech CSE" },
  ],
  heroSnippet: `const developer = {
  name: "Asmit Raj",
  role: "Aspiring Software Engineer",
  passion: "Building scalable applications"
};`,
};

export const skillsData = {
  frontend: [
    { name: "HTML", level: "Advanced", icon: "Code2" },
    { name: "CSS", level: "Advanced", icon: "Palette" },
    { name: "JavaScript", level: "Advanced", icon: "FileJson" },
    { name: "React.js", level: "Advanced", icon: "Atom" },
    { name: "Next.js", level: "Intermediate", icon: "Layers" },
    { name: "Tailwind CSS", level: "Advanced", icon: "Wind" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced", icon: "Server" },
    { name: "Express.js", level: "Advanced", icon: "Cpu" },
    { name: "REST APIs", level: "Advanced", icon: "Webhook" },
    { name: "Socket.IO", level: "Intermediate", icon: "Zap" },
  ],
  database: [
    { name: "MongoDB", level: "Advanced", icon: "Database" },
    { name: "MySQL", level: "Advanced", icon: "Table" },
    { name: "SQL Server", level: "Intermediate", icon: "HardDrive" },
    { name: "Oracle", level: "Intermediate", icon: "Box" },
  ],
  programming: [
    { name: "C++", level: "Advanced", icon: "Terminal" },
    { name: "JavaScript", level: "Advanced", icon: "FileCode" },
    { name: "Python", level: "Intermediate", icon: "Binary" },
  ],
  tools: [
    { name: "Git", level: "Advanced", icon: "GitBranch" },
    { name: "GitHub", level: "Advanced", icon: "Github" },
    { name: "VS Code", level: "Advanced", icon: "Laptop" },
    { name: "Postman", level: "Advanced", icon: "Send" },
    { name: "Jira", level: "Intermediate", icon: "CheckSquare" },
  ],
};

export const projectsData = [
  {
    id: "01",
    title: "MindForum – Q&A Platform",
    category: "Full Stack Web App",
    description:
      "MindForum is a full-stack question and answer platform where users can create questions, post answers, interact with other users and communicate through real-time features.",
    image: "/projects/mindforum.jpg",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "JavaScript",
      "Socket.IO",
    ],
    features: [
      "User authentication",
      "Question posting & answer threads",
      "File uploads & user profiles",
      "Follow system & real-time notifications",
      "Real-time messaging with Socket.IO",
      "AI-powered chat assistance",
    ],
    github: "YOUR_MINDFORUM_GITHUB_LINK",
    live: "YOUR_MINDFORUM_LIVE_LINK",
    isDesktopApp: false,
  },
  {
    id: "02",
    title: "BrainWare Tales – AI Story Narrator",
    category: "AI & Web Application",
    description:
      "BrainWare Tales is an AI-powered story narration platform that generates creative stories based on user input and provides an interactive storytelling experience.",
    image: "/projects/brainware.jpg",
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "AI APIs",
      "HTML",
      "CSS",
    ],
    features: [
      "AI story generation tailored to genre",
      "Multiple story categories & themes",
      "Interactive chat-style interface",
      "Text-to-speech narration with voice controls",
      "Story export capabilities",
      "Modern animated UI design",
    ],
    github: "YOUR_BRAINWARE_GITHUB_LINK",
    live: "YOUR_BRAINWARE_LIVE_LINK",
    isDesktopApp: false,
  },
  {
    id: "03",
    title: "Secure Auth & Monitor Pro",
    category: "Desktop Security Application",
    description:
      "A desktop security and system monitoring application that combines secure authentication with real-time system resource monitoring.",
    image: "/projects/secureauth.jpg",
    technologies: [
      "Python",
      "Tkinter",
      "CustomTkinter",
      "PBKDF2",
      "TOTP",
      "psutil",
    ],
    features: [
      "Secure password hashing with PBKDF2",
      "Multi-factor authentication (TOTP)",
      "Login attempt protection & rate limiting",
      "Real-time CPU, RAM, & Disk monitoring",
      "Network traffic monitoring dashboard",
      "Integrated desktop security panel",
    ],
    github: "YOUR_SECURE_AUTH_GITHUB_LINK",
    live: null,
    isDesktopApp: true,
    desktopLabel: "Desktop Application",
  },
];

export const experienceData = [
  {
    role: "Aspiring Software Engineer",
    company: "Projects & Freelance",
    period: "2024 – Present",
    type: "Full Stack Development",
    description:
      "Engineered high-performance web applications, REST APIs, microservices, and database systems using modern JavaScript frameworks and Node.js.",
    skillsApplied: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "React",
      "Next.js",
      "Authentication",
      "Backend development",
      "Database integration",
      "API development",
    ],
    achievements: [
      "Architected scalable backend infrastructure and integrated real-time Socket.IO communication.",
      "Implemented secure JWT/PBKDF2 authentication mechanisms with multi-factor support.",
      "Designed responsive glassmorphic frontend interfaces with Next.js & React.",
    ],
  },
];
