import { forwardRef } from "react";
import { TDefaultIconsProps } from "./types";

export const IconChek = forwardRef<SVGSVGElement, TDefaultIconsProps>(({ height = 16, width = 16, color }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 48 48">
      <path fill={color} d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
    </svg>
  );
});

