let itemModel=require('../models/items');


exports.fileUpload=(req,res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'No files were uploaded.' });
    }
  
    // The name of the input field (e.g., "file") is used to retrieve the uploaded file
    const uploadedFile = req.files.file;
  
    // Use the mv() method to place the file in the 'uploads' directory
    uploadedFile.mv('uploads/' + uploadedFile.name, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } 
  
      res.json({ message: 'File uploaded successfully', file: uploadedFile.name });
    });

    let model = new itemModel({
        name: req.body.name,
        detail: req.body.details,
        file:uploadedFile.name
    })
    console.log("model",model)
    model.save().then(user => {
        console.log("Successs fully ")
    })
        .catch(err => {
           console.log("something wrong")
        })
}


 exports.getItems=async (req,res)=>{
let result= await itemModel.find()
res.send(result);
}