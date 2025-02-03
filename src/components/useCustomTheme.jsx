import { createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const useCustomTheme = () => {
  const location = useLocation(); 

  return createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
      background: {
        default: location.pathname === "/" ? "transparent" : "#121212",
        paper: location.pathname === "/" ? "transparent" : "#1E1E1E",
      },
    },
  });
};

export default useCustomTheme;
