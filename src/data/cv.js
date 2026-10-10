// Every word of content on the site. Edit here, not in the pages.

export const profile = {
  name: "Mohammad Radwan Shawkat",
  shortName: "Radwan Shawkat",
  role: "Full-Stack Engineer",
  location: "Dhaka, Bangladesh",
  email: "redwanshawkat@gmail.com",
  phone: "+880 1632-108860",
  phoneHref: "tel:+8801632108860",
  address: "Adabor, Mohammadpur, Dhaka",
  objective:
    "Seeking a role where I can grow technically and contribute to something that actually makes a difference.",
  blurb:
    "Full-stack engineer in Dhaka. React and Ant Design on the front, Laravel and Lumen on the back.",
  languages: "Bangla, English",
};

export const links = {
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=" + profile.email,
  phone: profile.phoneHref,
  github: "https://github.com/Redwan-Shawkat",
  linkedin: "https://www.linkedin.com/in/radwan-shawkat/",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/training", label: "Training" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export const slides = [
  {
    eyebrow: "Full-Stack Engineer · Dhaka, Bangladesh",
    title: "Mohammad Radwan Shawkat",
    text: "I have shipped real software to real clients — supply-chain, policing and civil-records systems now in daily use. React on the front, Laravel on the back.",
    cta: { href: "/projects", label: "View my work" },
    glow: "glow-warm",
  },
  {
    eyebrow: "What I Build",
    title: "Enterprise systems, not demos",
    text: "Supply chain for Bangla Trac, logistics for Dhaka Metropolitan Police, civil case records for Chittagong City Corporation, and a dual-portal B2B storefront for a Caterpillar dealer.",
    cta: { href: "/projects", label: "Browse projects" },
    glow: "glow-red",
  },
  {
    eyebrow: "The Stack",
    title: "React front, Laravel back",
    text: "Ant Design and Redux on the client. Laravel and Lumen on the server. PostgreSQL, MySQL and MongoDB underneath. RabbitMQ when things need to queue.",
    cta: { href: "/skills", label: "See my skills" },
    glow: "glow-mix",
  },
];

export const glance = [
  { label: "Role", value: "Engineer, B-Trac Solutions" },
  { label: "Focus", value: "React · Laravel" },
  { label: "Degree", value: "B.Sc. — CGPA 3.63 / 4.00" },
  { label: "Languages", value: "Bangla, English" },
  { label: "Open to", value: "New opportunities", accent: true },
];

