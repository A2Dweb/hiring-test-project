const mongoose=require("mongoose");

const ObjectId=mongoose.Schema.Types.ObjectId;

const weatherSchema=new mongoose.Schema({

    date:{
        type:String,
        required:true
    },
    temperature:{
        type:String,
        required:true
    },
    maxTemperature:{
        type:String,required:true
    },
    minTemperature:{
        type:String,
        required:true
    },
    condition:{
        type:String,required:true
    },
    windSpeed:{
        type:String,
        required:true
    },
    humidity:{
        type:String,
        required:true
        },
        cityId:{
            type:ObjectId,
            required:true,
            ref:"city"
         }},{timestamps:true}
)
module.exports=mongoose.model("weather",weatherSchema);