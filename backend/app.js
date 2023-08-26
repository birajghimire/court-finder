const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { engine } = require('express-handlebars');
<<<<<<< HEAD
const cors = require('cors');


=======
const cookieParser = require('cookie-parser');
>>>>>>> 6f54e3bb

dotenv.config({ path: './config/config.env' });

connectDB();


const app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
};

<<<<<<< HEAD
app.engine('.hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.json());
app.use(cors());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI})
  }));



app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/court', require('./routes/court'));


=======
>>>>>>> 6f54e3bb
const PORT = process.env.PORT || 5000;

app.use(cookieParser())

app.use(express.json());

app.use(function(req, res, next) {
  //IMPORTANT TODO: Change origin to delpoyed host sitename
  res.header("Access-Control-Allow-Origin", req.header('Origin'));
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use('/auth', require('./routes/auth'));
app.use('/court', require('./routes/court'));

app.listen(PORT, console.log(`Running on ${process.env.NODE_ENV} on port ${PORT}`));