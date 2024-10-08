const passport = require("passport");

// Home route (landing page)
exports.home = (req, res) => {
  res.send(
    '<a href="/auth/google">Authenticate with Google</a> | <a href="/auth/facebook">Authenticate with Facebook</a> | <a href="/auth/youtube">Authenticate with Youtube</a> | <a href="/auth/pinterest">Authenticate with Pinterest</a>'
  );
};

// Google OAuth routes
exports.googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

exports.googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "/",
});

exports.googleCallbackSuccess = (req, res) => {
  // Redirect to dashboard after successful authentication
  res.redirect("/dashboard");
};

// Facebook OAuth routes
exports.facebookAuth = passport.authenticate("facebook", { scope: ["email"] });

exports.facebookAuthCallback = passport.authenticate("facebook", {
  failureRedirect: "/",
});

exports.facebookCallbackSuccess = (req, res) => {
  res.redirect("/dashboard");
};

//Youtube oAuth Routes
exports.youtubeAuth = passport.authenticate("google", {
  scope: [
    "profile",
    "email",
    "https://www.googleapis.com/auth/youtube.readonly",
  ],
});

exports.youtubeAuthcallback = passport.authenticate("google", {
  failureRedirect: "/",
});

exports.youtubeCallbackSuccess = (req, res) => {
  const accessToken = req.user.accessToken;

  // Redirect to dashboard after successful authentication
  res.redirect("/dashboard");
};

//pinterest oAuth Routes

exports.pinterestAuth = passport.authenticate("pinterest", {
  
});

exports.pinterestAuthCallback = passport.authenticate("pinterest", {
  failureRedirect: "/",
});

exports.pinterestCallbackSuccess = (req, res) => {
  res.redirect('/dashboard');
};

// Protected dashboard route
exports.dashboard = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.send(`Hello ${req.user.profile.displayName}! Welcome to your dashboard.`);
};

// Logout route
exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
};
