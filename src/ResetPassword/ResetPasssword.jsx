import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate,Link } from 'react-router-dom';
import '../Signup/Signup.css';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      await axios.post(`http://localhost:4000/api/reset-password/${token}`, formData);
      setMessage('Password has been reset. You can now log in.');
      navigate('/user-login');
    } catch (err) {
      setMessage('An error occurred. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="body-signup">
      <div className="signup-container">
        <header>
          <h1>Reset Password</h1>
          <p>Enter your new password below.</p>
        </header>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Reset Password</button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="extra-options">
          <Link to="/login" className="link-option">Back to Login</Link>
          <Link to="/signup" className="link-option">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
