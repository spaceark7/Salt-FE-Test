import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1BA0E1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

export default theme
