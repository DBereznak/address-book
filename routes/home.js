const express = require('express');
const router = express.Router();


const siteTitle = 'Address Book';

router.get('/', (req, res) => {
   res.render('home', {
       siteTitle: siteTitle,
       pageTitle: 'Home Page'
   });
});

module.exports = router;