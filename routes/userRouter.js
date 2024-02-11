const express = require('express');
const router = express.Router();

const {userLogin, userRegister, getAllUsers, getUser,updateUser,deleteUser} = require('../controllers/userController');
const { authToken } = require('../middlewares/authToken');




router.route('/register').post(userRegister);
router.route('/login').post(userLogin);
router.route('/allUsers').get(authToken,getAllUsers);
router.route('/user/:id').get(authToken, getUser).put(authToken, updateUser).delete(authToken,deleteUser)
    
   


    
module.exports = router
