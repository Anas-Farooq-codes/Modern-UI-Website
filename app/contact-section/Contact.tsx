import {motion} from "framer-motion";
import { AiFillInstagram, AiFillLinkedin, AiFillDiscord, AiFillGithub  } from "react-icons/ai";

import React from 'react'
import Image from "next/image";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import Link from "next/link";
import { bodyAnimation } from "../animations/animations";

const Contact = () => {
  return (
    <motion.section 
    className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-20 3xl:h-[75vh]" 
    id="contact"
    initial="initial"
    animate="animate"
  >
    <Image
      src="/bg_blur-min.png"
      alt="bg"
      width={1920}
      height={1080}
      className="absolute left-0 bg-center w-full h-full bg-cover z-0"
    />
    
    <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0 z-10">
      <div className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px]`}>
        <AnimatedWords2
          title={"Let's Connect"}
          style="flex max-w-[500px] flex-col items-start text-left text-[100px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[120px] md:text-[140px] lg:text-center lg:text-[200px] xl:text-[240px] 2xl:text-[300px]"
        />
      </div>
      
      <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
        <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-center md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
          <AnimatedBody
            text={"Got a question, proposal, project, or want to work together on something?"}
            className={"-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"}
          />
<div className="text-[12px] mt-5 flex w-[335px] items-center justify-between gap-4 md:w-[310px] md:gap-4">
  <Link 
    href="https://www.linkedin.com/in/anas-farooq06/"
    aria-label="Connect with me"
    target="_blank"
    className="w-full flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[170px] md:mt-3 lg:mt-4">
    <AnimatedBody text={"CONNECT WITH ME"} className="w-full whitespace-nowrap" />
  </Link>
  
  <AnimatedBody
    text={"or"}
    className={"inline-block ml-2 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"}
  />
  
  <Link 
    href="mailto:anasfarooq2006@gmail.com"
    target="_blank"
    aria-label="Send me an email"
    className="w-full flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:ml-[3px] md:w-[120px] lg:mt-4">
    <AnimatedBody text={"Send a message"} className="w-full whitespace-nowrap" />
</Link>
</div>
        </div>
        <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
  <Link
    href="https://github.com/Anas-Farooq-codes"
    target="_blank"
    aria-label="View Github Profile"
  >
    <motion.p variants={bodyAnimation}>
      <AiFillGithub size={30} />
    </motion.p>
  </Link>

  <Link
    href="https://www.linkedin.com/in/anas-farooq06/"
    target="_blank"
    aria-label="View LinkedIn Profile"
  >
    <motion.p variants={bodyAnimation}>
      <AiFillLinkedin size={30} />
    </motion.p>
  </Link>

  <Link
    href="https://discord.gg/FGunPKZUp3"
    target="_blank"
    aria-label="Join Our Community"
  >
    <motion.p variants={bodyAnimation}>
      <AiFillDiscord size={30} />
    </motion.p>
  </Link>
</div>
      </div>
    </div>
  </motion.section>
  )
}

export default Contact