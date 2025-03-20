import './App.css';
import Header from './component/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import MainTabs from './component/MainTabs'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App" style={{ width:'1280px',height:'800px',overflow:'hidden'}} >
    <ThemeProvider theme={darkTheme}> 
    <CssBaseline />
   
    {/* <Box sx={{ overflow: 'hidden'}} >
       <Header/>
       <MainTabs/>
    </Box>
      */}
    </ThemeProvider>
    </div>
  );
}

export default App;
