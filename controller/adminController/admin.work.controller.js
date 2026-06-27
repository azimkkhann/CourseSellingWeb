const {authentication} = require("./../../models/courses.models");
const {courses} = require("/Users/azimkhan/Desktop/CourseSellingWebsite/models/courses.models.js");


/*


body : {
    name :
    url : 
    admin : objectid
}

*/
async function addcourse(req, res){

    let courseadded = null;

    try{
        courseadded = await courses.create({
            name : req.body.name,
            url : req.body.url,
            adminID : req.cookies.adminID
        })
    } catch (err){
        return res.status(500).send({
            message : "Cannot add course to the database",
            error : err
        })
    }

    res.send({
        courseID : courseadded._id,
        message: "course successfully added"
    })

}


async function deletecourse (req, res){

     try{
        courseadded = await courses.deleteOne({
            courseID : req.body.courseID
        })
    } catch (err){
        return res.status(500).send({
            message : "Cannot delete course to the database",
            error : err
        })
    }

    res.send({
        message: "course Deleted added"
    })

}


module.exports = {
    addcourse,
    deletecourse
}