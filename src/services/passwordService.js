const crypto = require('crypto');

const generatePassword = (user)  => {
    const password = crypto.randomBytes(16).toString('hex');
    return {
        nameAplication: user.nameAplication,
        email: user.email,
        password: password
    }
}

const generatePasswordsForUsers = (users) =>  {
    return users.map(user => {
        if (!user.nameAplication || !user.email) {
            throw new Error('Cada usuário deve ter "nameAplication" e "email".')
        }
        return generatePassword(user);
    })
}

module.exports = {
    generatePasswordsForUsers
};