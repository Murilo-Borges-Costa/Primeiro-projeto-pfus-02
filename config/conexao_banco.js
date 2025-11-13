const mysql = require("mysql2")

// Criar uma variável para conexão com o banco de dados
const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "supermercado",
    user: "root",
    password: "usbw"
})

// Conecta ao banco de dados, ou tenta pelomenos
conn.connect( (erro) => {
if(erro){
    console.log(erro)
}
else{
    console.log("Conectado com sucesso");
}
})

module.exports = conn;