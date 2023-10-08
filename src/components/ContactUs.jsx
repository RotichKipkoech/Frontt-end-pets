import React from 'react';
import './contact.css';
import NavBar from '../components/NavBar';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!'); // alert
  };

  return (
    <div>
            <NavBar />
    <div>
      <h2>Contact Us Page</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="social-links">
        <h3>Follow Us on Social Media:</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
