//  Importação do model express Estou pegando o Express que baixei e pegando ele.
const express = require("express")

// Router = configurando os indereços que nos queremos.
// Criando uma variavel para gerenciar as rotas de usuario.
const roteador = express.Router()

// Importando tudo que tem no arquivo de controller do usuário
const produtoController = require ("../controllers/produtoController")

// CRUD.
// C= Criar novo usúario
// Rota para solicitar a página de cadastro
roteador.get("/cadastrar", produtoController.formCadastro)
// Rota para enviar dados de cadastro
roteador.post("/cadastrar", produtoController.salvarProduto)

// R= Ler usuário
// Retorna as informações de todos os produtos
roteador.get("/", produtoController.listarProduto)
// Retorna as informações de um produtos apenas
roteador.get("/:id", produtoController.buscarProduto)

// U= Atualizar um produtos
roteador.put("/:id", produtoController.atualizarProduto)

// Salvar
roteador.post("/", produtoController.salvarProduto)

// D= Deletar um produtos
roteador.delete("/:id", produtoController.deletarProduto)

// Criando a exportação desse arquivo
module.exports = roteador