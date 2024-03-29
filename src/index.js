require('dotenv').config();
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
app.use(cors());
//const swaggerUI=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerDoc = require('swagger-ui-express');
const swaggerDocumation = require('./helper/documentation');

app.use("/api-docs",swaggerDoc.serve);
app.use("/api-docs",swaggerDoc.setup(swaggerDocumation));


app.use(bodyparser.json());
app.use(require('./routes/route'));


mongoose.connect(process.env.CLUSTER)
.then(()=>console.log("mongodb connected")) 
.catch(err=>console.log(err))  
console.log("PORT",process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log("running on local port",(process.env.PORT))
}) 
