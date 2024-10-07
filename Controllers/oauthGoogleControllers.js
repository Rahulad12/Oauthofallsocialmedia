const passport = require("passport");

const home = async (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
};

const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "/",
});

const googleCallbackSuccess = (req, res) => {
  res.redirect("/dashboard");
};

const dashboard = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.send(`Hello ${req.user.displayName}! Welcome to your dashboard.`);
};

const logout = (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
};

module.exports = {
  home,
  googleAuth,
  googleAuthCallback,
  googleCallbackSuccess,
  dashboard,
  logout,
};
