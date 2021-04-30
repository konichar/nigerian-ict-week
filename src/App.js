import Header from "./components/Header"
import Front from "./components/Front"
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    // primary: black,
  },
});


function App() {
  return (
  <ThemeProvider theme={theme}>
      <CssBaseline />
     <Header></Header>
     <Front></Front>
  </ThemeProvider>
  );
}

export default App;
