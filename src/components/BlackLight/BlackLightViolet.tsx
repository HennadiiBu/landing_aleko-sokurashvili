import React from "react";

type Props = {
  additioanClassName?: string;

  hidden?: boolean;
};

function BlackLightViolet({
  additioanClassName,

  hidden = false,
}: Props) {
  return (
    <div
      className={`absolute ${additioanClassName} z-[-1] ${
        hidden ? "max-xl:hidden" : ""
      }`}
    >
      <svg
        width="368"
        height="368"
        viewBox="0 0 368 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="blur"
            x="-300"
            y="-300"
            width="968"
            height="968"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="144.4664" />
          </filter>
        </defs>
        <circle
          cx="184.11"
          cy="173.36"
          r="173.36"
          fill="#A75DF3"
          filter="url(#blur)"
        />
      </svg>
    </div>
  );
}

export default BlackLightViolet;
