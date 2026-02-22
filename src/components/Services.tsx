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

    return (
        <section
            ref={containerRef}
            className="bg-[#0F0E0E] text-[#F7F7F7] pt-12 pb-0 px-4 md:px-8 relative overflow-hidden min-h-[120vh]"
        >
            <div className="absolute top-12 right-12 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-white/40">
                <span>What we do</span>
                <span className="text-xl leading-none">↓</span>
            </div>

            <div className="max-w-[90rem] mx-auto w-full h-full pt-8">
                {/* Services text — right-aligned, scroll-animated */}
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
