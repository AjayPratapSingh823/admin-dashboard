import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Signup/Signup.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/forget-password', {
         email:email
         });
      
      setMessage('Password reset link sent to your email.');
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setMessage('Email not found');
      } else {
        setMessage('An error occurred. Please try again.');
      }
      console.error(err);
    }
  };

  return (
    <div className="body-signup">
      <div className="signup-container">
        <header>
          <h1>Forgot Password</h1>
          <p>Enter your email to receive password reset instructions.</p>
        </header>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Send Reset Link</button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="extra-options">
          <Link to="/user-login" className="link-option">Back to Login</Link>
          <Link to="/user-signup" className="link-option">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
