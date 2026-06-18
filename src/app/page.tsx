import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import InnovationLab from "./components/InnovationLab";
import WhyChooseUs from "./components/WhyChooseUs";
import WorkProcess from "./components/WorkProcess";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Philosophy />
      <About />
      <PracticeAreas />
      <InnovationLab />
      <WhyChooseUs />
      <WorkProcess />
      <Contact />
      <Footer />
    </main>
  );
}