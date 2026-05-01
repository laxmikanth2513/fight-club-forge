import { Atmosphere } from "@/components/f3/Atmosphere";
import { CursorGlow } from "@/components/f3/CursorGlow";
import { ScrollProgress } from "@/components/f3/ScrollProgress";
import { LoadingScreen } from "@/components/f3/LoadingScreen";
import { Navbar } from "@/components/f3/Navbar";
import { Hero } from "@/components/f3/Hero";
import { About } from "@/components/f3/About";
import { Programs } from "@/components/f3/Programs";
import { Trainers } from "@/components/f3/Trainers";
import { Schedule } from "@/components/f3/Schedule";
import { Transformation } from "@/components/f3/Transformation";
import { Membership } from "@/components/f3/Membership";
import { Testimonials } from "@/components/f3/Testimonials";
import { Gallery } from "@/components/f3/Gallery";
import { Contact } from "@/components/f3/Contact";
import { Footer } from "@/components/f3/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Atmosphere />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Programs />
          <Trainers />
          <Schedule />
          <Transformation />
          <Membership />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
