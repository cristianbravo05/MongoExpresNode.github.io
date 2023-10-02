// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos

router.post('/', productoController.crearSeller);
router.get('/', productoController.obtenerSeller);


module.exports = router;