const express = require('express');
const path = require('path');
const bodypraser = require("body-parser");
const session = require("express-session");
const{v4:uuidv4} = require("uuid");

const router = require('./router');

const app = express();


const port = process.env.PORT||3000;

app.use(bodypraser.json())
app.use(bodypraser.urlencoded({extended:true}))


app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

app.use('/route',router)

app.get('/',function(req,res){
    res.render('base',{title:"Login System"})
});


app.listen(port,function(){
    console.log("This program is running on http://localhost:3000")
});


