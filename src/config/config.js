const dotenv = require("dotenv");

const config = () => {
  dotenv.config();
  return {
    host: process.env.APP_HOST || "localhost",
    port: process.env.APP_PORT || "8181",
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: process.env.DB_PORT || "5432",
    dbUser: process.env.DB_USER || "postgres",
    dbPassword: process.env.DB_PASSWORD || "1234",
    dbName: process.env.DB_NAME || "db_enigmart",
    dbDriver: process.env.DB_DRIVER || "postgresql",
  };
};

module.exports = config;
