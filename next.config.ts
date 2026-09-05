import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "iad.microlink.io" },
      { protocol: "https", hostname: "iketlenglesedi6-cmd.github.io" },
    ],
  },
};

export default nextConfig;
