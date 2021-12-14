import { styled } from "../../../stitches.config";

export const Text = styled("span", {
  variants: {
    opacity: {
      0: { opacity: "$0" },
      1: { opacity: "$1" },
      2: { opacity: "$2" },
      3: { opacity: "$3" },
      4: { opacity: "$4" },
      5: { opacity: "$5" },
      6: { opacity: "$6" },
      7: { opacity: "$7" },
    },

    height: {
      note: { fontHeight: "$note" },
      body: { fontHeight: "$body" },
      subtitle: { fontHeight: "$subtitle" },
      title: { fontHeight: "$title" },
      header: { fontHeight: "$header" },
    },

    family: {
      default: {
        fontFamily: "$default",
      },
    },

    weight: {
      regular: {
        fontWeight: "$regular",
      },
      bold: {
        fontWeight: "$bold",
      },
    },

    align: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "start",
      },
      center: {
        textAlign: "center",
      },
      justify: {
        textAlign: "justify",
      },
    },
  },

  defaultVariants: {
    opacity: "7",
    height: "body",
    weight: "regular",
    family: "default",
    align: "left",
  },
});
