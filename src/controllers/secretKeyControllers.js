const { generateSecretKey } = require("../services/secretkeyService");

const generateSecretKey = (req, res) => {
  try {
    const secretKey = generateSecretKey();
    res.status(200).json(`Chave secreta gerada com sucesso: ${secretKey}`);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  generateSecretKey,
};
