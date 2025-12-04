// Importa a conexão com o banco de dados
const conn = require("../config/conexao_banco.js")

module.exports = {

// Criar = CREATE
salvar: ({ nome, descricao, preco, quantidade, categoria, url }, callback ) => {
// Variável SQL que guarda a consulta desejada
const sql = `
    INSERT INTO produtos (nome, descricao, preco, quantidade, categoria, url)
    VALUES (?, ?, ?, ?, ?, ?)'
`

// Valores que serão utilizados na consulta
        const valores = [nome, descricao, preco, quantidade, categoria, url]

 // Executar o comando no banco
 conn.query(sql, valores, (erro, resultado) => {
if(erro){
    return callback (erro, null)
}
// Objeto com as informações que o usuário inseriu no banco
const novoProduto = {id: resultado.insertId , nome, descricao, preco, quantidade, categoria, url}

callback(null, novoProduto)
 })
},

// Listar = READ
listarTodods: (callback) => {
    // Variável SQL que guarda a consulta desejada
const sql = `SELECT * FROM produtos`

    // Executar o comando no banco
conn.query(sql, (erro, resultados) => {
    if(erro){
        return callback(erro, null)
    }
    callback(null, resultados)
})

},

// Atualizar = UPTADE
// Buscar o usário
buscarPorId: () => {

},
// Atualizar informações
atualizar: () => {

},
// Excluir = DELETAR
deletar: (id, callback) => {
// Variável SQL que guarda a consulta desejada
const sql = `DELETE FROM produtos
            WHERE id = ?`

// Variavel com  informação oculta
const valor = [id]

// Executar o comando no banco
conn.query(sql, valor, (erro, resultado) => {
 if(erro){
        return callback(erro, null)
    }
    callback(null, resultado.affectedRows > 0)
})
}
}