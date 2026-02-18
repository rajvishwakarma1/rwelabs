"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Works.module.css";

const projects = [
    {
        name: "Vesenex",
        location: "Australia",
        category: "Branding & 3D Website",
        color: "#1a1a2e",
        accent: "#e94560",
    },
    {
        name: "Summr",
        location: "India",
        category: "Branding & 3D Website",
        color: "#16213e",
        accent: "#0f3460",
    },
    {
        name: "BCF Cast Factory",
        location: "India",
        category: "UI/UX & Web",
        color: "#1a1a1a",
        accent: "#e2e2e2",
    },
    {
        name: "Hashmint",
        location: "India",
        category: "3D Website & Photography",
        color: "#0d1117",
        accent: "#58a6ff",
    },
    {
        name: "Medium Turtles",
        location: "Global",
        category: "Brand Identity, Web & App",
        color: "#1c1c1c",
        accent: "#4ecdc4",
    },
    {
        name: "Haus of Chaos",
        location: "Chennai",
        category: "Website Development",
        color: "#2d1b4e",
        accent: "#bb86fc",
    },
    {
        name: "Techvenchure",
        location: "Dubai",
        category: "3D Website",
        color: "#0a192f",
        accent: "#64ffda",
    },
    {
        name: "Zaap Energy",
        location: "India",
        category: "Brand Identity, Web & App",
        color: "#1a1a1a",
        accent: "#ffd93d",
    },
];

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={styles.card}
            style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
            }}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
            }}
        >
            {/* Abstract visual */}
            <div className={styles.cardVisual}>
                <div
                    className={styles.cardShape}
                    style={{
                        background: `linear-gradient(135deg, ${project.accent}33, ${project.accent}11)`,
                        borderColor: `${project.accent}22`,
                    }}
                />
                <div
                    className={styles.cardGlow}
                    style={{ background: project.accent }}
                />
            </div>

            <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>{project.category}</span>
                    <span className={styles.cardDot}>·</span>
                    <span className={styles.cardLocation}>{project.location}</span>
                </div>
                <h3 className={styles.cardTitle}>{project.name}</h3>
            </div>

            <div className={styles.cardArrow}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
            </div>
        </motion.div>
    );
}

export default function Works() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className={styles.works} id="works">
            <div className={styles.worksInner}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionLabel}>Selected Work</span>
                    <h2 className={styles.sectionTitle}>
                        Projects that speak
                        <br />
                        louder than pitches
                    </h2>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
