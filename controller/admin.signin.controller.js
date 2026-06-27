const bcrypt = require("bcrypt");
const zod = require("zod");
const {admin, adminschema} = require("./../models/admin.models.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {adminvalidationSchema} = require("./admin.signup.controller.js")
const JWT_SECRET = process.env.JWT_SECRET;


async function adminsignin(req,res){
    let validation = adminvalidationSchema.safeParse({email : req.body.email, password : req.body.password})

    if(!validation.success){
        return res.status(401).send({
            message : "credentials are incorrect",
            error : validation.error
        })
    }

    let admindatabasecheck = await admin.findOne({
        email : req.body.email 
    })

    try{
    let passwordcheck = await bcrypt.compare(req.body.password, admindatabasecheck.password);
    if(!passwordcheck){
        return res.status(401).send({
            message : "Incorrect password"
        })
    }
    } catch(err){
        return res.status(401).send({
            messgae : "Incorrect Password.",
            error : err
        })
    }

    let token = jwt.sign({
        password : admindatabasecheck.password,
        adminID : admindatabasecheck._id
    }, JWT_SECRET, {
        expiresIn : "2d"
    })

    res.cookie("token", token);
    res.cookie("email", admindatabasecheck.email);

    res.send({
        message : "successfully logged in"
    })



}


module.exports = {adminsignin}