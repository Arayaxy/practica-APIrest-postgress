const query = {
    traerTodosLosClientes: "SELECT * FROM cliente ORDER BY cliente_id ASC",
    traerUnClientePorId: "SELECT * FROM cliente WHERE cliente_id = $1",
    crearUnCliente: "INSERT INTO  cliente(nombre, apellido, email, telefono) VALUES($1, $2, $3, $4)RETURNING *",
    actualizarUnClientePorId: "UPDATE cliente SET nombre = $1, apellido= $2, email= $3, telefono= $4 WHERE cliente_id= $5 RETURNING *",
    eliminarUnClientePorid: "DELETE FROM cliente WHERE cliente_id = $1 RETURNING *"
}

module.exports ={query}