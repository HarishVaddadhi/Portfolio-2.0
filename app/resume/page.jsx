"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About data
const about = {
    title: 'About Me',
    description: 'I am a front end developer with a passion for building scalable and efficient applications.',
    info: [
        { fieldName: "Name", fieldValue: "Harish Vaddadhi" },
        { fieldName: "Phone", fieldValue: "+91 9494465160" },
        { fieldName: "Experience", fieldValue: "3 Years" },
        { fieldName: "Nationality", fieldValue: "Indian" },
        { fieldName: "Email", fieldValue: "vharish35063@gmail.com" },
        { fieldName: "Languages", fieldValue: "English, Telugu, Hindi" },
    ]
};

// Experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Experienced IT professional with 2 years of hands-on experience in ServiceNow platform, incident management, and Microsoft Azure. Adept at efficiently resolving complex issues, optimizing workflows, and implementing effective solutions. Passionate about problem-solving and constantly seeking opportunities to leverage technology to drive business success. Additionally, proficient junior developer with experience in developing and deploying web applications using HTML, CSS, JavaScript, and Python. Utilizes Git and GitHub for version control and collaboration with team members. Actively contributes to academic projects, applying knowledge gained from Udemy courses to enhance skills and explore advanced topics in web development.",
    items: [
        {
            company: "Tata Consultancy Services",
            position: "Assistant System Engineer",
            duration: "2021 - present",
        },
    ]
};

// Education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "Developed and deployed multiple web applications using HTML, CSS, JavaScript, and Python.Participated in academic projects, contributing to the full software development lifecycle from ideation to deployment.Applied knowledge gained from Udemy courses to enhance skills and explore advanced topics in web development.",
    items: [
        {
            institution: "Vignan's Foundation for Science, Technology & Research",
            degree: "Master of Computer Applications",
            duration: "2022 - 2024",
        },
        {
            institution: "RK Degree College",
            degree: "B.sc computer science",
            duration: "2018 - 2021",
        },
    ]
};

// Skills data
const skills = {
    title: "My Skills",
    description: "",
    skillList: [
        { icon: <FaHtml5 />, name: "html 5" },
        { icon: <FaCss3 />, name: "css 3" },
        { icon: <FaJs />, name: "javascript" },
        { icon: <FaReact />, name: "react.js" },
        { icon: <FaNodeJs />, name: "node.js" },
        { icon: <SiNextdotjs />, name: "next.js" },
        { icon: <SiTailwindcss />, name: "tailwind.css" },
    ]
}

const Resume = () => {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <ContentSection data={experience} />
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <ContentSection data={education} />
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <SkillsSection skills={skills} />
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <AboutSection about={about} />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

const ContentSection = ({ data }) => (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{data.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {data.description}
        </p>
        <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {data.items.map((item, index) => (
                    <li key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position || item.degree}</h3>
                        <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company || item.institution}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </ScrollArea>
    </div>
);

const SkillsSection = ({ skills }) => (
    <div className="flex flex-col gap-[30px]"> 
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">
                {skills.title}
            </h3>
            <p>
                {skills.description}
            </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
            {skills.skillList.map((skill, index) => (
                <li key={index}>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </li>
            ))}
        </ul>
    </div>
);

const AboutSection = ({ about }) => (
    <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {about.info.map((item, index) => (
                <li key={index}
                    className="flex items-center justify-center xl:justify-start gap-4"
                >
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-sl">{item.fieldValue}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Resume;