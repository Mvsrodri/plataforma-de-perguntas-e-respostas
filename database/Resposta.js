const Sequelize = require("sequelize");
const connection = require("./database");

var dotenv = require('dotenv');
dotenv.config();

const Resposta = connection.define(process.env.NAME_TABLE_RESPONSE,{
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: false}).then(()=>{});

module.exports = Resposta;