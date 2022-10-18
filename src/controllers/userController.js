
const userModel=require("../models/userModel");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const saltRound=10;

const isValid = function (value) {
    if (typeof value == undefined || value == null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
  }
//user account creation
const createUser=async function(req,res){
    try{
        let data=req.body;
        if (!(Object.keys(data).length > 0)) { return res.status(400).send({ status: false, message: "Invalid request Please provide details of an user" }) }
        let{name,email,phone,password,country}=data;
        if (!isValid(name)) { return res.status(400).send({ status: false, message: "Name is required" }) }

        if (!isValid(email)) { return res.status(400).send({ status: false, message: "Email-Id is required" }) }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
          return res.status(400).send({ status: false, message: "Email should be a valid email address" })
        }
        if (!isValid(phone)) { return res.status(400).send({ status: false, message: "Phone Number is required" }) }


        if (!(/^[6-9]\d{9}$/.test(data.phone))) {
          return res.status(400).send({ status: false, message: "phone number should be valid number" })
        }
     
        let checkPhone = await userModel.findOne({ phone: data.phone })
        if (checkPhone) { return res.status(400).send({ message: "phone Already exist" }) }
        if (!isValid(country)) { return res.status(400).send({ status: false, message: "country is required" }) }

        if (!isValid(password)) {
            return res.status(400).send({ status: false, message: "Password is required" })
          }
      
          if (!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(data.password.trim()))) {
            return res.status(400).send({ status: false, message: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" })
          }

        data.password=await bcrypt.hash(password,saltRound);
        let create=await userModel.create(data);
        return res.status(201).send({status:true,msg:"profile created",DATA:create})
 }
    catch(error){
        console.log(error)
        res.status(500).send({error})
    }
}
//login

const login=async function(req,res){
try{
 let data=req.body;
 if (!(Object.keys(data).length > 0)) { return res.status(400).send({ status: false, message: "Invalid request Please provide details of an user" }) }
 let{email,password}=data
 if (!isValid(email)) { return res.status(400).send({ status: false, message: "email is required" }) }

 let loginUser=await userModel.findOne({email:email})
 if(!loginUser){
    return res.status(400).send({msg:"user not found"})
 }
 if (!isValid(password)) return res.status(400).send({ status: false, msg: "Enter the valid Password" });
 
 let correct=bcrypt.compareSync(password,loginUser.password)
 if(!correct) return res.status(400).send({status:false,msg:"incorrect password"})
 let token=jwt.sign(
{
    org:"a2d",
    userId:loginUser._id,
    app:"weather",
    dev:"suman" 
},"THESECRETKEY")
res.header("a2d-key",token)
return res.status(201).send({msg:"login successfull",token})
}
catch(error){
console.log(error)
res.status(500).send(error)
}
}

module.exports.createUser=createUser;
module.exports.login=login;