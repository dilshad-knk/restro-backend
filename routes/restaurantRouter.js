const express = require('express');
const { authToken } = require('../middlewares/authToken');
const { addRestaurant, getRestaurant } = require('../controllers/restaurantController');
const upload = require('../middlewares/fileUpload');
const router = express.Router();


router.route('/add').post(authToken, upload.single(`photograph`), addRestaurant)
router.route('/restaurants').get(getRestaurant);





module.exports = router
