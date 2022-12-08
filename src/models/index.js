const { Sequelize } = require('sequelize');
const env = process.env;

const sequelize = new Sequelize(env.MYSQLDATABASE, env.MYSQULUSER, env.MYSQLPASSWORD, {
  host: env.MYSQLHOST,
  dialect: env.DEV_DB_DIALECT,
  operatorAliases: false,

  pool: {
    max: 3,
    min: 0,
    acquire: env.DB_ACQUIRE_POOL,
    idle: env.DB_IDLE_POOL
  },
  dialectOptions: { decimalNumbers: true }
});

const transaction = require('./transaction.model')(sequelize, Sequelize);

module.exports = {
    Sequelize,
    sequelize,
    transaction
}