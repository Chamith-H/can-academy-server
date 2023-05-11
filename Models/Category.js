const mongoose = require("mongoose");

const categorySchema = {
    ID:Number,
    name:String,
    image:String,
}

const mongoCollection = mongoose.model("courses", categorySchema)

module.exports = mongoCollection;