const express = require('express');
const produtosController = require('../controllers/produtosController');

var produtosRouter = express.Router();

produtosRouter.route('')
    .get(produtosController.get)
    .post(produtosController.add)

produtosRouter.route('/:id')    
    .get(produtosController.getById)  
    .put(produtosController.update)
    .delete(produtosController.del); 

module.exports = produtosRouter; 