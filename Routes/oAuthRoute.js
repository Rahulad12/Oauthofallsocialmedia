const express = require("express");
const router = express.Router();

const authController = require("../Controllers/oauthControllers");

//route
router.get("/", authController.home);

// Google OAuth routes
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
router.get("/auth/pinterest", authController.pinterestAuth);
router.get(
  "/auth/pinterest/callback",
  authController.pinterestAuthCallback,
  authController.pinterestCallbackSuccess
);

//Twitter OAuth routes
router.get("/auth/twitter", authController.twitterAuth);
router.get(
  "/auth/twitter/callback",
  authController.twitterAuthCallback,
  authController.twitterCallbackSuccess
);

//Instagram OAuth routes
router.get("/auth/instagram", authController.instagramAuth);
router.get(
  "/auth/instagram/callback",
  authController.instagramAuthCallback,
  authController.instagramCallbackSuccess
);

//linkedin route
router.get("/auth/linkedin",authController.linkedinAuth);
router.get('/auth/linkedin/callback',
  authController.linkedinAuthCallback,
  authController.linkedinAuthCallbackSuccess 
);

// Protected dashboard
router.get("/dashboard", authController.dashboard);

// Logout route
router.get("/logout", authController.logout);

module.exports = router;
