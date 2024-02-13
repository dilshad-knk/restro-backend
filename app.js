const express =require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path'); 

app.use(cors({
    credentials: true,
    origin: true,

}));

app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


module.exports = app ;
