const forecastModel=require('../models/forecastModel');
const smallForecastModel=require('../models/smallForecastModel');
const otherForecastModel=require('../models/otherForcastModel');
const ObjectId = require('mongoose').Types.ObjectId;

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
}
const  isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
  }

  const isValidTitle = function (condition) {
    return ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"].indexOf(condition) !== -1
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

const createSmallForecast=async function(req,res){
    try{
      let data=req.body;
      //let{time,temperature,condition,cityId}=data;
      //if (!isValidTitle(condition)) { return res.status(400).send({ status: false, message: "condition must be:sunny||partly-cloudy||cloudy||rainy||snow||stormy||thunder" }) }
      let newData=await smallForecastModel.create(data)
      return res.status(201).send({status:true,msg:"data created",DATA:newData})
    }
    catch(error){
        console.log(error)
        return res.status(500).send({ERROR:error})
    }
}
const getSmallForecast=async function(req,res){
    try{
       let cityId=req.params.cityId;
       if(!ObjectId.isValid(cityId)) return res.status(400).send({status:false,msg:'cityId is not valid'})
       let getData=await smallForecastModel.find({cityId:cityId}).sort({createdAt:-1})
       return res.status(200).send({DATA:getData})
    }
    catch(error){
        console.log(error)
        return res.status(500).send({ERROR:error})
    }
     

};
 const createOtherforecast=async function(req,res){
    try{
        let data=req.body;
        // let{day:{name,temperature,condition},cityId}=data;
        // if (!isValidTitle(condition)) { return res.status(400).send({ status: false, message: "condition must be:sunny||partly-cloudy||cloudy||rainy||snow||stormy||thunder" }) }

        let generate=await otherForecastModel.create(data);
        return res.status(201).send({DATA:generate})

    }
    catch(error){
        console.log(error)
        return res.status(500).send({ERROR:error})
    }
 }


 const viewOtherforecast=async function(req,res){
    try{
          let cityId=req.params.cityId;
          console.log("cityId",cityId)
          if(!ObjectId.isValid(cityId)) return res.status(400).send({status:false,msg:'cityId is not valid'})
          let viewForecast= await otherForecastModel.findOne({cityId:cityId}).select({_id:0,day1:1,day2:1,day3:1,day4:1,day5:1,day6:1,day7:1,cityId:1}).sort({createdAt:-1})
          return res.status(200).send({status:true,DATA:viewForecast})
    }
    catch(error){
        console.log(error)
        return res.staus(500).send({ERROR:error})
    }
 }




module.exports.getSmallForecast=getSmallForecast;
module.exports.createSmallForecast=createSmallForecast;
 module.exports.createForecast=createForecast;
 module.exports.recentForecast=recentForecast;
module.exports.createOtherforecast=createOtherforecast;
module.exports.viewOtherforecast=viewOtherforecast;