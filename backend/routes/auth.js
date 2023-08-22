const { SignUp, Login } = require("../controllers/authcontroller");
const { userVerify } = require("../middleware/auth");
const express = require('express');
const router = express.Router();

router.post('/', userVerify)
router.post("/signup", SignUp);
router.post("/login", Login);

module.exports = router;