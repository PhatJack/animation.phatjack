"use client";

import { animations } from "@/constants/animation";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Define variants for each item
const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.5, 0, 0.75, 0] as const,
    },
  },
};

const AnimationGallery = () => {
  const tabs = ["All", "Transition In", "Transition Out"];
  const [tabSelected, setTabSelected] = useState<string>("All");
  const [filterResult, setFilterResult] = useState(animations);
  useEffect(() => {
    switch (tabSelected) {
      case "All":
        setFilterResult(animations);
        break;
      case "Transition In":
        setFilterResult(animations.filter((a) => a.title.includes("In")));
        break;
      case "Transition Out":
        setFilterResult(animations.filter((a) => a.title.includes("Out")));
        break;
    }
  }, [tabSelected]);
  return (
    <div className="size-full">
      <div className="w-fit border-t flex relative overflow-hidden border-l">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setTabSelected(tab)}
            className="relative px-6 py-3 border-r overflow-hidden cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Active background highlight */}
            {tabSelected === tab && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 bg-black -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}

            <motion.span
              className={cn(
                "relative z-20 transition-all font-semibold",
                tabSelected == tab ? "text-white" : "text-current"
              )}
            >
              {tab}
            </motion.span>
          </motion.button>
        ))}
      </div>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 border-l border-t divide-x divide-y"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filterResult.map((animation, index) => (
          <motion.div
            key={index}
            className="aspect-square size-full"
            variants={itemVariants}
          >
            <Item
              title={animation.title}
              animationName={animation.animationName}
              isDisabled={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimationGallery;
