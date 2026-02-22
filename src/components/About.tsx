"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-[#0F0E0E] text-[#F7F7F7] flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full px-4 py-2 flex items-center gap-2"
                >
                    About us <span>↴</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.2] text-balance"
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
