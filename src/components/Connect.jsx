import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material';
import RapidoScale  from '../assets/images/scale.jpg';
import MiBand3  from '../assets/images/1_Mi_Band_3.jpg';
import {useNavigate } from 'react-router-dom';
function UserProfile() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    Name: 'LAM TRAN',
    profileImage: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/248179689_399415275178957_8207686571705545584_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=i9G6h_D3eGoAX-m40_x&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfBrqif6QANcC9z6hj2G8KKyoA97RWJehtw6ZXlnwMjBEQ&oe=647DFDE8',
    information: {
      Age: '',
      Email: '',
      Address: '',
    },
  });

  const handleEdit = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      information: {
        ...prevUser.information,
        [field]: value,
      },
    }));
  };

  return (
    <Box display='flex' alignItems='center' marginLeft='-50px'>
    {/* User Profile Image */}
    <Box marginRight={4}>
      <img src={user.profileImage} alt='Profile' style={{ width: '300px', height: '300px', borderRadius: '50%', marginTop:'50px' }} />
      <Typography variant='h4' fontWeight='600' gutterBottom color='#ffffff' marginTop='20px' textAlign='center'>
        {user.Name}
      </Typography>
      
      {/*<Button onClick={handleLogout}>Log Out</Button>*/}
    </Box>
      {/* User Information Table */}
      <Table style={{ width: '600px', height: '400px' ,marginTop: '20px', marginLeft:'75px' }}>
        <TableBody>
          {Object.entries(user.information).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell component='th' scope='row' style={{ fontSize: '25px',fontWeight: 'bold', width: '100px', color: '#ffffff' }}>
                {key}
              </TableCell>
              <TableCell>
                <TextField
                  value={value}
                  onChange={event => handleEdit(key, event.target.value)}
                  fullWidth
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { color: '#ffffff',fontSize:'20px' ,fontWeight: 'bold' } }}
                  style={{ borderColor: '#ffffff'}}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
  );
}


const Connect = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const authToken = sessionStorage.getItem('Auth Token');
    return authToken !== null;
  });
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
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    setIsLoggedIn(false);
    window.location.reload();
  };
  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');
    setIsLoggedIn(authToken !== null);
  }, [isLoggedIn]);
  
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
    {/*User Profile Content*/}
    <UserProfile/>
    <Button onClick={handleLogout}>Log Out</Button>


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
