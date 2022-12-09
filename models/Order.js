const mongoose = require('../db/conn')
const { Schema } = mongoose

const Order = mongoose.model(
  'Order',
  new Schema({
    mesa: {
      type: Number,
      required: true,
    },
    pedido: {
      type: Number,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    imagem: {
      type: String,
      required: false,
    },
  }),
)

module.exports = Order
