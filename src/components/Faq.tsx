"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How Does RWE Labs Work?",
        answer: "RWE Labs, an expert in web development and brand identity, offers complete solutions for establishing and improving your online presence. We specialize in web branding, brand identity, and digital marketing, using a strategic approach to understand your company's goals and target audience. From designing user-friendly websites to creating a strong digital footprint through dedicated marketing campaigns, RWE Labs ensures your brand stands out in the competitive online world. We provide solutions that drive business growth and success by combining creativity, cutting-edge technology, and innovative strategies."
    },
    {
        question: "What Services do RWE Labs Offer?",
        answer: "We offer a comprehensive suite of digital services including Website Development, Branding & Identity, UI/UX Design, 3D Web Experiences, and ongoing technical support to help your business thrive in the digital landscape."
    },
    {
        question: "What's the average project duration in RWE Labs?",
        answer: "The average project duration varies depending on the complexity and scope of the work. A standard website redesign might take 4-8 weeks, while a comprehensive branding and custom web application project could span 12-16 weeks. We work closely with our clients to establish realistic timelines and deliver high-quality results efficiently."
    }
];

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#0F0E0E] text-[#F7F7F7] py-32 px-4 md:px-8 relative max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight text-white leading-[1.1]">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="flex flex-col">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/20 last:border-b-0">
                        <button
                            onClick={() => toggleOpen(index)}
                            className="w-full flex justify-between items-center py-10 text-left group"
                        >
                            <span className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-white/80 transition-colors">
                                {faq.question}
                            </span>
                            <span className="ml-8 shrink-0 text-white transition-transform duration-300">
                                {openIndex === index ? (
                                    <Minus className="w-6 h-6" strokeWidth={1.5} />
                                ) : (
                                    <Plus className="w-6 h-6" strokeWidth={1.5} />
                                )}
                            </span>
                        </button>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-10 pt-2 text-white/70 text-lg md:text-xl leading-[1.6] max-w-5xl font-light">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
