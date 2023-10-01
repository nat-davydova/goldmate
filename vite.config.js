import path from "path";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default () => {
  return {
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons/colored")],
        // Specify symbolId format
        symbolId: "icon-colored-[name]",

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: "__svg__icons__colored__dom__",
        svgoOptions: {
          plugins: [
            {
              name: "removeAttrs",
              params: { attrs: ["width", "height"] },
            },
          ],
        },
      }),

      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons/solid")],
        // Specify symbolId format
        symbolId: "icon-solid-[name]",

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: "__svg__icons__solid__dom__",
        svgoOptions: {
          plugins: [
            {
              name: "removeAttrs",
              params: { attrs: ["width", "height", "fill", "stroke"] },
            },
          ],
        },
      }),
    ],
  };
};
