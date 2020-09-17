const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Cliente = require("./database/Cliente")

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    }) 
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => { 
    Cliente.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(clientes => {
        res.render("index",{
            clientes: clientes
        })
    })

})

app.post("/form",(req, res) => {
    var {nome, email, cpf, telefone, cep, logradouro, numero, bairro, cidade, estado} = req.body

    Cliente.create({
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado
    }).then(() => {
        res.redirect("/")
    }).catch((err) => {
        console.log(err)
    })
})

app.post("/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Cliente.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/");
            }).catch((err) => {
                console.log(err)
            })
        }else{
            res.redirect("/");
        }
    }
})


app.listen(8080, () => {
    console.log("O servidor está rodando!")
})