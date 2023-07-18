let authModel=require('../models/user');
const bcrypt = require('bcrypt');


exports.register = (req, res, next) => {
    bcrypt.hash(req.body.Password, 10, function(err, hash) {
        if(err){
          res.status(400).json({
                msg:"Something Wrong, Try Later!",
                results:err
            });
        }else{     
    let model = new authModel({
            name: req.body.Name,
            email: req.body.Email,
            password: hash,
            role:'Auther'
        })
        model.save().then(user => {
            res.json({
                message: 'User Added Successfully'
            })
        })
            .catch(err => {
                res.json({
                    message: 'An error Occured!'
                })
            })
        }
    })
    







        // let model = new authModel({
        //     name: req.body.Name,
        //     email: req.body.Email,
        //     password: req.body.Password
        // })
        // model.save().then(user => {
        //     res.json({
        //         message: 'User Added Successfully'
        //     })
        // })
        //     .catch(err => {
        //         res.json({
        //             message: 'An error Occured!'
        //         })
        //     })


}

exports.Login = (req, res) => {
    console.log("Body Data", req.body);
    var email = req.body.Email;
    var password = req.body.Password;
    authModel.findOne({ $or: [{ password: password }, { email: email }] }).then(resp => {
        if (resp) {
            bcrypt.compare(password, resp.password, function (err, result) {
                console.log("mmmmmmmmmm",result)
                if (err) {
                    res.json({
                        error: err
                    })
                }
                if (result) {
                    res.json({
                        message: 'Login Successfull',
                      resutl:resp,
                        success: true,
                      
             
                 
                    })
                }
                else {
                    res.json({
                        message: 'Password does not match'
                    })
                }
            })
        } else {
            res.json({
                message: 'User does not found'
            })
        }
    })

}



exports.getUser= async(req,res)=>{
    let result = await authModel.find()
    res.send(result);
   }