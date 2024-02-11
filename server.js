
const app = require('./app');
const dotenv = require('dotenv');
const databaseConnection = require("./config/databaseConnection")

dotenv.config({path:'./config/config.env'})

databaseConnection();

const userRouter = require('./routes/userRouter');
const restaurantRouter = require('./routes/restaurantRouter');




app.use('/users',userRouter);
app.use('/restaurant',restaurantRouter);







app.use((err,req,res,next )=>{

    res.send(err.message)
})



app.listen(process.env.port, ()=>{

    console.log(`server is running ${process.env.port}`);
})




