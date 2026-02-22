"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
    "Web Design",
    "Mobile App Design",
    "NextJS",
    "Webflow development",
    "SEO",
    "Content Writing",
];

function ServiceItem({
    service,
}: {
    service: string;
}) {
    const itemRef = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end start"]
    });

    // 0.5 is exactly when the element is in the vertical center of the viewport
    const opacity = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.55],
        [0.15, 1, 0.15]
    );

    return (
        <motion.h2
            ref={itemRef}
            style={{ opacity }}
            className="text-4xl md:text-5xl lg:text-[5rem] font-bold tracking-[-0.04em] leading-[0.85] text-right cursor-default transition-opacity duration-75 text-white whitespace-nowrap"
        >
            {service}
        </motion.h2>
    );
}

export function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: sectionProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    return (
        <section
            ref={containerRef}
            className="bg-[#0F0E0E] text-[#F7F7F7] pt-12 pb-0 px-4 md:px-8 relative overflow-hidden min-h-[120vh]"
        >
            <div className="absolute top-12 right-12 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-white/40">
                <span>What we do</span>
                <span className="text-xl leading-none">↓</span>
            </div>

            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 w-full h-full pt-8">

                {/* Left Column: Sticky Image */}
                <div className="relative h-full">
                    <motion.div
                        className="sticky top-1/4 w-full aspect-[3/4] md:aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
                        style={{
                            opacity: useTransform(sectionProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
                            scale: useTransform(sectionProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95])
                        }}
                    >
                        {/* Placeholder long stock image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                                alt="Abstract Visual"
                                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Scrolling Services text (closely knit, single line) */}
                <div className="flex flex-col justify-center gap-0 w-full pt-[5vh] pb-0 text-right">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
