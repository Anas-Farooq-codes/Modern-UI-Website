"use client"

import PreLoader from "./animations/PreLoader/PreLoader";
import Hero from "./Hero-section/Hero";
import Reviews from "@/app/reviews-section/ReviewGrid";
import Navbar from "./animations/navbar/Navbar";

// Blobity Cursor 
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import { useEffect } from "react";

// Dynamic 


import dynamic from "next/dynamic";
const Work = dynamic(() => import("./work-section/Work"))
const About = dynamic(() => import("./about-section/About"))
const Contact = dynamic(() => import("./contact-section/Contact"))
const Footer = dynamic(() => import("./footer/Footer"))

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions)

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around 
      window.blobity = blobityInstance.current
    }
  }, [blobityInstance])

  useEffect(() => {
window.scrollTo({
  top:0,
  left:0,
});
  }, []);
  return (
    <>
    <PreLoader/>

<header>
<Navbar/>
</header>

    <main className="flex flex-col items-center justify-center">
      <Hero/>
      <Work/>
      <About />
      <Reviews/>
      <Contact/>
      <Footer/>
    </main>
    </>
  );
}
