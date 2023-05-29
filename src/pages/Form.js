import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import SignButton from '../components/Sign';

export default function Form() {
  return (
    <div className="headin-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '100vh',
      backgroundImage: 'url(https://wallpapercave.com/wp/wp2563942.jpg)',
      backgroundSize: '80%',
      backgroundPosition: 'left',
    }}>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          width: '500px',
          height: '100%',
          marginLeft: '100px',
          marginRight: '50px',
        }}
        noValidate
        autoComplete="off"
      >
        <h1 style={{ color: '#1B45CE', fontWeight: '600', fontSize: '35px' ,textAlign:'center'}}> Welcome Back</h1>

        <TextField
          id="email"
          label="Account"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
          sx={{ width: '100%',marginTop:'50px', marginBottom: '50px','& label': {
      fontWeight: 'bold', fontSize:'25px'
    }, }}
          inputProps={{ style: { fontSize: '25px' } }}
        />

        <TextField
          id="pw"
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
          sx={{ width: '100%', marginBottom: '50px','& label': {
      fontWeight: 'bold', fontSize:'25px'
    }, }}
          inputProps={{ style: { fontSize: '25px' } }}
        />
        <SignButton/>

      </Box>
    </div>
  );
}
