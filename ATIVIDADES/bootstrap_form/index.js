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
        extended: true
    })
)
app.use(express.json())

//adicionando css
app.use(express.static('public'))

app.get('/products/add', (req, res) => {
    res.render('userform')
})

app.post('/products/save', (req, res) => {
    const name = req.body.name
    const forn = req.body.forn
    const date = req.body.date
    const compra = req.body.compra
    const categ = req.body.categ
    const venda = req.body.venda

    const product = { name: name, forn: forn, date: date, compra: compra, categ: categ, venda: venda }
    res.render('viewproduct', { product: product })

})

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('Server Started')
})

