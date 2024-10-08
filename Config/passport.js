// config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

// Passport strategy for Google OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
},
  (accessToken, refreshToken, profile, done) => {
    // Here, you would typically search for the user in your DB or create a new one
    return done(null, profile); // Pass the profile to serializeUser
  }
));

// Facebook OAuth strategy
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'photos', 'email']  // Request necessary fields
  },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile); // Handle Facebook user profile logic
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

module.exports = passport;
