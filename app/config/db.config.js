/**
 *  First five parameters are for MySQL connection.
 *  pool is optional, it will be used for Sequelize connection pool configuration:
 *   - max: maximum number of connection in pool
 *   - min: minimum number of connection in pool
 *   - idle: maximum time, in milliseconds, that a connection can be idle before being released
 *   - acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
 *  For more details, please visit API Reference for the Sequelize connection pool.
 *  https://sequelize.org/docs/v6/other-topics/connection-pool/
 */

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "crud",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
};