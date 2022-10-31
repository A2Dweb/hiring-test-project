const weatherModel=require('../models/weatherModel');
const mongoose=require('mongoose')
const cityModel=require('../models/cityModel')
const ObjectId = mongoose.Types.ObjectId

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
}
const  isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
  }
const createWeather=async function(req,res){
    try{
        let data=req.body;
        let{date,temperature,maxTemperature,minTemperature,condition,windSpeed,humidity,forecast}=data;
        let weather=await weatherModel.create(data)
        return res.status(201).send({status:true,msg:"weather condition created",weather})

    }
    catch(error){
        console.log(error)
        return res.status(500).send({error})
    }
}

const viewWeather=async function(req,res){
    try{
 let cityId=req.params.cityId;
 
 if(!ObjectId.isValid(cityId)) return res.status(400).send({status:false,msg:'cityId is not valid'})

 let noWeather=await cityModel.findOne({cityId:cityId})
 if(!noWeather) return res.status(404).send({status:false,msg:"no data found"})
 let weather=await weatherModel.findOne({cityId:cityId}).select({date:1,_id:0,temperature:1,maxTemperature:1,minTemperature:1,condition:1,windSpeed:1,humidity:1,cityId:1}).sort({createdAt:-1})
 return res.status(200).send({status:true,msg:"live weather",data:weather})
 }
    catch(error){
console.log(error)
return res.status(500).send({error})
    }
} 
module.exports.createWeather=createWeather; 
module.exports.viewWeather=viewWeather; 