// Importar o modulo de path para saber as pastas e arquivos do projeto
const path = require("path")

// Importa tudo que tem no model
const produtoModel = require("../models/produtoModel")
module.exports = {
//   CRUD
// Criar
formCadastro: (req, res) => {
// Renderizar a pagina de cadastro
res.render("produtos/cadastroProdutos", {titulo: "Cadastro"})
},
salvarProduto: (req, res) => {
// Criar um objeto com as informações da view
const {nome, descricao, preco, quantidade, categoria, url} = req.body

// Manda as informações pro model
produtoModel.salvar({nome, descricao, preco, quantidade, categoria, url}, (erro, produtoNovo) => {
// Se deu erro, redenriza a página de erro, mostrando a mensagem de erro
    if(erro){
        return res.status(500).render("produtos/erroProdutos",{
            titulo:"Erro",
            mensagem: "Erro ao salvar o produto"
        }
    )
}
    // Se deu certo, renderiza a página de confirmação
    res.render("produtos/confirmacaoProdutos", {
        titulo:"Cadastro confirmado",
        tipo: "cadastro",
        produtoNovo
    })
})
},

// Read
listarProduto: (req, res) => {
// Acessar o model, e resgatar as informações
produtoModel.listarTodods( (erro, produto) => {
    // Se deu erro, redenriza a página de erro, mostrando a mensagem de erro
    if(erro){
        return res.status(500).render("produtos/erroProdutos",{
            titulo:"Erro",
            mensagem: "Erro ao listar o produto"
        }
    )
}
//  Se der certo, renderizar a página de lista de produtos
res.render("produtos/listaProduto", {
    titulo: "Lista de produto",
    produto
})
})
},

// Update
buscarProduto: () => {

},
atualizarProduto: () => {

},

// Deletar
deletarProduto: () => {
    
}
}