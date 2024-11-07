import Link from "next/link"


const Navbar = () => {
const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=> {
e.preventDefault();
const href = e.currentTarget.href;
const targetId = href.replace(/.*\#/, "");
const elem = document.getElementById(targetId);
elem?.scrollIntoView({
    behavior: "smooth",
});
};
  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex w-[368px] items-center justify-center gap-1 rounded-full bg-[#07070a] px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[515px] md:p-2 lg:w-[565px]">

<Link
        href="#home"
        onClick={handleScroll}
        data-blobity-magnetic="false"
        aria-label="Scroll to home Section"
        >
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                Home
            </h4>
        </Link>
        <Link
        href="#work"
        onClick={handleScroll}
        data-blobity-magnetic="false"
         aria-label="Scroll to Experience Section"
        >
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                Experience
            </h4>
        </Link>

        <Link
        href="#about"
        onClick={handleScroll}
        data-blobity-magnetic="false"
         aria-label="Scroll to About Section"
        >
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                About
            </h4>
        </Link>

        <Link
        href="#testimonials"
        onClick={handleScroll}
        data-blobity-magnetic="false"
         aria-label="Scroll to Testimonials Section"
        >
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                Testimonials
            </h4>
        </Link>

        <Link
        href="#contact"
        onClick={handleScroll}
        data-blobity-magnetic="false"
         aria-label="Scroll to Contact Section"
        >
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                Contact
            </h4>
        </Link>
    </nav>
  )
}

export default Navbar