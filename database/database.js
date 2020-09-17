const Sequelize = require('sequelize')

const connection = new Sequelize('cadastrocliente','root', '19970603',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection