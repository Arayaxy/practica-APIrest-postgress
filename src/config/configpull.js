import { Pool } from "pg";

const pool =  new Pool ({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    max: DB_MAX
})

module.exports = pool