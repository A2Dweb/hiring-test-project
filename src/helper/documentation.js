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
           security: security,
           requestBody: {
          
                     content:{
                     "application/json":{
                         schema:{
                           type: "object",
                           properties:{
                            name:{
                              type:String,
                              description:"enter user name",
                              example:"suman"
                           },
                            email:{
                               type:String,
                               description:"type user email",
                               example:"suman@email.com"
                            },
                            phone:{
                              type:String,
                              description:"type user phone number",
                              example:"9932448855"
                            },
                            password:{
                              type:String,
                              description:"type user password",
                              example:"Password@123"
                            },
                            country:{
                              type:String,
                              description:"type users country name",
                              example:"india"
                            }

                         
                         }
                     }
                   }
               }
           },
           response:{
            201:{
              description:"user profile",
              content:{
                "application/json":{
                  schema:{
                    type:"object"
                  
                      
                      
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
                    msg:"usrer creation failed"
                  }
                }
              }
            },
            500:{
              description:"error",
              content:{
                "application/json":{
                  schema:{
                    type:"object"
                 
                }
    
              }
            }
           }
         },
     },
  }

module.exports.swaggerDocumation=swaggerDocumation;
