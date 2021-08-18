const express = require('express');
const router = express.Router();


/*
RES (response):
res.json -> me devuelve un JSON con los datos que le pase
res.send -> pagina  en blanco con el comentario
res.redirect -> me redirecion a otro lado de la pagina
res.render -> me renderiza una vista
res.end -> no termina de ejetuar sin pasarme informacion

REQ (Request): body, params, etc.

*/ 
router.get('/all', (req, res) => {
    res.json([{id:1, nombre: "producto1",stock:20 , precio: 3000}]);
});

module.exports = router;

