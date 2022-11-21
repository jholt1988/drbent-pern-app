import createTheme from "@mui/material/styles/createTheme";


export const theme = createTheme = ({
  palette: {
    type: 'dark',
    primary: {
      main: '#0a2119',
      light: '#13f9f9',
    },
    secondary: {
      main: '#3b8da5',
    },
    background: {
      default: '#171200',
    },
    text: {
      primary: '#11e6a7',
    },
  },
  typography :{
     fontFamily: "Roboto"
  },
  shape: {
  borderRadius: 4,
  },
  spacing: 8,
});


