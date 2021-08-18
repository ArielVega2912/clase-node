const joi = require('@hapi/joi');

const schemas ={
    create: joi.object().keys({
        nombre: joi.string().required().messages({
            'any.required': 'necesito un nombre para el producto'
        }),
        id_categoria: joi.number().integer().required().messages({'any.required': 'necesito un id_categorias'}),
        precio: joi.number().required().min(1),
        stock: joi.number().min(0).integer().required(),
    }),
    modify: joi.object().keys({
        id: joi.number().integer().required(),
        nombre: joi.string().optional(),
        habilitado: joi.number().integer().optional(),
        eliminado: joi.number().integer().optional(),
        id_categoria: joi.number().integer().optional(),
        precio: joi.number().optional().min(1),
        stock: joi.number().min(0).integer().optional(),

    })


}

module.exports = schemas;