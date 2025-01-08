const { generatePasswordsForUsers } = require("../services/passwordService");

const generatePasswords = (req, res) => {
  try {
    const { users } = req.body;

    if (!users || !Array.isArray(users)) {
      return res
        .status(400)
        .json({
          message: 'O campo "users" é obrigatório e deve ser um array.',
        });
    }

    const usersWithPasswords = generatePasswordsForUsers(users);
    res.status(200).json(usersWithPasswords);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  generatePasswords,
};
