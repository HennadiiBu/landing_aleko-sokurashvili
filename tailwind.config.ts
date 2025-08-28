import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway", "sans-serif"]
            },
            screens: {
                xs: "393px",
                l: "768px",
                xl: "1280px",
            },
        },
    },
    plugins: [],
} satisfies Config;
