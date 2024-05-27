const express = require('express');
const { signup } = require('../controller/UserSignupController.jsx');
const { login } = require('../controller/UserLoginController.jsx');
const upload = require('../middleware/photo.js');
const {forgetPassword}= require('../controller/ForgetPasswordController.jsx');

const router = express.Router();

router.post('/user-signup', upload.single('photo'), signup);
router.post('/user-login', login);
router.post('/forget-password',forgetPassword);


module.exports = router;
