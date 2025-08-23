import { CodeBlock } from "@/components/ui/codeblock";
import { animations } from "@/constants/animation";
import React from "react";

interface DetailComponentProps {
  slug: string;
}

const DetailComponent = ({ slug }: DetailComponentProps) => {
  const animation = animations.find((anim) => anim.animationName === slug);

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-10 mt-10">
      <div className="relative flex items-center justify-center w-full h-6">
        <svg
          className="text-neutral-400 dark:text-white/20 w-full h-6"
          viewBox="0 0 400 20"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <h1 className="font-bold text-4xl">{animation?.title}</h1>
      <div className="w-full">
        {animation?.code && (
          <CodeBlock
            language="css"
            showStats={true}
            filename="src/global.css"
            code={animation.code}
            breadcrumb={["animation.phatjack", "src", "global.css"]}
            theme="light"
          />
        )}
      </div>
    </div>
  );
};

export default DetailComponent;
