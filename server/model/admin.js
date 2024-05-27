const mongoose= require('mongoose');
const Admin= new mongoose.Schema({
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
    photo:{
        type:String,
        required:true
    }
})
const AdminSchema= new mongoose.model('Admin',Admin);
module.exports = AdminSchema;