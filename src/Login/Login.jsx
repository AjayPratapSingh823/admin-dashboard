import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../Signup/Signup.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login', formData);
      setMessage('Login successful');
      // Save the token to localStorage or state management
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('photo:', response.data.user.photo);
      // Redirect to admin-home
      // navigate('/admin-home');
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setMessage('Invalid credentials');
      } else if (err.response && err.response.status === 404) {
        setMessage('User not found');
      } else {
        setMessage('Login failed');
      }
      console.error(err);
    }
  };

  return (
    <div className='body-signup'>
    <div className="signup-container">
      <header>
        <h1>Welcome Back</h1>
        <p>Please log in to continue.</p>
      </header>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Log In</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    </div>
  );
};

export default Login;
