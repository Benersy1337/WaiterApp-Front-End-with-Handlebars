const Order = require('../models/Order')
const mongoose = require('mongoose')


module.exports = class IndexController {
  
  static async mostrarIndex(req, res) {
    const orders = await Order.find({}).lean()
    

    res.render('site/index', {layout: false, orders })
  }
}
