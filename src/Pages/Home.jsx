import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeMenu from '../components/HomeMenu';
import '../css/HomePage.css'

const Home = () => {
  return (
    <>
      <HomeMenu />

      <div className='home-container'>
        <div className='home-content'>
          <Container maxWidth="md" sx={{ textAlign: 'center', mt: 20, mb: 10 }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color='primary'>
              Welcome to Dhananjaya's App
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              This is your homepage. Use the navigation bar to sign in or create a new account.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/signup"
              sx={{ mt: 4 }}
            >
              Get Started
            </Button>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Dhananjaya. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </div>
      </div>

      {/* <Container  className='home-container'>
        <Box sx={{ my: 8, textAlign: 'center' }} className='home-content'> 
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color='primary'>
            Welcome to Dhananjaya's App
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            This is your homepage. Use the navigation bar to sign in or create a new account.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/signup"
            sx={{ mt: 4 }}
          >
            Get Started
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Dhananjaya. All rights reserved.
          </Typography>
        </Box>
      </Container> */}
    </>
  );
};

export default Home;
