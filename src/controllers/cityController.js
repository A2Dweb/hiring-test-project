const cityModel=require("../models/cityModel");



const createCity=async function(req,res){
try{
let data=req.body;
let{name,state,country}=data;



let newCity=await cityModel.create(data)
return res.status(201).send({status:true,msg:"new city added to database",newCity})
}
catch(error){
console.log(error)
return res.status(500).send(error)
}
}

const listOfCities=async function(req,res){
    try{
       let page=req.query.page;
       let limit=req.query.limit;
       
        let list=await cityModel.find()
        .skip((page-1)*limit).select({name:1,state:1,country:1,_id:1}).limit(limit).sort({createdAt:-1})
        return res.status(200).send({msg:"list of all cities",list})

    }
    catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}


module.exports.createCity=createCity;
module.exports.listOfCities=listOfCities;