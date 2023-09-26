const Sequelize = require("sequelize");

var dotenv = require('dotenv');
dotenv.config();

const connection = new Sequelize(process.env.NAME_DB,process.env.USER_DB,process.env.PASS_DB,{
    host:process.env.HOST_DB,
    dialect: 'mysql'
});

module.exports = connection;