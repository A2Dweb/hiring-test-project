const jwt=require('jsonwebtoken')
require('dotenv').config();

const authentication = function (req, res, next) {
    try {
        //const token = req.headers["a2d-key"]
        const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(400).send({ status: false, message: "token must be present" });
        }
       
        const decodedToken = jwt.verify(token,process.env.KEY);
        
        if (!decodedToken) {
            return res.status(401).send({ status: false, message: "token is invalid" });
        }
        next();
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}


module.exports.authentication=authentication;