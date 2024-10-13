import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const redirectToShoppingPage = () => {
    navigate('/shopping');
  };

  const redirectToPostItemPage = () => {
    navigate('/post-item');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Campus Marketplace App
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          First click to find all you need. Next click to satisfy your greed.
        </Typography>
        <Button variant="contained" color="primary" onClick={redirectToShoppingPage}>
          Find Items
        </Button>
        <Button variant="contained" color="secondary" onClick={redirectToPostItemPage} sx={{ mt: 2 }}>
          Post Items
        </Button>
      </Box>
    </Container>
  );
};

export default Home;