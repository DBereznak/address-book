const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//Routes
const homeRouter = require('./routes/home');

const app = express();

app.engine('hbs',exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const port = process.env.PORT || 3000;

app.use('/', homeRouter);

app.listen(port, () => {
    console.log('Server listening on port', port);
});