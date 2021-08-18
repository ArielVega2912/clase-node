const joi = require('@hapi/joi');

const schemas = {
    create: joi.object().keys({
        nombre: joi.string().min(3).max(40).required().messages({
            'any.required':'el nombre es requerido',
            'string.max': 'te pasaste del maximo de caracteres',
            'string.min': 'faltan caracteres en el nombre'
        }),
        apellido: joi.string().required().messages({
            'any.required':'el apellido es requerido'
        }),
    }),
    modify: joi.object().keys({
        id: joi.number().integer().required().messages({
            'any.required':'el id es requerido'
        }),
        nombre: joi.string().min(3).max(40).optional(),
        apellido: joi.string().optional(),
    })

}

module.exports = schemas;
