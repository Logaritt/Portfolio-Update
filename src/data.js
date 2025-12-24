import HeroImage from "/assets/me.webp";

import AboutEdu from "/assets/about/edu.webp";
import AboutExp1 from "/assets/about/exp1.webp";
import AboutExp2 from "/assets/about/exp2.webp";

const Image = {
  HeroImage,
  AboutEdu,
  AboutExp1,
  AboutExp2,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/brin.webp";
import Proyek2 from "/assets/proyek/paper.webp";
import Proyek3 from "/assets/proyek/abipraya.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/sinarmas.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "BRIN RI - SME Digital Readiness (ASIANComNet 2024)",
    subtitle: "Data Analyst Intern | International Conference Publication",
    desk:
      "Surveyed 120+ SMEs, performed data cleaning and EDA, classified readiness maturity (Learning/Implementation/Development), and delivered an insight dashboard for stakeholders.",
    tools: ["Data Cleaning", "EDA", "Dashboard", "Policy Insight"],
    href: "https://ieeexplore.ieee.org/document/10811067",
    cta: "View Paper",
    category: "research",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Digital Talent Development - Sentiment + SNA (ICoICT 2025)",
    subtitle: "Project Owner | International Conference Publication",
    desk:
      "Combined Sentiment Analysis and Social Network Analysis to evaluate digital talent development discourse; built an SVM (TF-IDF) classifier and identified key influencers using centrality metrics.",
    tools: ["SVM TF-IDF", "SNA", "Centrality", "Research"],
    href: "https://ieeexplore.ieee.org/abstract/document/11193080",
    cta: "View Paper",
    category: "research",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "PT Brantas Abipraya (Persero) - Inventory Tracking System",
    subtitle: "Web Development Intern | Laravel",
    desk:
      "Built a web app to track spare parts and heavy equipment: item registration, stock balance, release workflow, and scalable multi-project support.",
    tools: ["Laravel", "MySQL", "Blade", "CRUD", "Auth"],
    href: "https://github.com/ramhaidar/DPP-Inventory-System",
    cta: "Repository",
    category: "web",
  },
  {
    id: 4,
    gambar: Proyek5,
    nama: "PT Bank Sinarmas Tbk - Data Privacy Governance",
    subtitle: "Data Privacy Analyst Intern | Enterprise Data Governance",
    desk:
      "Worked on RoPA and PIA, supported compliance with Indonesia's Personal Data Protection Law (UU PDP), and make Data Flow Diagrams for data activities.",
    tools: ["RoPA", "PIA", "UU PDP", "Audit Support"],
    href: "",
    cta: "Open Case Study",
    category: "privacy",
    highlights: [
      "Supported enterprise-wide compliance for personal data processing activities aligned with UU PDP.",
      "Developed and maintained RoPA and data-flow mapping with cross-functional stakeholders.",
      "Assisted audits/assessments and drove remediation tracking until closure.",
      "Provided QA support for an Enterprise Data Governance application (no public repository).",
    ],
  },
];


// ✅ About: Education (2 points)
export const educationList = [
  {
    id: "edu-1",
    title: "Senior High School",
    org: "SMA Negeri 2 Depok",
    meta: "",
    period: "2017 — 2020",
    points: [],
  },
  {
    id: "edu-2",
    title: "Informatics Engineering",
    org: "Telkom University, Bandung",
    meta: "GPA 3.73/4.00",
    period: "Sep 2021 — Feb 2025",
    points: [],
  },
];

export const experienceList = [
  {
    id: "exp-1",
    title: "BRIN",
    org: "Data Analyst (Internship)",
    meta: "",
    period: "Mar 2024 — Jul 2024",
  },
  {
    id: "exp-2",
    title: "Paper",
    org: "Researcher — Best Paper",
    meta: "SVM TF-IDF + SNA",
    period: "Jun 2024 — Jan 2025",
  },
  {
    id: "exp-3",
    title: "PT Brantas Abipraya",
    org: "Web Development (Internship)",
    meta: "Laravel",
    period: "Jul 2024 — Feb 2025",
  },
  {
    id: "exp-4",
    title: "PT Bank Sinarmas",
    org: "Data Privacy Analyst (Internship)",
    meta: "RoPA / DPIA / UU PDP",
    period: "Apr 2025 — Present",
  },
];

// ... import lain kamu di atas

import Award1 from "/assets/awards/best-paper-award.webp";
import Award2 from "/assets/awards/icoict-presenter.webp";
import Award3 from "/assets/awards/icoict-author.webp";
import Award4 from "/assets/awards/seminar_internal_speaker.webp";

export const awardsList = [
  {
    id: "best-paper",
    title: "Best Paper Award",
    desc: "Received Best Paper recognition for the project owner publication.",
    image: Award1,
    tag: "Award",
  },
  {
    id: "icoict-presenter",
    title: "ICoICT - Presenter Certificate",
    desc: "Issued for presenting the research paper at ICoICT.",
    image: Award2,
    tag: "Certificate",
  },
  {
    id: "icoict-author",
    title: "ICoICT - Author Certificate",
    desc: "Issued for authorship contribution to the ICoICT publication.",
    image: Award3,
    tag: "Certificate",
  },
  {
    id: "seminar-speaker",
    title: "Speaker - Internal Seminar",
    desc: "Certificate of appreciation for serving as an internal seminar speaker.",
    image: Award4,
    tag: "Certificate",
  },
];
