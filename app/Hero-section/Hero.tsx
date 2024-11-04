import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Icons 

import {AiFillGithub, AiFillLinkedin, AiFillDiscord} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="relative z-10 flex h-screen w-full items-stretch justify-center bg-[url('.//../public/heros.jpg')] bg-cover bg-center py-0"
    id='home'>

      {/* Checked Background  */}

      <Image
      src="/background.png"
      alt='BG'
      width={1920}
      height={1080}
      className='absolute left-0 top-0 bg-center w-full h-full bg-cover'/>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">

        {/* Connect Button  */}

<div>
  <Link
  href="#">
    <button className='hidden rounded-full border-[#e4ded7] border-2 py-2 px-4 font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block'>
      Let's Connect
    </button>
  </Link>
  
</div>

{/* Social Icons  */}

<div className='text-[#e4ded7] flex gap-10 sm:gap-6 md:gap-8 lg:gap-8'>
  <Link href="https://github.com/Anas-Farooq-codes"
  target='blank'
  aria-label='View Github Profile'>
    <p>
    <AiFillGithub size={30}/>
    </p>
  </Link>

  <Link href="https://www.linkedin.com/in/anas-farooq06/"
  target='blank'
  aria-label='View Linkedin Profile'>
    <p>
    <AiFillLinkedin size={30}/>
    </p>
  </Link>

  <Link href="https://discord.gg/FGunPKZUp3"
  target='blank'
  aria-label='Join Our Community'>
    <p>
    <AiFillDiscord size={30}/>
    </p>
  </Link>


</div>

      </div>
    </section>
  )
}

export default Hero