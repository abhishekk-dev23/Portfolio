'use client'

import React from 'react'
import { motion } from "framer-motion"


const Achievement = ({title, date}) => {
    return (
        <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}} className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col'>
            <h2 className='capitalize text-xl font-semibold'>{title}</h2>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self.start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const Achievements = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Achievements</h2>
        <ul>
            <Achievement
                title="Solved 350+ DSA problems across LeetCode, GeeksforGeeks, and Coding Ninjas."
                date="March, 2026"
            />
            <Achievement
                title="Oracle Cloud Infrastructure 2025 Certified Generative AI Professional "
                date="October, 2025"
            />
            <Achievement
                title="HackHeritage 2025 Winner"
                date="August, 2025"
            />
            <Achievement
                title=" Secured a rank of 4311 in WBJEE among 0.1 million candidates"
                date="July, 2023"
            />
        </ul>
    </div>
  )
}

export default Achievements