export const skillGroups = [
  {
    group: "Languages",
    items: [
      { name: "HTML", mono: "<>" },
      { name: "CSS", mono: "#" },
      { name: "JavaScript", mono: "JS" },
      { name: "PHP", mono: "P" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", mono: "R" },
      { name: "Redux", mono: "Rx" },
      { name: "Bootstrap", mono: "B" },
      { name: "Ant Design", mono: "Ad" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", mono: "N" },
      { name: "Express.js", mono: "Ex" },
      { name: "Laravel", mono: "L" },
      { name: "Lumen", mono: "Lu" },
    ],
  },
  {
    group: "Databases & API",
    items: [
      { name: "MongoDB", mono: "M" },
      { name: "MySQL", mono: "My" },
      { name: "PostgreSQL", mono: "Pg" },
      { name: "REST API", mono: "API" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Figma", mono: "Fg" },
      { name: "Postman", mono: "Pm" },
      { name: "RabbitMQ", mono: "Rb" },
      { name: "GitHub", mono: "Gh" },
      { name: "VS Code", mono: "VS" },
    ],
  },
];

export const projects = [
  {
    num: "01",
    group: "client",
    client: "Bangla Trac Engineering",
    kind: "Enterprise · Supply Chain",
    title: "Supply Chain Management System",
    tech: ["React", "Ant Design", "Laravel", "PostgreSQL"],
    repo: null,
    glow: "glow-warm",
  },
  {
    num: "02",
    group: "client",
    client: "Dhaka Metropolitan Police",
    kind: "Government · Logistics",
    title: "Logistic Management System",
    tech: ["React", "Ant Design", "Laravel", "PostgreSQL"],
    repo: null,
    glow: "glow-red",
  },
  {
    num: "03",
    group: "client",
    client: "Chittagong City Corporation",
    kind: "Government · Civil Records",
    title: "Chittagong City Case",
    tech: ["React", "Laravel", "MySQL"],
    repo: null,
    glow: "glow-mix",
  },
  {
    num: "04",
    group: "client",
    client: "Caterpillar Dealer",
    kind: "B2B · Dual-Portal Commerce",
    title: "Bangla Cat E-Commerce",
    tech: ["React", "Ant Design", "Laravel", "PostgreSQL", "SSLCommerz"],
    repo: null,
    glow: "glow-warm",
  },
  {
    num: "05",
    group: "oss",
    client: "Open Source",
    kind: "Service · Notifications",
    title: "Push Notification Handler",
    tech: ["JavaScript", "RabbitMQ", "Firebase", "Apple APNs"],
    repo: "https://github.com/Redwan-Shawkat/push-notification",
    glow: "glow-red",
  },
  {
    num: "06",
    group: "oss",
    client: "Open Source",
    kind: "Microservice · SMS Gateway",
    title: "SMS Distribution",
    tech: ["Lumen", "PHP", "REST API", "Delivery Logging"],
    repo: "https://github.com/Redwan-Shawkat/Send-SMS",
    glow: "glow-mix",
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "client", label: "Client Work" },
  { id: "oss", label: "Open Source" },
];

export const experience = [
  {
    period: "July 2025 — Present",
    current: true,
    role: "Engineer",
    company: "B-Trac Solutions Ltd.",
    points: [
      "Built BTEL SCM, DMP LIMS and the Chittagong City Corporation system with Laravel and React.",
      "Backend and frontend development, feature implementation and ongoing maintenance.",
    ],
  },
  {
    period: "February 2025 — July 2025",
    current: false,
    role: "Web Application Intern",
    company: "B-Trac Solutions Ltd.",
    points: [
      "Push notification integration over RabbitMQ with Firebase (Android) and Apple APNs (iOS) in JavaScript.",
      "Picked up Laravel and Lumen; shipped a lightweight Lumen backend API with token authentication.",
    ],
  },
];

export const training = [
  {
    num: "01",
    title: "Online Web Designer Course",
    provider: "Bdcalling Academy",
    text: "Where it started — markup, layout and responsive design from the ground up, before any framework got involved.",
    tech: ["HTML", "CSS", "Bootstrap"],
  },
  {
    num: "02",
    title: "MERN Stack Web Development",
    provider: "Interactive Cares",
    text: "The whole stack end to end — React on the client, Express and Node on the server, MongoDB underneath.",
    tech: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
  },
];

export const education = [
  {
    year: "2023",
    sub: "Session 2018–19",
    degree: "Bachelor of Science (B.Sc.)",
    institution: "Daffodil International University",
    meta: [
      { label: "Result", value: "CGPA 3.63 / 4.00" },
      { label: "Passing year", value: "2023" },
    ],
  },
  {
    year: "2018",
    sub: "Dhaka Board",
    degree: "Higher Secondary Certificate (H.S.C.)",
    institution: "Mohammadpur Model School & College",
    meta: [
      { label: "Group", value: "Science" },
      { label: "Result", value: "GPA 3.75 / 5.00" },
    ],
  },
  {
    year: "2016",
    sub: "Dhaka Board",
    degree: "Secondary School Certificate (S.S.C.)",
    institution: "Mohammadpur Model School & College",
    meta: [
      { label: "Group", value: "Science" },
      { label: "Result", value: "GPA 4.83 / 5.00" },
    ],
  },
];

export const thesis = {
  eyebrow: "Final Year Project · Thesis",
  title: "Impact of Artificial Intelligence in Education",
  text: "A review paper surveying the literature on how AI is applied in education, and weighing the advantages against the drawbacks of putting it in classrooms.",
  doi: "https://doi.org/10.5281/zenodo.15333947",
};
