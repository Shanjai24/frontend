import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import aboutImg from './image1.jpg'; // Replace with your image

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={aboutImg}
              alt="About"
              style={{ width: '100%', borderRadius: '16px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We build stunning, responsive websites using the latest tech stack.
              This template demonstrates dark mode, animation, responsiveness, and
              modern UI best practices using React and Material UI.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
