const express = require("express");
const router = express.Router();
const Category = require("../Models/Category_Model")


// Save a new category --------------------------------------------------------------->
router.route("/addCategory").post( async(req, res) => {

    try {
        const name = req.body.name
        const category = await Category.findOne({name:name})

        if(category == null) {
            const picture = `https://drive.google.com/uc?id=${req.body.image}`;

            const new_Category = new Category({
                ID : req.body.ID,
                name : req.body.name,
                image : picture
            })

            const response = await new_Category.save()
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
router.route("/getCategories").get( async(req, res) => { 
    try {
        const categories = await Category.find({})

        if(categories != null) {
            res.send(categories)
        }

    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

module.exports = router;