import { styled } from "../../../stitches.config";

export const Space = styled("div", {
  width: "100%",

  variants: {
    space: {
      0: { height: "$0" },
      1: { height: "$1" },
      2: { height: "$2" },
      3: { height: "$3" },
      4: { height: "$4" },
      5: { height: "$5" },
      6: { height: "$6" },
      7: { height: "$7" },
      8: { height: "$8" },
      9: { height: "$9" },
    },
  },

  defaultVariants: {
    space: 0,
  },
});
