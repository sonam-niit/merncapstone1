const express= require('express');
const upload = require('./imageupload');
const UserModel= require('./model');
const connectDB = require('./config/db');
const app= express();
app.use(express.json());
connectDB();
app.post('/upload', upload.single('image'),async (req, res) => {
    const {name}=req.body;
    const profile=req.file.filename;
    const newModel= new UserModel({name,profile});
    const resp=await newModel.save();
    res.send({message:"Account Created",resp})
});

//Handling error all
app.use((err, req, res, next) => {
    // console.error(err);
    res.status(500).send(err);
});

app.listen(5000,()=>console.log('Server started'))