var produtoController = function () {
    const Produto = require('../models/produtoModel');

    var get = function (req, res) {
        Produto.find(function (err, produtos) {
            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(produtos);
            }
        });
    };
    var add = function (req, res) {
        var produto = new Produto(req.body);
        produto.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Erro : falha ao incluir produto...');
            }
            else {
                res.status(201);
                res.send(produto);
            }
        })
    };
    var getById = function (req, res) {
        Produto.findById(req.params.id, function (err, produto) {
            if (err) {
                res.status(404);
                res.send("Produto não encontrado...");
            }
            else {
                res.status(200);
                res.send(produto);
            }
        })
    };
    var update = function (req, res) {
        try{
            Produto.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, produto) => {
                if(err){
                    res.status(404);
                    res.send("Produto não encontrado...");
                }
                res.json(produto);
            });
        }
        catch(err){
            res.status(500);
            res.send('Falha ao atualizar produto...');
            console.log(err);
        }
    };
    var del = function (req, res) {
        Produto.findById(req.params.id, function (err, produto) {
            produto.remove(function (err) {
                if (!err) {
                    res.status(204);
                    res.send('Produto deletado...');
                }
            });
        });
    };
    return {
        add: add,
        get: get,
        getById: getById,
        update: update,
        del: del
    }
};
module.exports = produtoController();