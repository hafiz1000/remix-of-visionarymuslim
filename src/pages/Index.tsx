import { useEffect } from "react";

import { Hero } from "@/components/sections/Hero";
import { AboutBook } from "@/components/sections/AboutBook";
import { AboutAuthor } from "@/components/sections/AboutAuthor";
import { BehindTheVision } from "@/components/sections/BehindTheVision";
import { Acknowledgements } from "@/components/sections/Acknowledgements";
import { Benefits } from "@/components/sections/Benefits";
import { FooterCTA } from "@/components/sections/FooterCTA";

const Index = () => {
  useEffect(() => {
    // Set dynamic canonical URL
    const existing = document.querySelector("link[rel='canonical']");
    const href = `${window.location.origin}${window.location.pathname}`;
    if (existing) {
      existing.setAttribute("href", href);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", href);
      document.head.appendChild(link);
    }
  }, []);

  return (
    <>
      <StickyNav />
      <main className="pt-16">
        <Hero />
        <AboutBook />
        <AboutAuthor />
        <BehindTheVision />
        <Acknowledgements />
        <Benefits />
        <FooterCTA />
      </main>
    </>
  );
};

export default Index;
