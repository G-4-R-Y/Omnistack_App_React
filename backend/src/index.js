const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //define quais aplicacoes front-end podem acessar esse back-end com o atributo origin, para projetos em producao
app.use(express.json()); //para interpretar json que vier nas requisicoes post, transformando o jason em um objeto js
app.use(routes);

//HTTP REQUESTS:
//  GET:    buscar/listar informacao do back-end
//  POST:   criar uma informacao no back-end
//  PUT:    alterar uma informacao no back-end
//  DELETE: deletar uma informacao no back-end

//Tipos de parametros:
//  query params: parms nomeados enviados na rota apos "?" (filtros, paginacao)
//  route params: params utilizados para identificar recursos
//  request body: corpo de requisicao, utilizado para criar ou alterar recursos

//npm start para iniciar nodemon com o index.js

//Bancos de dados:
//  SQL: MySQLm SQLite, PostgreSQL, Oracle, Microsoft SQL Server
//  NoSQL: MongoDB, CouchDB, etc

//  Driver: SELECT * FROM users
//  Query builder: table('users')/select('*').where()

app.listen(3333);

