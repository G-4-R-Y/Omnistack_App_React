//up: responsavel pela criacao da tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable();
  });
};
//para executar os comandos, utilizar no cmd:
//npx migrate:latest

//down: responsavel por "voltar atras" em alteracoes na tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

//npx knex para listar todos os comandos. para voltar atras, utilizar rollback
//npx knex migrate:rollback