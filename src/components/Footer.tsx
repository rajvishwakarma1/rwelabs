"use client";

import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="bg-[#0F0E0E] text-[#F7F7F7] pt-32 pb-8 px-6 md:px-12 border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">

                {/* Top Huge Call to Action */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-balance">
                        Thirsty for more? <br />
                        Reach out.
                    </h2>

                    <button className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white text-black rounded-full hover:scale-105 transition-transform duration-300 group">
                        <MoveUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform duration-300" />
                    </button>
                </div>

                {/* Office Contact */}
                <div className="flex flex-col md:flex-row justify-between gap-12 pt-12 border-t border-white/10">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-black tracking-widest uppercase">INDIA</h3>
                        <div className="text-zinc-400 text-sm leading-relaxed flex flex-col gap-1">
                            <p>Global Headquarters</p>
                            <a href="tel:+910000000000" className="hover:text-white transition-colors mt-2">+91 000 000 0000</a>
                            <a href="mailto:hello@rwelabs.com" className="hover:text-white transition-colors underline underline-offset-4">hello@rwelabs.com</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Socials & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-semibold tracking-widest uppercase text-zinc-400 gap-6">
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Linkedin</Link>
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                    </div>
                    <p>© {new Date().getFullYear()} RWE Labs. Created for excellence.</p>
                </div>

            </div>
        </footer>
    );
}
