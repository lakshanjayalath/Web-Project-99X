import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  InputAdornment,
  Link,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material';
import './AuthPages.css';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log({ fullName, email, password, keepLoggedIn });
  };

  return (
    <Box className="main-container">
      <Box className="card">
        <Box className="form-section">
          <Box className="logo">
            <Box className="logo-icon">⚡</Box>
            <Typography variant="h5" fontWeight="bold" color="#1f2937">
              Dhananjaya
            </Typography>
          </Box>

          <Typography variant="h4" gutterBottom fontWeight="bold" color="textPrimary">
            Sign up
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Please create an account to get started.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              fullWidth
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 2 }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  sx={{ color: '#6b7280' }}
                />
              }
              label={
                <Typography variant="body2" color="textPrimary">
                  Keep me logged in
                </Typography>
              }
              sx={{ mb: 2 }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              className="auth-button"
              sx={{ mb: 2, backgroundColor: '#3b82f6' }}
            >
              Sign Up
            </Button>

            <Divider sx={{ my: 3 }}>or</Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              className="google-button"
            >
              Sign up with Google
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              className="facebook-button"
              sx={{ mt: 2 }}
            >
              Sign up with Facebook
            </Button>

            <Typography className="auth-footer">
              Already have an account?{' '}
              <Link component={RouterLink} to="/" underline="hover" color="primary">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box className="banner-section">
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Join the Dhananjaya today ✨
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
