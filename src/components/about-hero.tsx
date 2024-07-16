import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import heroProfileImg from "@/public/images/me.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={200}
              height={200}
              className="h-auto w-full px-0 "
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Saad Aziz
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I turn vision into reality with code. Whether I&apos;m working on
              a website or any digital product, I bring my commitment to design
              excellence and user-centered thinking to every project I work on.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest projects showcasing my expertise in Reactjs,
              Nextjs, Javascript, Typescript and web development.
            </p>
          </FadeUp>
        </AnimatePresence>
      </div>
    </div>
  );
}
