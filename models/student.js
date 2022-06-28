const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({


    name: {
        type: String,

    },

    email: {
        type: String,

    },

    password: {
        type: String
    },

    roll_no: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
    },
    addmission_year: {
        type: String,
        default: "2022"
    },
    phone_no: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    sem: {
        type: String
    },
    taken: {
        type: Number,
        default: 0
    },
    user: {
        type: String
    },
    course: {
        type: String
    },
    gender: {
        type: String
    },
    fatherName: {
        type: String
    },
    pinCode: {
        type: String
    },
    city: {
        type: String
    },
    boold: {
        type: String
    },
    dob: {
        type: String
    },
    address: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);