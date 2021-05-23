const express = require("express");
const axios = require("axios");

/* Gọi Controllers */

var router = express.Router();

/* */
router.get("/", function(req, res){
    res.send('Hello World :))')
});

module.exports = router;
