"use client";
import AnimationGallery from "@/components/AnimationGallery";
import Banner from "@/components/Banner";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <AnimationGallery />
    </div>
  );
};

export default HomePage;
