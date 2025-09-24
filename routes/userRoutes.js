//  Importação do model express Estou pegando o Express que baixei e pegando ele.
const express = require("express")

// Router = configurando os indereços que nos queremos.
// Criando uma variavel para gerenciar as rotas de usuario.
const roteador = express.Router()

// Importando tudo que tem no arquivo de controller do usuário
const userController = require ("../controllers/userControllers")

// Login
// Rota para solicitar a página de login
roteador.get("/login", userController.formlogin)
// Rota para enviar dados na página de login
roteador.post("/login", userController.loginUsuario)

// CRUD.
// C= Criar novo usúario
// Rota para solicitar a página de cadastro
roteador.get("/cadastrar", userController.formCadastro)
// Rota para enviar dados de cadastro
roteador.post("/cadastrar", userController.salvarUsuario)

// R= Ler usuário
// Retorna as informações de todos os usuarios
roteador.get("/", userController.listarUsuarios)
// Retorna as informações de um usuario apenas
roteador.get("/:id", userController.buscarUsuario)

// U= Atualizar um usuario
roteador.put("/:id", userController.atualizarUsuario)

// D= Deletar um usuario
roteador.delete("/:id", userController.deletarUsuario)

// Criando a exportação desse arquivo
module.exports = roteador