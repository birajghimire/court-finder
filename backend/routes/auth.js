const { SignUp } = require("../controllers/authcontroller");
const express = require('express');
const router = express.Router();

router.post("/signup", SignUp);

module.exports = router;