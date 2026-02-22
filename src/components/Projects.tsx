"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Never forget to follow up",
        client: "Reply Radar",
        year: "2026",
        category: "Web App",
        color: "bg-[#D1CCC2]",
        textColor: "text-[#0F0E0E]",
        link: "https://replyradar.online/",
        image: "/projects/replyradar.png",
        slug: "replyradar"
    },
    {
        title: "Make a difference",
        client: "BinaryVlue",
        year: "2026",
        category: "Website Rebranding, SEO",
        color: "bg-[#A1AEFF]",
        textColor: "text-[#0F0E0E]",
        link: "https://www.binaryvlue.com/index.html",
        image: "/projects/binaryvlue.png",
        slug: "binaryvlue"
    }
];

export function Projects() {
    return (
        <section id="portfolio" className="relative px-4 pb-32 pt-24 md:px-8 mx-auto w-full max-w-7xl">
            <div className="absolute top-12 right-12 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-white/40">
                <span>Works</span>
                <span className="text-xl leading-none">↓</span>
            </div>
            <div className="flex flex-col gap-[10px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`sticky top-24 w-full rounded-[40px] md:rounded-[60px] p-8 md:p-16 flex flex-col md:flex-row gap-8 justify-between shadow-xl origin-top min-h-[60vh] md:min-h-[75vh] ${project.image ? "" : "border border-black/5"} ${project.color} ${project.textColor}`}
                        style={{ zIndex: index, top: `calc(6rem + ${index * 20}px)` }}
                    >
                        {/* Left Content */}
                        <div className="flex flex-col justify-between w-full md:w-1/2">
                            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
                                <span className="border border-black/20 rounded-full px-4 py-2">
                                    {project.client}
                                </span>
                                <span className="border border-black/20 rounded-full px-4 py-2">
                                    {project.category}
                                </span>
                            </div>

                            <div className="mt-12 md:mt-0">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-balance">
                                    {project.title}
                                </h2>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 bg-[#0F0E0E] text-white rounded-full px-6 py-3 font-semibold tracking-wider text-xs transition-all origin-left w-fit uppercase group"
                                    >
                                        See Project
                                        <span className="bg-white/20 p-2 rounded-full">
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                                        </span>
                                    </Link>

                                    <Link
                                        href={`/project/${project.slug}`}
                                        className="flex items-center gap-4 border border-black/20 text-black rounded-full px-6 py-3 font-semibold tracking-wider text-xs hover:bg-black hover:text-white transition-all w-fit uppercase"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Content / Image Placeholder */}
                        <div className={`w-full md:w-1/2 h-64 md:h-auto rounded-[30px] overflow-hidden relative ${project.image ? "" : "bg-black/5 shadow-inner"}`}>
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.client}
                                    fill
                                    className="object-contain p-4"
                                />
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                    <div className="w-full h-full bg-black/5 backdrop-blur-3xl flex items-center justify-center p-8">
                                        <span className="font-black text-black/20 tracking-tighter text-6xl break-all uppercase leading-none text-center">
                                            {project.client} Visuals
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
