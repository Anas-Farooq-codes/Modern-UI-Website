import React from 'react'
import "../animations/animate.css"
import Image from 'next/image'
import AnimatedTitle from '../animations/AnimatedTitle'

const About = () => {
  return (
    <section className='relative z-10 w-full items-center justify-center overflow-hidden bg-[#FFF] bg-cover bg-center pt-16 pb-36 md:mt-20 md:pb-44 lg:pt-20 lg:pb-56' id='about'>
      <Image 
      src="/bg_blur-min.png"
      alt='bg'
      width={1920}
      height={1080}
      className='absolute left-0 top-0 bg-center w-full h-full bg-cover'
      />

      <div className='mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]'>

        <AnimatedTitle
        text={"Uncover Our Journey: We Are Building A Promissing Future"}
        />

      </div>
    </section>
  )
}

export default About