const passport = require('passport');

// Home route (landing page)
exports.home = (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>  |  <a href="/auth/facebook">Authenticate with Facebook</a>  | <a href="/auth/twitter">Authenticate with Twitter</a>  | <a href="/auth/instagram">Authenticate with Instagram</a>');
};

// Google OAuth routes
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });
exports.googleCallbackSuccess = (req, res) => {
  res.redirect('/dashboard');
};

// Facebook OAuth routes
// exports.facebookAuth = passport.authenticate('facebook', { scope: ['email'] });
// exports.facebookAuthCallback = passport.authenticate('facebook', { failureRedirect: '/' });
// exports.facebookCallbackSuccess = (req, res) => {
//   res.redirect('/dashboard');
// };

//Twitter OAuth Routes
exports.twitterAuth = passport.authenticate('twitter');
exports.twitterAuthCallback = passport.authenticate('twitter', { failureRedirect: '/' });
exports.twitterCallbackSuccess = (req, res) => {
  res.redirect('/dashboard');
};

//Instagram OAuth Routes
exports.instagramAuth = passport.authenticate('instagram');
exports.instagramAuthCallback = passport.authenticate('instagram', { failureRedirect: '/' });
exports.instagramCallbackSuccess = (req, res) => {
  res.redirect('/dashboard');
};



// Protected dashboard
exports.dashboard = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`Hello ${req.user.displayName}! Welcome to your dashboard.`);
};

// Logout
exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
};
