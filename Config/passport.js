// config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
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


//Twitter OAuth strategy
passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CLIENT_ID,
  consumerSecret: process.env.TWITTER_CLIENT_SECRET,
  callbackURL: process.env.TWITTER_CALLBACK_URL,
},
function(token, tokenSecret, profile, cb) {
  //User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    return cb(null, profile);
  }
//);
//}
)); 

//Instagram OAuth strategy
passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL:  process.env.INSTAGRAM_CALLBACK_URL,
},
function(accessToken, refreshToken, profile, done) {
  //User.findOrCreate({ instagramId: profile.id }, function (err, user) {
    return done(null, profile);
  }
//);
//}
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
