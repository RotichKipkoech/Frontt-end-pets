import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://pets-backend-nlog.onrender.com/users');
      const users = response.data.users;

      const user = users.find(u => u.email === formData.email && u.password === formData.password);

      if (user) {
        alert('Login Successful!');
        navigate('/shop'); // Redirect to the 'shop' page
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert(`Error logging in: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Login here!</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
