"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";
import React, { useState } from "react";

interface ItemProps {
  title: string;
  animationName: string; // e.g. "fade-in", "zoom-in"
  isDisabled?: boolean;
}

const Item = ({ title, animationName, isDisabled }: ItemProps) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => !isDisabled && router.push(`/animations/${animationName}`)}
      className={cn(
        "p-4 size-full flex flex-col gap-4 cursor-pointer transition",
      )}
      onMouseEnter={() => {
        setIsHovered(false); // reset first
        requestAnimationFrame(() => setIsHovered(true)); // retrigger
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Preview box */}
      <div className="flex-1 flex justify-center items-center bg-gray-50 py-4 overflow-hidden">
        <span
          className={`size-20 bg-black rounded-lg ${
            isHovered ? `${animationName}` : ``
          }`}
        />
      </div>

      {/* Title + Arrow */}
      <div className="flex justify-between items-center">
        <span className="font-medium">{title}</span>
        <ArrowRight className="size-4" />
      </div>
    </div>
  );
};

export default Item;
