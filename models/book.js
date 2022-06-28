const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    // accession_no: {
    //     type: String
    // },
    // call_no: {
    //     type: String
    // },

    // title: {
    //     type: String,

    // },

    // author: {
    //     type: String,

    // },

    // publisher: {
    //     type: String,

    // },

    // year: {
    //     type: String,
    //     default: 2021
    // },

    // copies: {
    //     type: Number,
    //     default: 15
    // }

    accession_no: {
        type: String

    },


    call_no: {
        type: String

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

    year: {
        type: String,
        default: "2022"
    },

    copies: {
        type: Number,
        default: 15
    },
    subject: {
        type: String
    },
    pages: {
        type: String
    },
    price: {
        type: String
    },
    cost: {
        type: String
    },
    net_cost: {
        type: String
    },
    language: {
        type: String
    },
    item_type: {
        type: String
    },
    class_no: {
        type: String
    },
    entry_date: {
        type: String
    },
    bill_no: {
        type: String
    },
    bill_date: {
        type: String
    },
    category: {
        type: String
    },
    department: {
        type: String
    },
    vendor: {
        type: String
    },
    source: {
        type: String
    },
    avial_copies: {
        type: String
    }




}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);