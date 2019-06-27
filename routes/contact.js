const express = require('express');
const sgMail = require('@sendgrid/mail');
const {sendContactMail} = require('../emails/emails')

sgMail.setApiKey('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');

const router = express.Router();


const siteTitle = 'Address Book';


router.get('/', (req, res) => {
   res.render('contact', {
       siteTitle: siteTitle,
       pageTitle: 'Contact'
   });
});

router.post('/sendmail',  (req, res) => {
   sendContactMail(req.body.email, req.body.name, req.body.text);
    res.redirect('/');
})


module.exports = router;