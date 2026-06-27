const express = require("express");
const path = require("path")
const bcrypt = require("bcrypt");
const zod = require("zod");
const {admin, adminschema} = require("../../models/admin.models.js");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;


const adminvalidationSchema = zod.object({
    email : zod.email(),
    password : zod.string().min(2)
})

async function adminsignup(req, res){
     const validation = adminvalidationSchema.safeParse({email : req.body.email, password : req.body.password});

    if(!validation.success){
        console.log(validation.error)
        return res.status(400).send({
            message : validation.error
        })
    }

    const password = await bcrypt.hash(req.body.password, 10);

    try{
   await admin.create({
    email : req.body.email,
    password : password
   })
    } catch(err){
    return res.status(500).send({
        message : "Cannot put admin user in database",
        error : err
    })
    }

    res.send({
        message : "Successfully created admin"
    })
   
}

module.exports ={adminsignup, adminvalidationSchema}

