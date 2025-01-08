const crypto = require('crypto');

const generateSecretKeyJWT = () => {
    const secretKey = crypto.randomBytes(32); 
    const encodedSecretKey = secretKey.toString('base64');

    return encodedSecretKey; 
}

module.exports = {
    generateSecretKeyJWT
}