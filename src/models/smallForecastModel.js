const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const smallForecastSchema= new mongoose.Schema({
    data1:{
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
}},
data2:{
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
    }},
    data3:{
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
        }}
,
data4:{
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
    }},
    data5:{
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
        }},
        data6:{
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
            }},

cityId:{
    type:ObjectId,
    ref:"city",
    required:true
},date:{
    type: String,
    required: true
}
},{timestamps:true})

module.exports=mongoose.model("smallforecast",smallForecastSchema);