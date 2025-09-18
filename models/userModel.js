// Importar o json para servir como banco de dados.
const db = require("../data/db.json")

// Variável para armazenar os usuários vindos de db
let listaUsuarios = db.usuarios

module.exports = {
// Login
// Função para válidar o login
    login : (usuario, senha) => {
        // Busca na lista de usuários, se tem aquele usuário com as informações que ele me passou.
        // Find = faz uma busca
        let logado = listaUsuarios.find( (user) => {user.email === usuario && user.senha === senha}) ||null

        return logado
    }
}