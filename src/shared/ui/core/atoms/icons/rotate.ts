import { TDirectedIconsProps } from "./types";

export const rotate = (direction: TDirectedIconsProps["direction"]): string => {
  switch (direction) {
    case "down":
      return "rotate(0deg)"
    case "up":
      return "rotate(180deg)"
    case "left":
      return "rotate(270deg)"
    case "right":
      return "rotate(90deg)"
  }
}
