import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultColor: "#171717",
        defaultTextColor: "#EDEDED",
        defaultTextLink: "#00FFFF",
        defaultBorderColor: "#D1D5DB",
        defaultBlueColor: "#1E3A8A",
      },
    },
  },
  plugins: [],
} satisfies Config;
