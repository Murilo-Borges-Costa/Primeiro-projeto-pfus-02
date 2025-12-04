// Importar o modulo de path para saber as pastas e arquivos do projeto
const path = require("path")

// Importa tudo que tem no model
const userModel = require("../models/userModel")

module.exports = {
    // Responde a requisição mostrando a visualização da tela de login.
    formlogin : (req, res) => {
        res.render("login", {titulo: "login"});
    },

    // Função para levar os dados preenchidos para o model realizar o login.
    loginUsuario : (req, res) => {
        // Cria um objeto co as informações do body, retirados dos inputs.
        const { email, senha } = req.body
        // Manda as informações do objeto para o model.
        const logado = userModel.login(email, senha)

        // Se não conseguiu logar, manda uma mensagem de erro.
        if(!logado){
            res.status(401)
            res.render("login", {titulo: "Login errado", erro:"Email ou senha inválidos"})
            //return res.status(401).json({mensagem: "Usuário ou senha inválidos"})
        }
        // Se conseguiu manda uma mensagem de confirmação.
        else{
            res.status(200)
            res.render("index", {titulo: "Bem vindo", usuario: logado.nome})
           // res.json({mensagem: "Login realizado"})
        }
    },

// CRUD
// Responde a requisição mostrando a vizualisação da tela de cadastro.
    formCadastro: (req,res) => {
        res.render("usuarios/cadastroUsuarios", {titulo: "Cadastro"});
    },

    salvarUsuario: (req,res) => {
        const {usuario, email, senha, tipo} = req.body
        usuarioNovo = userModel.salvar({usuario, email, senha, tipo})
        res.render("usuarios/confirmacaoUsuarios", {
            tipo: "cadastro",
            titulo: "Cadastro confirmado",
            usuarioNovo
        })
    },

    // Função para mostrar todos os usuarios.
    listarUsuarios: (req,res) => {
        // Guarda a lista de usuários, que o model mandou depois que buscou do banco
        const usuarios = userModel.listarTodos();
        // Mostra a tela de lista pra pessoa, mandando a váriavel como parametro
        res.render("usuarios/listaUsuarios", {usuarios, titulo: "Lista de usuários"});
       // res.render("usuarios", {usuarios})
    },

    // Função para mostrar apenas um usuário.
    buscarUsuario: (req,res) => {
        // Busca o id vindo de um url como parametro .
        const id = req.params.id
        // Guarda o usuario retornado, depois de busca pelo model.
        const usuario = userModel.buscarPorId(id)
        // Se não achar, avisa que deu um erro.
        if(!usuario){
            return res.status(404).render("usuarios/erroUsuario", {titulo: "Usuário não encontrado"})
        }
        // Se achar, devolve as informações via json
        res.render("usuarios/editarUsuarios", {titulo: "Editar", usuario})
    },
    // Função para atualizar lista de usuários
    atualizarUsuario: (req,res) => {
 // Busca o id vindo de um url como parametro .
    const id = req.params.id
    // Busca por novas informações para atualizar
    const {usuario, email, senha, tipo} = req.body;
    // 
    const usuarioAtualizado = userModel.atualizar(id, {usuario, email, senha, tipo})

    // Se não achar avisa que deu erro.
    if(!usuarioAtualizado){
        return res.status(404).render("usuarios/erroUsuario", {titulo: "Erro", mensagem:"Não foi possivel atualizar"});
    }
    // Se atualizar manda uma mensagem dizendo que deu certo
    res.render("usuarios/confirmacaoUsuarios", {titulo:"Edicão confirmada", tipo:"edicao", usuarioAtualizado})
    },
    // Função para deletar um usuário
    deletarUsuario: (req,res) => {
    // Busca o id vindo da url como parametro
    const id = req.params.id;
// Guarda o usuario deletado em uma variavel
    const deletado = userModel.deletar(id);
// Se não achar avisa que deu erro
    if(!deletado) {
        return res.status(404).render("usuarios/erroUsuario", {titulo: "Erro", mensagem:"Não foi possivel deletar"});
    }
    // Se atualizar, manda uma mensagem dizendo que deu certo.
     res.render("usuarios/confirmacaoUsuarios", {titulo:"Deletado", tipo:"deletar", deletado})
    },
};