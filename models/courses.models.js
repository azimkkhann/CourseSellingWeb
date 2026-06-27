const mongoose = require("mongoose");
const { required } = require("zod/mini");
const Schema = mongoose.Schema;
const object = Schema.ObjectId

const courseModel = new Schema({
    name : {type : String, required : true},
    date : {type : Date, default : Date.now()},
    video_url : {type : String, required : true},
    adminID : object
})


const courses = mongoose.model("courses", courseModel);


module.exports = {
    courses
}

