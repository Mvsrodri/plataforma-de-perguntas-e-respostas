const Sequelize = require("sequelize");

const connection = new Sequelize('perguntas','root','your_password',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;