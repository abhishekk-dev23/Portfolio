import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgref = useRef(null)

    function handleMouseMove(event){
        imgref.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgref.current.style.display = "none"
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target='_blank' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage style={{x:x, y:y}} initial={{opacity:0}} whileInView={{opacity:1, transition: {duration:0.2}}} ref={imgref} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
        </Link>
    )
}

export default MovingImg;