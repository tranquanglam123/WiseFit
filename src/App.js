import React from 'react'
import './App.css';
import { Box } from '@mui/material';
import {Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from './pages/Form';
import { app } from './utils/Firebase-config';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcersiceDetail';
import BmiCalculator from './pages/BmiCalculator';
import User from './pages/User';
import Location from './pages/Location';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleAction = (id) => {
    const authentication = getAuth();

    // Check Login or Register
    // Login functionality
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password).then((response) => {
        navigate('/');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        setIsLoggedIn(true);
      });
    }

    // Register functionality
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password).then((response) => {
        navigate('/');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        setIsLoggedIn(true);
      });
    }
  }
  //token function
  /*
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    // Condition check
    if (authToken) {
      navigate('/home');
    }
  }, [navigate]);
*/
  useEffect(() => {
    navigate('/login');
  }, []);
  
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/User" element={<User />} />
            <Route path="/exercise/:id" element={<ExcerciseDetail />} />
            <Route path="/BmiCalculator" element={<BmiCalculator />} />
            <Route path="/Location" element={<Location />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<Form title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)} />}
          />
          <Route
            path="/register"
            element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />}
          />
        </Routes>
      )}
    </Box>
  );
};
export default App;