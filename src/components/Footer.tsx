"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, MoveUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="bg-[#0F0E0E] text-[#F7F7F7] px-4 md:px-8 pb-4 md:pb-8 pt-12 md:pt-16 flex flex-col gap-12">

            <div className="max-w-7xl mx-auto w-full">
                {/* Top Huge Call to Action */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-balance">
                        Thirsty for more? <br />
                        Reach out.
                    </h2>

                    {/* Fixed container to prevent layout shift on hover expansion */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
                        <a
                            href="mailto:rwelabs@gmail.com"
                            className="absolute right-0 top-0 flex items-center justify-end w-24 h-24 md:w-32 md:h-32 bg-white hover:bg-[#E8E4D9] text-[#0F0E0E] rounded-full hover:w-[19rem] md:hover:w-[24rem] transition-all duration-500 ease-out group overflow-hidden z-10"
                        >
                            {/* Hidden text that reveals on hover */}
                            <span className="absolute left-6 md:left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-bold text-lg md:text-2xl whitespace-nowrap">
                                rwelabs@gmail.com
                            </span>

                            {/* Icons container pinned to the right */}
                            <div className="absolute right-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shrink-0">
                                <MoveUpRight className="w-8 h-8 md:w-12 md:h-12 absolute group-hover:opacity-0 transition-all duration-300" />
                                <ArrowRight className="w-8 h-8 md:w-12 md:h-12 absolute opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full bg-[#EAE8E3] text-[#0F0E0E] rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 lg:p-10 flex flex-col justify-between min-h-[200px] md:min-h-[250px]">

                <div className="flex flex-col md:flex-row justify-between items-start gap-6 w-full">

                    <div className="flex gap-10 md:gap-20 w-full md:w-auto">
                        <div className="flex flex-col gap-4">
                            <Link href="#portfolio" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                                Work <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                            </Link>
                            <Link href="#about" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                                About <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                            </Link>
                            <Link href="#" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                                Thoughts <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                                Careers <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                            </Link>
                            <Link href="#" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                                Privacy Policy <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                            </Link>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 w-full mt-6">

                    <p className="text-[15px] text-black/60">
                        RWE Labs © {new Date().getFullYear()}
                    </p>

                    <div className="flex flex-wrap gap-6 md:gap-10">
                        <Link href="#" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                            X <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                        </Link>
                        <Link href="#" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                            LinkedIn <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                        </Link>
                        <Link href="#" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                            Behance <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                        </Link>
                        <Link href="#" className="flex items-center gap-1 text-[15px] hover:opacity-70 transition-opacity">
                            Instagram <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}
