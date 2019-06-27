const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dbereznak@gmail.com',
        subject: 'New login',
        text: `Thank you, ${name} for signing up, and using this Address book app. I hope you get lots of use out of it.`
    
    })
    }
    
    const sendCancelEmail = (email, name) => {
        sgMail.send({
            to: email,
            from: 'dbereznak@gmail.com',
            subject: `${name}, Sorry to see you go`,
            text: `It is sad to see you leave us, ${name}. Please tell us what we can do better.`
        })
    }

    const sendContactMail = (email, name, text) => {
        sgMail.send({
            to: 'dbereznak@gmail.com',
            from: email,
            subject: `new contact query from ${name}`,
            text: text
        
        })
    }
    
    module.exports = {
        sendWelcomeEmail,
        sendCancelEmail,
        sendContactMail
    }