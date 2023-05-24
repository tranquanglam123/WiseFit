import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import RapidoScale from '../assets/images/scale.jpg';
import MiBand3 from '../assets/images/1_Mi_Band_3.jpg';

const Connect = () => {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    // Simulating connection logic
    setConnected(true);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <Typography marginTop='10vh' variant='h2' fontWeight='700' gutterBottom color='#ffffff'>
        CONNECT FOR RECOMMENDATION
      </Typography>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={handleConnect}
        disabled={connected}
      >
        {connected ? 'Connected' : 'Connect'}
      </Button>
      <Typography marginTop='100px' fontWeight='800' fontSize='40px' color='#ffffff'>
        DEVICES THAT WE SUPPORT
      </Typography>
      <Box display='flex' justifyContent='center' alignItems='center' mt={2}>
        <img src={RapidoScale} alt="Rapido Scale" style={{ width: '600px', height: '600px', objectFit: 'cover' }} />
        <img src={MiBand3} alt="Mi Band 3" style={{ width: '600px', height: '600px', objectFit: 'cover' }} />
      </Box>
    </Box>
  );
}

export default Connect;
