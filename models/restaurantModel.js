const mongoose = require('mongoose');


const restaurantSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    neighborhood :{
        type : String,
        required: true
    },
    cuisine : {
        type: String,
        required: true,
    },
   photograph :{
        type : String,
        require: true
    }
})

module.exports = mongoose.model('Restaurant', restaurantSchema);
