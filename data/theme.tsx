import { createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      neutral: "#697177",
      primary: "#0072F5",
      secondary: "#9750DD",
      success: "#17C964",
      warning: "#F5A524",
      error: "#F31260",
    },
    },
});

export default theme;
