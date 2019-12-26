const mongoose = require('mongoose');

const produtoModel = new mongoose.Schema({
   nome: String,
   descricao: String,
   preco: Number,
   estoque: Number,
   ativo: {
       type: Boolean,
       default: true
    }
});

module.exports = (mongoose.model("Produto", produtoModel));