const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const itemschema=new Schema({
    name:{
        type:String,
  
    },
    detail:{
        type:String,
  
    },
    file:{
        type:String, 
     
    },
      
},({timestamps:true}))
const itemModel=mongoose.model('item',itemschema);
module.exports=itemModel;