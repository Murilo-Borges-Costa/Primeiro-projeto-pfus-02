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
        res.render("Cadastro")
    },

    salvarUsuario: (req,res) => {
        const {usuario, email, senha} = req.body
        userModel.salvar({usuario, email, senha})
        res.render("cadastroConfirmado")
    },

    // Função para mostrar todos os usuarios.
    listarUsuarios: (req,res) => {
        const usuarios = userModel.listarTodos();
        res.json(usuarios);
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
            return res.status(404).json({mensagem: "Usuário não encontrado."})
        }
        // Se achar, devolve as informações via json
        res.json(usuario)
    },
    // Função para atualizar lista de usuários
    atualizarUsuario: (req,res) => {
 // Busca o id vindo de um url como parametro .
    const id = req.params.id
    // Busca por novas informações para atualizar
    const {usuario, email, senha} = req.body;
    // 
    const usuarioAtualizado = userModel.atualizar(id, {usuario, email, senha})

    // Se não achar avisa que deu erro.
    if(!usuarioAtualizado){
        return res.status(404).json({mensage: "Usuario não encontrado."});
    }
    // Se atualizar manda uma mensagem dizendo que deu certo
    res.json({mensage: "Usuario atualizado"})
    },
    // Função para deletar um usuário
    deletarUsuario: (req,res) => {
    // Busca o id vindo da url como parametro
    const id = req.params.id;
// Guarda o usuario deletado em uma variavel
    const deletado = userModel.deletar(id);
// Se não achar avisa que deu erro
    if(!deletado) {
        return res.status(404).json({mensagem: "Usuario não encontrado."});
    }
    // Se atualizar, manda uma mensagem dizendo que deu certo.
    res.json({mensagem: "Usuario foi deletado."});
    },
};