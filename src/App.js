import './App.css';
import Login from './Components/login';
import React from 'react';
import ForgotPass from './Components/forgotPass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./Components/signup"
import Booking from './Components/Booking';
import ContactUs from './Components/contactus';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/contactus" element={<ContactUs />} />    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
