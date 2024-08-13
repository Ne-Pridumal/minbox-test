import { forwardRef } from "react";
import { rotate } from "./rotate";
import { TDirectedIconsProps } from "./types";

export const IconChevron = forwardRef<SVGSVGElement, TDirectedIconsProps>(({ width = 20, height = 20, color = "#000000", direction }, ref) => {
  const rot = rotate(direction)
  return (
    <svg ref={ref} style={{
      transform: rot
    }} fill={color} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
    </svg>
  );
});
