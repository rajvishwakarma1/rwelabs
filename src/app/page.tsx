import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
