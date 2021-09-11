export const themes = {
  light: {
    primary: '#1086C9',
    text: '#EFEFEF',
    footerBackground: '#1086C9',
    secondary: "#FA8700",
    buttonColor: "#ffff",
    primaryHover: "#42b0ef"
  },
  dark: {
    primary: '#1086C9',
    text: '#EFEFEF',
    footerBackground: '#1086C9',
    secondary: "#FA8700",
    buttonColor: "#ffff",
    primaryHover: "#42b0ef"
  },
} as const;

export type Theme = typeof themes.light;
