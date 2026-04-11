import Structure from "@/components/Structure";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import HireMe from "@/components/HireMe";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
    return (
        <>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Structure className="pt-0 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 md:w-full">
                            <Image
                                src={profilePic}
                                alt="Profile Image"
                                className="w-full h-auto md:inline-block md:w-full"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50px, 50px"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text="Turning Vision Into Reality With Code And Design."
                                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                As a skilled full-stack developer, I am
                                dedicated to turning ideas into innovative web
                                applications. Explore my latest projects and
                                articles, showcasing my expertise in web
                                development and machine learning.
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link
                                    href="/pdfs/resume.pdf"
                                    target={"_blank"}
                                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                                    prefetch={false}
                                >
                                    Resume{" "}
                                    <FaArrowRightLong className="w-6 ml-1" />
                                </Link>
                                <Link
                                    href="mailto:abhishek.kumar.dev23@gmail.com"
                                    target={"_blank"}
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Structure>
                <HireMe />
                <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
                    <Image
                        src={LightBulb}
                        alt="LightBulb"
                        className="w-full h-auto hover:brightness-150"
                    ></Image>
                </div>
            </main>
        </>
    );
}
