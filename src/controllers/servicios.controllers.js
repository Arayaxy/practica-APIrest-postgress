const {anadirUnCliente, cogerTodosLosClientes, cogerUnClientePorId, modificarUnClientePorId, suprimirUnClientePorid} = require('../models/servicio.model')

//GET ALL SERVICES

const traerTodosLosClientes = async (req, res) => {
console.log('controlador');
const clientes =  await cogerTodosLosClientes()
console.log(clientes);
    //TODO: acceder a la bbdd - solicitar datos
    // TODO: comprobar si hay respuesta




    res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo clientes'
        }
    )

}

//GET A SERVICE BY ID

const traerUnClientePorId = async (req, res) => {
    try {
        const { id } = req.params

        // console.log({ id })
        //TODO: acceder a la bbdd - solicitar datos por su id

        const servicios = await Servicios.findById({ _id: id })
        console.log(servicios)
        // TODO: comprobar si hay respuesta  // TODO: si no existe 404  { ok: false, msg: 'no se encontro'}

        if (!servicios) {
            res.status(404).json(
                {
                    ok: false,
                    msg: 'No existe cliente con ese id',
                }
            )
            return
        }


        res.status(200).json(
            {
                ok: true,
                msg: 'obteniendo un cliente',
                servicios
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                ok: false,
                msg: 'Error obteniendo un cliente'
            }
        )

    }




}

//CREATE A SERVICE

const crearUnCliente = async (req, res) => {

    try {

        const body = req.body
        // console.log({ body })

        const servicioInstanciado = new Servicios(body)


        const resp = await servicioInstanciado.save()


        res.status(201).json(
            {
                ok: true,
                msg: 'Crear cliente',
                resp
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al Crear un cliente'
            }
        )

    }


}
//UPDATE A SERVICE BY ID

const actualizarUnClientePorId = (req, res) => {

    // TODO: obtener el body

    // TODO:comprobar que body existe
    //TODO: Obtener el id

    // TODO consultar a la bbdd si existe un documento con ese id
    // TODO comprobar, si no existe -> 404

    // TODO: si existe hago la consulta y actualizo



    res.status(200).json(
        {
            ok: true,
            msg: 'Actualizando cliente'
        }
    )

}


//DELETE A SERVICE BY ID

const eliminarUnClientePorid= (req, res) => {

    //TODO: Obtener el id

    // TODO consultar a la bbdd si existe un documento con ese id
    // TODO comprobar, si no existe -> 404

    // TODO: si existe hago la consulta y elimino

    res.status(200).json(
        {
            ok: true,
            msg: 'eliminando cliente'
        }
    )

}



module.exports = {
    traerTodosLosClientes,
    traerUnClientePorId,
    crearUnCliente,
    actualizarUnClientePorId,
    eliminarUnClientePorid
}



/* 

    const crearServicio=()=>{
        
        await obtener los datos del servicios que queremos crear

        validar y sanitizar los datos

        conectar con la bbdd y comprobar .....

       await almacenar en bbdd


        res.json({
            succes:ko,
            msg:sdf,
            sdadf
        })
        

    }

*/
