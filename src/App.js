import React, { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './navbar';
import Hero from './hero';
import Features from './features';
import About from './about';
import Footer from './footer';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('mui-theme');
    return stored ? JSON.parse(stored) : false;
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
        },
      }),
    [isDark]
  );

  // Save to localStorage on theme change
  React.useEffect(() => {
    localStorage.setItem('mui-theme', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <Features />
      <About />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
