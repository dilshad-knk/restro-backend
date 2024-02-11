const jwt = require('jsonwebtoken');


exports.authToken = (req,res,next) => {

    const {rest_token} = req.cookies;
    console.log('authToken loading')
    jwt.verify(rest_token,process.env.JWT_KEY,(err,decode) => {
        if (err){
            return  res.status(401).json({
                success : false,
                message : "Invalid Token!!",
            })

        }

        next()
        

    })

}
