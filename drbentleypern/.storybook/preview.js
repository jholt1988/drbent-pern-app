import {useMemo} from "react"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import {theme} from "../src/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}






export const withMuiTheme = (Story ) => (
  

  // only recompute the theme if the themeKey changes


  
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>

)

export const decorators =  [withMuiTheme] 