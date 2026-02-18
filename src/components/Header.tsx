"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
                <div className={styles.headerInner}>
                    <a href="#" className={styles.logo}>
                        <span className={styles.logoText}>rwelabs</span>
                    </a>
                    <button
                        className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.menuLine}></span>
                        <span className={styles.menuLine}></span>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.menuOverlay}
                        initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
                        animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
                        exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <nav className={styles.menuNav}>
                            <div className={styles.menuLinks}>
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        className={styles.menuLink}
                                        onClick={() => setMenuOpen(false)}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                                    >
                                        <span className={styles.menuLinkIndex}>0{i + 1}</span>
                                        <span className={styles.menuLinkText}>{link.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                            <div className={styles.menuFooter}>
                                <div className={styles.menuSocials}>
                                    {socialLinks.map((link) => (
                                        <a key={link.label} href={link.href} className={styles.menuSocialLink}>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                                <p className={styles.menuTagline}>Are we a lab? Yes.</p>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
