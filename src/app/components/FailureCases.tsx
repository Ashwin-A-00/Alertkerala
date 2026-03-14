"use client";
import React from "react";
import { cn } from "./ui/utils";
import Lenis from "@studio-freight/lenis";
import { ZoomParallax, type ZoomImage } from "./ui/zoom-parallax";

export function FailureCases() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  const images: ZoomImage[] = [
    {
      src: "/1.png",
      alt: "Case 1",
      title: "Case 1 — Aluva, May 2024",
    },
    {
      src: "/2.png",
      alt: "Case 2",
      title: "Case 2 — Ernakulam, 2023",
      description: "A 14-year-old girl went missing. Family drove dispersing photos manually. 11 hours. No civilian network. No speed."
    },
    {
      src: "/3.png",
      alt: "Case 3",
      title: "Case 3 — Thrissur, 2022",
      description: "An elderly man with dementia wandered. Relatives called one-by-one. 4 hours lost. Found near a highway."
    },
    {
      src: "/4.png",
      alt: "Case 4",
      title: "Case 4 — Palakkad, 2021",
      description: "A 6-year-old autistic boy wandered into the forest. Manual searches took 48 hours. Fragmented rescue efforts."
    },
    {
      src: "/5.png",
      alt: "Case 5",
      title: "Case 5 — Kottayam, 2023",
      description: "Alzheimer's patient lost. Unverified WhatsApp info led searchers astray. 14 hours. Lack of real-time tracking."
    },
    {
      src: "/6.png",
      alt: "Case 6",
      title: "Case 6 — Kozhikode, 2022",
      description: "A toddler went missing in a crowded market. Without geo-alerts, thousands left unaware. 6 hours. Zero broadcast."
    },
    {
      src: "/7.png",
      alt: "Case 7",
      title: "Case 7 — Thiruvananthapuram, 2024",
      description: "A teenager with special needs lost near a station. Family showed printed photos to drivers. 9 hours. Crucial time wasted."
    },
  ];

  return (
    <section className="bg-background text-foreground border-b-2 border-[#3F3F46] relative pt-[30vh]">
      <div className="absolute top-[30vh] left-0 h-full w-full pointer-events-none z-10">
        <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center px-4">
          {/* Radial spotlight */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full",
              "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
              "blur-[30px]",
            )}
          />
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl pointer-events-auto">
            <span className="text-white">Hours </span><span className="text-[#DFE104]">Lost.</span>
          </h2>
        </div>
      </div>
      <ZoomParallax images={images} />
    </section>
  );
}
