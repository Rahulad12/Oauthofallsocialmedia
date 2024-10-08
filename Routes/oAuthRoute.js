const express = require("express");
const router = express.Router();
const passport = require("passport");

const authController = require("../Controllers/oauthControllers");

// Google OAuth routes
router.get("/", authController.home);
router.get("/auth/google", authController.googleAuth);
router.get(
  "/auth/google/callback",
  authController.googleAuthCallback,
  authController.googleCallbackSuccess
);

// Facebook OAuth routes
router.get("/auth/facebook", authController.facebookAuth);
router.get(
  "/auth/facebook/callback",
  authController.facebookAuthCallback,
  authController.facebookCallbackSuccess
);

// Youtube OAuth routes
router.get("/auth/youtube", authController.youtubeAuth);
router.get(
  "/auth/youtube/callback",
  authController.youtubeAuthcallback,
  authController.youtubeCallbackSuccess
);

//pinterst routes
router.get('/auth/pinterest',
  authController.pinterestAuth
);
router.get('/auth/pinterest/callback',
  authController.pinterestAuthCallback,
  authController.pinterestCallbackSuccess
)
// Protected dashboard
router.get("/dashboard", authController.dashboard);

// Logout route
router.get("/logout", authController.logout);

module.exports = router;
