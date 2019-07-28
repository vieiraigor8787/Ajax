const bB = require('body-parser')
const exp = require('express')
const app = exp()

app.use(exp.static('.'))//middleware> dentro da pasta atual onde está o server.js sirva os arquivos estáticos...
app.use(bB.urlencoded({extended: true}))//lê os dados do formato de formulário através de um submit e transforma em objeto
app.use(bB.json())//código aplicado que transforma o Json em objeto

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('executando...'))