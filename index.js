const express = require('express')
const exphbs = require('express-handlebars')


const cursosRoutes = require('./routes/cursosRoutes')
const siteRoutes = require('./routes/siteRoutes')

const app = express()

const port = 3000;

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/cursos', cursosRoutes)
app.use('/site', siteRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/site`);
  });

