const bd = require('../utils/bd');
const bdService = require('../utils/bdService');

const getAll = () => bd('personas').select('username','pass');

const single = (id) => bd('personas').where('id', id).select('username','pass');

const create = (obj) => bdService.create('personas',obj);

const modify = (id,obj) => bdService.modify('personas',id, obj);

module.exports = {getAll, single, modify, create};