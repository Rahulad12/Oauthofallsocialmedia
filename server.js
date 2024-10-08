const express = require('express');
const session = require('express-session');
const passport = require('./Config/passport');
require('dotenv').config();

const app = express();
const authRoutes = require('./Routes/oAuthRoute');

// Session setup
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());

// Use routes from the auth module
app.use('/', authRoutes);


console.log(process.env.PINTEREST_CALLBACK_URL)
// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
