require('dotenv').config();

const requiredEnvVars = ['PORT']; 
if (requiredEnvVars.some(envVar => !process.env[envVar])) {
  throw new Error('Missing required environment variables');
}

const getEnv = (envVar) => process.env[envVar];

module.exports = {
    getEnv  
}