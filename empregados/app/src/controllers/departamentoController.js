const { Departamento, Empregado } = require('../models');

module.exports = {
    async index(req, res){
        const itens = await Departamento.findAll({
            order: [['cod_depto','ASC']]
        });
        res.render('departamento/index',{itens})
    }
}