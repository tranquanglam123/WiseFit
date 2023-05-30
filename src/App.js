import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import Form from './pages/Form';
import Home from './pages/Home';
import { useState } from 'react';
import {app} from './utils/Firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleAction= (id) => {
    const authentication = getAuth();

    //check Login or Register
    
    //Login functionality
    if (id===1) {
      signInWithEmailAndPassword(authentication, email, password).then((response) => {
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
    }

    //Reg function
    if (id === 2){
    createUserWithEmailAndPassword(authentication, email, password).then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse,refreshToken)
        })
    }
  }
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    //condition check
    if (authToken) {
      navigate('/home')
    }
  }, [])
  return (
      <div className='App'>

        <Routes>
        <Route path="/" element={<Form title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)}/>} />
        <Route path="/register" element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />} />
        <Route path='/home' element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
