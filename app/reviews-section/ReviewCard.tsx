import React from 'react';
import "../globals.css";
import splash from "../../public/shape-3.png";
import { reviewProps } from './ReviewDetails';

// Animation 

import {motion} from "framer-motion"
import Image from 'next/image';

const BlogCard = ({
  name,
  role,
  company,
  profileImg,
  testimonial,
  index
}: reviewProps) => {

const abbreviateName = (name: string): string => {
  const [firstName, lastName] = name.split(" ");
  return `${firstName} ${lastName[0]}.`;
}

  return (
<motion.div
initial={{ opacity: 0, y:10}}
whileInView={{
  opacity:1,
  y: 0,
  transition: {
    duration: 0.7,
    delay: 0.1 * index,
    ease: [0.44, 0, 0.22, 0.90]
  },
}}
viewport={{
  amount: "some",
  once: true,
}}
 className='relative flex h-[473px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[1px] hover:border-white transition-all duration-300 border-[#212531] bg-transparent p-[28px] sm:h-[450px] sm:items-center sm:justify-start lg:h-[420px] lg:max-w-[438px]'>
  <Image
  src={splash}
  alt={"title"}
className='absolute top-[34px] left-[28px] w-[50px]'
  />

  <p className='mt-20 text-[#e4ded7] text-[18px] font-[500] leading-relaxed tracking-wide'>
    {testimonial}
  </p>

<div className='flex gap-3 sm:absolute sm:bottom-[28px] sm:left-[28px]'>
  <Image
  src={profileImg}
  alt={"title"}
  width={1600}
  height={840}
  className='h-[41px] w-[41px] rounded-full bg-contain bg-center object-cover'/>

<div className='flex flex-col gap-1 pr-7'>
  <h3 className='w-[175px] text-[23px] font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]'>
    {abbreviateName(name)}
  </h3>
  <p className=' text-sm font-[500] leading-[16px]  text-[#959790]'>
    {role} @ {company}
  </p>
</div>

</div>

</motion.div>
  )
}

export default BlogCard