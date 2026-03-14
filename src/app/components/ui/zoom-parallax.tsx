"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export interface ZoomImage {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: ZoomImage[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {images.map(({ src, alt, title, description }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center 
              ${index === 1 ? "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]" : ""} 
              ${index === 2 ? "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]" : ""} 
              ${index === 3 ? "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]" : ""} 
              ${index === 4 ? "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]" : ""} 
              ${index === 5 ? "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]" : ""} 
              ${index === 6 ? "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]" : ""} `}
            >
              <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-md border-2 border-[#3F3F46] group shadow-2xl">
                <img
                  src={src || "/placeholder.svg"}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                {(title || description) && (
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 transition-opacity duration-300">
                    {title && (
                      <h3 className="mb-1 text-sm md:text-base lg:text-lg font-bold text-[#DFE104] leading-tight group-hover:text-white transition-colors">
                        {title}
                      </h3>
                    )}
                    {description && (
                      <p className="text-xs md:text-sm text-white/80 leading-snug line-clamp-3">
                        {description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
