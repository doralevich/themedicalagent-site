import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Read out of public/images/the-medical-agent-wordmark.svg - the teal the brackets are
        // filled with, #158C90, is the brand. Taken from the vector rather than sampled off a
        // raster, so it is the exact value the logo uses and not a close neighbour.
        //
        // Same two-tone problem the CFO site has, for the same reason: at 32% lightness this
        // teal is legible on the light grounds and disappears against the near-black one. So
        // `brand` is the wordmark colour and `brand-tint` is the same hue lifted, which is what
        // the dark sections use.
        brand: {
          DEFAULT: "#158C90",
          dark: "#0E5F62",
          tint: "#7BDDE0",
        },
        // The dark ground carries a trace of the brand hue rather than being neutral black, so
        // the teal sits on something rather than beside it.
        ground: "#0B1B1C",
        cream: "#F1F5F6",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
