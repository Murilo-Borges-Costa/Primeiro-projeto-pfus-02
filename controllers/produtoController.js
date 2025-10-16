// Importar o modulo de path para saber as pastas e arquivos do projeto
const path = require("path")

// Importa tudo que tem no model
const produtoModel = require("../models/produtoModel")

module.exports = {
    // CRUD
    // Responde a requisição mostrando a vizualisação da tela de cadastro.
        formCadastro: (req,res) => {
           res.render("produtos/cadastroProdutos", {titulo: "Cadastro"})
        },
    
        salvarProduto: (req,res) => {
            const {nome, descricao, preco, quantidade, categoria, url} = req.body
            produtoNovo = produtoModel.salvar({nome, descricao, preco, quantidade, categoria, url})
             res.render("produtos/confirmacaoProdutos", {
            tipo: "cadastro",
            titulo: "Cadastro confirmado",
            produtoNovo
        })
        },
    
        // Função para mostrar todos os usuarios.
        listarProduto: (req,res) => {
            // Guarda a lista de usuários, que o model mandou depois que buscou do banco
            const produto = produtoModel.listarTodos();
            // Mostra a tela de lista pra pessoa, mandando a váriavel como parametro
        res.render("produtos/listaProduto", {produto, titulo: "Lista de produtos"});
           // res.render("usuarios", {usuarios})
        },
    
        // Função para mostrar apenas um usuário.
        buscarProduto: (req,res) => {
            // Busca o id vindo de um url como parametro .
            const id = req.params.id
            // Guarda o usuario retornado, depois de busca pelo model.
            const produto = produtoModel.buscarPorId(id)
            // Se não achar, avisa que deu um erro.
            if(!produto){
                return res.status(404).json({mensagem: "Produto não encontrado."})
            }
            // Se achar, devolve as informações via json
            res.json(produto)
        },
        // Função para atualizar lista de usuários
        atualizarProduto: (req,res) => {
     // Busca o id vindo de um url como parametro .
        const id = req.params.id
        // Busca por novas informações para atualizar
        const {name, descricao, preco, quantidade} = req.body;
        // 
        const produtoAtualizado = produtoModel.atualizar(id, {name, descricao, preco, quantidade})
    
        // Se não achar avisa que deu erro.
        if(!produtoAtualizado){
            return res.status(404).json({mensagem: "Produto não encontrado."});
        }
        // Se atualizar manda uma mensagem dizendo que deu certo
        res.json({mensagem: "Produto atualizado"})
        },
        // Função para deletar um usuário
        deletarProduto: (req,res) => {
        // Busca o id vindo da url como parametro
        const id = req.params.id;
    // Guarda o usuario deletado em uma variavel
        const deletado = produtoModel.deletar(id);
    // Se não achar avisa que deu erro
        if(!deletado) {
            return res.status(404).json({mensagem: "Produto não encontrado."});
        }
        // Se atualizar, manda uma mensagem dizendo que deu certo.
        res.json({mensagem: "Produto foi deletado."});
        },
}