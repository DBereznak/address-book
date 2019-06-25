const express = require('express');
const router = express.Router();


const siteTitle = 'Address Book';

router.get('/', (req, res) => {
   res.render('contact', {
       siteTitle: siteTitle,
       pageTitle: 'Contact'
   });
});

module.exports = router;