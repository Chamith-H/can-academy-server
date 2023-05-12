const express = require("express");
const router = express.Router();
const User = require("../Models/User_Model")


// Save a new user --------------------------------------------------------------->
router.route("/addUser").post( async(req, res) => {

    try {
        const email = req.body.email
        const user = await User.findOne({email:email})

        if(user == null) {

            const new_User = new User({
                ID : 1,
                type:req.body.type,
                name : req.body.name,
                email : req.body.email,
                phone:req.body.phone,
                whatsapp : req.body.whatsapp,
                password : req.body.password
            })

            const response = await new_User.save()
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


//Login user --------------------------------------------------------------->
router.route("/loginUser").post( async(req, res) => { 

    try {
        const user = await User.findOne({email:req.body.email})

        if(user != null) {
            if(user.password == req.body.password) {
                res.send("ok")
            }

            else {
                res.send("mm")
            }
        }

        else {
            res.send("kk")
        }

    }

    catch (error) {
        res.send('Error: ' +error)
    }
})

module.exports = router;