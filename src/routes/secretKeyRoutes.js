const express = require("express");
const { generateSecretKey } = require("../controllers/secretKeyControllers");

const router = express.Router();
router.get("/generate-secret-key", generateSecretKey);

module.exports = router;