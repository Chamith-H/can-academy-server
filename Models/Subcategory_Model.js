const mongoose = require("mongoose");

const subcategorySchema = {
    ID:Number,
    name:String,
    asigned:Number,
}

const mongoCollection = mongoose.model("subcategories", subcategorySchema)

module.exports = mongoCollection;