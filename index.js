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

//Abre a pagina de home do html pet get
app.get("/home", (req,res) => {
    res.status(200)
    res.sendFile(`${caminho}/index.html`)
})


//Um pokemom que eu escolhi vai aparecer na tela.
app.get("/pokemom", (req,res) => {
    res.status(200).send("Pikachu.")
})

//Abre a parte de erro caso algo dê errado usando o use
app.use((req,res) => {
   res.status(404)
   res.sendFile(`${caminho}/404.html`)
})


//Você esta fazendo um requirimento e uma resposta.
app.get("/", (req,res) => {
    res.status(200).send("Olá, parabéns por consegui.")
})

//Esse é o servidor funcionando.
app.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`)
})