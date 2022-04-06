/*Importação do sequelize*/
const Sequelize = require('sequelize');

/*Criação da conexão com o banco de dados*/

const connection = new Sequelize(
    'hospital_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;