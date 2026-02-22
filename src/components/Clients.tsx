"use client";

import { motion } from "framer-motion";

export function Clients() {
    return (
        <section className="bg-[#0F0E0E] text-[#F7F7F7] py-32 px-6 md:px-12 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />

            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 z-10 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-center text-zinc-300"
                >
                    We&apos;ve worked with clients across
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
                >
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-wide">
                        <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-10 h-auto shadow-sm" />
                        <span>India</span>
                    </div>
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-wide">
                        <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="w-10 h-auto shadow-sm" />
                        <span>USA</span>
                    </div>
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-wide">
                        <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-10 h-auto shadow-sm" />
                        <span>UK</span>
                    </div>
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-wide">
                        <img src="https://flagcdn.com/sg.svg" alt="Singapore Flag" className="w-10 h-auto shadow-sm" />
                        <span>Singapore</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
