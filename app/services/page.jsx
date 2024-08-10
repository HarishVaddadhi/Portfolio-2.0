"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Front-End Web Development",
        description: "Developed and deployed multiple web applications using HTML, CSS, JavaScript, and Python. Focused on creating responsive and user-friendly interfaces while ensuring optimal performance and accessibility.",
        href: ""
    },
    {
        num: "02",
        title: "Photo-shop",
        description: "I enjoy working with Adobe Photoshop as a hobby. I love editing photos, retouching images, and creating visually compelling designs. Exploring advanced tools and techniques to enhance images and produce high-quality visuals is very fulfilling.",
        href: ""
    },
    {
        num: "03",
        title: "IT Support",
        description: "Worked as an IT Professional providing technical support in ServiceNow, troubleshooting, Azure, SAP Technology, and Office 365. Experienced in resolving technical issues and maintaining efficient IT operations.",
        href: ""
    },
    {
        num: "04",
        title: "Incident Management",
        description: "Experienced IT professional with 2 years of hands-on experience in ServiceNow platform, incident management, and Microsoft Azure. Adept at efficiently resolving complex issues, optimizing workflows, and implementing effective solutions. Passionate about leveraging technology to drive business success.",
        href: ""
    }    
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div  className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>

                                <p className="text-white/60">{service.description}</p>

                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );   
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;