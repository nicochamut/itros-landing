// Theme configuration for styled-components
export const theme = {
  colors: {
    // Corporate colors
    corporateRed: "#e74c3c",
    corporateOrange: "#e67e22",
    corporateDark: "#1a1a1a",
    corporateDarker: "#0f0f0f",
    corporateLightGray: "#2c2c2c",
    corporateTextMuted: "#8a8a8a",

    // Base colors
    white: "#ffffff",
    black: "#000000",

    // Semantic colors
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#3b82f6",

    // Opacity variants
    whiteAlpha: {
      5: "rgba(255, 255, 255, 0.05)",
      10: "rgba(255, 255, 255, 0.1)",
      20: "rgba(255, 255, 255, 0.2)",
      30: "rgba(255, 255, 255, 0.3)",
      50: "rgba(255, 255, 255, 0.5)",
      70: "rgba(255, 255, 255, 0.7)",
      80: "rgba(255, 255, 255, 0.8)",
      90: "rgba(255, 255, 255, 0.9)",
    },

    blackAlpha: {
      5: "rgba(0, 0, 0, 0.05)",
      10: "rgba(0, 0, 0, 0.1)",
      20: "rgba(0, 0, 0, 0.2)",
      30: "rgba(0, 0, 0, 0.3)",
      50: "rgba(0, 0, 0, 0.5)",
      70: "rgba(0, 0, 0, 0.7)",
    },
  },

  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif",
    mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },

  fontWeights: {
    light: 200,
    normal: 300,
    medium: 400,
    semibold: 500,
    bold: 600,
  },

  letterSpacing: {
    ultraTight: "-0.05em",
    extraTight: "-0.04em",
    superTight: "-0.03em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
    superWide: "0.15em",
    extraWide: "0.2em",
  },

  borderRadius: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "50%",
  },

  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  },

  gradients: {
    corporate: "linear-gradient(135deg, #e74c3c 0%, #e67e22 100%)",
    dark: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #000000 100%)",
    success: "linear-gradient(135deg, #4ade80, #10b981)",
    error: "linear-gradient(135deg, #ef4444, #dc2626)",
    warning: "linear-gradient(135deg, #fbbf24, #f59e0b)",
  },
};

// Helper functions for responsive design
export const mediaQueries = {
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  "2xl": `@media (min-width: ${theme.breakpoints["2xl"]})`,
};

export default theme;
