import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex w-[368px] items-center justify-center gap-1 rounded-full bg-[#07070a] px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[515px] md:p-2 lg:w-[565px]">

        <Link
        href="#home">
            <h4 className="rounded py-4 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                Home
            </h4>
        </Link>
        <Link
        href="#work">
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                Experience
            </h4>
        </Link>

        <Link
        href="#about">
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                About
            </h4>
        </Link>

        <Link
        href="#testimonials">
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                Testimonials
            </h4>
        </Link>

        <Link
        href="#contact">
             <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:px-4">
                Contact
            </h4>
        </Link>
    </nav>
  )
}

export default Navbar