const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const clusterURL = "mongodb+srv://canacademy:cana9875sh@canacademy.a2xbmdz.mongodb.net/CanAcademy"

app.use(cors());
app.use(express.json());

//Connect Database
mongoose.connect(clusterURL)  

app.use("/", require("./Routes/Categories_Route"));
app.use("/", require("./Routes/Subcategories_Route"));
app.use("/", require("./Routes/Courses_Route"));

//Testing Back-End
app.listen(8000, '192.168.8.182', function() {
    console.log("Server was up")
})