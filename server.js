const bB = require('body-parser')
const exp = require('express')
const app = exp()

app.use(exp.static('.'))//middleware> dentro da pasta atual onde está o server.js sirva os arquivos estáticos...
app.use(bB.urlencoded({extended: true}))//lê os dados do formato de formulário através de um submit e transforma em objeto
app.use(bB.json())//código aplicado que transforma o Json em objeto

const multer = require('multer')//interpretar formulário upload
//configurando armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')//parâmetro de definição de armazenamento do arquivo, no caso aqui, vai armazenar na pasta atual
    },
    filename: function (req, file, callback) {//escolher o nome do arquivo padrão
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => { //calback
        if (err) {
            return res.end('ocorreu um erro.')
        }
        res.end('concluído com sucesso')
    })
})

app.listen(8080, () => console.log('executando...'))