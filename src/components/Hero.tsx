"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const progressDisplay = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={ref} className={styles.hero} id="hero">
            {/* Animated background shapes */}
            <div className={styles.bgShapes}>
                <motion.div
                    className={styles.shape1}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className={styles.shape2}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className={styles.shape3}
                    animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div className={styles.heroContent} style={{ y, opacity, scale }}>
                <motion.div
                    className={styles.badge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className={styles.badgeDot} />
                    Available for new projects
                </motion.div>

                <motion.h1
                    className={styles.heading}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    A Digital
                    <br />
                    Experience Lab
                </motion.h1>

                <motion.p
                    className={styles.subheading}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                >
                    Are we a lab? A studio? A secret society of pixel perfectionists?{" "}
                    <span className={styles.highlight}>Yes.</span>
                </motion.p>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    At rwelabs, we craft immersive websites, striking brand identities,
                    and digital experiences that redefine how audiences interact with
                    brands online.
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    <a href="#contact" className={styles.ctaButton}>
                        <span>Book a Call</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#works" className={styles.ctaSecondary}>
                        View Work
                    </a>
                </motion.div>

                <motion.div
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                >
                    <motion.div
                        className={styles.scrollLine}
                        animate={{ scaleY: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>

            {/* Progress counter */}
            <motion.div className={styles.progressCounter}>
                <motion.span>{progressDisplay}</motion.span>
                <span className={styles.progressPercent}>%</span>
            </motion.div>
        </section>
    );
}
