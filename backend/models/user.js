const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userschema=new Schema({
    name:{
        type:String,
        required: true 
    },
    email:{
        type:String,
        required: true,
        index: {
            unique: true, 
        },
        match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String, 
       required: true
    },
    role:{
        type:String, 
       required: true
    },
    date:{
        type: Date, 
        default: Date.now }
      
},({timestamps:true}))
const authModel=mongoose.model('user',userschema);
module.exports=authModel;