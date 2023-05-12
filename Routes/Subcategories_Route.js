const express = require("express");
const router = express.Router();
const Subcategory = require("../Models/Subcategory_Model")


// Save a new sub category --------------------------------------------------------------->
router.route("/addSubCategory").post( async(req, res) => {

    try {
        const name = req.body.name
        const subcategory = await Subcategory.findOne({name:name})

        if(subcategory == null) {

            const new_SubCategory = new Subcategory({
                ID : req.body.ID,
                name : req.body.name,
                asigned : req.body.asigned
            })

            const response = await new_SubCategory.save()
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


//Get all sub categories --------------------------------------------------------------->
router.route("/getSubCategories").get( async(req, res) => { 

    console.log("worliki")
    try {
        const subcategories = await Subcategory.find({})

        if(subcategories != null) {
            res.send(subcategories)
        }

    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

module.exports = router;