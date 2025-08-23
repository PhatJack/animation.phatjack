"use client";

import { motion } from "motion/react";
import { BackgroundRippleEffect } from "./acternity-ui/background-ripple-effect";
import { GitHubStarsButton } from "./animate-ui/github-star";

export default function Banner() {
  return (
    <div className="relative min-h-[300px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Ripple Effect */}
      <div className="absolute inset-0">
        <BackgroundRippleEffect />
      </div>

      {/* Banner Content */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-black px-4 flex flex-col items-center"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Tailwind CSS Animation Gallery
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
        >
          A handpicked set of animations built entirely with Tailwind CSS — easy
          to use, just copy and paste.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <GitHubStarsButton
            username="PhatJack"
            repo="animation.phatjack"
            className="w-fit"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
