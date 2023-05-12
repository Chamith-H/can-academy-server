const mongoose = require("mongoose");

const userSchema = {
    ID:Number,
    type:String,
    name:String,
    email:String,
    phone:String,
    whatsapp:String,
    password:String
}

const mongoCollection = mongoose.model("users", userSchema)

module.exports = mongoCollection;