"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SkillsMarquee from "@/components/SkillsMarquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import GithubProjects from "@/components/GithubProjects";
import CreativeSection from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Lock scroll while loading
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <SkillsMarquee />
            <Projects />
            <Experience />
            <GithubProjects />
            <CreativeSection />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}