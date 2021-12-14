import range from "./range";
import round from "./round";

export type DepthValue = {
  level: number;
  color: string;
  width: number;
  height: number;
  opacity: number;
  radius: number;
  elevation: number;
};

export type Depth = {
  color: string;
  offset: {
    width: number;
    height: number;
  };
  opacity: number;
  radius: number;
  elevation: number;
};

export type DepthToken = {
  color: string;
  token: number | string;
};

export const generateDepth = (props: DepthValue) => {
  const { level, color, width, height, opacity, radius, elevation } = props;
  let d = [];

  if (opacity) {
    d.push(
      {
        color,
        offset: {
          width: 0,
          height: -1,
        },
        opacity: 0.02,
        radius: 1,
        elevation: 1,
      },
      ...range(0, level).map((i) => {
        return {
          color,
          offset: {
            width: round((width / level) * (i + 1)),
            height: round((height / level) * (i + 1)),
          },
          opacity: round((opacity / level) * (i + 1)),
          radius: round((radius / level) * (i + 1)),
          elevation,
        };
      }),
    );
  } else {
  }

  return d;
};
