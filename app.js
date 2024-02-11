const express =require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(cors({
    credentials: true,
    origin: true,

}));

app.use(cookieParser());

app.use(__dirname + '/public',express.static(__dirname +'public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


module.exports = app ;
