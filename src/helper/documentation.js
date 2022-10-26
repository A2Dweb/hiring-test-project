//this file is for swagger 
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
            url: "http://localhost:3000/",
            description: "Local dev"
          
            
        },
        {
          url:"https://hiring-test.a2dweb.com/",
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
                             },
                         
                        
                          
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
                      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM"
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
          "/create-city": {
            post: {
              tags: ["city"],
              description: "create city",
             // security: security,
              requestBody: {
             
                        content:{
                        "application/json":{
                            schema:{
                              type: "object",
                              properties:{
                               name:{
                                 type:"string",
                                 description:"enter city name",
                                 example:"kolkata"
                              },
                               state:{
                                  type:"string",
                                  description:"type state name",
                                  example:"west bengal"
                               },
                               country:{
                                 type:"string",
                                 description:"enter country name",
                                 example:"india"
                               }
                          
                            
                            }
                        }
                      }
                  }
              },
              responses:{
               201:{
                 description:"city",
                 content:{
                   "application/json":{
                     schema:{
                       type:"object",
                       example: {  
                        "status": true,
                        "msg": "new city added to database",
                        "newCity": {
                          "name": "kolkata",
                          "state": "west bengal",
                          "country": "india",
                          "_id": "634fa3979c7e7644c2f1d609",
                          "createdAt": "2022-10-19T07:13:27.722Z",
                          "updatedAt": "2022-10-19T07:13:27.722Z",
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
                       msg:"city creation failed"
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
                         msg:"city creation failed"
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
                 201:{
                   description:"city list",
                   content:{
                     "application/json":{
                       schema:{
                         type:"object",
                         example: {  
                         "msg": "list of all cities",
                         "list": [
                          {   "_id":"634fa407e8d8760a675cae88",
                              "name": "kolkata",
                              "state": "west bengal",
                              "country": "india"
                             
                          },
                          {    "_id": "634fa3979c7e7644c2f1d609",
                              "name": "kolkata",
                              "state": "west bengal",
                              "country": "india"
                          },
                          {    "_id": "634fa3979c7e7644c2f1d609",
                              "name": "alipurduar",
                              "state": "west bengal",
                              "country": "india"
                          },
                          {    "_id": "634fa3979c7e7644c2f1d609",
                              "name": "behala",
                              "state": "west bengal",
                              "country": "india"
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
              "/create-weather": {
                post: {
                  tags: ["weather"],
                  description: "create weather",
                 // security: security,
                  requestBody: {
                 
                            content:{
                            "application/json":{
                                schema:{
                                  type: "object",
                                  properties:{
                                    time:{
                                     type:"string",
                                     description:"enter date",
                                     example:"6:00AM"
                                  },
                                  temperature:{
                                      type:"string",
                                      description:"type temperature",
                                      example:24
                                   },
                                   maxTemperature:{
                                     type:"string",
                                     description:"enter maximum temperature",
                                     example:28
                                   },
                                   minTemperature:{
                                    type:"string",
                                    description:"enter minimum temperature",
                                    example:21
                                  },
                                  condition:{
                                    type:"string",
                                    description:"enter condition",
                                    example:"windy"
                                  },
                                  windSpeed:{
                                    type:"string",
                                    description:"enter wind speed",
                                    example:15
                                  },  
                                  humidity:{
                                    type:"string",
                                    description:"enter humidity",
                                    example:60
                                  },
                                  cityId:{
                                    type:"string",
                                    description:"enter ciyId",
                                    example:"634f8e6eebecf6f12604ffd4"
                                  }

                              
                                
                                }
                            }
                          }
                      }
                  },
                  responses:{
                   201:{
                     description:"weather creation",
                     content:{
                       "application/json":{
                         schema:{
                           type:"object",
                           example: {  
                            "status": true,
                            "msg": "weather condition created",
                            "weather": {
                                "time": "7:00AM",
                                "temperature": 21,
                                "maxTemperature": 27,
                                "minTemperature": 21,
                                "condition": "sunny",
                                "windSpeed": 4,
                                "humidity": 61,
                                "cityId": "634f8e6eebecf6f12604ffd4",
                                "_id": "634fc67187469217c127c818",
                                "createdAt": "2022-10-19T09:42:09.094Z",
                                "updatedAt": "2022-10-19T09:42:09.094Z",
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
                           msg:"weather creation failed"
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
                "/create-forecast": {
                  post: {
                    tags: ["forecast"],
                    description: "create forecast",
              
                   //security: security,
                   requestBody: {
             
                    content:{
                    "application/json":{
                        schema:{
                          type: "object",
                          properties:{
                           sunday:{
                             type:"object",
                             description:"enter days name",
                             example:{
                              "date":"22/05/2021",
                              "temperature":21
                          }
                          },
                          monday:{
                            type:"object",
                            description:"enter days name",
                            example:{
                             "date":"22/05/2021",
                             "temperature":21
                         }
                         },
                         tuesday:{
                          type:"object",
                          description:"enter days name",
                          example:{
                           "date":"22/05/2021",
                           "temperature":21
                       }
                       },
                       wednesday:{
                        type:"object",
                        description:"enter days name",
                        example:{
                         "date":"22/05/2021",
                         "temperature":21
                     }
                     },   
                     thursday:{
                      type:"object",
                      description:"enter days name",
                      example:{
                       "date":"22/05/2021",
                       "temperature":21
                   }
                   },
                   friday:{
                    type:"object",
                    description:"enter days name",
                    example:{
                     "date":"22/05/2021",
                     "temperature":21
                 }
                 },
                 saturday:{
                  type:"object",
                  description:"enter days name",
                  example:{
                   "date":"22/05/2021",
                   "temperature":21
               }
               },

                           cityId:{
                              type:"string",
                              description:"state name",
                              example:"6352c16d677e65ea59d5abb9"
                           }
                      
                        
                        }
                    }
                  }
              }
          },
                 
                    responses:{
                     201:{
                       description:"forecast creation",
                       content:{
                         "application/json":{
                           schema:{
                             type:"object",
                             example:{
                              "status": true,
                              "msg": "forecast added",
                              "newForecast": {
                                  "sunday": {
                                      "date": "22/05/2021",
                                      "temperature": 25
                                  },
                                  "monday": {
                                      "date": "23/05/2021",
                                      "temperature": 23
                                  },
                                  "tuesday": {
                                      "date": "24/05/2021",
                                      "temperature": 21
                                  },
                                  "wednesday": {
                                      "date": "25/05/2021",
                                      "temperature": 23
                                  },
                                  "thursday": {
                                      "date": "26/05/2021",
                                      "temperature": 27
                                  },
                                  "friday": {
                                      "date": "27/05/2021",
                                      "temperature": 26
                                  },
                                  "saturday": {
                                      "date": "28/05/2021",
                                      "temperature": 24
                                  },
                                  "cityId": "634f8e6eebecf6f12604ffd4",
                                  "_id": "634fcd6a3f8159f68e8d260e",
                                  "createdAt": "2022-10-19T10:11:54.911Z",
                                  "updatedAt": "2022-10-19T10:11:54.911Z",
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
                  tags: ["user"],
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
                     description:"forecast creation",
                     content:{
                       "application/json":{
                         schema:{
                           type:"object",
                           example:{
                            "status": true,
                            "msg": "live weather",
                            "data": {
                                "time": "8:00AM",
                                "temperature": 24,
                                "maxTemperature": 28,
                                "minTemperature": 21,
                                "condition": "windy",
                                "windSpeed": 15,
                                "humidity": 60
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
            "/forecast/{cityId}": {
              get: {
                tags: ["user"],
                description: "forecast",
                parameters:[
                  {
                      name:"cityId",
                      in: "path",
                      description: "mention the cityId",
                      type: "objectId",
                       example: "634f8e6eebecf6f12604ffd4"
                  }
                  
               ],
          
               security: security,
            
               
                responses:{
                 200:{
                   description:"forecast creation",
                   content:{
                     "application/json":{
                       schema:{
                         type:"object",
                         example:{
                          "FORECAST": [
                              {
                                  "sunday": {
                                      "date": "22/05/2021",
                                      "temperature": 21
                                  },
                                  "monday": {
                                      "date": "23/05/2021",
                                      "temperature": 25
                                  },
                                  "tuesday": {
                                      "date": "24/05/2021",
                                      "temperature": 23
                                  },
                                  "wednesday": {
                                      "date": "25/05/2021",
                                      "temperature": 23
                                  },
                                  "thursday": {
                                      "date": "26/05/2021",
                                      "temperature": 24
                                  },
                                  "friday": {
                                      "date": "27/05/2021",
                                      "temperature": 23
                                  },
                                  "saturday": {
                                      "date": "28/05/2021",
                                      "temperature": 24
                                  }
                              },
                              {
                                  "sunday": {
                                      "date": "22/05/2021",
                                      "temperature": 21
                                  },
                                  "monday": {
                                      "date": "23/05/2021",
                                      "temperature": 25
                                  },
                                  "tuesday": {
                                      "date": "24/05/2021",
                                      "temperature": 23
                                  },
                                  "wednesday": {
                                      "date": "25/05/2021",
                                      "temperature":23
                                  },
                                  "thursday": {
                                      "date": "26/05/2021",
                                      "temperature": 24
                                  },
                                  "friday": {
                                      "date": "27/05/2021",
                                      "temperature": 23
                                  },
                                  "saturday": {
                                      "date": "28/05/2021",
                                      "temperature":24
                                  }
                              },
                              {
                                  "sunday": {
                                      "date": "22/05/2021",
                                      "temperature": 21
                                  },
                                  "monday": {
                                      "date": "23/05/2021",
                                      "temperature": 25
                                  },
                                  "tuesday": {
                                      "date": "24/05/2021",
                                      "temperature": 23
                                  },
                                  "wednesday": {
                                      "date": "25/05/2021",
                                      "temperature": 23
                                  },
                                  "thursday": {
                                      "date": "26/05/2021",
                                      "temperature": 24
                                  },
                                  "friday": {
                                      "date": "27/05/2021",
                                      "temperature": 23
                                  },
                                  "saturday": {
                                      "date": "28/05/2021",
                                      "temperature": 24
                                  }
                              },
                              {
                                  "sunday": {
                                      "date": "22/05/2021",
                                      "temperature": 21
                                  },
                                  "monday": {
                                      "date": "23/05/2021",
                                      "temperature": 25
                                  },
                                  "tuesday": {
                                      "date": "24/05/2021",
                                      "temperature": 23
                                  },
                                  "wednesday": {
                                      "date": "25/05/2021",
                                      "temperature": 23
                                  },
                                  "thursday": {
                                      "date": "26/05/2021",
                                      "temperature": 24
                                  },
                                  "friday": {
                                      "date": "27/05/2021",
                                      "temperature": 23
                                  },
                                  "saturday": {
                                      "date": "28/05/2021",
                                      "temperature": 24
                                  }
                              }
                          ]
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
