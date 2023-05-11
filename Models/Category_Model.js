const mongoose = require("mongoose");

const categorySchema = {
    ID:Number,
    name:String,
    image:String,
}

const mongoCollection = mongoose.model("categories", categorySchema)

module.exports = mongoCollection;