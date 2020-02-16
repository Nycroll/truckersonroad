const config = require('./config/config');
const token = procces.env.arcadia

module.exports = {
    development: {
        client: 'mysql',
        connection: config.database,
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    production: {
        client: 'mysql',
        connection: config.database,
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
