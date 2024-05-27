const UserSchema = require('../model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserSchema.findOne({ email: email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({
        token,
        user: {
          fullname: user.fullname,
          email: user.email,
          photo: user.photo
        }
      });
  } catch (error) {
    return res.status(500).send('Server error');
  }
};

module.exports = { login };
