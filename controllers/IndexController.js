const Curso = require('../models/Curso')
const mongoose = require('mongoose')


module.exports = class IndexController {
  
  static async mostrarIndex(req, res) {
    const cursos = await Curso.find({}).lean()
    

    res.render('site/index', {layout: false, cursos })
  }
}
