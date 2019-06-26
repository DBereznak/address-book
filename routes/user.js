const express = require('express');
const router = express.Router();


const siteTitle = 'Address Book';

router.get('/signup', (req, res) => {
   res.render('signup', {
       siteTitle: siteTitle,
       pageTitle: 'Sign Up'
   });
});

router.get('/login', (req, res) => {
    res.render('login', {
        siteTitle: siteTitle,
        pageTitle: 'Login'
    });
 });


module.exports = router;