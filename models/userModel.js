// Importa a conexão com o banco de dados
const conn = require("../config/conexao_banco.js")

module.exports = {

// Login
// callback = executa uma reposta
login: (email, senha, callback) => {
// Variável SQL que guarda a consulta desejada
const sql = `
    SELECT * FROM usuarios
    WHERE email = ?
    AND senha = ?`
    // Valores que serão utilizados na consulta
        const valores = [email, senha]

// Executar o comando no banco
conn.query(sql, valores, (erro, resultados) => {
// Lidar com o erro
if(erro){
    return callback( erro, null)
}
// Retornar um resultado para o controller
callback(null, resultados[0] || null)
})

},

// Criar = CREATE
salvar: ({ usuario, email, senha, tipo }, callback ) => {
// Variável SQL que guarda a consulta desejada
const sql = `
    INSERT INTO usuarios (usuario, email, senha, tipo)
    VALUES (?, ?, ?, ?)
`

// Valores que serão utilizados na consulta
        const valores = [usuario, email, senha, tipo]

 // Executar o comando no banco
 conn.query(sql, valores, (erro, resultado) => {
if(erro){
    return callback (erro, null)
}
// Objeto com as informações que o usuário inseriu no banco
const novoUsuario = {id: resultado.insertId , usuario, email, senha, tipo}

callback(null, novoUsuario)
 })
},

// Listar = READ
listarTodods: (callback) => {
    // Variável SQL que guarda a consulta desejada
const sql = `SELECT * FROM usuarios`

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
buscarPorId: (id, callback) => {
  // Variável SQL que guarda a consulta desejada
    const sql = `
    SELECT * FROM usuarios
    WHERE id = ?`

    // Variável com informação oculta
    const valor = [id]
    // Executar o comando no banco
    conn.query(sql, valor, (erro, resultados) => {
         if(erro){
        return callback(erro, null)
    }
    callback(null, resultados[0] || null)
    })
},
// Atualizar informações
atualizar: (id, {usuario, email, senha, tipo}, callback) => {
// Variável SQL que guarda a consulta desejada
const sql = `
UPDATE usuarios
SET usuario = ?, email = ?, senha = ?, tipo = ?
WHERE id = ?
`
// Variável com informação oculta
const valores = [usuario, email, senha, tipo, id]

// Criar um objeto, pra retornar pro objeto
const atualizado = {
    usuario: valores[0]
}
// Executar o comando no banco
conn.query(sql, valores, (erro, resultado) => {
 if(erro){
        return callback(erro, null)
    }
    callback(null, atualizado)
})
},
// Excluir = DELETAR
deletar: (id, callback) => {
// Variável SQL que guarda a consulta desejada
const sql = `DELETE FROM usuarios
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