/*
File: users.js
Student Name: Manvibolreach Ouk
Student ID: 301224112
Date: October 01, 2022
*/


let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Welcome to my World!');
});

module.exports = router;
