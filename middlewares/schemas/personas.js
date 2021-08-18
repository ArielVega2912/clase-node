const joi = require('@hapi/joi');

const schemas = {
    create: joi.object().keys({
       username: joi.string().required(),
       pass: joi.string().min(8).required().messages({
           'string.min' : 'la contraseña debe tener minimo 8 caracteres'
       })
    }),
    modify: joi.object().keys({
        id: joi.number().integer().required(),
        username: joi.string().optional(),
        pass: joi.string().min(8).optional().messages({
            'string.min' : 'la contraseña debe tener minimo 8 caracteres'
        })
    })
}

module.exports = schemas;