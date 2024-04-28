const LoginUser = require('../../Models/LoginSchema') ;

exports.loginUser = async(req , res) =>{
    console.log(req.body)

    const {mail , password} = req.body ;
    try {

        const user = await LoginUser.findOne({
            mail: mail
        });
        console.log("DATA : "+user)

        if (!user) {
            res.status(401).json({code:0 , message:"User not found"}) ;
            return;
        }


        const isPasswordMatch = (user.password==password);
        if (!isPasswordMatch) {
            res.status(401).json({code:0 , message:"Invalid Password"})
        }

        res.status(200).json({code:1 , message:'Login Successful'});
    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
}