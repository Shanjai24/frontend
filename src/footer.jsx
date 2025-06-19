import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: 'background.default', mt: 10 }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 MySite. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="#" underline="hover">Twitter</Link>
          <Link href="#" underline="hover">GitHub</Link>
          <Link href="#" underline="hover">LinkedIn</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
