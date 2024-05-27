const mongoose= require('mongoose');
const User= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetPasswordToken:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    }

})
const UserSchema= new mongoose.model('User',User);
module.exports = UserSchema;