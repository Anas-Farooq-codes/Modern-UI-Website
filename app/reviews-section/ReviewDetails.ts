import { StaticImageData } from "next/image";
import alice from "../../public/team-1.webp";
import keli from "../../public/team-2.webp";
import nena from "../../public/team-4.webp";
import smith from "../../public/team-1.webp";
import james from "../../public/team-2.webp";
import anto from "../../public/team-4.webp";

export type reviewProps = {
    name: string;
    role: string;
    company: string;
    profileImg: StaticImageData;
    testimonial: string;
    index: number;
}

export const reviewDetails = [
    {
        name: "Alice Thompson",
        role: "Project Manager",
        company: "Webflow Labs",
        profileImg: alice,
        testimonial: "Working with this Front-End Developer has been a game-changer! The sleek, responsive designs brought our platform to life, making it not only visually appealing but also user-friendly.",
        index: 0,
    },
    {
        name: "Michael Brown",
        role: "CTO",
        company: "Techwave Solutions",
        profileImg: smith,
        testimonial: "An absolute asset to our team! Their backend expertise ensured our app's performance and scalability. Everything from API integrations to data flow was seamlessly executed.",
        index: 1,
    },
    {
        name: "Nina Patel",
        role: "Creative Director",
        company: "DesignMatrix",
        profileImg: nena,
        testimonial: "Their graphic design skills exceeded expectations. The visuals aligned perfectly with our brand, and the attention to detail made our campaigns stand out. Truly a creative genius!",
        index: 2,
    },
    {
        name: "James Lee",
        role: "Product Manager",
        company: "UX Studios",
        profileImg: james,
        testimonial: "This UI/UX expert brought our vision to life, creating intuitive, user-centered designs. The user flow is now seamless, thanks to their keen understanding of user behavior and aesthetics.",
        index: 3,
    },
    {
        name: "Keli Johnson",
        role: "Marketing Specialist",
        company: "Brandify Inc.",
        profileImg: keli,
        testimonial: "Their marketing strategies have taken our outreach to new heights. The data-driven approach paired with creative ideas has greatly increased our engagement.",
        index: 4,
    },
    {
        name: "Anto Green",
        role: "Lead Developer",
        company: "CodeCrafters",
        profileImg: anto,
        testimonial: "An exceptional developer with a knack for solving complex problems. Their commitment to quality and performance is evident in every project.",
        index: 5,
    },
];