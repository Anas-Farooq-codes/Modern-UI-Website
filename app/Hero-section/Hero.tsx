import Link from 'next/link'
import React from 'react'

// Framer Motion and Animation 

import { motion } from 'framer-motion';
import { bodyAnimation, imageAnimation } from '../animations/animations';


// Icons 

import {AiFillGithub, AiFillLinkedin, AiFillDiscord} from "react-icons/ai";

// Images 
import Image from 'next/image'
import profile from "../../public/about-me.webp"
import { monaSans } from '../fonts/monaSans';
import AnimatedWords from '../animations/AnimatedWords';



const Hero = () => {
  return (
    <motion.section className="relative z-10 flex h-screen w-full items-stretch justify-center bg-[url('.//../public/heros.jpg')] bg-cover bg-center py-0"
    id='home'
    initial="initial"
    animate="animate">

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
    <motion.button className='hidden rounded-full border-[#e4ded7] border-2 py-2 px-4 font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block'
    variants={bodyAnimation}>
      Let's Connect
    </motion.button>
  </Link>
  
</div>

{/* Social Icons  */}

<div className='text-[#e4ded7] flex gap-10 sm:gap-6 md:gap-8 lg:gap-8'>
  <Link href="https://github.com/Anas-Farooq-codes"
  target='blank'
  aria-label='View Github Profile'>
    <motion.p
    variants={bodyAnimation}

    >
    <AiFillGithub size={30}/>
    </motion.p>
  </Link>

  <Link href="https://www.linkedin.com/in/anas-farooq06/"
  target='blank'
  aria-label='View Linkedin Profile'>
    <motion.p
        variants={bodyAnimation}
        >
    <AiFillLinkedin size={30}/>
    </motion.p>
  </Link>

  <Link href="https://discord.gg/FGunPKZUp3"
  target='blank'
  aria-label='Join Our Community'>
    <motion.p
        variants={bodyAnimation}
        >
    <AiFillDiscord size={30}/>
    </motion.p>
  </Link>


</div>
      </div>

      <div className='-mt-36 flex flex-col items-center justify-center'>
        <div
        className={`relative flex flex-col items-center justify-center ${monaSans.className}`}>
          <AnimatedWords
          title='Celestia Vale'
          style="display: inline-block; overflow: hidden; padding-top: 0.25rem; margin-right: -1rem; margin-bottom: -0.25rem;"
          />
          <motion.div className='absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-190px]'
          variants={imageAnimation}>
            <Image
              src={profile}
              priority
              alt='profile'
              data-blobity-tooltip="Celestia Vale"
              data-blobity-invert="false"
              className='w-[150px] grayscale transition-all duration-500 hover:grayscale-0 md:w-[200px] rounded-full lg:w-[245px]'
            />
          </motion.div>
        </div>
      </div>

      <div className='absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between'>
        <motion.div className='max-w-[350px] md:max-w-[400px] lg:max-w-[400px]'
        variants={bodyAnimation}>
          <p className='z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left'>
          Visual Creator, UI/UX Specialist, Freelancer, Frontend Developer
          </p>
        </motion.div>

        <motion.div className='max-w-[500px] hidden md:block lg:max-w-[420px]'
        variants={bodyAnimation}>
          <p className='text-center lg:text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]'>
          With over 3 years in the field and more than 20 satisfied clients
</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero