const forecastModel=require('../models/forecastModel');
const ObjectId = require('mongoose').Types.ObjectId;

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
}
const  isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
  }
const createForecast=async function(req,res){
    try{
      
    let data=req.body;

    let newForecast=await forecastModel.create(data);
    return res.status(201).send({status:true,msg:"forecast added",newForecast})
}
catch(error){
    console.log(error)
    return res.status(500).send({error})
}
}
const recentForecast=async function(req,res){

    try{

     let cityId=req.params.cityId;
     if(!ObjectId.isValid(cityId)) return res.status(400).send({status:false,msg:'cityId is not valid'})
      let city=await forecastModel.findOne({cityId:cityId})
      if(!city) return res.status(400).send({status:false,msg:"no data found"})

     let recent=await forecastModel.find({cityId:cityId}).select({_id:0,createdAt:0,updatedAt:0,__v:0}).sort({createdAt:-1})
     return res.status(200).send({FORECAST:recent})

  
    } 
    catch(error){
        console.log(error)
        return res.status(500).send({error})
    }
}
module.exports.createForecast=createForecast;
module.exports.recentForecast=recentForecast;