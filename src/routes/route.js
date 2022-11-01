const express=require('express');
const route=express.Router();
const userController=require('../controllers/userController');
const cityController=require('../controllers/cityController');
const weatherController=require('../controllers/weatherController');
const forecastController=require('../controllers/forecastController');
const mw=require('../middlewares/mw');

// USER
route.post("/create-user",userController.createUser);
route.post("/login",userController.login);
route.get("/city-list",mw.authentication,cityController.listOfCities);
route.get('/live-weather/:cityId',mw.authentication,weatherController.viewWeather);
//route.get('/forecast/:cityId',mw.authentication,forecastController.recentForecast);
route.get('/view-other-forecast/:cityId',mw.authentication,forecastController.viewOtherforecast);
route.get('/view-small-forecast/:cityId',mw.authentication,forecastController.getSmallForecast);
//ADMIN SIDE CITY,WEATHER & FORECAST CREATION
route.post('/create-city',cityController.createCity);
route.post('/create-weather',weatherController.createWeather);
route.post("/create-forecast",forecastController.createForecast);
route.put('/update-city/:cityId',cityController.updateCity);
route.post('/create-small-forecast',forecastController.createSmallForecast);

route.post('/create-other-forecast',forecastController.createOtherforecast);


module.exports=route;    