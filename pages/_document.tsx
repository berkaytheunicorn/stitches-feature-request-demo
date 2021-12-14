import React from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from "next/document";
import { getCssText } from "../stitches.config";

export default class Document extends NextDocument {
  constructor(props: DocumentProps) {
    super(props);
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;700&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
