const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const csrf = require('csurf');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

//create app using express library
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const csrfProtection = csrf();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.locals.moment = require('moment');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));

const mongo_uri = 'mongodb+srv://avi:zJz1EvYqz8LZQCAf@cluster0.oroi0.mongodb.net/appointmedb?retryWrites=true&w=majority';
const store = new MongoDBStore({
    uri: mongo_uri,
    collection: 'sessions'
});
app.use(session({
    secret: '8EP8ojnX3yrcSb1ry185mNZYGSKe3oL8',
    resave: false,
    saveUninitialized: false,
    store: store
}));

app.use(csrfProtection);
app.use((req, res, next) => {
    if (!req.session.account) {
        return next();
    }
    account.findById(req.session.account._id)
        .then(account => {
            req.account = account;
            next();
        })
        .catch(err => console.log(err));
});

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});
const accountRoute = require('./controllers/accounts');
app.use('/', accountRoute);
mongoose.connect(mongo_uri)
    .then(results => {
        console.log(results);
        app.listen(process.env.PORT || 6028, function () {
            console.log('Connect to server port 6028');
        });
    }).catch(err => {
        console.log(err);
    });