import React from 'react'
import './App.css';
import { Box } from '@mui/material';
import {Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from './pages/Form';
import { app } from './utils/Firebase-config';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const authToken = sessionStorage.getItem('Auth Token');
    return authToken !== null;
  });
  const handleAction = (id) => {
    const authentication = getAuth();

    // Check Login or Register
    // Login functionality
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password).then((response) => {
        navigate('/');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        setIsLoggedIn(true);
      })
    .catch((error) => {
      if (error.code === 'auth/wrong-password'){
        toast.error('Please check the password');
      }
      if (error.code === 'auth/user-not-found') {
        toast.error('Please check the email');
      }
    })
    }

    // Register functionality
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password).then((response) => {
        navigate('/');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use'){
          toast.error('Email Already in use');
        }
      })
    }
  }
  useEffect(() => {
    navigate('/login');
  }, []);
  
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <ToastContainer/>
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
        <>
      <Routes>
        <Route
          path="/login"
          element={<Form title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)} />}
        />
        <Route
          path="/register"
          element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />}
        />
        <Route
          path="/"
          element={() => {
            navigate('/login');
            return null;
          }}
        />
      </Routes>
    </>
  )}
</Box>
  );
};
export default App;