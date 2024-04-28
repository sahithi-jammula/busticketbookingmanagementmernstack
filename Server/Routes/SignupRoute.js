const express = require('express') ;

const router = express.Router() ;


const signupController = require('../../Controller/Login/SignupControl');

router.post('/' , signupController.signUpUser);

module.exports = router;