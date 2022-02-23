//module
const express = require("express");
const path = require('path');
const cors = require("cors"); 
var bodyParser = require("body-parser");
var { engine }  = require ('express-handlebars');
const app = express();

//import file render
const dashboard = require('./routes/dashboard');
const match = require('./routes/match');
const result = require('./routes/result');


app.use(bodyParser.urlencoded({ extended: false }));

//for access api
app.use(cors({
  origin: '*'
}));

//handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//set public
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'publics')));


//app used
app.use('/',dashboard);
app.use('/match',match);
app.use('/result',result);

app.listen(5000,()=>{console.log("http://localhost:5000/")})
