import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const features = [
  {
    icon: '⚡',
    title: 'Fast Performance',
    description: 'Optimized for speed with lazy loading and minimal layout shifts.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Looks great on all devices, from phones to desktops.',
  },
  {
    icon: '🛠️',
    title: 'Easy to Customize',
    description: 'Built with MUI for flexible, clean styling.',
  },
];

const Features = () => {
  return (
    <Box id="features" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} mt={3}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                <CardContent>
                  <Typography variant="h3">{feature.icon}</Typography>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
