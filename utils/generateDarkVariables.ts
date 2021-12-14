import { themes } from "stitches.config";
import { Token } from "@stitches/react/types/theme";

export const getDarkVariables = () => {
  let variables: any = {};

  const colors: Record<string, any> = themes.dark.colors;

  Object.keys(colors).forEach((key: string) => {
    const color: Token = colors[key];
    variables[color.variable] = color;
  });

  return variables;
};
