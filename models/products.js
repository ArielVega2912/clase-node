const bd = require('../utils/bd');
const bdService = require('../utils/bdService');

const getALL = () => bd('productos as P').join('categoria as CAT','CAT.id', 'P.id_categoria').where({'P.habilitado' : true}).select('P.id','P.nombre', 'CAT.nombre as nombreCategoria', 'P.precio', 'P.stock');
    // SELECT * FROM producto WHERE habilitado = 1
    // ehere en knex pude ser por objeto({habilitado : 1}) o escrito ("habilitado", 1)


const create = ( obj ) => bdService.create('productos', obj);
    // INSERT INTO productos obj


const single = ( id ) => bd('productos').where({'habilitado': '', id}). select('*');
    //SELECT * FROM productos WHERE habilitado = 1 AND id = id


const modify = ( id, obj ) => bdService.modify('productos', id, obj);


module.exports = {getALL, create, single, modify};