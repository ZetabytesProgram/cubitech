import localFont from "@next/font/local";
import { createTheme } from "@mui/material";

// Import the Inter Display font
export const inter = localFont({
  src: [
    {
      path: "/fonts/InterDisplay-Thin.ttf",
      weight: "100",
    },
    {
      path: "/fonts/InterDisplay-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "/fonts/InterDisplay-Light.ttf",
      weight: "300",
    },
    {
      path: "/fonts/InterDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "/fonts/InterDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "/fonts/InterDisplay-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "/fonts/InterDisplay-Bold.ttf",
      weight: "700",
    },
    {
      path: "/fonts/InterDisplay-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "/fonts/InterDisplay-Black.ttf",
      weight: "900",
    },
  ],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#155bcd",
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
