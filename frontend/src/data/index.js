import { FaReact , FaNodeJs , FaDocker , FaHtml5 , FaCss3Alt , FaPython , FaGitAlt , FaGithub  } from "react-icons/fa";
import { SiMongodb , SiTypescript , SiExpress , SiSocketdotio } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill , RiTailwindCssFill } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";
import { IoLogoCapacitor , IoLogoElectron  } from "react-icons/io5";



export const skills = [
  // Row 1
{ id: 1, name: "React", icon: FaReact, color: "#61DAFB", row: 1 },
{ id: 2, name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E", row: 1 },
{ id: 3, name: "TypeScript", icon: SiTypescript, color: "#3178C6", row: 1 },
{ id: 4, name: "Next.js", icon: RiNextjsFill, color: "#FFFFFF", row: 1 },
{ id: 5, name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8", row: 1 },
{ id: 6, name: "React Native", icon: FaReact, color: "#1a2225", row: 1 },
{ id: 7, name: "Capacitor", icon: IoLogoCapacitor, color: "#119EFF", row: 1 },
{ id: 8, name: "Electron.js", icon: IoLogoElectron, color: "#47848F", row: 1 },
{ id: 9, name: "HTML", icon: FaHtml5, color: "#E34F26", row: 1 },
{ id: 10, name: "CSS", icon: FaCss3Alt, color: "#1572B6", row: 1 },

// Row 2
{ id: 11, name: "Node.js", icon: FaNodeJs, color: "#68A063", row: 2 },
{ id: 12, name: "Express.js", icon: SiExpress, color: "#FFFFFF", row: 2 },
{ id: 13, name: "Python", icon: FaPython, color: "#3776AB", row: 2 },
{ id: 14, name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791", row: 2 },
{ id: 15, name: "MongoDB", icon: SiMongodb, color: "#47A248", row: 2 },
{ id: 16, name: "Docker", icon: FaDocker, color: "#2496ED", row: 2 },
{ id: 17, name: "Socket.io", icon: SiSocketdotio, color: "#010101", row: 2 },
{ id: 18, name: "Git", icon: FaGitAlt, color: "#F05032", row: 2 },
{ id: 19, name: "GitHub", icon: FaGithub, color: "#FFFFFF", row: 2 },
{ id: 20, name: "Linux", icon: FcLinux, color: "#FCC624", row: 2 },
{ id: 21, name: "SQL", icon: TbSql, color: "#4479A1", row: 2 },
];

export const projects = [
  {
    id: 1,
    title: "NexaCommerce",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "A high-performance e-commerce platform built with Next.js, Node.js, and PostgreSQL. Features real-time inventory management, Stripe payments, advanced filtering, and an admin dashboard. Handles 10k+ concurrent users.",
    tags: ["ReactJS" ,"TailwindCss", "Node.js", "Express.js" , "MongoDb", "Stripe", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#9333ea",
    accentColor: "#e11d48",
    year: "2025",
    status: "Live",
    emoji: "🛒",
  },
  {
    id: 2,
    title: "Cerebral AI",
    subtitle: "AI-Powered Productivity Suite",
    description:
      "An intelligent workspace integrating GPT-4 for task automation, code review, and content generation. Built with React, FastAPI, and WebSockets for real-time collaboration. Features a custom vector database for context-aware responses.",
    tags: ["ReactJS" ,"TailwindCss", "Node.js", "Express.js" , "MongoDb", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#f59e0b",
    accentColor: "#9333ea",
    year: "2025",
    status: "Live",
    emoji: "🧠",
  },
  {
    id: 3,
    title: "FluxStream",
    subtitle: "Real-Time Analytics Dashboard",
    description:
      "A real-time data visualization platform processing millions of events per second. Built with React, GraphQL subscriptions, ClickHouse, and Kafka. Supports custom dashboards, alerts, and predictive analytics.",
    tags: ["ReactJS" ,"TailwindCss", "Node.js", "Express.js" , "MongoDb", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#e11d48",
    accentColor: "#f59e0b",
    year: "2025",
    status: "Live",
    emoji: "📊",
  },
  {
    id: 4,
    title: "Moujood",
    subtitle: "Travel & Community App",
    description:
      "A social travel platform connecting digital nomads worldwide. Features itinerary planning, real-time chat, location-based recommendations, and a marketplace. Built with React Native for mobile and Next.js for web.",
    tags: ["React Native", "Next.js", "MongoDB", "Socket.io", "Maps API"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#06b6d4",
    accentColor: "#9333ea",
    year: "2026",
    status: "Beta",
    emoji: "✈️",
  },
];

export const contact = {
  email: {
    label:"eyadmosa853@gmail.com",
    app: "mailto:eyadmosa853@gmail.com",
    web: "mailto:eyadmosa853@gmail.com",
  },

  whatsapp: {
    label:"+966534215241",
    app: "https://wa.me/966534215241",
    web: "https://wa.me/966534215241",
  },

  linkedin: {
    label:"eyad-moussa-697735333",
    app: "linkedin://in/eyad-moussa-697735333",
    web: "https://www.linkedin.com/in/eyad-moussa-697735333/",
  },

  github: {
    label:"github.com/eyad853",
    app: "https://github.com/eyad853",
    web: "https://github.com/eyad853",
  },
};

export const openLink = (appLink, webLink) => {
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);

  if (isMobile && appLink) {
    window.location.href = appLink;

    // fallback to web if app not installed
    setTimeout(() => {
      window.location.href = webLink;
    }, 1500);
  } else {
    window.open(webLink, "_blank");
  }
};