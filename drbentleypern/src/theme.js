import createTheme from "@mui/material/styles/createTheme";

export  const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#1AB4B1',
            dark: '#880029',
            contrastText: 'rgba(103,209,214,0.98)',
        },
        secondary: {
            main: '#CF38BC',
            light: '#48a999',
            dark: '#004c40',
            contrastText: '#9c2b41',
        },
        text: {
            hint: '#ffebee',
            primary:'#da820c',
        },
        background: {
            default: '#0c0b0b',
            paper: '#433f3f',
        },
        divider: '#10d289',
    },
    typography: {
        fontFamily: 'Lora',
        h5: {
            fontFamily: 'Roboto',
        },
    },
    shape: {
        borderRadius: 4,
    },
    spacing: 8,

})