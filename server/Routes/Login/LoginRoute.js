const express = require('express') ;

const router = express.Router() ;

const loginController = require('../../Controller/Login/LoginControl') ;

router.post('/' , loginController.loginUser) ;

module.exports = router ;