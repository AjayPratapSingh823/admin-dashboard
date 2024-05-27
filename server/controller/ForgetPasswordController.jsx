const UserSchema = require('../model/User.js');
const nodemailer = require('nodemailer');
const crypto = require('crypto'); // Ensure you have imported crypto
require('dotenv').config()

const forgetPassword = async (req, res) => {
    const { email } = req.body;
    const user = await UserSchema.findOne({ email }); 
    if (!user) {
        return res.status(404).send('User not found');
    }
    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save(); // Save the user with the new token and expiry

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user:  process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    const mailOptions = {
        to: user.email,
        from: 'singhajaysingh545@gmail.com',
        subject: 'Password reset',
        text: `Please click on the following link to reset your password: ${process.env.CLIENT_URL}/reset-password/${token}`,
    };
    transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
            console.error('There was an error: ', err);
            res.status(500).send('An error occurred while sending the email.');
        } else {
            res.status(200).send('Recovery email sent');
        }
    });
};

module.exports = { forgetPassword };
