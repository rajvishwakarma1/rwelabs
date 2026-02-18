"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Services.module.css";

const services = [
    {
        title: "Website Design & Development",
        desc: "Visually stunning, responsive, and user-friendly websites tailored to your specific business requirements.",
        icon: "🌐",
    },
    {
        title: "Web Branding & Identity",
        desc: "Consistent online identity through logo design, color systems, and branding strategies that make you unforgettable.",
        icon: "✦",
    },
    {
        title: "UI/UX Design",
        desc: "Intuitive interfaces and delightful interactions that keep your users coming back for more.",
        icon: "◈",
    },
    {
        title: "E-Commerce Solutions",
        desc: "Robust and secure e-commerce platforms for seamless online shopping experiences that convert.",
        icon: "⬡",
    },
    {
        title: "Digital Marketing",
        desc: "SEO, social media, PPC campaigns, and content marketing to amplify your online presence.",
        icon: "◉",
    },
    {
        title: "Custom Web Applications",
        desc: "Well-engineered web applications designed to solve specific business challenges at scale.",
        icon: "⟐",
    },
];

function ServiceCard({
    service,
    index,
}: {
    service: (typeof services)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
            }}
        >
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDesc}>{service.desc}</p>
            <div className={styles.serviceNumber}>0{index + 1}</div>
        </motion.div>
    );
}

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className={styles.services} id="services">
            <div className={styles.servicesInner}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionLabel}>What We Do</span>
                    <h2 className={styles.sectionTitle}>
                        We provide a wide range of services
                        to help businesses establish and expand
                        their online presence.
                    </h2>
                </motion.div>

                <div className={styles.grid}>
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>

                <motion.div
                    className={styles.promise}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <div className={styles.promiseIcon}>⚡</div>
                    <div>
                        <h3 className={styles.promiseTitle}>24-Hour Response</h3>
                        <p className={styles.promiseDesc}>
                            We hate to keep you waiting. Setting up a team, making preliminary
                            research, and getting back to you with a proposal will take up to
                            24 hours from the moment we learn what&apos;s needed.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
