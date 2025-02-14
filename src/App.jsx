import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';  // Import the Login component
import Signup from './Pages/SignUp';
import AdminLogin from './Pages/Adminlogin';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/adminlogin" element={<AdminLogin />} /> 
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;
