const express = require('express')
const router = express.Router()
const OrderController = require('../controllers/OrderController')
const Upload = require('../helpers/uploadOrder')

router.post('/edit', Upload.single('imagem'), OrderController.editaOrderPost)
router.get('/', OrderController.mostrarOrders)
router.get('/create', OrderController.criarOrder)
router.post('/create',Upload.single('imagem'), OrderController.criarOrderPost)
router.get('/:id', OrderController.buscaOrder)
router.post('/remove/:id', OrderController.removeOrder)
router.get('/edit/:id', OrderController.editaOrder)

module.exports = router
