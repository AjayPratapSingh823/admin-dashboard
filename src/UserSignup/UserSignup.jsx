import React, { useState } from 'react';
import axios from 'axios';
import './UserSignup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate= useNavigate();
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setPhoto(files[0]);
      // Create a preview of the selected photo
      setPhotoPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const form = new FormData();
    form.append('fullname', formData.fullname);
    form.append('email', formData.email);
    form.append('password', formData.password);

    try {
      const response = await axios.post('http://localhost:4000/api/user-signup', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('User registration successful');
      navigate('/user-login');
      console.log(response.data);
    } catch (err) {
      setMessage('User registration failed');
      console.error(err);
    }
  };

  return (
  <div className='body-signup'>
    <div className="signup-container">
      <header>
        <h1>Welcome to Our Platform</h1>
        <p>Join us to enjoy exclusive features and content.</p>
      </header>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
      
      <div className="extra-options">
          <Link to="/user-login" className="link-option">Already have an account? Login</Link>
      </div> 
    </div>
    </div>
  );
};

export default UserSignup;
