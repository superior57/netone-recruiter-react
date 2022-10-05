import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      lighter: "#555555",
      light: "#2c2c2c",
      main: "#00000",
      dark: "##00000",
      darker: "#00000",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          transform: `translate(20px, 13px) scale(1) !important`,
          "&.MuiInputLabel-shrink": {
            transform: `translate(26px, -9px) scale(0.8) !important`,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: `25px !important`,
          height: `50px !important`,
          "& fieldset": {
            padding: `0px 20px`,
          },
        },
        input: {
          padding: `12.5px 20px !important`,
        },
      },
    },
  },
});

export default theme;
