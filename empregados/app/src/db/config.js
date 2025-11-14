require('dotenv').config();
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  options: {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
};