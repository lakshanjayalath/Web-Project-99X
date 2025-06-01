import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeMenu from '../components/HomeMenu';
import '../css/HomePage.css'

const Home = () => {
  return (
    <>
      <HomeMenu />

      <div className='home-container' style={{ display: 'block', flexDirection: 'column' }}>
        <div className='home-content' style={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
          <Container maxWidth="md" sx={{ textAlign: 'center', mb: 10, mt: 10 }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color='primary'>
              Welcome to Dhananjaya's App
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
              This is your homepage. Use the navigation bar to sign in or create a new account.
            </Typography>
            <Button
              className='get-started-button'
              variant="contained"
              size="large"
              component={RouterLink}
              to="/signup"
              sx={{ mt: 4 }}
            >
              Get Started
            </Button>

          </Container>
          <Container>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="hero-image"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Container>
        </div>

      </div>
      <div className='footer' sx={{ backgroundColor: 'primary', padding: '20px 0' }}>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="primary">
            © {new Date().getFullYear()} Dhananjaya. All rights reserved.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', p: 2}}>
          <Typography variant="body2" color="textSecondary">
            Made with ❤️ by Dhananjaya
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Home;
