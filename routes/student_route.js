const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/student");
const requireLogin = require("../middleware/auth")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../keys");
const { restartDelay } = require("concurrently/src/defaults");


router.post("/signup", (req, res) => {



    if (!(req.body.roll_no || req.body.name)) {
        return res.status(422).json({ error: "please add all the fields" });
    }

    Student.findOne({ roll_no: req.body.roll_no })
        .then((savedUser) => {
            if (savedUser) {
                return res
                    .status(422)
                    .json({ error: "student already exists with that roll no" });
            }

            const user = new Student({...req.body, isAdmin: req.body.user === "Admin" });

            user
                .save()
                .then((user) => {
                    res.json({ message: "saved successfully" });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
});


router.post("/signin", (req, res) => {


    const { roll_no, password } = req.body;
    if (!roll_no || !password) {
        return res.status(422).json({ error: "please add roll_no amd password" });
    }
    Student.findOne({ roll_no: roll_no }).then((savedUser) => {
            if (!savedUser) {

                return res.status(422).json({ error: "Invalid roll_no or password" });
            }

            bcrypt
                .compare(password, savedUser.password)
                .then((doMatch) => {



                    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);

                    res.json({
                        token,
                        user: savedUser
                    });
                })
        })
        .catch((err) => {
            console.log(err);
        });
});


router.get("/profile", requireLogin, (req, res) => {

    Student.find({ _id: req.user._id })
        .select("-password")
        .then((admins) => {
            res.json(admins);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/allStudent", (req, res) => {
    Student.find().sort({ createdAt: -1 }).then(data => {
        res.status(200).json(
            data
        );
    });
});

router.post("/removeStudent", async(req, res) => {



    try {
        await Student.findOneAndDelete({ _id: req.body.postId });

        res.send("you successfully remove the student")

    } catch (error) {
        console.log(error);
    }


})

router.post('/getStudentDetails', async(req, res) => {



    await Student.findOne({ roll_no: req.body.usn.toUpperCase() }, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err.message);
        }
    })
})

router.post('/updateUser', async(req, res) => {

    await Student.updateOne({ roll_no: req.body.roll_no }, {...req.body })
        .then((data) => res.json(data))
        .catch((e) => res.status(500).json({ error: e }));
})




module.exports = router;