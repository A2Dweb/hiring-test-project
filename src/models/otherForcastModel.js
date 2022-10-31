const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const otherForecastSchema= new mongoose.Schema({
   day1:{
   
    temperature:{
        type:Number,
        required:true
    },
    condition:{
        type:String,
        enum: ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"],
        required:true
        
    }},
    day2:{
   
        temperature:{
            type:Number,
            required:true
        },
        condition:{
            type:String,
            enum: ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"],
            required:true
            
        }
        },
        day3:{
   
            temperature:{
                type:Number,
                required:true
            },
            condition:{
                type:String,
                enum: ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"],
                required:true
                
            }
            },
            day4:{
   
                temperature:{
                    type:Number,
                    required:true
                },
                condition:{
                    type:String,
                    enum: ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"],
                    required:true
                    
                }
                },
                day5:{
   
                    temperature:{
                        type:Number,
                        required:true
                    },
                    condition:{
                        type:String,
                        enum: ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"],
                        required:true
                        
                    }
                    },
                    day6:{
   
                        temperature:{
                            type:Number,
                            required:true
                        },
                        condition:{
                            type:String,
                            enum: ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"],
                            required:true
                            
                        }
                        },
                        day7:{
   
                            temperature:{
                                type:Number,
                                required:true
                            },
                            condition:{
                                type:String,
                                enum: ["sunny","partly-cloudy","cloudy","rainy","snow","stormy","thunder"],
                                required:true
                                
                            }
                            },
   
    cityId:{
        type:ObjectId,
        ref:"city",
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("otherForecast",otherForecastSchema);