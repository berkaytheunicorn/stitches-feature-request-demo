import { ReactNode } from "react";
import { styled } from "../../../stitches.config";

export const Column = styled("div", {
  width: "640px",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column",

  variants: {
    align: {
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
    },
  },

  "@w0": {
    padding: "$4",
  },
  "@w1": {
    padding: "$4",
  },
  "@w2": {
    padding: "$4",
  },

  defaultVariants: {
    align: "left",
  },
});

export const Viewport = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  padding: "max(0px, min(calc((100vw - 640px) / 2), 400px))",

  "@w0": {
    padding: "calc((100vw - 640px) / 2)",
    paddingTop: "$7",
  },
  "@w1": {
    padding: "calc((100vw - 640px) / 2)",
    paddingTop: "$7",
  },
  "@w2": {
    padding: "calc((100vw - 640px) / 2)",
    paddingTop: "$7",
  },
});

export const Layout = (props: {
  children: ReactNode;
  align?: "left" | "right" | "center";
}) => {
  const { children, align } = props;

  return (
    <Viewport>
      <Column align={align}>{children}</Column>
    </Viewport>
  );
};
