//A variavel express é igual a requirimento.
const express = require('express')

//A variavel app é igual a express.
const app = express()

//const pokemom = express()

//Você escolheu a porta 5000, que é tipo uma sala só sua.
const port = 5000

//Seria o "caminho"
const path = require('path')

//Aqui você está fazendo uma variavel para não ter que ficar colocando o nome da variavel toda vez agilizando o processo.
const caminho = path.join(__dirname, "views")

// Importações
// Importar as rotas de usuario
const userRoutes =  require("./routes/userRoutes")
// Importar as rotas de produtos
const produtoRoutes = require("./routes/produtoRoutes")

// Interpretador de json, para tratar as informações do body.
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Cria uma rota principal para as sub rotas do usuário
app.use("/usuarios", userRoutes)

// Cria uma rota principal para as sub rotas do produto
app.use("/produtos", produtoRoutes)

// Definindo o ejs como templete engine.
app.set('view engine', 'ejs')

// Defindo 'atalho onde busca as views.
app.set("views", path.join(__dirname, "views"))

//Abre a pagina de home do html pet get.
app.get("/home", (req,res) => {
    res.status(200)
    // Render = ele lê o texto, e traduz para que aparessa na tela.
    res.render("index")
})

//Um pokemom que eu escolhi vai aparecer na tela.
//app.get("/pokemom", (req,res) => {
  //  res.status(200).send("Pikachu.")
//})

//Abre a parte de erro caso algo dê errado usando o use
app.use((req,res) => {
   res.status(404)
   res.render("404")
})

//Você esta fazendo um requirimento e uma resposta.
app.get("/", (req,res) => {
    res.status(200).send("Olá, parabéns por consegui.")
})

//Esse é o servidor funcionando.
app.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`)
})