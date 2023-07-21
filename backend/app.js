const express = require('express');
const cors = require('cors');
require('./config/connections');
const bodyparser = require('body-parser')
const userController = require('./controller/user_Controler')
const itemController = require('./controller/items_Controler')
const fileUpload = require('express-fileupload');
let app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(fileUpload());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});

app.post('/register', userController.register)
app.post('/login', userController.Login)
app.get('/getuser', userController.getUser);

app.post('/upload',itemController.fileUpload)
app.get('/getFile',itemController.getItems)


app.listen(3000, () => {
  console.log("Server start on Port=3000");
})
