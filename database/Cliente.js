const Sequelize = require("sequelize")
const connection = require("./database")

const Cliente = connection.define('clientes',{ 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,  
    },
    email:{
        type: Sequelize.STRING,
    },  
    cpf:{
        type: Sequelize.STRING,
    },  
    telefone:{
        type: Sequelize.STRING,
    },  
    cep:{
        type: Sequelize.STRING,
    },  
    logradouro:{
        type: Sequelize.STRING,
    },  
    numero:{
        type: Sequelize.INTEGER,
    },  
    bairro:{
        type: Sequelize.STRING,
    },  
    cidade:{
        type: Sequelize.STRING,
    },  
    estado:{
        type: Sequelize.STRING,
    },  

})

//Cliente.sync({force: true})

module.exports = Cliente
