const express = require("express");
const path = require("path")
const route = express.Router();

const {adminsignup} = require("./../controller/admin.signup.controller.js");
const {adminsignin} = require("./../controller/admin.signin.controller.js")



route.get("/signin", async (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'../', "static", "admin", "admin.signin.html"));
})


route.post("/signup", adminsignup);


route.post("/signin", adminsignin);


module.exports = {route};
