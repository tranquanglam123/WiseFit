import './App.css';
import Form from './pages/Form';
import { BrowserRouter as router, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <router>
      <div className='App'>
      <>
        <Form/>

      </>
      </div>
    </router>
  );
}

export default App
