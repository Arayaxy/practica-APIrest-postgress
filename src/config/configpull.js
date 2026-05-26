const  {Pool} = require ('pg')

const pool =  new Pool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    max: process.env.DB_MAX
})

module.exports = pool