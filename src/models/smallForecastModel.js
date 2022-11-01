const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const smallForecastSchema= new mongoose.Schema({
time:{
    type:String,
    required:true
},
temperature:{
    type:Number,
    required:true
},
condition:{
    type:String,
    enum: ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"],
    required:true
},
cityId:{
    type:ObjectId,
    ref:"city",
    required:true
}
},{timestamps:true})

module.exports=mongoose.model("smallforecast",smallForecastSchema);