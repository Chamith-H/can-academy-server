const mongoose = require("mongoose");

const courseSchema = {
    ID:Number,
    name:String,
    asigned:Number,
}

const mongoCollection = mongoose.model("courses", courseSchema)

module.exports = mongoCollection;