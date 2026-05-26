const pool = require('../config/configpull')

const traerTodosLosClientes = async () => {
    const query = 'SELECT * FROM cliente ORDER BY cliente_id ASC'
    const { rows } = await pool.query(query)
    return rows
}

const traerUnClientePorId = async (id) => {
    const query = 'SELECT * FROM cliente WHERE cliente_id = $1'
    const values = [id]

    const { rows } = await pool.query(query, values)
    return rows[0]
}

const crearUnCliente = async (body) => {
    const { nombre, apellido, email, telefono } = body

    const query = `INSERT INTO  cliente (nombre, apellido, email, telefono)
    VALUES ($1, $2, $3, $4)
    RETURNING *`

    const values = [nombre, apellido, email, telefono]

    const { rows } = await pool.query(query, values)
    return rows [0]
}

const actualizarUnClientePorId = async (id, body) =>{
    const {nombre, apellido, email, telefono} = body

    const query = `UPDATE cliente SET nombre = $1, apellido= $2, email= $3, telefono= $4 WHERE cliente_id= $5 RETURNING * `

    const values = [nombre, apellido, email, telefono, id]

    const { rows } = await pool.query(query, values)
    return rows [0]
}

const eliminarUnClientePorid = async (id) =>{
    const query = `DELETE FROM cliente WHERE cliente_id = $1 RETURNING *`

    const values = [id]

    const {rows} = await pool.query(query, values)
    return rows[0]
}

module.exports = {
    traerTodosLosClientes,
    traerUnClientePorId,
    crearUnCliente,
    actualizarUnClientePorId,
    eliminarUnClientePorid
}