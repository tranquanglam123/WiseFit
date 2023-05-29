import React from 'react';
import { Button, Box, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const SignButton = ({ type, handleAction }) => {
  const buttonText = type === 'Login' ? 'Login' : 'Register';
  const signUpText = type === 'Login' ? 'New to WiseFit? Sign Up' : 'Already on WiseFit? Sign In';
  const signUpLink = type === 'Login' ? '/register' : '/login';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '15px',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleAction}
        sx={{
          marginBottom: '0.5rem',
          fontSize: '25px',
          fontWeight: 'bold',
          width: '80%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {buttonText}
      </Button>

      <Box sx={{ width: '80%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <div style={{ borderTop: '1px solid #ccc', flex: '1 0 40%' }}></div>
          <span style={{ margin: '0 0.5rem', fontWeight: 'bold', fontSize: '16px', color: '#555' }}>or</span>
          <div style={{ borderTop: '1px solid #ccc', flex: '1 0 40%' }}></div>
        </div>

        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: 'transparent',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '24px',
                textAlign: 'center',
                transition: 'background-color 250ms ease-out 0s, box-shadow 250ms ease-out 0s, color 250ms ease-out 0s',
                padding: '12px 16px',
                border: '1px solid rgb(31, 31, 31)',
                color: 'primary.main', // Set the color to primary
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FacebookIcon sx={{ fontSize: 40, marginRight: '0.5rem' }} />
              <span style={{ flex: '1' }}>Continue with Facebook</span>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: 'transparent',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '24px',
                textAlign: 'center',
                transition: 'background-color 250ms ease-out 0s, box-shadow 250ms ease-out 0s, color 250ms ease-out 0s',
                padding: '12px 16px',
                border: '1px solid rgb(31, 31, 31)',
                color: 'primary.main', // Set the color to primary
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GoogleIcon sx={{ fontSize: 40, marginRight: '0.5rem' }} />
              <span style={{ flex: '1' }}>Continue with Google</span>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ margin: '0.5rem' }}>
              {signUpText}{' '}
              <Link to={signUpLink} style={{ color: '#1B45CE', textDecoration: 'underline' }}>
                {type === 'Login' ? 'Sign Up' : 'Sign In'}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignButton;
