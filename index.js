const express = require('express');
const restaurantRouter = require('./routes/restaurant');
const indexRouter = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
//creat server
const app = express();

//Template engine 
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

//use Router
app.use('/api',restaurantRouter);
app.use('/',indexRouter);

//Middleware
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, ()=>{
    console.log('Listening to port 3000');
});
