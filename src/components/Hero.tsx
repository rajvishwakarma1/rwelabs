"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Hero() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
    });

    const [hours, minutes] = formattedTime.split(":");

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-end px-6 pb-24 md:px-12 md:pb-32 overflow-hidden bg-[#0F0E0E]">
            {/* Background Graphic - Represents the large immersive image from the template */}
            <div className="absolute inset-0 top-20 bg-zinc-900/50 -z-10 rounded-b-[40px] md:rounded-b-[80px] overflow-hidden m-4 md:m-8">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0E] via-transparent to-transparent" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto w-full z-10 pt-12 md:pt-32">

                {/* Left column: Live Time & Location */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-4 text-sm font-medium tracking-widest text-[#F7F7F7] uppercase opacity-80 mt-2 md:mt-8"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex items-center tabular-nums">
                            <span>{hours}</span>
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="mx-0.5"
                            >
                                :
                            </motion.span>
                            <span>{minutes}</span>
                        </div>
                        <span className="text-zinc-500">INDIA</span>
                    </div>
                </motion.div>

                {/* Right column: Main statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-balance">
                        Crafting a future where <br className="hidden md:block" />
                        design meets strategy <br className="hidden md:block" />
                        and impact.
                    </h1>

                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full flex justify-center mt-12 md:mt-16 z-10 relative max-w-7xl mx-auto"
            >
                {/* Fixed container to prevent layout shift */}
                <div className="relative h-14 w-[160px]">
                    <Link
                        href="https://cal.com/rajvishwakarma/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute left-1/2 -translate-x-1/2 top-0 flex items-center justify-center bg-[#F7F7F7] text-[#0F0E0E] h-14 rounded-full font-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group w-[160px] hover:w-[340px] md:hover:w-[420px]"
                    >
                        {/* Default text */}
                        <span className="absolute uppercase tracking-wider text-xs whitespace-nowrap transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                            Book a call
                        </span>

                        {/* Hover text */}
                        <span className="absolute uppercase tracking-wider text-xs whitespace-nowrap translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-100">
                            Have a Vision? Let&apos;s Make it Reality.
                        </span>
                    </Link>
                </div>
            </motion.div>

        </section>
    );
}
