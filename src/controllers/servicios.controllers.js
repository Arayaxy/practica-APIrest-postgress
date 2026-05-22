const Servicios = require('../models/servivio.model')

//GET ALL SERVICES

const traerTodosLosServicios = (req, res) => {



    //TODO: acceder a la bbdd - solicitar datos
    // TODO: comprobar si hay respuesta




    res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo servicios'
        }
    )

}

//GET A SERVICE BY ID

const traerUnServicioPorId = async (req, res) => {
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
                    msg: 'No existe servicio con ese id',
                }
            )
            return
        }


        res.status(200).json(
            {
                ok: true,
                msg: 'obteniendo un servicio',
                servicios
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                ok: false,
                msg: 'Error obteniendo un servicio'
            }
        )

    }




}

//CREATE A SERVICE

const crearUnServicios = async (req, res) => {

    try {

        const body = req.body
        // console.log({ body })

        const servicioInstanciado = new Servicios(body)


        const resp = await servicioInstanciado.save()


        res.status(201).json(
            {
                ok: true,
                msg: 'Crear Servicio',
                resp
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al Crear un Servicio'
            }
        )

    }


}
//UPDATE A SERVICE BY ID

const actualizarUnServicioPorId = (req, res) => {

    // TODO: obtener el body

    // TODO:comprobar que body existe
    //TODO: Obtener el id

    // TODO consultar a la bbdd si existe un documento con ese id
    // TODO comprobar, si no existe -> 404

    // TODO: si existe hago la consulta y actualizo



    res.status(200).json(
        {
            ok: true,
            msg: 'Actualizando Servicio'
        }
    )

}


//DELETE A SERVICE BY ID

const eliminarUnServicioPorId = (req, res) => {

    //TODO: Obtener el id

    // TODO consultar a la bbdd si existe un documento con ese id
    // TODO comprobar, si no existe -> 404

    // TODO: si existe hago la consulta y elimino

    res.status(200).json(
        {
            ok: true,
            msg: 'eliminando servicio'
        }
    )

}



module.exports = {
    traerTodosLosServicios,
    traerUnServicioPorId,
    crearUnServicios,
    actualizarUnServicioPorId,
    eliminarUnServicioPorId
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
