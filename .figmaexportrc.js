const fs = require("fs");
const path = require("path");

const fileId = "XXXXXXXXXXX";

const customOutput = async (pages) => {
  const output = "./public";
  fs.mkdirSync(output, { recursive: true });
  console.log("OUTPUT", output);
  try {
    pages.forEach(({ name: pageName, components }) => {
      console.log("PAGE", pageName);
      components.forEach(({ name: componentName, svg, id }) => {
        const filePath = path.resolve(output, `${componentName}.svg`);

        let p = filePath.split("/");
        p.pop();
        p = p.join("/");

        fs.mkdirSync(p, { recursive: true });

        svg = svg
          .replace(/clip/g, `clip_${id.replace(/:/g, "_")}`)
          .replace(/paint/g, `paint_${id.replace(/:/g, "_")}`);

        fs.writeFileSync(filePath, svg);

        console.log("GENERATED", componentName);
      });
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  commands: [
    [
      "components",
      {
        fileId: fileId,
        onlyFromPages: ["icons"],
        transformers: [
          require("@figma-export/transform-svg-with-svgo")({
            plugins: [{ removeViewBox: false }, { removeDimensions: true }],
          }),
        ],
        outputters: [customOutput],
      },
    ],
    [
      "components",
      {
        fileId: fileId,
        onlyFromPages: ["illustrations"],
        transformers: [
          require("@figma-export/transform-svg-with-svgo")({
            plugins: [{ removeViewBox: false }, { removeDimensions: true }],
          }),
        ],
        outputters: [customOutput],
      },
    ],
  ],
};
