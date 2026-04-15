import AnimatedText from "@/components/AnimatedText";
import Structure from "@/components/Structure";
import React from "react";

import ChatappImage from "../../../public/images/projects/chatapp.png";
import aiAssistant from "../../../public/images/projects/ai assistant.png";
import axeon from "../../../public/images/projects/axeon.png";
import crypto from "../../../public/images/projects/crypto.png";
import echomind from "../../../public/images/projects/echomind.png";
import library from "../../../public/images/projects/library.png";
import netflix from "../../../public/images/projects/netflix.png";
import prime from "../../../public/images/projects/prime video.png";
import study from "../../../public/images/projects/study sync.png";
import youtube from "../../../public/images/projects/youtube.png";

import TransitionEffect from "@/components/TransitionEffect";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";

const page = () => {
    return (
        <>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Structure className="pt-16">
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="A11yGuard"
                                summary="A11yGuard is a full-stack accessibility auditor built with Next.js and Puppeteer to ensure websites are inclusive for Screen Reader users. I automated WCAG 2.1 scanning and engineered a multi-stage Docker build to optimize performance on a resource-limited 512MB RAM server. The tool provides actionable fix recommendations, effectively bridging the gap between complex web standards and developer-friendly implementation."
                                type="Full Stack Project"
                                link="https://axeon.onrender.com/"
                                img={axeon}
                                github="https://github.com/abhishekk-dev23/Axeon"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Quick Chat"
                                summary="Quick Chat is a dynamic web-based messaging application crafted utilizing the MERN stack, complemented by Socket.IO for real-time communication. The stack comprises MongoDB for database management, Express.js for server-side application logic, React.js for constructing interactive user interfaces, and Node.js for backend execution."
                                type="Full Stack Project"
                                link="https://chat-app-phi-murex.vercel.app/"
                                img={ChatappImage}
                                github="https://github.com/abhishekk-dev23/Chat-App"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="CryptoPlace"
                                type="Frontend Project"
                                link="https://crypto-place-obishake.vercel.app/"
                                img={crypto}
                                github="https://github.com/abhishekk-dev23/CryptoPlace"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="VidTube"
                                type="Frontend Project"
                                link="https://vid-tube-obi.vercel.app/"
                                img={youtube}
                                github="https://github.com/abhishekk-dev23/VidTube"
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="EchoMind"
                                summary="EchoMind is a sophisticated full-stack web application built using the MERN stack that serves as a dynamic platform for personal expression and digital storytelling. It provides a comprehensive interface where users can seamlessly create, read, update, and delete their own blog posts with real-time feedback."
                                type="Full Stack Project"
                                link="https://echomind-frontend-3jmp.onrender.com/"
                                img={echomind}
                                github="https://github.com/abhishekk-dev23/EchoMind"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="AI-Assistant"
                                summary="Virtual-Assistant is a sophisticated full-stack web application built using the MERN stack that serves as a personalized digital assistant. It integrates the Google Gemini API to process natural language queries and provide intelligent, context-aware responses to user inputs."
                                type="Full Stack Project"
                                link="https://virtual-assistant-frontend-5pj8.onrender.com/"
                                img={aiAssistant}
                                github="https://github.com/abhishekk-dev23/Virtual-Assistant"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Library"
                                summary="BookStack is a comprehensive web application built using the MERN stack that enables users to manage a digital library collection. It provides a seamless interface for adding, viewing, and deleting book records by interacting with a dedicated MongoDB database."
                                link="https://book-store-frontend-sltx.onrender.com/"
                                img={library}
                                github="https://github.com/abhishekk-dev23/Book-Store"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="NetMirror"
                                type="Frontend Project"
                                link="https://net-mirror-wheat.vercel.app/"
                                img={netflix}
                                github="https://github.com/abhishekk-dev23/NetMirror"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Prime-Video-UI-Clone"
                                type="Frontend Project"
                                link="https://prime-video-ui-clone.vercel.app/"
                                img={prime}
                                github="https://github.com/abhishekk-dev23/Prime-Video-UI-Clone"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Study Sync"
                                type="Frontend Project"
                                link="https://study-sync-project-amber.vercel.app/"
                                img={study}
                                github="https://github.com/abhishekk-dev23/Study-Sync-project"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="YouTube Clone"
                                type="Backend Project"
                                link="https://github.com/abhishekk-dev23/Youtube-backend"
                                github="https://github.com/abhishekk-dev23/Youtube-backend"
                            />
                        </div>
                    </div>
                </Structure>
            </main>
        </>
    );
};

export default page;
