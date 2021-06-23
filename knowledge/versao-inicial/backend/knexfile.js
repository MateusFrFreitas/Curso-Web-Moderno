// Update with your config settings.

// knex migrate:latest, knex migrate:rollback, knex migrate:make create_table_

const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: db,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
