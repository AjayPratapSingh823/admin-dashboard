const express = require('express');
const {resetpassword}=require('../controller/ResetPassword.jsx')

const router = express.Router();

router.post('/reset-password/:token',resetpassword);


module.exports = router;
