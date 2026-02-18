"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Footer.module.css";

const footerLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <footer ref={ref} className={styles.footer}>
            <div className={styles.footerInner}>
                {/* Navigation */}
                <motion.div
                    className={styles.footerNav}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.footerLinks}>
                        {footerLinks.map((link) => (
                            <a key={link.label} href={link.href} className={styles.footerLink}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom row */}
                <motion.div
                    className={styles.footerBottom}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className={styles.footerSocials}>
                        {socialLinks.map((link) => (
                            <a key={link.label} href={link.href} className={styles.footerSocialLink}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className={styles.footerLegal}>
                        {legalLinks.map((link) => (
                            <a key={link.label} href={link.href} className={styles.footerLegalLink}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Giant brand text */}
                <motion.div
                    className={styles.footerBrand}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span className={styles.brandText}>rwelabs</span>
                    <span className={styles.brandSubtext}>/ Are We Labs? /</span>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    className={styles.copyright}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p>© {new Date().getFullYear()} rwelabs. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}
