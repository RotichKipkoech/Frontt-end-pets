import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import your CSS file

const Register = () => {
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegister = () => {
    setShowRegistration(true);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    alert('Registration Successful!'); // Show an alert

    // Navigate to login page after successful registration
    navigate('/Login');
  };

  return (
    <div className="register-container">
      <h2>Register here!</h2>
      <button onClick={handleRegister}>Register</button>

      {showRegistration && (
        <div className="registration-form">
          <h2>Registration Form</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
