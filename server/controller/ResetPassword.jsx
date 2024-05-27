

const UserSchema= require('../model/User');
const bcrypt=require('bcrypt')


const resetpassword=async(req,res)=>{
   const {token} = req.params;
   const {password} =req.body;

   try{
    const user=await UserSchema.findOne({
        resetPasswordToken:token,
        resetPasswordExpires: { $gt: Date.now() }
    });
    if(!user){
        return res.status(400).send('Password reset token is invalid or has expired');
    }
    const salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(password,salt);
    user.resetPasswordToken=undefined;
    user.resetPasswordExpires=undefined;
    await user.save();
    res.status(200).send('Password has been updated');
   }catch(err){
    console.error(err);
    res.status(500).send('Server error');
   }
}

module.exports={resetpassword};