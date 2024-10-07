const express = require("express");
const router = express.Router();

const {
  home,
  googleAuth,
  googleAuthCallback,
  googleCallbackSuccess,
  dashboard,
  logout,
} = require("../Controllers/oauthGoogleControllers");

//route
router.route("/").get(home);
router.route("/auth/google").get(googleAuth);
router.route("/auth/google/callback").get(googleAuthCallback, googleCallbackSuccess);
router.route("/dashboard").get(dashboard);
router.route("/logout").get(logout);

module.exports = router;

