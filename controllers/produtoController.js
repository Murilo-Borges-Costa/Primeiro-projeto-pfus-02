// Importar o modulo de path para saber as pastas e arquivos do projeto
const path = require("path")

// Importa tudo que tem no model
const produtoModel = require("../models/produtoModel")
module.exports = {
    //   CRUD
    // Criar
    formCadastro: (req, res) => {
        // Renderizar a pagina de cadastro
        res.render("produtos/cadastroProdutos", { titulo: "Cadastro" })
    },
    salvarProduto: (req, res) => {
        // Criar um objeto com as informações da view
        const { nome, descricao, preco, quantidade, categoria, url } = req.body

        // Manda as informações pro model
        produtoModel.salvar({ nome, descricao, preco, quantidade, categoria, url }, (erro, produtoNovo) => {
            // Se deu erro, redenriza a página de erro, mostrando a mensagem de erro
            if (erro) {
                return res.status(500).render("produtos/erroProdutos", {
                    titulo: "Erro",
                    mensagem: "Erro ao salvar o produto"
                }
                )
            }
            // Se deu certo, renderiza a página de confirmação
            res.render("produtos/confirmacaoProdutos", {
                titulo: "Cadastro confirmado",
                tipo: "cadastro",
                produtoNovo
            })
        })
    },

    // Read
    listarProduto: (req, res) => {
        // Acessar o model, e resgatar as informações
        produtoModel.listarTodods((erro, produto) => {
            // Se deu erro, redenriza a página de erro, mostrando a mensagem de erro
            if (erro) {
                return res.status(500).render("produtos/erroProdutos", {
                    titulo: "Erro",
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
    buscarProduto: (req, res) => {
        // Busca o id vindo como parametro da url
        const id = req.params.id

        // Acessaro model para realizar a busca
        produtoModel.buscarPorId(id, (erro, produto) => {
            // Se deu erro na busca, informa o erro
            // Ou se não achou o produto
            if (erro || !produto) {
                return res.status(500).render("produtos/erroProdutos", {
                    titulo: "Erro",
                    mensagem: "Erro ao buscar o produto"
                })
            }
            // Se encontrou, renderiza a página de edição
            res.render("produtos/editarProduto", { titulo: "Edição", produto })
        })
    },
    atualizarProduto: (req, res) => {
        // Busca o id vindo como parametro da url
        const id = req.params.id

        // Criar um objeto com as informações da view
        const { nome, descricao, preco, quantidade, categoria, url } = req.body

        // Acessar o model, e atualizar o produto
        produtoModel.atualizar(id, { nome, descricao, preco, quantidade, categoria, url }, (erro, atualizado) => {
            // Se deu erro na atualização, informa o erro
            // Ou se não achou o produto
            if (erro) {
                console.log(erro);
                return res.status(500).render("produtos/erroProdutos", {

                    titulo: "Erro",
                    mensagem: "Erro ao aualizar o produto"
                })
            }
            const produtoAtualizado = atualizado
            res.render("produtos/confirmacaoProdutos", {
                tipo: "edicao",
                titulo: "Edição confirmada",
                produtoAtualizado
            })
        })
    },

    // Deletar
    deletarProduto: (req, res) => {
        // Busca o id vindo como parametro da url
        const id = req.params.id
        // Acessar o model e solicitar a exclusão do produto
        produtoModel.deletar(id, (erro, sucesso) => {
            // Se deu erro ao deletar, informa o erro
            // Ou se não conseguil
            if (erro || !sucesso) {
                return res.status(500).render("produtos/erroProdutos", {
                    titulo: "Erro",
                    mensagem: "Erro ao deletar o produto"
                })
            }
            const deletado = { produtos: "selecionado" }
            // Renderizar a tela de sucesso
            res.render("produtos/confirmacaoProdutos", {
                tipo: "excluir",
                titulo: "produto deletado",
                deletado
            })
        })
    }
}