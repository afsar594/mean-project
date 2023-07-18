const express=require('express');
const cors = require('cors');
require('./config/connections');
const bodyparser=require('body-parser')
const userModel=require('./controller/user_Controler')

let app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();
  });

app.post('/register',userModel.register)
app.post('/login',userModel.Login)
app.get('/getuser',userModel.getUser);

app.listen(3000,()=>{
    console.log("Server start on Port=3000");
})
