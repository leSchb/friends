import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    prependData: `
      @use "@/app/styles/colors.scss" as *;
      @use "@/app/styles/sizes.scss" as *;
      @use "@/app/styles/text.scss" as *;
    `,
  },
  output: "standalone",
};

export default nextConfig;
