"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div 
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' 
            whileHover={{ scale: 1.05 }} 
            initial={{ x: 0, y: 0 }} 
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} 
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <div>
            <h2 className='font-bold text-8xl mt-44 w-full text-center md:mt-12 md:text-6xl xs:text-5xl md:mb-3'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
                
                {/* Center Core */}
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.05 }}>
                    TECH
                </motion.div>

                {/* Inner Ring (Radius ~12vw) */}
                <Skill name="HTML" x="-12vw" y="-5vw" />
                <Skill name="CSS" x="0vw" y="-14vw" />
                <Skill name="Javascript" x="12vw" y="-5vw" />
                <Skill name="ReactJS" x="0vw" y="14vw" />
                <Skill name="NextJS" x="-12vw" y="5vw" />

                {/* Middle Ring (Radius ~22vw) */}
                <Skill name="NodeJS" x="-22vw" y="2vw" />
                <Skill name="ExpressJS" x="-15vw" y="18vw" />
                <Skill name="RestAPI" x="15vw" y="18vw" />
                <Skill name="Tailwind" x="22vw" y="2vw" />
                <Skill name="SQL" x="0vw" y="25vw" />

                {/* Outer Ring (Radius ~32vw) */}
                <Skill name="C/C++" x="-32vw" y="-5vw" />
                <Skill name="Java" x="-18vw" y="-22vw" />
                <Skill name="Python" x="18vw" y="-22vw" />
                <Skill name="ML/AI" x="32vw" y="-5vw" />
                <Skill name="R" x="25vw" y="15vw" />
            </div>

            <h2 className='font-bold text-8xl mt-44 w-full text-center md:mt-12 md:text-6xl xs:text-5xl'>Tools</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.05 }}>
                    TOOLS
                </motion.div>

                {/* Ring Distribution for Tools */}
                <Skill name="Docker" x="-15vw" y="-10vw" />
                <Skill name="Git/Github" x="15vw" y="-10vw" />
                <Skill name="VS Code" x="0vw" y="18vw" />
                <Skill name="Postman" x="-25vw" y="5vw" />
                <Skill name="Vercel" x="25vw" y="5vw" />
                <Skill name="Render" x="0vw" y="-20vw" />
                <Skill name="MongoDB" x="-18vw" y="20vw" />
                <Skill name="Socket.io" x="18vw" y="20vw" />
            </div>
        </div>
    )
}

export default Skills