import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { WorldProvider } from "@doubco/world/lib/react";
import { themes } from "stitches.config";
import { applyGlobalStyles } from "globalStyles";
import { generateWorldInstance } from "../constants/i18n";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  applyGlobalStyles();

  return (
    <WorldProvider instance={generateWorldInstance(router)}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: themes.dark.className,
          light: themes.light.className,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </WorldProvider>
  );
}

export default MyApp;
