"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "QuickByte",
        description: "High End Food Delivery Platform project",
        stack: [{name: "html 5"}, {name: "css"}, {name: "javascript"}, {name: "Linux"}, {name: "Flask"}, {name: "Python"}, {name: "SQLite"}],
        image: "/assets/work/thumb1.png",
        live: "https://example.com/quickbyte",
        github: "https://github.com/TechHubHQ/QuickByte",
    },
    {
        num: "02",
        category: "frontend",
        title: "ILL - LMS (Learning Management System)",
        description: "High End E-Learning Platform for students",
        stack: [{name: "html 5"}, {name: "css"}, {name: "javascript"}, {name: "Linux"}, {name: "Flask"}, {name: "Python"}, {name: "SQLite"}],
        image: "/assets/work/thumb2.png",
        live: "https://example.com/ill-lms",
        github: "https://github.com/TechHubHQ/ILL",
    },
    {
        num: "03",
        category: "frontend",
        title: "Portfolio Website",
        description: "Online Portfolio",
        stack: [{name: "Next JS"}, {name: "TailWind css"}, {name: "javascript"},],
        image: "/assets/work/thumb3.png",
        live: "https://example.com/ill-lms",
        github: "https://github.com/TechHubHQ/ILL",
    },
];

const Work = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const project = projects[currentProjectIndex];

    return (
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[36px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div>
                                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                    {project.category}
                                </h2>
                                <h3 className="text-2xl font-bold mt-2 mb-4 text-white">{project.title}</h3>
                                <p className="text-white/60">{project.description}</p>
                                <ul className="flex gap-4 flex-wrap mt-4">
                                    {project.stack.map((item, index) => (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-2">
                                    {project.live && (
                                        <Link href={project.live} title="Live Project" className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link href={project.github} title="GitHub Repository" className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-[50%] relative">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={(swiper) => setCurrentProjectIndex(swiper.activeIndex)}
                            >
                                {projects.map((proj, index) => (
                                    <SwiperSlide key={index}>
                                        <Image src={proj.image} alt={proj.title} width={500} height={300} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="swipe-hint"></div>
                        </div>
                    </div>
                </div>
            </motion.section>
    );
};

export default Work;