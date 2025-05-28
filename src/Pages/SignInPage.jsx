import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    TextField,
    Button,
    Typography,
    FormControlLabel,
    Checkbox,
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
import '../css/AuthPages.css';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
    };

    return (
        <div className="main-container">
            <div className="card">
                <div className="form-section">

                    <Typography variant="h4" fontWeight="bold" color="textPrimary">
                        Sign in
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mb={2}>
                        Welcome back! Please log in to your account.
                    </Typography>

                    <div component="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
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
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    sx={{ color: '#6b7280' }}
                                />
                            }
                            label={
                                <Typography variant="body2" color="textPrimary">
                                    Remember me
                                </Typography>
                            }
                            sx={{ mb: 2 }}
                        />

                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            className="auth-button"
                            sx={{ backgroundColor: '#3b82f6' }}
                        >
                            Sign In
                        </Button>

                        <Divider sx={{ my: 3 }}>or</Divider>

                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<GoogleIcon />}
                            className="google-button"
                        >
                            Sign in with Google
                        </Button>

                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<FacebookIcon />}
                            className="facebook-button"
                            sx={{ mt: 2 }}
                        >
                            Sign in with Facebook
                        </Button>

                        <Typography className="auth-footer">
                            Don’t have an account?{' '}
                            <Link component={RouterLink} to="/signup" underline="hover" color="primary">
                                Sign up
                            </Link>
                        </Typography>
                    </div>
                </div>

                <div className="banner-section">
                    <Typography variant="h4" fontWeight="bold">
                        Welcome to Dhananjaya Platform 🚀
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
