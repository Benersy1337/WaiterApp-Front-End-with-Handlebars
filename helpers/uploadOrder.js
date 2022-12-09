const multer = require('multer');


// Configuração de armazenamento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/img/products/')
  },
  filename: function (req, file, cb) {
      // Extração da extensão do arquivo original:
      const extensaoArquivo = file.originalname.split('.')[1];

      // Cria um código randômico que será o mesa do arquivo
      const novoMesaArquivo = require('crypto')
          .randomBytes(64)
          .toString('hex');

      // Indica o novo mesa do arquivo:
      cb(null, `${novoMesaArquivo}.${extensaoArquivo}`)
  }
});


module.exports = multer({ storage });