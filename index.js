//npm packages
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');


//Routes
const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contact');
const userRouter = require('./routes/user');

//initialize express
const app = express();

//Sass compiler
app.use(sassMiddleware({
    src: path.join(__dirname, 'public/css'),
    dest: path.join(__dirname, 'public/css'),
    outputStyle: 'compressed',
    prefix: '/css'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Handlebars setup
app.engine('hbs',exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const port = process.env.PORT || 3000;

//Route Controllers
app.use('/', homeRouter);
app.use('/contact', contactRouter);
app.use('/user', userRouter);


app.listen(port, () => {
    console.log('Server listening on port', port);
});