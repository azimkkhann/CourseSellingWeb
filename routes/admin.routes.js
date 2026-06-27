const express = require("express");
const path = require("path")
const route = express.Router();

const {adminsignup} = require("../controller/adminController/admin.signup.controller.js");
const {adminsignin} = require("../controller/adminController/admin.signin.controller.js")
const {authentication} = require("./../controller/authmiddleware.js")
const {addcourse, deletecourse} = require("./../controller/adminController/admin.work.controller.js");


route.get("/signin", async (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'../', "static", "admin", "admin.signin.html"));
})


route.post("/signup", adminsignup);


route.post("/signin", adminsignin);


route.post ("/addcourse", authentication, addcourse);


route.post("/deletecourse", authentication, deletecourse);



module.exports = {route};
