//this file is for swagger 
const dotenv=require('dotenv').config();
const security = [
    {
        bearerAuth: []
    },
  ];
  const swaggerDocumation={
      openapi: "3.0.0",
      info: {
        
          title: " WEATHER API'S",
          version: "0.0.1",
          description: "this is an api documentaion",
      },
    //   "schemes": [
    //     "https",
    //     "http"

    // ],
      servers: [
   
        {
            url: process.env.LOCAL_HOST,
            description: "Local dev"
          
            
        },
        {
          url:process.env.PRODUCTION_HOST,
          description:"production"
        }
      
      ],
      components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
  tags: [
      {
          name: "User",
          description: "User apis"
      },

  ],
  paths: {
     "/create-user": {
         post: {
           tags: ["User"],
           description: "create user",
          // security: security,
           requestBody: {
          
                     content:{
                     "application/json":{
                         schema:{
                           type: "object",
                           properties:{
                            name:{
                              type:"string",
                              description:"enter user name",
                              example:"suman"
                           },
                            email:{
                               type:"string",
                               description:"type user email",
                               example:"suman@email.com"
                            },
                            phone:{
                              type:"string",
                              description:"type user phone number",
                              example:"9932448855"
                            },
                            password:{
                              type:"string",
                              description:"type user password",
                              example:"Password@123"
                            },
                            country:{
                              type:"string",
                              description:"type users country name",
                              example:"india"
                            }
                       
                         
                         }
                     }
                   }
               }
           },
           responses:{
            201:{
              description:"user profile",
              content:{
                "application/json":{
                  schema:{
                    type:"object",
                    example: {  "status": true,
                    "msg": "profile created",
                    "DATA": {
                      "name": "arpit",
                      "email": "arpit@email.com",
                      "phone": "9324488445",
                      "password": "$2b$10$R4qM8CgDBgMpj9pUjnQXUOhsQDqCwSMCzx.X7T8gYh53XKDXG4eiq",
                      "country": "india",
                      "_id": "634eae08bd376e7bec9ac2c4",
                      "createdAt": "2022-10-18T13:45:44.481Z",
                      "updatedAt": "2022-10-18T13:45:44.481Z",
                      "__v": 0
                    }
                      
                        
                      
                    }
                  
                    
                      
                      }
                    }
                  }
                }
              }
            },
            400:{
              description:"error",
              content:{
                "application/json":{
                  schema:{
                    type:"object",
                    example: {
                    msg:"usrer creation failed"
                  }}
                }
              }
            },
            500:{
              description:"error",
              content:{
                "application/json":{
                  schema:{
                    type:"object",
                    example: {
                      msg:"usrer creation failed"
                    }
                 
                }
    
              }
            }
           }
         },
         "/login": {
          post: {
            tags: ["User"],
            description: "user login",
           // security: security,
            requestBody: {
           
                      content:{
                      "application/json":{
                          schema:{
                            type: "object",
                            properties:{
                         
                             email:{
                                type:"string",
                                description:"type user email",
                                example:"suman@email.com"
                             },
                           
                             password:{
                               type:"string",
                               description:"type user password",
                               example:"Password@123"
                             }
                         
                        
                          
                          }
                      }
                    }
                }
            },
            responses:{
             200:{
               description:"user profile",
               content:{
                 "application/json":{
                   schema:{
                     type:"object",
                     example: {
                      "msg": "login successfull",
                      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM",
                      "liveWeather": {
                        "time": "9:30AM",
                        "temperature": 25,
                        "maxTemperature": 30,
                        "minTemperature": 21,
                        "condition": "sunny",
                        "windSpeed": 5,
                        "humidity": 62,
                        "cityId": "6352c16d677e65ea59d5abb9"
                    }
                     }
                      }
                     }
                   }
                 }
               }
             },
             400:{
               description:"error",
               content:{
                 "application/json":{
                   schema:{
                     type:"object",
                     example: {
                     msg:"usrer login failed"
                   }}
                 }
               }
             },
             500:{
               description:"error",
               content:{
                 "application/json":{
                   schema:{
                     type:"object",
                     example: {
                       msg:"usrer login failed"
                     }
                  
                 }
     
               }
             }
            }
          },
           "/city-list": {
              get: {
                tags: ["city"],
                description: "all cities",
                parameters:[
                  {
                      name:"page",
                      in: "query",
                      description: "mention the page number",
                      type: "string",
                       example: "1",  
                  }, 
                   {
                    name:"limit",
                    in: "query",
                    description: "mention the limit number",
                    type: "string",
                     example: "5",  
                }
                  
               ],
               security: security,

             
                responses:{
                 200:{
                   description:"city list",
                   content:{
                     "application/json":{
                       schema:{
                         type:"object",
                         example: {
                          "msg": "list of all cities",
                          "list": [
                              {
                                  "_id": "635f83b2f7ccaef29c146a07",
                                  "name": "test",
                                  "state": "west bengal",
                                  "country": "india",
                                  "maxTemperature": 150,
                                  "minTemperature": 10
                              },
                              {
                                  "_id": "635f8251333c7ee772f98f41",
                                  "name": "test",
                                  "state": "west bengal",
                                  "country": "india",
                                  "maxTemperature": 100
                              },
                              {
                                  "_id": "635f8227333c7ee772f98f3f",
                                  "name": "haworah",
                                  "state": "west bengal",
                                  "country": "india",
                                  "maxTemperature": 101
                              }
                          ]
                      }
                       
                         
                           
                           }
                         }
                       }
                     }
                   }
                 },
                 400:{
                   description:"error",
                   content:{
                     "application/json":{
                       schema:{
                         type:"object",
                         example: {
                         msg:"failed to load city list"
                       }}
                     }
                   }
                 },
                 500:{
                   description:"error",
                   content:{
                     "application/json":{
                       schema:{
                         type:"object",
                         example: {
                           msg:"internal error"
                         }
                      
                     }
         
                   }
                 }
                }
              },
             
                "/view-small-forecast/{cityId}": {
                  get: {
                    tags: ["forecast"],
                    description: "view small forecast",
                    parameters:[
                      {
                          name:"cityId",
                          in: "path",
                          description: "mention the cityId",
                          type: "string",
                           example: "635f83b2f7ccaef29c146a07"  
                      }
                      
                   ],

              
                   security: security,
                  
                 
                    responses:{
                     200:{
                       description:"view small forecast",
                       content:{
                         "application/json":{
                           schema:{
                             type:"object",
                             example:{
                              "DATA": {
                                  "data1": {
                                      "time": "9.00 AM",
                                      "temperature": 14,
                                      "condition": "thunder"
                                  },
                                  "data2": {
                                      "time": "10.00AM",
                                      "temperature": 14,
                                      "condition": "thunder"
                                  },
                                  "data3": {
                                      "time": "11.00AM",
                                      "temperature": 14,
                                      "condition": "thunder"
                                  },
                                  "data4": {
                                      "time": "12.00PM",
                                      "temperature": 14,
                                      "condition": "thunder"
                                  },
                                  "data5": {
                                      "time": "1.00PM",
                                      "temperature": 14,
                                      "condition": "thunder"
                                  },
                                  "data6": {
                                      "time": "2.00PM",
                                      "temperature": 14,
                                      "condition": "thunder"
                                  },
                                  "_id": "63909c22640779e2208ba17e",
                                  "cityId": "635f83b2f7ccaef29c146a07",
                                  "createdAt": "2022-12-07T13:58:58.355Z",
                                  "updatedAt": "2022-12-07T13:58:58.355Z",
                                  "__v": 0
                              }
                          }
                           
                             
                               
                               }
                             }
                           }
                          }
                  
                     ,
                     400:{
                       description:"error",
                       content:{
                         "application/json":{
                           schema:{
                             type:"object",
                             example: {
                             msg:"failed to create forecast"
                           }}
                         }
                       }
                     },
                     500:{
                       description:"error",
                       content:{
                         "application/json":{
                           schema:{
                             type:"object",
                             example: {
                               msg:"internal error"
                             }
                          
                         }
             
                       }
                     }
                    }
                  }
                }
              },
              "/live-weather/{cityId}": {
                get: {
                  tags: ["weather"],
                  description: "live weather",
                  parameters:[
                    {
                        name:"cityId",
                        in: "path",
                        description: "mention the cityId",
                        type: "string",
                         example: "634f8e6eebecf6f12604ffd4"
                    }
                    
                 ],
            
                 security: security,
              
                 
                  responses:{
                   200:{
                     description:"live weather",
                     content:{
                       "application/json":{
                         schema:{
                           type:"object",
                           example:{
                            "status": true,
                            "msg": "live weather",
                            "data": {
                                "temperature": 25,
                                "maxTemperature": 30,
                                "minTemperature": 21,
                                "condition": "sunny",
                                "windSpeed": 5,
                                "humidity": 62,
                                "cityId": "6352c16d677e65ea59d5abb9"
                            }
                        }
                         
                           
                             
                             }
                           }
                         }
                        }
                
                   ,
                   400:{
                     description:"error",
                     content:{
                       "application/json":{
                         schema:{
                           type:"object",
                           example: {
                           msg:"failed to load live weather"
                         }}
                       }
                     }
                   },
                   500:{
                     description:"error",
                     content:{
                       "application/json":{
                         schema:{
                           type:"object",
                           example: {
                             msg:"internal error"
                           }
                        
                       }
           
                     }
                   }
                  }
                }
              }
            },




            "/view-other-forecast/{cityId}": {
              get: {
                tags: ["forecast"],
                description: "forecast",
                parameters:[
                  {
                      name:"cityId",
                      in: "path",
                      description: "mention the cityId",
                      type: "objectId",
                       example: "635f83b2f7ccaef29c146a07"
                  }
                  
               ],
          
               security: security,
            
               
                responses:{
                 200:{
                   description:"view other forecast",
                   content:{
                     "application/json":{
                       schema:{
                         type:"object",
                         example:{
                          "status": true,
                          "DATA": {
                              "day1": {
                                  "temperature": 25,
                                  "condition": "partly-cloudy"
                              },
                              "day2": {
                                  "temperature": 23,
                                  "condition": "partly-cloudy"
                              },
                              "day3": {
                                  "temperature": 21,
                                  "condition": "partly-cloudy"
                              },
                              "day4": {
                                  "temperature": 30,
                                  "condition": "partly-cloudy"
                              },
                              "day5": {
                                  "temperature": 35,
                                  "condition": "partly-cloudy"
                              },
                              "day6": {
                                  "temperature": 32,
                                  "condition": "partly-cloudy"
                              },
                              "day7": {
                                  "temperature": 19,
                                  "condition": "partly-cloudy"
                              },
                              "cityId": "635f83b2f7ccaef29c146a07"
                          }
                      }
                       
                         
                           
                           }
                         }
                       }
                      }
              
                 ,
                 400:{
                   description:"error",
                   content:{
                     "application/json":{
                       schema:{
                         type:"object",
                         example: {
                         msg:"failed to load forecast"
                       }}
                     }
                   }
                 },
                 500:{
                   description:"error",
                   content:{
                     "application/json":{
                       schema:{
                         type:"object",
                         example: {
                           msg:"internal error"
                         }
                      
                     }
         
                   }
                 }
                }
              }
            }
          },
            
              
         //copy here 39-141
     },
  }

  module.exports=swaggerDocumation;
