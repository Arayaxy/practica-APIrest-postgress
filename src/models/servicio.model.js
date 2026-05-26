const pool = require('../config/configpull')
const query = require('../models/query.js')

const cogerTodosLosClientes = async () => {
    let conexion
    
    try {
        conexion = await pool.connect()
        // const query = 'SELECT * FROM cliente ORDER BY cliente_id ASC'
        console.log(query.traerTodosLosClientes);
        const { rows } = await pool.query(query.traerTodosLosClientes)
        
        return rows
    } catch (error) {
            console.log(error)

        
    }  finally {
        conexion.release()
    }

}

const cogerUnClientePorId = async (id) => {
    
    try {
        const conexion = await pool.connect()
        const query = 'SELECT * FROM cliente WHERE cliente_id = $1'
        const values = [id]

        const { rows } = await conexion.query(query, values)


        return rows[0]
    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error obteniendo un cliente'
            }
        )
    } finally {
        conexion.release()
    }
}

const anadirUnCliente = async (body) => {
    const { nombre, apellido, email, telefono } = body

    const query = `INSERT INTO  cliente (nombre, apellido, email, telefono)
    VALUES ($1, $2, $3, $4)
    RETURNING *`

    const values = [nombre, apellido, email, telefono]

    const { rows } = await pool.query(query, values)
    return rows[0]
}

const modificarUnClientePorId = async (id, body) => {
    const { nombre, apellido, email, telefono } = body

    const query = `UPDATE cliente SET nombre = $1, apellido= $2, email= $3, telefono= $4 WHERE cliente_id= $5 RETURNING * `

    const values = [nombre, apellido, email, telefono, id]

    const { rows } = await pool.query(query, values)
    return rows[0]
}

const suprimirUnClientePorid = async (id) => {
    const query = `DELETE FROM cliente WHERE cliente_id = $1 RETURNING *`

    const values = [id]

    const { rows } = await pool.query(query, values)
    return rows[0]
}

module.exports = {
    cogerUnClientePorId,
    cogerTodosLosClientes,
    anadirUnCliente,
    modificarUnClientePorId,
    suprimirUnClientePorid
}
