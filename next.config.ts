
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [{ source: "/", destination: "/id", permanent: false }];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
