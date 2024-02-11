const bcrypt = require('bcrypt');
const saltRound = 10;
const User = require('../models/userModel');
const { getToken } = require('../utils/jwtToken');

exports.userRegister = async (req,res)=>{
    
    try {
        const {fullName,email,password} = req.body;
    
        
        const hashedPassword = await bcrypt.hash(password,saltRound)
    
        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            
            })

        if (!user){
            return  res.status(500).json({
                success : false,
                message : "Registeration Failed"
            })
        }
       

        res.status(201).json({
                success : true,
                message : "Registered Successfully"
            })
    } catch (error) {
        res.status(401).json({
            success : false,
            message : error.message
        })
        }
   
}


exports.userLogin = async(req,res)=>{
        const {email,password} = req.body;

        
    try {
        const user = await User.findOne({email:email})

        if (!user) {
            return res.status(401).json({

                success: false,
                message: 'User not found'
            })
        }

        const isPasswordTrue = await bcrypt.compare(password,user.password);

        if (!isPasswordTrue){
            return res.status(401).json({

                success: false,
                message: 'Wrong Password'
            })
        }

        req.user = user;

        getToken(req,res)
        
    } catch (error) {
            res.status(500).json({

            success: false,
            message: error.message
        })
    }
   
}


exports.getAllUsers = async (req,res)=>{

   
   try {
        const users= await User.find()
        if (!users) {
            return res.status(500).json({

                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({

            success: true,
            message: 'User fetched Successfully',
            users,


        })

     

   } catch (error) {
        res.status(500).json({

            success: false,
            message: error.message,
        })
    }
}

exports.getUser = async (req,res)=>{

    
   try {
        
        const {id}= req.params;
       
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({

                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({

            success: true,
            user,


        })

        

   } catch (error) {
        res.status(500).json({

            success: false,
            message: error.message,
        })
    }
}


exports.updateUser = async (req,res)=>{

    const{id} = req.params;
    const {fullName,email} = req.body

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({

                success: false,
                message: 'User not found'
            })

        }
        user.fullName = fullName;
        user.email = email;

        user.save();

        res.status(200).json({

            success: true,
            user,
            message : 'User Updated Successfully'


        })



    } catch (error) {
        res.status(500).json({

            success: false,
            message: error.message,
        })
    }
}




exports.deleteUser = async (req,res)=>{

    const{id} = req.params;
   
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({

                success: false,
                message: 'User not found'
            })

        }

        res.status(200).json({

            success: true,
            message : 'User Deleted Successfully'


        })



    } catch (error) {
        res.status(500).json({

            success: false,
            message: error.message,
        })
    }
}



