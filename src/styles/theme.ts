import { Inter } from "@next/font/google";
import { createTheme } from "@mui/material";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#155bcd",
      light: "#e8f0fd",
      dark: "#0c3473",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "75px", // Set the height of the AppBar to 75px
        },
      },
    },
  },
});

export default theme;
