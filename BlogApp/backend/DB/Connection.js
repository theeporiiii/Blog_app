const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Athul:Athul@cluster0.ynske8l.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("Db connected")
})
.catch((error)=>{
    console.log(error)
})
