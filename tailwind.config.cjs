/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["components/**", "layouts/**", "pages/**"],
  theme: {
    extend: {
      fontSize: {
        small: ".875rem",
        p: "1rem",
        h6: "1.25rem",
        h5: "1.625rem",
        h4: "2.125rem",
        h3: "2.75rem",
        h2: "3.5rem",
        h1: "4.375rem",
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      typography: ({ theme }) => ({
        accent: {
          css: {
            "--tw-prose-body": "var(--muted-foreground)",
            "--tw-prose-headings": "var(--foreground)",
            "--tw-prose-lead": "var(--muted-foreground)",
            "--tw-prose-links": "var(--accent)",
            "--tw-prose-bold": "var(--foreground)",
            "--tw-prose-counters": "var(--accent)",
            "--tw-prose-bullets": "var(--accent)",
            "--tw-prose-hr": "var(--accent)",
            "--tw-prose-quotes": "var(--foreground)",
            "--tw-prose-quote-borders": "var(--accent)",
            "--tw-prose-captions": "var(--muted-foreground)",
            "--tw-prose-code": "var(--foreground)",
            "--tw-prose-pre-code": "var(--foreground)",
            "--tw-prose-pre-bg": "var(--muted)",
            "--tw-prose-th-borders": "var(--border)",
            "--tw-prose-td-borders": "var(--border)",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
