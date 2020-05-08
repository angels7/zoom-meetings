var Sequelize = require('sequelize');

module.exports = new Sequelize('demo_schema', 'root', 'password', {
    dialect: 'sqlite',
    storage: 'data.db'
});