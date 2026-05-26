const express = require('express')
const { check } = require('express-validator')

const { traerTodosLosClientes, traerUnClientePorId, crearUnCliente, actualizarUnClientePorId, eliminarUnClientePorid } = require('../controllers/servicios.controllers')
const validateInputs = require('../middlewares/validateImputs')

const router = express.Router()



router.get('/', [], traerTodosLosClientes)

router.get('/:id', [], traerUnClientePorId)

// router.post('/crear', [
//     check('titulo', 'El nombre es obligatorio').not().isEmpty(),
//     check('descripcion', 'La descripcion es obligatori').not().isEmpty(),
//     check('categoria', 'La catagotia es obligatori').not().isEmpty(),
//     validateInputs


// ], crearUnServicios)

router.put('/actualizar/:id', actualizarUnClientePorId)

router.delete('/eliminar/:id', eliminarUnClientePorid)






module.exports = router