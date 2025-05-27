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

const SignInButton = styled(Button)(({ theme }) => ({
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

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, keepLoggedIn });
    };

    const handleGoogleSignIn = () => {
        console.log('Google sign-in');
    };

    const handleFacebookSignIn = () => {
        console.log('Facebook sign-in');
    };

    return (
        <MainContainer>
            <Card>
                <FormSection>

                    <Typography variant="h4" gutterBottom fontWeight="bold" color='textPrimary'>
                        Sign in
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mb={3}>
                        Please login to continue to your account.
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
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

                        <SignInButton fullWidth type="submit" variant="contained" sx={{ mb: 2 }}>
                            Sign In
                        </SignInButton>

                        <Divider sx={{ my: 3 }}>or</Divider>

                        <GoogleButton
                            fullWidth
                            variant="outlined"
                            startIcon={<GoogleIcon />}
                            onClick={handleGoogleSignIn}
                            sx={{ mb: 2 }}
                        >
                            Sign in with Google
                        </GoogleButton>

                        <FacebookButton
                            fullWidth
                            variant="outlined"
                            startIcon={<FacebookIcon />}
                            onClick={handleFacebookSignIn}
                            sx={{ mb: 2 }}
                        >
                            Sign in with Facebook
                        </FacebookButton>

                        <Typography variant="body2" align="center" color='textSecondary'>
                            Need an account?{' '}
                            <Link component={RouterLink} to="/signup" underline="hover" color="primary">
                                Create one
                            </Link>
                        </Typography>
                    </Box>
                </FormSection>

                <BannerSection>
                    <Typography variant="h4" fontWeight="bold" textAlign="center">
                        Welcome back to Dhananjaya ✨
                    </Typography>
                </BannerSection>
            </Card>
        </MainContainer>
    );
};

export default SignInPage;
