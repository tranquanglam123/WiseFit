import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import RapidoScale  from '../assets/images/scale.jpg';
import MiBand3  from '../assets/images/1_Mi_Band_3.jpg';
const Connect = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [connectedDevice, setConnectedDevice] = useState(null);

  const handleConnect = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        //filters: [{ services: ['battery_service'] }],
        acceptAllDevices:true
      });

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService('battery_service');
      const battery = await service.getCharacteristic('battery_level');
      const batteryValue = await battery.readValue();
      const batteryLevel = batteryValue.getUint8(0);

      setConnectedDevice(device);
      setBatteryLevel(batteryLevel);

      // Additional operations with the connected device and battery info

    } catch (error) {
      console.error('Error:', error);
      // Handle connection failure or display an error message
    }
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <Typography marginTop='50px' variant='h2' fontWeight='700' gutterBottom color='#ffffff'>
        CONNECT FOR RECOMMENDATION
      </Typography>

      {/*Connect to the BLE device*/}
      <Button variant='contained' color='primary' size='large' onClick={handleConnect}>
        Connect
      </Button>
      <Typography marginTop='100px' fontWeight='800' fontSize='40px' color='#ffffff'>
        DEVICES THAT WE SUPPORT
      </Typography>
      <Box display='flex' justifyContent='center' alignItems='center' mt={2}>
        {/* Add your images here */}
        <img src={RapidoScale} alt="Rapido Scale" style={{ width: '600px', height: '600px', objectFit: 'cover' }} />
        <img src={MiBand3} alt="Mi Band 3" style={{ width: '600px', height: '600px', objectFit: 'cover' }} />

      </Box>
    </Box>
  );
}

export default Connect;
