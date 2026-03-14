"use client"

import { ScrollAndSwapText } from "./ui/scroll-and-swap-text"

export function TimeLossText() {
  return (
    <section className="w-full flex items-center justify-center py-48 bg-background border-b-2 border-[#3F3F46]">
      <div className="flex text-4xl md:text-6xl lg:text-8xl justify-center items-center flex-col tracking-tighter text-center text-[#DFE104]">
        <ScrollAndSwapText
          label="EVERY MINUTE"
          offset={["start 0.6", "start 0.3"]}
          className="font-bold pb-4"
        />
        <ScrollAndSwapText
          label="LOST TO CHAOS"
          offset={["start 0.5", "start 0.2"]}
          className="font-bold pb-4"
        />
        <ScrollAndSwapText
          label="COSTS A"
          offset={["start 0.4", "start 0.1"]}
          className="font-bold pb-4"
        />
        <ScrollAndSwapText
          label="MISSING PERSON"
          offset={["start 0.3", "start 0.0"]}
          className="font-bold pb-4 text-white"
        />
        <ScrollAndSwapText
          label="THEIR LIFE."
          offset={["start 0.2", "start -0.1"]}
          className="font-bold"
        />
      </div>
    </section>
  )
}
