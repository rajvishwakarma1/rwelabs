import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0E0E] text-[#F7F7F7]">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <Faq />
      <About />
      <Footer />
    </main>
  );
}
