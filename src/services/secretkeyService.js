const crypto = require('crypto');

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32); 
    const encodedSecretKey = secretKey.toString('base64');

    return encodedSecretKey; 
}

module.exports = {
    generateSecretKey
}