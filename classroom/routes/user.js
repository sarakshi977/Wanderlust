const express = require("express");
const router = express.Router();

//index route
router.get("/", (req,res) => {
    res.send("GET for user");
});

//show route
router.get("/:id", (req,res) => {
    res.send("GET for show user id");
});

//post route
router.post("/", (req,res) => {
    res.send("POST for user");
});

//delete route
router.delete("/:id", (req,res) => {
    res.send("DELETE for user id");
});

module.exports = router;