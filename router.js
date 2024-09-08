const e = require('express');
var express = require('express');
var router = express.Router();


const credentials={
    email:"hi@gmail.com",
    password:"hi123"
}

//login user
router.post('/login', (req,res)=>{
    if(req.body.email==credentials.email&&req.body.password==credentials.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard');
        //res.end("login sucessful");
    }else{
        //res.end("invalid username")
        res.redirect('/route/dashboard')
    }
});

//router for logout
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        //res.send("Unauthorised user")
        res.render('dashboard',{user:req.session.user})
    }
})

//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title:'Express',logout:'logout Sucessfully'})
        }
    })
})


module.exports=router;