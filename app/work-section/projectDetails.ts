export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Frontend Development",
    description:
      "Building responsive and visually appealing websites with a focus on user experience, accessibility, and cross-platform compatibility.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
    github: "https://github.com/",
    demo: "https://www.youtube.com/@frontendadvance",
    image: require("../../public/projects/hero-img.png"),
    available: true,
  },
  {
    id: 1,
    name: "Graphic Design",
    description:
      "Creating engaging visuals and graphics to enhance brand identity, utilizing design tools and concepts that resonate with target audiences.",
    technologies: ["Photoshop", "Illustrator", "Canva"],
    github: "https://github.com/",
    demo: "https://www.youtube.com/@frontendadvance",
    image: require("../../public/projects/portrait.png"),
    available: true,
  },
  {
    id: 2,
    name: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and optimizing user experience with thoughtful layouts and interactions for web and mobile applications.",
    technologies: ["Figma", "Adobe XD"],
    github: "https://github.com/",
    demo: "https://www.youtube.com/@frontendadvance",
    image: require("../../public/projects/illustrator.png"),
    available: true,
  },
  {
    id: 3,
    name: "Backend Development",
    description:
      "Developing and managing server-side applications, database management, and API integration to support frontend functionality.",
    technologies: ["Node.js", "Express", "MongoDB", "Prisma"],
    github: "https://github.com/",
    demo: "https://www.youtube.com/@frontendadvance",
    image: require("../../public/projects/robot.png"),
    available: true,
  },
  {
    id: 4,
    name: "Freelance Projects",
    description:
      "Delivering custom solutions for clients as a freelancer, covering diverse projects from graphic design to full website development.",
    technologies: ["Fiver", "Upwork"],
    github: "https://github.com/",
    demo: "https://www.youtube.com/@frontendadvance",
    image: require("../../public/projects/art.png"),
    available: true,
  },
];