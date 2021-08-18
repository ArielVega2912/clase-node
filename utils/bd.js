const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost' || process.env.BD_HOST,
        user: 'root' || process.env.BD_USER,
        password: 'ariel2912' || process.env.BD_PASSWORD,
        database:'trabajo' ||  process.env.BD_DB ,
        pool: {min: 1, max: 10}
    }
});

module.exports = knex;