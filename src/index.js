const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const route = require('./routes/route');
const app=express();
//const swaggerUI=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerDoc = require('swagger-ui-express');
const swaggerDocumation = require('./helper/documentation');
app.use("/api-docs",swaggerDoc.serve);
app.use("/api-docs",swaggerDoc.setup(swaggerDocumation));


app.use(bodyparser.json());
app.use('/',route);


mongoose.connect("mongodb+srv://sumandev:aBosU15RXTGZYkKq@cluster0.4du2i.mongodb.net/weather-app?retryWrites=true&w=majority",{
    useNewUrlParser:true})
.then(()=>console.log("mongodb connected")) 
.catch(err=>console.log(err))

app.listen(process.env.PORT||3000,function(){
    console.log("running on port number",(process.env.PORT||3000))
})