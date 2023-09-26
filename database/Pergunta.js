const Sequelize = require("sequelize");
const connection = require("./database");

var dotenv = require('dotenv');
dotenv.config();

const Pergunta = connection.define(process.env.NAME_TABLE_QUESTION,{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(()=>{});

module.exports = Pergunta;