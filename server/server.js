const mongoose = require('mongoose') ;

const express = require('express') ;

const cors = require('cors') ;

const app = express() ;

app.use(express.json()) ;

app.use(cors()) ;

require('dotenv').config() ;

const MONGODB_URI = process.env.MONGODB_URI ;

const PORT = process.env.PORT ;

const loginRoute = require('./Routes/Login/LoginRoute');

const signupRoute = require('./Routes/Login/SignupRoute');


mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
    .then(async()=>{
        console.log("Connected to MongoDB database") ;
    })
    .catch((err)=>{
        console.log("Failed to connect to MongoDB.\nERROR : " + err) ;
    });


app.use('/api/login' , loginRoute) ;

app.use('/api/signup' , signupRoute);


app.listen(PORT , ()=>{
    console.log("Listining on PORT : " + PORT) ;
})