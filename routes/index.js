/*
File: index.js
Student Name: Manvibolreach Ouk
Student ID: 301224112
Date: October 01, 2022
*/

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About' });
});
/* GET product page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});
/* GET service page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;