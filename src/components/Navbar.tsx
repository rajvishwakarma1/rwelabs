"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export function Navbar() {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm bg-[#0F0E0E]/80 border-b border-white/5"
        >
            <Link href="/" className="flex flex-col gap-0 group">
                <div className="flex flex-col relative">
                    {/* The characteristic line from the logo */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-[2px] w-[65%] bg-white mb-[2px] origin-left"
                    />
                    <span className="text-2xl font-black tracking-tighter hover:text-white/80 transition-colors lowercase leading-none">
                        rwelabs
                    </span>
                </div>
            </Link>

            <div className="flex items-center gap-18">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 hidden lg:block uppercase">
                    BOOKING PROJECTS FOR Q2 &apos;2026
                </span>
                <div className="flex items-center gap-2">

                    <Link
                        href="#about"
                        className="text-xs font-semibold tracking-wider border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 transition-colors hidden sm:block"
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="mailto:rwelabs@gmail.com"
                        className="text-xs font-black tracking-wider border border-white text-[#0F0E0E] bg-white rounded-full px-4 py-2 hover:bg-transparent hover:text-white transition-all"
                    >
                        LET&apos;S CHAT
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
