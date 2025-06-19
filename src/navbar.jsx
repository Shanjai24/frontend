import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = ({ isDark, setIsDark }) => {
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: scrolled
          ? isDark
            ? '#121212dd'
            : '#ffffffdd'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        color: 'inherit',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" fontWeight="bold">
          MySite
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" href="#hero">Home</Button>
          <Button color="inherit" href="#features">Features</Button>
          <Button color="inherit" href="#about">About</Button>

          <IconButton
            onClick={() => setIsDark(!isDark)}
            color="inherit"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
