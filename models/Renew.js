const mongoose = require("mongoose");

const RenewSchema = new mongoose.Schema({
    accession_no: {
        type: String,
    },
    userId: {
        type: String,
    },
    Name: {
        type: String,
    },
    Branch: {
        type: String,
    },
    semester: {
        type: String,
    },
    bookId: {
        type: String,
    },
    title: {
        type: String,
    },

    author: {
        type: String,
    },

    publisher: {
        type: String,
    },
    usn: {
        type: String
    },


    year: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model("Renew", RenewSchema);