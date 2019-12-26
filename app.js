const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const produtosRouter = require('./routes/ProdutosRoute');

const app = express();
const router = express.Router();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const url = 'mongodb+srv://re12re12:258456@produtosdb-vziiq.mongodb.net/test?retryWrites=true&w=majority';

var db = mongoose.connection;

//se houver um erro na conexão trata o evento error
db.on('error', console.error);

db.once('open', function(){
    console.log('Conectando ao banco de dados produtosdb MongoDB.');
});

mongoose.connect(
    url, 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

// aplica as rotas em nossa aplicação
app.use('/produtos', produtosRouter);

app.listen(port, () => console.log(`Server listening port ${port}`))