const express=require('express');
const port=process.env.port ||3000;
// const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken")
const app=express();
app.use(express.json())
const db="mongodb+srv://monug1513:monu@server.x9x7kxz.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect(db);
}
const registerSchema = new mongoose.Schema({
        name: String,
        email:String,
        mobile:Number,
        proffession:Number,
        password:Number,
        confirmpassword:Number
  });
  const Register = mongoose.model('Register',registerSchema );

app.get("/",(req,res)=>{
const createtoken=async()=>{
const token=jwt.sign({name:"kalicharankumar"},"monugupta")
console.log(token)
console.log("data is here")
}
createtoken();
const params={}
res.send("This is home page")
})

app.post("/register",async(req,res)=>{
  // const securepassowrd=await bcrypt.hash(password,10)
  // console.log(securepassowrd)
const silence = new Register
({ 
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    proffession:req.body.proffession,
    password:req.body.password,
    confirmpassword:req.body.confirmpassword
});
console.log(silence)
console.log(req.body)
res.send("register successful")

})
app.get("/about",(req,res)=>{
res.send("This is about page")
})
app.get("/contact",(req,res)=>{
res.send("This is contact page")
})
app.listen(port,()=>{

console.log("Running on Port 3000")


})