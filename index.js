const express =require("express");
const app =express();
const multer = require("multer");
const upload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'Images');
        },
        filename:(req,file,cb)=>{
           console.log(file);
           cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }
    })
}).single('user_file');

app.post("/upload",upload,(req,res)=>{
    res.send("Image Uploaded");
});
app.listen(3001)
