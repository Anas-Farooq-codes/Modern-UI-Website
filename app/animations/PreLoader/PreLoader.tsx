"use client"
import { useEffect } from 'react'
import "./preloader.css"
import {preLoaderAnim} from "./loader"

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, [])
  return (
    <div className='preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[18px] md:text-[18px] lg:text-[20px]'>
        <div className='text-container w-500 flex h-60 items-center opacity-0 justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>
            <span>Developer.</span>
            <span>Programmer.</span>
            <span>Coder.</span>
            <div className="sub hidden"></div>
        </div>
    </div>
  )
}

export default PreLoader