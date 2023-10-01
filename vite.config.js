import path from "path";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default () => {
  return {
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[name]",

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: "__svg__icons__dom__",
        svgoOptions: {
          plugins: [
            {
              name: "removeAttrs",
              params: { attrs: ["width", "height"] },
            },
          ],
        },
      }),
    ],
  };
};
