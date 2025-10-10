// Importar o json para servir como banco de dados.
const db = require("../data/db.json")

// Variável para armazenar os usuários vindos de db
let listaProduto = db.produtos

module.exports = {
    // CRUD
// Fumção para cadastrar um novo produto
    salvar : ({nome, descricao, preco, quantidade, categoria, url}) => {
        const novoProduto = {
            id: listaProduto.length + 1,
            nome,
            descricao,
            preco,
            quantidade,
            categoria, 
            url
        }
        listaProduto.push(novoProduto)
        console.log("Novo usuário salvo: ", novoProduto);
        return novoProduto
    },
// Buscar todos os usuarios do banco
    listarTodos: () => {
        return listaProduto
    },
// Buscar um usuario especifico do banco
    buscarPorId: (id) => {
        return listaProduto.find((prod) => prod.id == id || null)
    },

    atualizar: (id, {nome, descricao, preco, quantidade, categoria, url}) => {
        // Busca na lista de usuarios, um usuario com aquele id especifico, se achar, pega o index dele e guarda na variavel index
        const index = listaProduto.findIndex((prod) => prod.id == id)

        // Se não achar, significa que um usuario com aquele index não existe
        if(index === -1) return null;
        listaProduto[index] = {
            ...listaProduto[index],
            listaProduto: nome || listaProduto[index].nome,
            listaProduto: descricao || listaProduto[index].descricao,
            listaProduto: preco || listaProduto[index].preco,
            listaProduto: quantidade || listaProduto[index].quantidade,
            listaProduto: categoria || listaProduto[index].categoria,
            listaProduto: url || listaProduto[index].url,
        };
        // Retornar o usuario atualizado
        return listaProduto[index]
    },


    deletar: (id) => {
const index = listaProduto.findIndex((prod) => prod.id == id)

        if(index === -1) return false;
        listaProduto.slice(index, 1);
        return true
},
}