const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminschema = new schema({
    email : {type : String, required: true, unique : true},
    password : {type : String, required: true, unique : true}
})

const admin = mongoose.model("admins", adminschema);



module.exports ={ 
    admin,
    adminschema

}