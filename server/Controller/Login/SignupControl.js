const SignUpUser = require('../../Models/SignupSchema');
const LoginUser = require('../../Models/LoginSchema');

exports.signUpUser = async(req , res) =>{
    const body = req.body;
    const {username , mail , password , phone , gender} = req.body;
    try{
        const result = await SignUpUser.create({
            username: username,
            mail:mail,
            password:password,
            phone: phone,
            gender: gender
        })
        if(result){
            const temp = await LoginUser.create({
                mail:body.mail,
                password: body.password
            })
            if(temp){
                res.status(200).json({code:1 , message: "Signup successful"})
            }
            else{
                res.json({code: 0 , message: "Unable to signup"})
            }
        }
        else{
            res.json({code: 0 , message: "Unable to signup"})
        }
    }
    catch(err){
        res.json({code:-1 , message:"Something went wrong"})
    }
}