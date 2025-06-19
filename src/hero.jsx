import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'
            : 'linear-gradient(to right, #6dd5fa, #2980b9)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to MySite
        </Typography>
        <Typography variant="h6" paragraph>
          A modern, responsive, dark-mode-enabled website with animations.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#features"
          sx={{ mt: 3, backgroundColor: 'white', color: '#1976d2' }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
