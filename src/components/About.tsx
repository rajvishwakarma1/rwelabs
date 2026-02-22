"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-[#0F0E0E] text-[#F7F7F7] flex flex-col items-start min-h-[80vh] max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-start gap-12 w-full">



                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight text-white leading-[1.1] text-balance"
                >
                    A bunch of misfits <br />
                    with an eye for beauty.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-2xl font-medium max-w-3xl text-balance leading-relaxed text-zinc-400"
                >
                    We&apos;re committed to shaping better futures putting people first — our clients, our employees, and the users we serve. We pursue excellence. We embrace growth. We create what doesn&apos;t exist. We&apos;re RWE Labs.
                </motion.p>
            </div>
        </section>
    );
}
