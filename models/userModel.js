// Importar o json para servir como banco de dados.
const { listarUsuario } = require("../controllers/userControllers")
const db = require("../data/db.json")

// Variável para armazenar os usuários vindos de db
let listaUsuarios = db.usuarios

module.exports = {
// Login
// Função para válidar o login
    login : (usuario, senha) => {
        // Busca na lista de usuários, se tem aquele usuário com as informações que ele me passou.
        // Find = faz uma busca
        let logado = listaUsuarios.find( (user) => user.email === usuario && user.senha === senha) ||null

        return logado
    },

// CRUD
// Fumção para cadastrar um novo usuario
    salvar : ({usuario, email, senha}) => {
        const novoUsuario = {
            id: listaUsuarios.length + 1,
            usuario,
            email,
            senha
        }
        listaUsuarios.push(novoUsuario)
        console.log("Novo usuário salvo: ", novoUsuario);
        return novoUsuario
    },
// Buscar todos os usuarios do banco
    listarTodos: () => {
        return listaUsuarios
    },
// Buscar um usuario especifico do banco
    buscarPorId: (id) => {
        return listaUsuarios.find((user) => user.id == id || null)
    },

    atualizar: (id, {usuario, email, senha}) => {
        // Busca na lista de usuarios, um usuario com aquele id especifico, se achar, pega o index dele e guarda na variavel index
        const index = listaUsuarios.findIndex((user) => user.id == id)

        // Se não achar, significa que um usuario com aquele index não existe
        if(index === -1) return null;
        listaUsuarios[index] = {
            ...listaUsuarios[index],
            listaUsuarios: usuario || listaUsuarios[index].usuario,
            listaUsuarios: email || listaUsuarios[index].usuario,
            listaUsuarios: senha || listaUsuarios[index].usuario,
        };
        // Retornar o usuario atualizado
        return listaUsuarios[index]
    },

    deletar: (id) => {
const index = listaUsuarios.findIndex((user) => user.id == id)

        if(index === -1) return false;
        listaUsuarios.slice(index, 1);
        return true
    },
}