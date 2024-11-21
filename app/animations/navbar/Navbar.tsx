import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setActiveSection(targetId);
  };

  const handleScrollSpy = () => {
    const sections = ["home", "work", "about", "testimonials", "contact"];
    const scrollPosition = window.scrollY;

    // Show navbar after scrolling past 80px
    setIsVisible(scrollPosition > 80);

    // Detect active section
    for (const section of sections) {
      const elem = document.getElementById(section);
      if (elem) {
        const { offsetTop, offsetHeight } = elem;
        if (
          scrollPosition >= offsetTop - offsetHeight * 0.3 &&
          scrollPosition < offsetTop + offsetHeight * 0.7
        ) {
          setActiveSection(section);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav
      className={`fixed bottom-5 md:bottom-20 lg:bottom-10 left-0 right-0 z-50 my-0 mx-auto flex w-[368px] items-center justify-center gap-1 rounded-full bg-[#07070a] px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[515px] md:p-2 lg:w-[565px] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {[
        { href: "#home", label: "Home" },
        { href: "#work", label: "Experience" },
        { href: "#about", label: "About" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#contact", label: "Contact" },
      ].map(({ href, label }) => {
        const targetId = href.replace(/.*#/, "");
        const isActive = activeSection === targetId;
        return (
          <Link
            key={href}
            href={href}
            onClick={handleScroll}
            data-blobity-magnetic="false"
            aria-label={`Scroll to ${label} Section`}
          >
            <h4
              className={`rounded-full py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4 ${
                isActive ? "bg-[#F8F8F5] text-[#07070a]" : ""
              }`}
            >
              {label}
            </h4>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;