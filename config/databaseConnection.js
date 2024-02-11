const mongoose = require('mongoose');

const databaseConnection = ()=>{

    mongoose.connect(process.env.DB_URL)
    .then((data)=>console.log(`Data base connected with ${data.connection.host}`))
    .catch((error)=>console.log(error.message))

}

module.exports = databaseConnection