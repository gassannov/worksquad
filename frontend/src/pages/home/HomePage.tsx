// frontend/src/pages/home/HomePage.tsx
import React, { useEffect, useRef } from "react";
import FullScreenSection from "../../components/FullScreenSection";
import LogoHero from "../../components/LogoHero";
import LinksSection from "../../components/LinksSection";

export default function HomePage() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loaderTime = 5_000;

    const timer = setTimeout(() => {
      nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, loaderTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page">
      <FullScreenSection variant="white" id="hero">
        <LogoHero />
      </FullScreenSection>

      <FullScreenSection variant="black" id="links">
        <div ref={nextSectionRef}>
          <LinksSection />
        </div>
      </FullScreenSection>
    </div>
  );
}
