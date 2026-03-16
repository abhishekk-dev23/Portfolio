"use client"

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info, data}) => {
    const ref = useRef({ layoutEffect: false });
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 md:text-sm'>
                    {time} | {place} | {data}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[19px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                type="Bachelor Of Engineering In Information Technology"
                time="2023-2027"
                place="Heritage Institute of Technology, Kolkata"
                info="Relevant courses included Data Structures and Algorithms, Operating System, Object Oriented Programming, Graph Theory, Data Base Management System, Artificial Intelligence etc."
                data="8.00"
                />
                <Details
                type="Higher Secondary (12th)"
                time="2019-2021"
                place="R.K.M.G.G. College"
                info="Relevant courses included Mathematics, Physics, Chemistry, Biology, English and Hindi"
                data="69.6%"
                />
                <Details
                type="Secondary (10th)"
                time="2018-2019"
                place="High School, Shivajee Nagar, Samastipur"
                info="Relevant courses included Mathematics, Physical Science, Life Science, History, Geography, English, Sanskrit, Hindi"
                data="75.6.6%"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education