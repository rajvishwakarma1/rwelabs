"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className={styles.contactCta} id="contact">
            <div className={styles.inner}>
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.cardGlow} />
                    <h3 className={styles.cardTitle}>
                        We&apos;re always looking for new collaborations.
                    </h3>
                    <p className={styles.cardDesc}>
                        Got a project in mind? Let&apos;s turn your ideas into digital
                        reality. No small talk, just great work.
                    </p>
                    <a href="mailto:hello@rwelabs.com" className={styles.cardButton}>
                        <span>Contact Us</span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <div className={styles.cardGlow2} />
                    <h3 className={styles.cardTitle}>
                        Check out our latest experiments on Instagram.
                    </h3>
                    <p className={styles.cardDesc}>
                        Behind-the-scenes, process drops, and the occasional existential
                        question about whether we are, in fact, labs.
                    </p>
                    <a
                        href="#"
                        className={styles.cardButtonSecondary}
                    >
                        <span>Go to Insta</span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
