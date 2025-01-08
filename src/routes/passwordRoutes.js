const express = require("express");
const { generatePasswords } = require("../controllers/passwordController");

const router = express.Router();

router.post("/generate-passwords", generatePasswords);

module.exports = router;
