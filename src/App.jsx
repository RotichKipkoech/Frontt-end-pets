// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'; // Import the Navbar component
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Shop from './components/Shop';
import Veterinary from './components/Veterinary';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/veterinary" element={<Veterinary />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
