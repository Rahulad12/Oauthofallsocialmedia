const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const app = express();
const authRoutes = require('./Routes/googleAuthroute');

// Session setup
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport strategy for Google OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
},
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile); // Handle user profile logic here (e.g., saving to the database)
  }
));

// Serialize user (save user info in session)
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user (retrieve user info from session)
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Use routes from the auth module
app.use('/', authRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
