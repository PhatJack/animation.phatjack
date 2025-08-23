"use client";

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
      <div className="relative z-10 text-center text-black px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tailwind CSS Animation Showcase
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Explore the power of Tailwind CSS with our interactive Background
          Ripple Effect, built with Next.js and Aceternity UI.
        </p>
        <GitHubStarsButton username="PhatJack" repo="animation.phatjack" />
      </div>
    </div>
  );
}
