// config/passport.js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const PinterestStrategy = require("passport-pinterest").Strategy;
require("dotenv").config();

// Passport strategy for Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: ['read_public', 'write_public'],
      callbackURL: process.env.GOOGLE_CALLBACK_URL, // Use the callback URL for Google

    },
    (accessToken, refreshToken, profile, done) => {
      // Pass the accessToken to access YouTube API
      return done(null, { profile, accessToken });
    }
  )
);

// Facebook OAuth strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile); // Handle Facebook user profile logic
    }
  )
);

//pinterest oAuth strategy
passport.use(
  new PinterestStrategy(
    {
      clientID: process.env.PINTEREST_CLIENT_ID,
      clientSecret: process.env.PINTEREST_CLIENT_SECRET,
      callbackURL: process.env.PINTEREST_CALLBACK_URL,
      state: true,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate({ pinterestId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

//Twitter OAuth strategy
passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CLIENT_ID,
      consumerSecret: process.env.TWITTER_CLIENT_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK_URL,
    },
    function (token, tokenSecret, profile, cb) {
      //User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      return cb(null, profile);
    }
  
  )
);

//Instagram OAuth strategy
passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      callbackURL: process.env.INSTAGRAM_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      //User.findOrCreate({ instagramId: profile.id }, function (err, user) {
      return done(null, profile);
    }
    //);
    //}
  )
);

// Serialize user (save user info in session)
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user (retrieve user info from session)
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
