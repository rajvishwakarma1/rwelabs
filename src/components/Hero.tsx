"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function Hero() {
    const [time, setTime] = useState(new Date());
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Force-play the video in case autoPlay is blocked
    useEffect(() => {
        const vid = videoRef.current;
        if (vid) {
            vid.play().catch(() => {});
        }
    }, []);

    const formattedTime = time.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
    });

    const [hours, minutes] = formattedTime.split(":");

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pb-20 md:px-12 md:pb-24 overflow-hidden bg-[#0F0E0E]">
            {/* Background Video - full-bleed, autoplays like gaspar.framer.website */}
            <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0 overflow-hidden"
            >
                <video
                    ref={videoRef}
                    src="/rwelabs.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay so text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0E] via-[#0F0E0E]/40 to-[#0F0E0E]/20" />
            </motion.div>

            <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto w-full z-10 pt-32 md:pt-48">

                {/* Left column: Live Time & Location */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-4 text-sm font-medium tracking-widest text-white uppercase mt-2 md:mt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
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
                        <span className="text-zinc-300">INDIA</span>
                    </div>
                </motion.div>

                {/* Right column: Main statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-balance text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
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
