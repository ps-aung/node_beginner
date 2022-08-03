const express = require("express");
const router = express.Router();
const authControlelr = require("../controllers/authController");

router.post("/", authControlelr.handleLogin);

module.exports = router;
