import Knex from 'knex'

 export async function up(knex: Knex){
    return knex.schema.createTable('horas', table => {
        table.increments('id').primary()

        table.integer('id_usuario')
            .notNullable()
            .references('id')
            .inTable('usuarios')

        table.string('data').notNullable
        table.string('hora').notNullable
        table.string('turno').notNullable
        table.integer('banco').notNullable
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('horas')
}