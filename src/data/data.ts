export interface Certificate {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  image: string[];
  designImage?: string[];
  demo?: string;
  repo: string;
  tech: string[];
}

export const modulAchievements: Certificate[] = [
  {
    src: "/certificates/666834518a036-adelisa-kolashinac-html.jpg",
    alt: "HTML",
  },
  {
    src: "/certificates/668b9ebe88b50-adelisa-kolashinac-css.jpg",
    alt: "CSS",
  },
  {
    src: "/certificates/6694e5a8094b9-adelisa-kolashinac-syntactically-awesome-style-sheets-sass.jpg",
    alt: "SCSS",
  },
  {
    src: "/certificates/66a763711d13f-adelisa-kolashinac-git.jpg",
    alt: "GIT",
  },
  {
    src: "/certificates/67596f3adedd9-adelisa-kolashinac-javascript.jpg",
    alt: "JavaScript",
  },
  {
    src: "/certificates/67a0ace1d3855-adelisa-kolashinac-typescript.jpg",
    alt: "TypeScript",
  },
  {
    src: "/certificates/67a0c78e76588-adelisa-kolashinac-reactjs.jpg",
    alt: "React",
  },
  {
    src: "/certificates/682aeb0611c5f-adelisa-kolashinac-nextjs.jpg",
    alt: "Next.js",
  },
];

export const certificates: Certificate[] = [
  {
    src: "/certificates/brainster-certificate.pdf",
    alt: "Brainster Certificate",
  },
  {
    src: "/certificates/hakaton-certificate.pdf",
    alt: "Hakaton Certificate",
  },
];

export const projects: Project[] = [
  {
    title: "Find a Handyman",
    description:
      "Handyman Finder is a React mobile-responsive web application designed to help users easily find and connect with skilled handymen across various service categories like carpentry, plumbing, electrical work, and more. This is the client-side (user-facing) part of the app. The handyman-side (for service providers) is not yet implemented.",
    image: [
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-01.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-02.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-03.png",
    ],
    designImage: [
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-01.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-02.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-03.png",
    ],
    repo: "https://github.com/AdelisaKolashinac/handymen-finder-project",
    tech: [
      "React",
      "TypeScript",
      "JSON Server",
      "Firebase",
      "Zustand",
      "CSS Modules",
    ],
  },
  {
    title: "Hackathon Project - Kotur Kafe&Film",
    description:
      "Developed a front-end application for Kotur Lounge Bar as part of a hackathon challenge. The project focused on creating an engaging, user-friendly web experience showcasing the bar’s menu, events, and reservation system. Built using React and TypeScript, the app features responsive design for seamless access on desktop and mobile devices.",
    image: [
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-01.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-02.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-03.png",
    ],
    designImage: [
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-01.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-02.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-03.png",
    ],
    repo: "https://github.com/AdelisaKolashinac/hakaton-kotur-project",
    tech: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Street Artist Project",
    description:
      "StreetARTists is a first-mobile responsive web page dedicated to art enthusiasts, built using modern web development tools such as HTML5, CSS, Bootstrap, and JavaScript. The platform serves two types of users: visitors and artists. Visitors can browse the works of various artists and purchase artworks they like. Artists can showcase their creations, publish them on the platform, and even start auctions for their work.",
    image: [
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-01.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-02.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-03.png",
    ],
    designImage: [
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-01.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-02.png",
      "/figma/hackathon/Hakaton-Kotur-SC-Figma-03.png",
    ],
    repo: "https://github.com/AdelisaKolashinac/street-artists-project",
    tech: ["Javascript", "Bootstrap", "CSS", "HTML5"],
  },
];
