import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projectsData = {
    replyradar: {
        title: "Never forget to follow up",
        client: "Reply Radar",
        year: "2026",
        category: "Web App",
        image: "/projects/replyradar.png",
        description: "Reply Radar is an AI-powered follow-up automation tool designed to ensure no lead ever falls through the cracks. Built with a focus on seamless integration and intelligent response detection, it transforms how teams manage their sales pipeline.",
        fullDescription: "In a world where speed-to-lead is everything, Reply Radar provides a competitive edge by automating the most tedious part of the sales process. The platform analyzes incoming communications, identifies intent, and schedules personalized follow-ups that sound human and drive conversion.",
        features: ["AI Intent Detection", "Automated Scheduling", "Seamless CRM Integration", "Smart Response Handling"],
        color: "bg-[#D1CCC2]",
        link: "https://replyradar.online/"
    },
    binaryvlue: {
        title: "Make a difference",
        client: "BinaryVlue",
        year: "2026",
        category: "Website Rebranding, SEO",
        image: "/projects/binaryvlue.png",
        description: "BinaryVlue is a comprehensive digital transformation project focusing on brand identity and search engine dominance. We reimagined their online presence to reflect their position as industry innovators.",
        fullDescription: "The challenge was to create a digital ecosystem that not only looks premium but also performs exceptionally in search results. By implementing a custom SEO strategy alongside a complete visual overhaul, we helped BinaryVlue achieve a 150% increase in organic traffic within months.",
        features: ["Strategic Rebranding", "Next-Gen SEO Architecture", "High-Performance Web Design", "Data-Driven Analytics"],
        color: "bg-[#A1AEFF]",
        link: "https://www.binaryvlue.com/index.html"
    }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = projectsData[resolvedParams.slug as keyof typeof projectsData];

    if (!project) {
        return (
            <div className="min-h-screen bg-[#0F0E0E] text-white flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0F0E0E] text-[#F7F7F7] selection:bg-white selection:text-[#0F0E0E]">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 backdrop-blur-sm">
                <Link href="/#portfolio" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 transition-all">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm font-semibold tracking-wider">BACK TO WORKS</span>
                </Link>
                <Link href={project.link} target="_blank" className="text-sm font-black tracking-widest text-zinc-500 hover:text-white transition-colors uppercase">
                    VISIT SITE
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 mb-16">
                    <div className="flex items-center gap-4 text-sm font-medium tracking-[0.2em] text-white/40 uppercase">
                        <span>{project.client}</span>
                        <span>•</span>
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] text-balance">
                        {project.title}
                    </h1>
                </div>

                <div className={`relative aspect-[16/9] w-full rounded-[40px] md:rounded-[80px] overflow-hidden ${project.color} p-12 md:p-24 shadow-2xl group`}>
                    <Image
                        src={project.image}
                        alt={project.client}
                        fill
                        className="object-contain p-8 md:p-16 transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="flex flex-col gap-8">
                    <h3 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase">Challenge & Solution</h3>
                    <p className="text-2xl md:text-4xl font-medium tracking-tight leading-tight text-white/90">
                        {project.description}
                    </p>
                </div>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase">Overview</h3>
                        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                            {project.fullDescription}
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase">Key Features</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    <span className="text-sm md:text-base font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
                <div className="flex flex-col items-center text-center gap-12">
                    <h4 className="text-3xl md:text-5xl font-black tracking-tighter uppercase opacity-40">Ready to build your vision?</h4>
                    <Link
                        href="/#contact"
                        className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter hover:text-zinc-500 transition-colors"
                    >
                        LET&apos;S TALK <ArrowUpRight className="inline-block w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 ml-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
