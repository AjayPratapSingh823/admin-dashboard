const express = require('express');
const { signup } = require('../controller/AdminSignupContoller.jsx');
const { login } = require('../controller/AdminLoginController.jsx');
const upload = require('../middleware/userphoto.js');


const router = express.Router();

router.post('/signup', upload.single('photo'), signup);
router.post('/login', login);



module.exports = router;
