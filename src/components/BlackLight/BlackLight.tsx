import React from "react";

type Props = {
  additioanClassName?: string;
  type?: "small" | "large";
  hidden?: boolean;
  zIndex?: number;
};

function BlackLight({
  additioanClassName,
  type = "small",
  hidden = false,
  zIndex = -1,
}: Props) {
  return (
    <div
      className={`absolute ${additioanClassName} z-[${zIndex}] ${
        hidden ? "xl:hidden" : ""
      }`}
    >
      {type === "small" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[184.357px] h-[173.591px] flex-shrink-0 fill-[#13B8FF] blur-[144.659px]"
          viewBox="0 0 184 174"
        >
          <circle cx="92" cy="87" r="87" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[315.698px] h-[282px] flex-shrink-0 rounded-[315.698px] blur-[74.313px]"
          viewBox="0 0 316 282"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0.26%" stopColor="#5BDBFD" />
              <stop offset="51.07%" stopColor="#7375FF" />
              <stop offset="100.96%" stopColor="#DF93FF" />
              <stop offset="126.34%" stopColor="#E56F8C" />
            </linearGradient>
          </defs>
          <ellipse cx="158" cy="141" rx="158" ry="141" fill="url(#grad)" />
        </svg>
      )}
    </div>
  );
}

export default BlackLight;
