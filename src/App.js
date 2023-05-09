import './App.css';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import CenterBody from './components/CenterBody';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftBody from './components/LeftBody';
import RightBody from './components/RightBody';
import Create from './components/Create';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const dartTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={dartTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBody />
          <CenterBody />
          <RightBody mode={mode} setMode={setMode} />
        </Stack>
        <Create />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
