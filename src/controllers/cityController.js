const cityModel=require("../models/cityModel");
const mongoose=require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
}

const  isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId);

}

const createCity=async function(req,res){
try{
let data=req.body;
let{name,state,country,maxTemperature,minTemprerature}=data;



let newCity=await cityModel.create(data)
return res.status(201).send({status:true,msg:"new city added to database",newCity})
}
catch(error){
console.log(error)
return res.status(500).send(error)
}
}

const updateCity=async function(req,res){
    try{
    let data=req.body;
    let {name,state,country,maxTemperature,minTemperature}=data;
    let cityId=req.params.cityId;
    if(!ObjectId.isValid(cityId)) return res.status(400).send({status:false,msg:'cityId is not valid'})
    let verifyId=await cityModel.findById({_id:cityId})
    if(!verifyId) return res.status(404).send({status:false,msg:"cityId not found"})
    

    let update=await cityModel.findOneAndUpdate({
        _id:cityId
    },{
        $set:{
            maxTemperature:maxTemperature,minTemperature:minTemperature
        }
    },{new:true})
    return res.status(201).send({msg:"data updated",DATA:update})
}
catch(error){
    console.log(error)
    return res.status(500).send({ERROR:error})
}
}

const listOfCities=async function(req,res){
    try{
       let page=req.query.page;
       let limit=req.query.limit;
       
        let list=await cityModel.find()
        .skip((page-1)*limit).select({name:1,state:1,country:1,maxTemperature:1,minTemperature:1,_id:1}).limit(limit).sort({createdAt:-1})
        return res.status(200).send({msg:"list of all cities",list})

    }
    catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}


module.exports.createCity=createCity;
module.exports.listOfCities=listOfCities;
module.exports.updateCity=updateCity;