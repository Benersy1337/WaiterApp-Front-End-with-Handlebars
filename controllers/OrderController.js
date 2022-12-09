const Order = require('../models/Order')
const mongoose = require('mongoose')


module.exports = class OrderController {
  
  static async mostrarOrders(req, res) {
    const orders = await Order.find({}).lean()

    res.render('orders/all', { orders })
  }

  static criarOrder(req, res) {
    res.render('orders/create')
  }

 
  static async criarOrderPost(req, res) {

    const mesa = req.body.mesa
    const pedido = req.body.pedido
    const descricao = req.body.descricao
    
    const imagem = req.file.filename

    const order = new Order({ mesa, pedido, descricao, imagem})

    await order.save()

    res.redirect('/orders')
  }

  static async buscaOrder(req, res) {
    const id = req.params.id

    const order = await Order.findById(id).lean()

    res.render('orders/detail', { order })
  }

  static async removeOrder(req, res) {
    const id = req.params.id

    await Order.deleteOne({ _id: id })

    res.redirect('/orders')
  }

  static async editaOrder(req, res) {
    const id = req.params.id

    const order = await Order.findById(id).lean()

    res.render('orders/edit', { order })
  }

  static async editaOrderPost(req, res) {
    const id = req.body.id; 

    const mesa = req.body.mesa
    const pedido = req.body.pedido
    const descricao = req.body.descricao

    if (req.file) {

      const imagem = req.file.filename
      var order = { mesa, pedido, descricao, imagem }
    }
    else {
      var order = { mesa, pedido, descricao }
    }

    await Order.updateOne({ _id: id }, order)

    res.redirect('/orders')
  }
}
