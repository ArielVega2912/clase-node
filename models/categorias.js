const bd = require('../utils/bd');
const bdService = require('../utils/bdService');

const getAll = () => bd('categoria').where({'habilitado' : true}).select('nombre', 'descripcion');

const single = (id) => bd('categoria').where('id', id).select('nombre', 'descripcion');

const create = (obj) => bdService.create('categoria', obj);

const modify = (id, obj) => bdService.modify('categoria', id, obj);

module.exports = {getAll, single, create, modify};