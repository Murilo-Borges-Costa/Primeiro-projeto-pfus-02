//  Importação do model express Estou pegando o Express que baixei e pegando ele.
const express = require("express")

// Router = configurando os indereços quenos queremos.
// Criando uma variavel ara gerenciar as rotas de usuario.
const roteador = express.Router()

// Importando tudo que tem no arquivo de controller do usuário
const userController = require ("../controllers/userControllers")

// Login
// Rota para solicitar a página de login
roteador.get("/login", userController.formlogin)
// Rota para enviar dados na página de login
roteador.post("/login", userController.loginUsuario)

// Criando a exportação desse arquivo
module.exports = roteador