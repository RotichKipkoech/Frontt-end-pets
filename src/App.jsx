// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Shop from './components/Shop';
import Veterinary from './components/Veterinary';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import UserData from './UserData';

const isAuthenticated = true; // 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/veterinary" element={<Veterinary />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/user-data" element={<UserData />} />
        <Route path="/shop" element={isAuthenticated ? <Shop /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
