export const siteConfig = {
  name: "Sachin Dhote",
  firstName: "Sachin",
  role: "Creative Web Developer",
  location: "India",
  email: "sachindhote7905@gmail.com",
  phone: "+91 96917 23223",
  availability: "Available for freelance",
  socials: {
    github: "https://github.com/sachindhote05",
    linkedin: "https://www.linkedin.com/in/sachin-dhote-5111b6387",
    instagram: "https://www.instagram.com/_heysachinn",
  },
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building fast, responsive and modern interfaces with clean component-based architecture.",
    tags: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    number: "02",
    title: "Creative Web Design",
    description:
      "Turning ideas into visually engaging digital experiences that feel polished and memorable.",
    tags: [
      "Modern UI",
      "Animations",
      "Micro-interactions",
      "Responsive Design",
      "Interactive Experiences",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Building complete web applications with scalable backend systems and database integration.",
    tags: [
      "Node.js",
      "REST APIs",
      "Databases",
      "Firebase",
      "PostgreSQL",
      "Prisma",
    ],
  },
];

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Python",
  "Flask",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Prisma",
  "Git",
  "GitHub",
  "Vercel",
];

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features?: string[];
  experience?: string[];
  url: string;
  image?: string;
  year: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "spacecraft-ai",
    number: "01",
    title: "SpaceCraft AI",
    subtitle: "AI-Powered Interior Design & Room Planning Platform",
    description:
      "SpaceCraft AI is a smart interior design and room planning platform that combines AI-powered recommendations with interactive room planning to help users create and organize their dream spaces.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "AI APIs",
      "Firebase Auth",
    ],
    features: [
      "AI-powered interior design recommendations",
      "Room planning",
      "Furniture placement",
      "Design suggestions",
      "Project management",
      "Modern responsive interface",
      "Authentication",
    ],
    url: "https://spacecraft-ai.vercel.app",
    image: "/spacecraft.png",
    year: "2025",
    accent: "#ff5b1f",
  },
  {
    id: "version2",
    number: "02",
    title: "Version2",
    subtitle: "Modern Business / Company Website",
    description:
      "Version2 is a modern company website focused on creating a professional digital presence with responsive layouts, smooth interactions and engaging visual sections.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "AOS",
      "EmailJS",
      "Vercel",
    ],
    experience: [
      "Developing responsive web pages",
      "Creating reusable UI components",
      "Implementing animations",
      "Working with Next.js and React",
      "Integrating EmailJS",
      "Git/GitHub workflow",
      "Deployment using Vercel",
    ],
    url: "https://www.version2.in",
    image: "/version2.png",
    year: "2026",
    accent: "#5b8cff",
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  certificate: boolean;
  url: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Version2",
    role: "Web Development Intern",
    duration: "3 Months",
    period: "2026",
    location: "Bangalore, India",
    description:
      "Built the official company website for Version2, a Bangalore-based company. Worked with Next.js, React and Tailwind CSS to deliver a modern, responsive interface — implementing animations, reusable components, EmailJS integration and smooth frontend interactions.",
    highlights: [
      "Built the official company website end-to-end",
      "Developed responsive pages with Next.js, React & Tailwind",
      "Implemented animations using Framer Motion & AOS",
      "Integrated EmailJS for contact form functionality",
      "Managed Git/GitHub workflow and deployed on Vercel",
    ],
    certificate: true,
    url: "https://www.version2.in",
  },
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: "codect-internship",
    title: "Full Stack Developer Internship",
    issuer: "CODECT Technologies",
    date: "2025",
    description:
      "Selected for a 1-month Full Stack Developer internship at CODECT Technologies (in collaboration with NIELIT & Google for Education Partner). Worked on real-world web development projects with expert mentorship.",
    image: "/cert-codect.png",
    credentialUrl: "https://www.linkedin.com/in/sachin-dhote-5111b6387",
  },
  {
    id: "version2-internship",
    title: "Web Development Internship",
    issuer: "Version2",
    date: "2026",
    description:
      "Successfully completed a 3-month Web Development Internship at Version2, Bangalore — building the official company website with Next.js, React and Tailwind CSS.",
    image: "/cert-version2.png",
    credentialUrl: "https://www.linkedin.com/in/sachin-dhote-5111b6387",
  },
  {
    id: "aws-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "AWS Educate",
    date: "2026",
    description:
      "Completed AWS Educate's Introduction to Generative AI training badge — covering foundational concepts of generative AI, foundation models and real-world applications on AWS.",
    image: "/cert-aws.png",
    credentialUrl: "https://www.linkedin.com/in/sachin-dhote-5111b6387",
  },
  {
    id: "html5-responsive",
    title: "HTML5 Responsive",
    issuer: "LearnTube.ai",
    date: "2025",
    description:
      "Learned to build responsive, accessible web layouts using HTML5 semantics and modern responsive design patterns. Course guided by Shubham Bansal, Software Engineer at Google.",
    image: "/cert-html5.png",
    credentialUrl: "https://www.linkedin.com/in/sachin-dhote-5111b6387",
  },
  {
    id: "html-introduction",
    title: "HTML Introduction",
    issuer: "LearnTube.ai",
    date: "2025",
    description:
      "Built a strong foundation in HTML — structuring semantic markup, forms and web content. Guided by Shubham Bansal, Software Engineer at Google.",
    image: "/cert-html-intro.png",
    credentialUrl: "https://www.linkedin.com/in/sachin-dhote-5111b6387",
  },
  {
    id: "python-bootcamp",
    title: "Python Bootcamp",
    issuer: "LetsUpgrade × GDG MAD",
    date: "2025",
    description:
      "Completed a 3-day intensive Python Bootcamp by LetsUpgrade in collaboration with GDG MAD — covering Python fundamentals, data structures and real-world scripting.",
    image: "/cert-python.png",
    credentialUrl: "https://www.linkedin.com/in/sachin-dhote-5111b6387",
  },
];

export interface GithubProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
  language: string;
}

export const githubProjects: GithubProject[] = [
  {
    id: "hand-gesture",
    title: "Hand Gesture Recognition",
    description:
      "Real-time hand gesture recognition built with OpenCV and MediaPipe. Detects gestures like Hello, Peace, Thumbs Up, Yes and No using a webcam — built for intuitive human-computer interaction.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    url: "https://github.com/sachindhote05/hand_gesture_recognition",
    language: "Python",
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture Assistant",
    description:
      "A web-based assistant designed to help with agriculture-related tasks and insights — focused on a clean, accessible interface for everyday users.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/sachindhote05/Smart-Agriculture-Assistant",
    language: "HTML",
  },
];