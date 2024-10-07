const express = require("express");
const router = express.Router();

const authController = require('../Controllers/oauthControllers');

//route
// Google OAuth routes
router.get('/', authController.home);
router.get('/auth/google', authController.googleAuth);
router.get('/auth/google/callback', authController.googleAuthCallback, authController.googleCallbackSuccess);

// Facebook OAuth routes
router.get('/auth/facebook', authController.facebookAuth);
router.get('/auth/facebook/callback', authController.facebookAuthCallback, authController.facebookCallbackSuccess);

// Protected dashboard
router.get('/dashboard', authController.dashboard);


// Logout route
router.get('/logout', authController.logout);

module.exports = router;

