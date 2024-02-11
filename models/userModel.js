const mongoose = require('mongoose');
const validator =require('validator')


const userSchema = new mongoose.Schema({
    fullName : String,
    email : {
        type: String,
        unique: [true,'User Already Registered'],
        validate: [validator.isEmail,'please enter a valid email']
        
    },
    password : String,
})

module.exports = mongoose.model('user', userSchema);
