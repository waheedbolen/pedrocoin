"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MarqueeBanner from "./components/MarqueeBanner";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#41CE84] relative overflow-hidden">
      <Header />
      <div className="m-0 marquee-wrapper">
        <MarqueeBanner />
      </div>
      <br />
      <div className="marquee-wrapper-invert">
        <MarqueeBanner invert={true} />
      </div>
      <MainContent />
    </main>
  );
}
