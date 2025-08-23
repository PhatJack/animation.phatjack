"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-10"
    >
      <div className="container flex justify-center items-center">
        <Badge variant="default" shiny>
          Made with ❤️ by PhatJack
        </Badge>
      </div>
    </motion.footer>
  );
};

export default Footer;
