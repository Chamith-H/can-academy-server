const express = require("express");
const router = express.Router();
const Course = require("../Models/Course_Model")


// Save a new category --------------------------------------------------------------->
router.route("/addCourse").post( async(req, res) => {

    try {
        const name = req.body.name
        const course = await Course.findOne({name:name})

        if(course == null) {

            const new_Course = new Course({
                ID : req.body.ID,
                name : req.body.name,
                asigned : req.body.asigned
            })

            const response = await new_Course.save()
            response != null ?
                res.send('1') :res.send('0')
        }

        else {
            res.send('2')
        }

        console.log(req.body)
    }

    catch (error) {
        res.send('Error: ' +error)
    }
})


//Get all categories --------------------------------------------------------------->
router.route("/getCourses").post( async(req, res) => { 
    try {
        const courses = await Course.find({asigned:req.body.wanted})

        if(courses != null) {
            res.send(courses)
        }

    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

module.exports = router;