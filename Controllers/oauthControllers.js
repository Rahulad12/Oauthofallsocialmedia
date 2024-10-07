const passport = require('passport');

// Home route (landing page)
exports.home = (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a> | <a href="/auth/facebook">Authenticate with Facebook</a>');
};

// Google OAuth routes
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });
exports.googleCallbackSuccess = (req, res) => {
  res.redirect('/dashboard');
};

// Facebook OAuth routes
exports.facebookAuth = passport.authenticate('facebook', { scope: ['email'] });
exports.facebookAuthCallback = passport.authenticate('facebook', { failureRedirect: '/' });
exports.facebookCallbackSuccess = (req, res) => {
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
