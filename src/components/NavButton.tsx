"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  title: string;
  direction: "prev" | "next";
  onClick?: () => void;
}

const NavButton = ({ title, direction, onClick }: NavButtonProps) => {
  const isPrev = direction === "prev";

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, x: isPrev ? -5 : 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "rounded-2xl border p-6 flex items-center gap-4 bg-white dark:bg-neutral-900 group cursor-pointer"
      )}
    >
      {isPrev && (
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      )}

      <h2 className="font-semibold text-xl text-left">{title}</h2>

      {!isPrev && (
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      )}
    </motion.button>
  );
};

export default NavButton;
