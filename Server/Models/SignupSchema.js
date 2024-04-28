const mongoose = require('mongoose');

const signupUser = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    mail:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required: true ,
        unique:true
    },
    gender:{
        type:String,
        required: true
    }
});

const SignUpUser = new mongoose.model('signup' , signupUser);

module.exports = SignUpUser;