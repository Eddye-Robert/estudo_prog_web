const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

//Configure template handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//parser para leitura de body
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())

//adicionando css
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})
