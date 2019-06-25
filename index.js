const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//Routes
const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contact');

const app = express();

app.engine('hbs',exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const port = process.env.PORT || 3000;

app.use('/', homeRouter);
app.use('/contact', contactRouter);

app.listen(port, () => {
    console.log('Server listening on port', port);
});