const mongoose = require('mongoose');

const loginUser = new mongoose.Schema({
    mail:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const LoginUser = new mongoose.model('login' , loginUser);

module.exports = LoginUser;