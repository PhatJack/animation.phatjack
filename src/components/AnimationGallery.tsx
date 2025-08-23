import { animations } from "@/constants/animation";
import React from "react";
import Item from "./Item";

const AnimationGallery = () => {
  return (
    <div className="grid grid-cols-5 border-l border-y divide-x divide-y">
      {animations.map((animation, index) => (
        <div key={index} className="aspect-square size-full">
          <Item
            title={animation.title}
            animationName={animation.animationName}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimationGallery;
