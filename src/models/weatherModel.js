const mongoose=require("mongoose");

const ObjectId=mongoose.Schema.Types.ObjectId;

const weatherSchema=new mongoose.Schema({

    time:{
        type:String,
        required:true
    },
    temperature:{
        type:Number,
        required:true
    },
    maxTemperature:{
        type:Number,required:true
    },
    minTemperature:{
        type:Number,
        required:true
    },
    condition:{
        type:String,required:true
    },
    windSpeed:{
        type:Number,
        required:true
    },
    humidity:{
        type:Number,
        required:true
        },
        cityId:{
            type:ObjectId,
            required:true,
            ref:"city"
         }},{timestamps:true}
)
module.exports=mongoose.model("weather",weatherSchema);