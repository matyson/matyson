"use client";

import * as React from "react";
import { motion as m } from "motion/react";
import { useTheme } from "next-themes";
import useSound from "use-sound";
import { Button } from "./ui/button";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [playLightOff] = useSound("/sounds/light-off.mp3", { volume: 0.5 });
  const [playLightOn] = useSound("/sounds/light-on.mp3", { volume: 0.5 });

  const handleClick = () => {
    resolvedTheme === "dark" ? playLightOn() : playLightOff();
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const raysVariants = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rayVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      // Start from center of the circle
      scale: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        // Customize timing for each property
        pathLength: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 },
      },
    },
  };

  const shineVariant = {
    hidden: {
      opacity: 0,
      scale: 2,
      strokeDasharray: "20, 1000",
      strokeDashoffset: 0,
      filter: "blur(0px)",
    },
    visible: {
      opacity: [0, 1, 0],
      strokeDashoffset: [0, -50, -100],
      filter: ["blur(2px)", "blur(2px)", "blur(0px)"],
      transition: {
        duration: 0.75,
        ease: "linear",
      },
    },
  };

  const sunPath =
    "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C60 29 69.5 38 70 49.5Z";
  const moonPath =
    "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C39 45 49.5 59.5 70 49.5Z";
  return (
    <Button
      variant="ghost"
      className="size-7"
      size="icon"
      onClick={handleClick}
    >
      <m.svg
        strokeWidth="4"
        strokeLinecap="round"
        width={100}
        height={100}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <m.path
          variants={shineVariant}
          d={moonPath}
          className={"absolute top-0 left-0 stroke-slate-100"}
          initial="hidden"
          animate={resolvedTheme === "dark" ? "visible" : "hidden"}
        />

        <m.g
          variants={raysVariants}
          initial="hidden"
          animate={resolvedTheme === "light" ? "visible" : "hidden"}
          className="stroke-amber-600 stroke-6"
          style={{ strokeLinecap: "round" }}
        >
          <m.path
            className="origin-center"
            variants={rayVariant}
            d="M50 2V11"
          />
          <m.path variants={rayVariant} d="M85 15L78 22" />
          <m.path variants={rayVariant} d="M98 50H89" />
          <m.path variants={rayVariant} d="M85 85L78 78" />
          <m.path variants={rayVariant} d="M50 98V89" />
          <m.path variants={rayVariant} d="M23 78L16 84" />
          <m.path variants={rayVariant} d="M11 50H2" />
          <m.path variants={rayVariant} d="M23 23L16 16" />
        </m.g>

        <m.path
          d={sunPath}
          fill="transparent"
          transition={{ duration: 1, type: "spring" }}
          initial={{ fillOpacity: 0, strokeOpacity: 0 }}
          animate={
            resolvedTheme === "dark"
              ? {
                  d: moonPath,
                  rotate: -360,
                  scale: 2,
                  stroke: "var(--color-slate-400)",
                  fill: "var(--color-slate-400)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  transition: { delay: 0.1 },
                }
              : {
                  d: sunPath,
                  rotate: 0,
                  stroke: "var(--color-amber-600)",
                  fill: "var(--color-amber-600)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                }
          }
        />
      </m.svg>
    </Button>
  );
}
