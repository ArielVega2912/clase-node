const joi = require('@hapi/joi');

const schemas = {
    create: joi.object().keys({
        nombre: joi.string().required(),
        descripcion: joi.string().required()
    }),
    modify: joi.object().keys({
        id: joi.number().integer().required(),
        nombre: joi.string().optional(),
        descripcion: joi.string().optional()
    })

}

module.exports = schemas;