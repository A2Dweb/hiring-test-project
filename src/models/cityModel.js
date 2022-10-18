const mongoose=require('mongoose');

const citySchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }},{timestamps:true} )

module.exports=mongoose.model("cities",citySchema);
