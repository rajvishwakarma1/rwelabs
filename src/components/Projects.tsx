"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "The subtle art of comfort",
        client: "Schlong",
        year: "2024",
        category: "Rebranding",
        color: "bg-[#D1CCC2]",
        textColor: "text-[#0F0E0E]"
    },
    {
        title: "Memories in the making",
        client: "Sensaya",
        year: "2024",
        category: "Rebranding",
        color: "bg-[#A1AEFF]",
        textColor: "text-[#0F0E0E]"
    },
    {
        title: "Lighting meets Generation Z",
        client: "Gaston",
        year: "2024",
        category: "Rebranding",
        color: "bg-[#F5B9FA]",
        textColor: "text-[#0F0E0E]"
    },
    {
        title: "Skincare for the future",
        client: "Le Blink",
        year: "2024",
        category: "Rebranding",
        color: "bg-[#F0D6C2]",
        textColor: "text-[#0F0E0E]"
    },
    {
        title: "A new alpine Boutique Hotel",
        client: "Califfo",
        year: "2024",
        category: "Rebranding",
        color: "bg-[#D1E6C2]",
        textColor: "text-[#0F0E0E]"
    }
];

export function Projects() {
    return (
        <section id="portfolio" className="relative px-4 pb-32 pt-32 md:px-8 mx-auto w-full max-w-7xl">
            <div className="flex flex-col gap-[10px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`sticky top-24 w-full rounded-[40px] md:rounded-[60px] p-8 md:p-16 flex flex-col md:flex-row gap-8 justify-between shadow-xl border border-black/5 origin-top min-h-[60vh] md:min-h-[75vh] ${project.color} ${project.textColor}`}
                        style={{ zIndex: index, top: `calc(6rem + ${index * 20}px)` }}
                    >
                        {/* Left Content */}
                        <div className="flex flex-col justify-between w-full md:w-1/2">
                            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
                                <span className="border border-black/20 rounded-full px-4 py-2">{project.year}</span>
                                <span className="border border-black/20 rounded-full px-4 py-2">{project.category}</span>
                                <span className="border border-black/20 rounded-full px-4 py-2 font-black">{project.client}</span>
                            </div>

                            <div className="mt-12 md:mt-0">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-balance">
                                    {project.title}
                                </h2>

                                <button className="flex items-center gap-4 bg-[#0F0E0E] text-white rounded-full px-6 py-3 font-semibold tracking-wider text-xs hover:scale-105 transition-transform origin-left w-fit uppercase">
                                    See Project
                                    <span className="bg-white/20 p-2 rounded-full">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Content / Image Placeholder */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto rounded-[30px] overflow-hidden relative shadow-inner">
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                            <div className="w-full h-full bg-black/5 backdrop-blur-3xl flex items-center justify-center p-8">
                                <span className="font-black text-black/20 tracking-tighter text-6xl break-all uppercase leading-none text-center">
                                    {project.client} Visuals
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
