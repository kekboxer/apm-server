const config = require("config");
const { Sequelize, DataTypes } = require("sequelize");

const dbConfig = config.get("db");

const sequelize = new Sequelize(
  dbConfig.db_name,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: "postgres",
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User.model")(sequelize, DataTypes);

module.exports = db;
