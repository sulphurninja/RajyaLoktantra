const express = require('express');
const expressLayouts=require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');


const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

 // ---------------   middleware   ---------------------------

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(cookieParser('RajyaLoktantraSecure'));
app.use(session({
    secret: 'RajyaLoktantraSecretSession',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use(fileUpload());
app.use(bodyParser.urlencoded({extended: true}));
app.set('layout', './layouts/main');    
app.set('view engine', 'ejs');




//----------------- ROUTES --------------------------------------

const routes = require('./server/routes/newsRoutes.js');
app.use('/', routes);


app.listen(port, ()=> console.log(`Listening to dat port ${port}`));