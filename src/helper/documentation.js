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
      servers: [
   
        {
            url: "http://localhost:3000/",
            description: "Local dev",
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
          description: "User routes"
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
                    example: {
                      "status": true,
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
         //copy here 39-141
     },
  }

  module.exports=swaggerDocumation;
