import React, { useState } from 'react';
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
import { styled } from '@mui/material/styles';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  backgroundColor: '#f3f4f6',
}));

const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: 960,
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  backgroundColor: '#fff',
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const FormSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const BannerSection = styled(Box)(({ theme }) => ({
  flex: 1,
  background: 'linear-gradient(135deg, #1e3a8a 0%, #60a5fa 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  padding: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Logo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '2rem',
});

const LogoIcon = styled(Box)({
  width: 32,
  height: 32,
  background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 18,
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  fontWeight: 600,
  padding: theme.spacing(1.5, 3),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const GoogleButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1.5, 3),
  color: theme.palette.grey[800],
  borderColor: theme.palette.grey[300],
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const FacebookButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1.5, 3),
  color: theme.palette.grey[800],
  borderColor: theme.palette.grey[300],
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

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
    <MainContainer>
      <Card>
        <FormSection>
          <Logo>
            <LogoIcon>⚡</LogoIcon>
            <Typography variant="h5" fontWeight="bold" color="#1f2937">
              Dhananjaya
            </Typography>
          </Logo>

          <Typography variant="h4" gutterBottom fontWeight="bold" color='textPrimary'>
            Sign up
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Please create an account to get started.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <StyledTextField
              label="Full Name"
              fullWidth
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <StyledTextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <StyledTextField
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

            <SignUpButton fullWidth type="submit" variant="contained" sx={{ mb: 2 }}>
              Sign Up
            </SignUpButton>

            <Divider sx={{ my: 3 }}>or</Divider>

            <GoogleButton
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </GoogleButton>

            <FacebookButton
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{ mt: 2 }}
            >
              Sign up with Facebook
            </FacebookButton>

            <Typography variant="body2" align="center" color='textSecondary' sx={{ mt: 2 }}>
              Already have an account?{' '}
              <Link href="#" underline="hover" color="primary">
                Sign in
              </Link>
            </Typography>
          </Box>
        </FormSection>

        <BannerSection>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Join the Dhananjaya today ✨
          </Typography>
        </BannerSection>
      </Card>
    </MainContainer>
  );
};

export default SignUpPage;
