import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway", "sans-serif"]
            },
        },
    },
    plugins: [],
} satisfies Config;
