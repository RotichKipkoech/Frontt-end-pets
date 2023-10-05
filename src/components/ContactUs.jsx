import React from 'react';
import './contact.css';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!'); // Example alert, replace with your logic
  };

  return (
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
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
