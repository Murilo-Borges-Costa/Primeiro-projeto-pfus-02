#Criar banco de dados
CREATE DATABASE supermercado;

#Usar banco de dados
USE supermercado;


#Criar tabela
CREATE TABLE usuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
usuario VARCHAR(255),
email VARCHAR(255),
senha VARCHAR(255),
tipo VARCHAR(255)
);

CREATE TABLE produtos(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255),
descricao VARCHAR(255),
preco DECIMAL(6,2),
quantidade INT,
tipo VARCHAR(255),
url VARCHAR(255)
);

#vizualizar
SELECT * FROM usuarios;

SELECT * FROM produtos;



#Criar/inserir dados
INSERT INTO usuarios(id, usuario, email, senha, tipo)
	VALUES(DEFAULT, "Murilo", "murilo001@gmail.com", "4", "Administrador");
    
INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
	VALUES(DEFAULT, "X-Tudão", "Muito bom.", 44.5, 25, "Alimento", NULL);

#Atualizar
UPDATE usuarios
SET usuario = "Murilo", senha = "topzeira"
WHERE id = 1;

UPDATE produtos
SET nome = "X-bob", url = "https://img.freepik.com/photos-premium/delicieux-burger-bacon-boeuf-frites-planche-bois-libre_781284-8491.jpg"
WHERE id = 1;

#Vai ficar faltando o delete
#Criar 5 usuarios
INSERT INTO usuarios(id, usuario, email, senha, tipo)
	VALUES(DEFAULT, "Muriloooo", "muriloooo1@gmail.com", "4", "Gerente"),
    (DEFAULT, "AAAAAAAA", "aaaaa001@gmail.com", "452", "Funcionario"),
    (DEFAULT, "BEM", "nem001@gmail.com", "894", "Funcionario"),
    (DEFAULT, "Alí", "ali001@gmail.com", "304", "Funcionario"),
    (DEFAULT, "Rau", "rau001@gmail.com", "401", "Gerente");

#Criar 15 produtos
INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
	VALUES(DEFAULT, "X-Tudão", "Muito bom realmente.", 44.5, 25, "Alimento", "https://tse4.mm.bing.net/th/id/OIP.upoADxQKdoafZSKlVqX8dwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-Tudinho", "Muito bom.", 44.5, 55, "Alimento", "https://tse2.mm.bing.net/th/id/OIP.Tw_kv4v1lR4X0IT5q_ogPwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-Tudinhooooo", "Muito bom realmente.", 50.6, 55, "Alimento", "https://tse1.mm.bing.net/th/id/OIP.saygXBBlDznAD_N5vl7HdgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-bombom", "Muito bom mesmo.", 50.6, 25, "Alimento", "https://tse2.mm.bing.net/th/id/OIP.6klegFJWgJMPyw1UNBNz0QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
   VALUES(DEFAULT, "X-Hamburger", "Muito bom realmente.", 50.6, 36, "Bebida", "https://vocegastro.com.br/app/uploads/2021/11/x-bacon.jpg");

   INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-fominha", "Muito bom.", 10.5, 36, "Bebida", "https://tse3.mm.bing.net/th/id/OIP.i9a3PQBA_pH6Cx8YH-YfYgHaFj?w=733&h=549&rs=1&pid=ImgDetMain&o=7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-batata", "Muito bom mesmo.", 44.5, 25, "Bebida", "https://tse1.mm.bing.net/th/id/OIP.6cH5pP2x28rgnaILTf-UWwHaEU?rs=1&pid=ImgDetMain&o=7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-cheio", "Muito bom.", 10.5, 55, "Bebida", "https://tse1.mm.bing.net/th/id/OIP.xC3BIFFpINLbtcYyN9ULGQHaEG?rs=1&pid=ImgDetMain&o=7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-bobzinho", "Muito bom mesmo.", 44.5, 25, "Bebida", "https://tse1.mm.bing.net/th/id/OIP.XZmmmQ1yXfrWvws-XM-jqwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-Hamburgeeer", "Muito bom realmente.", 50.6, 55, "Bebida", "https://th.bing.com/th/id/OIP.EsX5toEKexv7T7G62H7SgwHaEK?w=254&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3");
    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-Tudão", "Muito bom mesmo.", 10.5, 25, "Bebida", "https://th.bing.com/th/id/OIP.bNNsUMNdHikl5jjSIO_idQHaGm?w=210&h=188&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-vazio", "Muito bom realmente.", 50.6, 36, "Acompanhamento", "https://th.bing.com/th/id/OIP.S8JjF-ZBDC3-ydhh8jm7ywHaEK?w=253&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-bobzinhoooo", "Muito bom mesmo.", 10.5, 36, "Acompanhamento", "https://th.bing.com/th/id/OIP.pRC7Q3jV8u9HHp3tHp64-wHaEK?w=281&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-cozinha", "Muito bom mesmo.", 50.6, 55, "Acompanhamento", "https://th.bing.com/th/id/OIP.JLAvNjToEljdVcia7IBwRQHaEY?w=288&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3");

    INSERT INTO produtos(id, nome, descricao, preco, quantidade, tipo, url)
    VALUES(DEFAULT, "X-fome", "Muito bom mesmo.", 10.5, 55, "Acompanhamento", "https://th.bing.com/th/id/OIP.qpArdZDZqJ879PNBZtFXVQHaER?w=247&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3")
    
    