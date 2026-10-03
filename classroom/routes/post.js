const express = require("express");
const router = express.Router();

//post
//index route
router.get("/", (req,res) => {
    res.send("GET for posts");
});

//show route
router.get("/:id", (req,res) => {
    res.send("GET for show post id");
});

//post route
router.post("/", (req,res) => {
    res.send("POST for post");
});

//delete route
router.delete("/:id", (req,res) => {
    res.send("DELETE for post id");
});

module.exports = router;