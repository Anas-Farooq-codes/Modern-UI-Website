import React from 'react'
import "../animations/animate.css"
import Image from 'next/image'
import AnimatedTitle from '../animations/AnimatedTitle'
import AnimatedBody from '../animations/AnimatedBody'

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
          text={"My Professional Journey: Crafting Experiences for a Connected Future"}
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
          className='mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#333] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]'
        />

        <div className='mx-auto flex w-[100%] flex-col'>
          <div className='mb-5 md:mb-8 lg:mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#333] md:gap-6 md:text-[20px] md:leading-relaxed lg:text-[24px]'>

            {/* Expertise Headings */}

            <AnimatedTitle
              text={"Frontend Developer"}
              className="text-[28px] font-bold text-[#444444] md:text-[36px] lg:text-[40px]"
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "I create engaging, responsive designs that feel intuitive and adapt beautifully on any screen. From clean layouts to interactive elements, my goal is a smooth, enjoyable user experience."
              }
            />

            <div>
              <AnimatedTitle
                text={"Frontend Tools"}
                className="text-[22px] font-semibold text-[#333] md:text-[26px] lg:text-[30px]"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "HTML, CSS, JavaScript, TailwindCSS, Next.js, React.js"
                }
              />
            </div>
            </div>

            {/* Backend Developer Section */}

            <div className='mb-5 md:mb-8 lg:mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#333] md:gap-6 md:text-[20px] md:leading-relaxed lg:text-[24px]'>

            <AnimatedTitle
              text={"Backend Developer"}
              className="text-[28px] font-bold text-[#444444] md:text-[36px] lg:text-[40px]"
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "Crafting reliable, secure backend systems is my priority. I enjoy building the backbone of applications, ensuring everything flows seamlessly from server to user, and handling data with ease."
              }
            />
            <div>
              <AnimatedTitle
                text={"Backend Tools"}
                className="text-[22px] font-semibold text-[#333] md:text-[26px] lg:text-[30px]"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Node.js, Express, MongoDB, PostgreSQL, Firebase"
                }
              />
            </div>
            </div>

            {/* Graphic Design Section */}

            <div className='mb-5 md:mb-8 lg:mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#333] md:gap-6 md:text-[20px] md:leading-relaxed lg:text-[24px]'>
            <AnimatedTitle
              text={"Graphic Designer"}
              className="text-[28px] font-bold text-[#444444] md:text-[36px] lg:text-[40px]"
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "I love translating ideas into impactful visuals that leave a lasting impression. Whether it’s logos, icons, or branding, I’m here to create designs that give each project its unique identity."
              }
            />
            <div>
              <AnimatedTitle
                text={"Graphic Design Tools"}
                className="text-[22px] font-semibold text-[#333] md:text-[26px] lg:text-[30px]"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Adobe Photoshop, Adobe Illustrator, Canva"
                }
              />
            </div>
            </div>

            {/* UI/UX Expert Section */}

            <div className='mb-5 md:mb-8 lg:mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#333] md:gap-6 md:text-[20px] md:leading-relaxed lg:text-[24px]'>

            <AnimatedTitle
              text={"UI/UX Expert"}
              className="text-[28px] font-bold text-[#444444] md:text-[36px] lg:text-[40px]"
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "Every element matters in creating a user-centered design. I focus on understanding user needs, crafting intuitive journeys, and making sure every interaction feels natural and engaging."
              }
            />
            <div>
              <AnimatedTitle
                text={"UI/UX Tools"}
                className="text-[22px] font-semibold text-[#333] md:text-[26px] lg:text-[30px]"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Adobe XD"
                }
              />
            </div>
            </div>

            {/* Freelancer Section */}

            <div className='mb-5 md:mb-8 lg:mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#333] md:gap-6 md:text-[20px] md:leading-relaxed lg:text-[24px]'>

            <AnimatedTitle
              text={"Freelancer"}
              className="text-[28px] font-bold text-[#444444] md:text-[36px] lg:text-[40px]"
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "With years of experience and 20+ satisfied clients, I’ve embraced versatility and commitment in my freelance work, tailoring each project to deliver something truly memorable."
              }
            />
            <div>
              <AnimatedTitle
                text={"Freelancing Tools"}
                className="text-[22px] font-semibold text-[#333] md:text-[26px] lg:text-[30px]"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Upwork, Fiverr"
                }
              />
            </div>

            </div>
          </div>
        </div>

    </section>
  )
}

export default About
