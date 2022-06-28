const express = require("express");
const router = express.Router();

const Book = require("../models/book");






router.post("/addBook", (req, res) => {



    var val = Math.floor(1000 + Math.random() * 9000);
    var value = "E098" + val.toString();





    const book = new Book({...req.body, accession_no: value, avial_copies: req.body.copies.toString() })
    book.save().then(result => {
        res.status(201).json({
            message: "Done upload!",

        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })

})
router.get("/allBook", (req, res) => {
    Book.find().sort({ createdAt: -1 }).then(data => {
        res.status(200).json(
            data
        );
    });
});


router.post('/getBook', async(req, res) => {


    // res.json({ name: "sdjhskjfd" });

    await Book.findOne({ accession_no: req.body.searchkey }, (err, data) => {
        if (!err) {
            res.send(data);
        }
    })

})

router.post('/modifyOne', async(req, res) => {
    await Book.updateOne({ accession_no: req.body.accession_no }, {...req.body })
        .then((data) => res.json(data))
        .catch((e) => res.status(400).json({ error: e.message }));
});


router.post('/modifyAll', async(req, res) => {

    await Book.updateMany({ title: req.body.title }, {...req.body })
        .then((data) => res.json(data))
        .catch((e) => res.status(400).json({ error: e.message }));
})




module.exports = router;