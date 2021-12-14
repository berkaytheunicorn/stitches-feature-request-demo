import { generateDepth, Depth, DepthToken } from "./utils/generateDepth";
import { isArray, isObject } from "@doubco/wtf";
import { transparentize } from "color2k";
import {
  CSSProperties,
  createStitches,
  PropertyValue,
  defaultThemeMap,
} from "@stitches/react";
import { hexToRgb } from "./utils/hexToRgb";

const generateDepths = (color: string) => ({
  1: generateDepth({
    level: 1,
    color,
    width: 0,
    height: 4,
    opacity: 0.04,
    radius: 2,
    elevation: 4,
  }),
  2: generateDepth({
    level: 2,
    color,
    width: 0,
    height: 8,
    opacity: 0.04,
    radius: 4,
    elevation: 8,
  }),
  3: generateDepth({
    level: 4,
    color,
    width: 0,
    height: 16,
    opacity: 0.04,
    radius: 8,
    elevation: 16,
  }),
  4: generateDepth({
    level: 4,
    color,
    width: 0,
    height: 32,
    opacity: 0.04,
    radius: 16,
    elevation: 32,
  }),
  5: generateDepth({
    level: 4,
    color,
    width: 0,
    height: 64,
    opacity: 0.04,
    radius: 32,
    elevation: 64,
  }),
});

const darkTokens = {
  colors: {
    black: "#000",
    white: "#fff",

    bg: "#000",
    fg: "#fff",
  },
};

const tokens = {
  colors: {
    black: "#000",
    white: "#fff",

    bg: "#fff",
    fg: "#000",
  },
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "32px",
    5: "64px",
    6: "128px",
    7: "256px",
    8: "512px",
    9: "1024px",
  },
  fontSizes: {
    note: "12px",
    body: "14px",
    subtitle: "16px",
    title: "24px",
    header: "32px",
  },
  lineHeights: {
    note: "16px",
    body: "24px",
    subtitle: "24px",
    title: "32px",
    header: "48px",
  },
  fonts: {
    default: `'Readex Pro', sans-serif`,
  },
  fontWeights: {
    regular: "300",
    bold: "700",
  },
  borderWidths: {
    0: "0px",
    1: "1px",
    2: "2px",
    3: "4px",
    4: "8px",
  },
  radii: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "32px",
    5: "48px",
    6: "64px",
    7: "72px",
    8: "96px",
    9: "128px",
  },
  zIndices: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 99,
    7: 999,
    8: 9999,
    9: 99999,
  },
  sizes: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "32px",
    5: "64px",
    6: "128px",
    7: "256px",
    8: "512px",
    9: "1024px",
  },
  opacity: {
    0: 0,
    1: 0.04,
    2: 0.08,
    3: 0.16,
    4: 0.32,
    5: 0.64,
    6: 0.8,
    7: 1,
  },
  shadows: {},
  letterSpacings: {},
  borderStyles: {},

  transitions: {},
};

export const { createTheme, css, getCssText, globalCss, styled, theme } =
  createStitches({
    theme: tokens,
    themeMap: {
      ...defaultThemeMap,
      opacity: "opacity",
    },
    utils: {
      backroundWithOpacity: ([palette, opacity]: [
        `$${keyof typeof tokens.colors}`,
        `$${keyof typeof tokens.opacity}`,
      ]) => {
        if (!palette) return { background: undefined };

        const cleanKey = (key: string) => key.replace("$", "");

        const colorKey = cleanKey(palette) as keyof typeof tokens.colors;
        const color = hexToRgb(tokens.colors[colorKey]);
        const alphaKey = cleanKey(
          opacity,
        ) as unknown as keyof typeof tokens.opacity;
        const alpha = tokens.opacity[alphaKey];

        return {
          background: `rgba(${color.r},${color.g},${color.b}, ${alpha})`,
        };
      },
      fontHeight: (value: PropertyValue<"fontSize">) => {
        return {
          fontSize: value,
          lineHeight: value,
        };
      },
      depth: (value: DepthToken) => {
        const { color, token } = value;
        const depthArray: any = generateDepths(color);
        const depth: Array<Depth> = depthArray[token];

        const boxShadow =
          depth && depth.length && isArray(depth)
            ? depth
                .map((i) => {
                  if (isObject(i)) {
                    return `${i.offset.width}px ${i.offset.height}px ${
                      i.radius
                    }px ${transparentize(i.color, 1 - i.opacity)}`;
                  }
                  return "";
                })
                .join(",")
            : "none";
        return { boxShadow };
      },
      size: (value: number) => ({
        width: value,
        height: value,
      }),
      mx: (value: number) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: number) => ({
        marginTop: value,
        marginBottom: value,
      }),
      px: (value: number) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: number) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      br: (value: number) => ({
        borderRadius: value,
      }),
    },
    media: {
      w0: "(max-width: 576px)", // 0 mobile - handheld
      w1: "(min-width: 576px) and (max-width: 720px)", // 1 tablet portrait - handheld
      w2: "(min-width: 720px) and (max-width: 1080px)", // 2 tablet - handheld
      w3: "(min-width: 1080px) and (max-width: 1152px)", // 3 desktop
      w4: "(min-width: 1152px) and (max-width: 1360px)", // 4 desktop hd
      w5: "(min-width: 1360px)and (max-width: 1600px)", // 5 desktop wide
      w6: "(min-width: 1600px)", // 6 desktop others
      dark: "(prefers-color-scheme: dark)",
    },
  });

export const themes = {
  light: createTheme("light", tokens),
  dark: createTheme("dark", darkTokens),
};
