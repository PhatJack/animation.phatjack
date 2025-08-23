"use client";

import { animations } from "@/constants/animation";
import React from "react";
import Item from "./Item";
import { motion } from "framer-motion";

// Define variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger each child by 0.1 seconds
    },
  },
};

// Define variants for each item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const AnimationGallery = () => {
  return (
    <div className="">
      <motion.div
        className="grid grid-cols-5 border-l border-y divide-x divide-y"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {animations.map((animation, index) => (
          <motion.div
            key={index}
            className="aspect-square size-full"
            variants={itemVariants}
          >
            <Item
              title={animation.title}
              animationName={animation.animationName}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimationGallery;
