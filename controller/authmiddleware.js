const jwt = require("jsonwebtoken");
const {admin, adminschema} = require("./../models/admin.models.js");
const {users} = require("./../models/users.models.js");
const bcrypt = require("bcrypt");
require("dotenv").config();



async function authentication(req, res, next){

    let token = req.cookies.token;

    try{
    token = jwt.verify(token, process.env.JWT_SECRET);
    } catch{
        return res.status(401).send({
            message : "invalid token",
            error : err
        })
    }
    ee
    next();

    }


    module.exports = {
        authentication
    }

