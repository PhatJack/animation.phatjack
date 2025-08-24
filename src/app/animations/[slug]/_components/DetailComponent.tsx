"use client";

import { CodeBlock } from "@/components/ui/codeblock";
import { animations } from "@/constants/animation";
import React from "react";
import { motion } from "framer-motion";
import Item from "@/components/Item";

interface DetailComponentProps {
  slug: string;
}

const DetailComponent = ({ slug }: DetailComponentProps) => {
  const animation = animations.find((anim) => anim.animationName === slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center space-y-10 mt-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="relative flex items-center justify-center w-full h-6"
      >
        <svg
          className="text-neutral-400 dark:text-white/20 w-full h-6"
          viewBox="0 0 400 20"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.path>
        </svg>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="font-bold text-4xl"
      >
        {animation?.title}
      </motion.h1>

      {/* Animation Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="border rounded-lg p-8 bg-gray-50/50">
          <div className="flex justify-center items-center h-40">
            <Item
              title={animation?.title || "Animation Preview"}
              animationName={animation?.animationName || ""}
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Hover to see the animation
          </p>
        </div>
      </motion.div>

      {animation?.code && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <CodeBlock
            language="css"
            showStats={true}
            filename="src/global.css"
            code={`@theme inline { ${animation?.code} 
}`}
            breadcrumb={["animation.phatjack", "src", "global.css"]}
            theme="light"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default DetailComponent;
