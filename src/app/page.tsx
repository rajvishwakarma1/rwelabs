import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0E0E] text-[#F7F7F7]">
      <Navbar />
      <Hero />
      <Clients />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
