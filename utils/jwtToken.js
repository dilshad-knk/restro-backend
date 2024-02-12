const jwt = require('jsonwebtoken');


exports.getToken = async (req,res)=>{

        const userId = req.user._id;

        const options = {
            id :userId,
            time: Date.now(),
        }
        
        const cookieParams = { httpOnly: true, sameSite: "none", secure: true };


        const token = await jwt.sign(options,process.env.JWT_KEY,{expiresIn: '60min'})

        if (!token){
            return  res.status(500).json({
                success : false,
                message : "Failed to generate token"
            })
        
        }

        res.status(200).cookie("rest_token",token, cookieParams).json({

            success: true,
            message: 'Logged in Successfully!',
            isAuthenticated: true,
            user: {
                fullname: req.user.fullName,
                email: req.user.email,
            },
            token: token,
            
    })
      
}
