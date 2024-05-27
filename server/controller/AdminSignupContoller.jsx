const AdminSchema = require('../model/admin.js');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  const { fullname, email, password} = req.body;
  const photo=req.file? req.file.path : '';
  try {
    const existingUser = await AdminSchema.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send('Email is already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new AdminSchema({
      fullname: fullname,
      email: email,
      password: hashedPassword,
      photo: photo,
    });

    const savedUser = await newUser.save();
    if (savedUser) {
      return res.status(201).send('User registration successful');
    } else {
      return res.status(400).send('User registration failed');
    }
  } catch (error) {
    return res.status(500).send('Server error');
  }
};

module.exports = { signup };
